# High Touch Escalation Management System

## Overview

A comprehensive escalation management system for Oracle Support's High Touch team. This full-stack web application provides a platform for submitting and managing critical customer escalations, featuring a React frontend with TypeScript, an Express.js backend, and PostgreSQL database with Drizzle ORM. The system is designed to handle severity-based escalations with proper validation, status tracking, and team communication features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Component-based architecture using React 18 with TypeScript for type safety
- **Vite Build System**: Fast development server and optimized production builds
- **UI Framework**: shadcn/ui components with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query for server state management and API caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Express.js Server**: RESTful API with TypeScript support
- **Middleware Stack**: JSON parsing, URL encoding, logging middleware for request/response tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes and validation error formatting
- **Development Integration**: Vite integration for seamless full-stack development experience

### Database Design
- **PostgreSQL with Drizzle ORM**: Type-safe database operations with schema definitions
- **User Management**: Basic user authentication structure with username/password
- **Escalation System**: Comprehensive escalation tracking with severity levels, status management, and timestamps
- **Schema Validation**: Drizzle-Zod integration for runtime validation matching database schema

### Data Storage Strategy
- **Memory Storage Implementation**: In-memory storage class for development/testing
- **Interface-Based Design**: IStorage interface allows easy switching between storage implementations
- **UUID Generation**: Cryptographic UUIDs for secure record identification

### Component Architecture
- **Page-Based Structure**: Separate pages for Home, About, Projects, and Contact with shared layout components
- **Reusable Components**: Modular components for hero sections, team profiles, project showcases, and service offerings
- **UI Component Library**: Comprehensive set of accessible UI components (buttons, forms, dialogs, navigation)

### API Design
- **RESTful Endpoints**: 
  - POST `/api/escalations` - Create new escalation requests
  - GET `/api/escalations` - Retrieve escalation list for internal use
- **Validation Layer**: Zod schema validation for all API inputs with detailed error responses
- **Response Formatting**: Consistent JSON response structure with appropriate HTTP status codes

### Development Workflow
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **Hot Module Replacement**: Vite HMR for instant development feedback
- **Build Process**: Separate client and server builds with ESM output for production

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with React DOM for UI rendering
- **Build Tools**: Vite for development server and build process, esbuild for server bundling
- **TypeScript**: Full TypeScript support across client and server

### Database and ORM
- **Drizzle ORM**: Modern TypeScript ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **Database Validation**: drizzle-zod for schema-based validation

### UI and Styling
- **Styling Framework**: Tailwind CSS with PostCSS and Autoprefixer
- **Component Library**: Comprehensive shadcn/ui component set built on Radix UI primitives
- **Icons**: Lucide React for consistent iconography

### State Management and Forms
- **TanStack Query**: Server state management, caching, and synchronization
- **Form Management**: React Hook Form with Hookform Resolvers for validation integration
- **Validation**: Zod for runtime type validation and schema definition

### Development and Deployment
- **Replit Integration**: Replit-specific plugins for development environment
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Utility Libraries**: Class variance authority, clsx, date-fns for common operations

### Additional Tools
- **Routing**: Wouter for lightweight client-side routing
- **Carousel**: Embla Carousel for interactive content display
- **Command Interface**: cmdk for command palette functionality
- **Development**: tsx for TypeScript execution in development