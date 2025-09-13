import { type User, type InsertUser, type Escalation, type InsertEscalation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEscalation(escalation: InsertEscalation): Promise<Escalation>;
  getEscalations(): Promise<Escalation[]>;
  getEscalation(id: string): Promise<Escalation | undefined>;
  updateEscalationStatus(id: string, status: string): Promise<Escalation | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private escalations: Map<string, Escalation>;

  constructor() {
    this.users = new Map();
    this.escalations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEscalation(insertEscalation: InsertEscalation): Promise<Escalation> {
    const id = randomUUID();
    const now = new Date();
    const escalation: Escalation = {
      ...insertEscalation,
      id,
      status: "open",
      createdAt: now,
      updatedAt: now,
    };
    this.escalations.set(id, escalation);
    return escalation;
  }

  async getEscalations(): Promise<Escalation[]> {
    return Array.from(this.escalations.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getEscalation(id: string): Promise<Escalation | undefined> {
    return this.escalations.get(id);
  }

  async updateEscalationStatus(id: string, status: string): Promise<Escalation | undefined> {
    const escalation = this.escalations.get(id);
    if (escalation) {
      const updated = { ...escalation, status, updatedAt: new Date() };
      this.escalations.set(id, updated);
      return updated;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
