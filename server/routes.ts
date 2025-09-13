import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { fromError } from "zod-validation-error";
import { storage } from "./storage";
import { insertEscalationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create escalation endpoint
  app.post("/api/escalations", async (req, res) => {
    try {
      const validatedData = insertEscalationSchema.parse(req.body);
      const escalation = await storage.createEscalation(validatedData);
      
      // In a real application, this would trigger notifications to the team
      console.log(`New escalation created: Severity ${escalation.severity} from ${escalation.email}`);
      
      res.status(201).json({
        message: "Escalation submitted successfully",
        escalation: {
          id: escalation.id,
          severity: escalation.severity,
          status: escalation.status,
          createdAt: escalation.createdAt,
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromError(error);
        return res.status(400).json({
          message: "Validation failed",
          errors: validationError.details,
        });
      }
      
      console.error("Error creating escalation:", error);
      res.status(500).json({
        message: "Internal server error while submitting escalation",
      });
    }
  });

  // Get all escalations (for internal team use)
  app.get("/api/escalations", async (req, res) => {
    try {
      const escalations = await storage.getEscalations();
      res.json(escalations);
    } catch (error) {
      console.error("Error fetching escalations:", error);
      res.status(500).json({
        message: "Internal server error while fetching escalations",
      });
    }
  });

  // Get specific escalation
  app.get("/api/escalations/:id", async (req, res) => {
    try {
      const escalation = await storage.getEscalation(req.params.id);
      if (!escalation) {
        return res.status(404).json({
          message: "Escalation not found",
        });
      }
      res.json(escalation);
    } catch (error) {
      console.error("Error fetching escalation:", error);
      res.status(500).json({
        message: "Internal server error while fetching escalation",
      });
    }
  });

  // Update escalation status
  app.patch("/api/escalations/:id/status", async (req, res) => {
    try {
      const { status } = req.body;
      if (!status || typeof status !== "string") {
        return res.status(400).json({
          message: "Status is required and must be a string",
        });
      }

      const escalation = await storage.updateEscalationStatus(req.params.id, status);
      if (!escalation) {
        return res.status(404).json({
          message: "Escalation not found",
        });
      }

      res.json({
        message: "Escalation status updated successfully",
        escalation,
      });
    } catch (error) {
      console.error("Error updating escalation status:", error);
      res.status(500).json({
        message: "Internal server error while updating escalation",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
