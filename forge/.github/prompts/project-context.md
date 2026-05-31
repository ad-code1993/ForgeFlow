# TemplateForge — Project Context

## Product Goal
ForgeFlow is a local-first resume builder that converts DOCX resumes into editable reusable templates.

## Core Workflow
1. Upload DOCX
2. Parse OpenXML
3. Detect resume sections
4. Convert into structured Resume JSON
5. Render editable blocks
6. Save as reusable template
7. Export later

## Current Phase
Build locally first.
Do not focus on deployment.
Do not optimize for scaling yet.
Focus on learning, correctness, and maintainability.

## Technology Stack
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- JSZip
- xml2js
- Gemini AI later

## Architecture Rules
- Keep parsing separate from AI
- Keep UI separate from business logic
- Keep reusable components in shared folders
- Keep feature logic isolated
- Prefer explicit data flow over magic abstractions
- Use typed models everywhere possible

## Important Constraints
- Local implementation only
- No deployment logic yet
- No production hosting assumptions
- No premature optimization
- No monolithic components
- No mixing DOCX parsing with AI logic

## Learning Goals
I want the implementation to teach:
- document parsing
- component architecture
- editor design
- structured data modeling
- AI integration boundaries
- clean project organization

## UI Direction
- Use shadcn/ui
- Minimal, clean, professional layout
- Document-tool feel, not a generic dashboard
- Strong spacing and readable hierarchy
- Sidebar or top navigation depending on the screen

## Data Model Goal
Everything should eventually map to a structured resume schema:
- personal info
- experience
- education
- skills
- projects
- certifications
- languages
- awards

## Development Order
1. Set up shadcn/ui
2. Build app layout
3. Build upload page
4. Build DOCX parser
5. Build resume schema
6. Build editable template editor
7. Add local save support
8. Add Gemini service layer
9. Add export flow

## Working Style
When implementing:
1. Explain the architecture first
2. Explain tradeoffs
3. Then write code
4. Keep the solution modular
5. Keep comments useful and brief