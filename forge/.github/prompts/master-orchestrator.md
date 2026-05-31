# Forge Orchestrator

Before performing any task, load the following context.

---

# Always Read

Core Context:

* .github/prompts/project-context.md
* .github/prompts/shadcn-architecture.md

Project Documentation:

* docs/current-phase.md
* docs/architecture.md
* docs/roadmap.md
* docs/decisions.md
* docs/ai-rules.md

These files define the project's architecture, constraints, standards, and current development focus.
 
Always follow them.

---

# Role Selection

Load additional role files depending on the task.

---

## Architecture Tasks

Load:

* .github/prompts/software-architect.md
* .github/prompts/technical-mentor.md

Examples:

* System design
* Folder structure
* State management
* Feature architecture
* Module boundaries
* Scalability planning

Output:

1. Problem Analysis
2. Architecture
3. Alternatives
4. Tradeoffs
5. Recommendation
6. Implementation

---

## Frontend Tasks

Load:

* .github/prompts/frontend-engineer.md

Also Read:

* docs/design-system.md
* docs/frontend-architecture.md
* docs/ux-principles.md

Examples:

* Pages
* Components
* Layouts
* Navigation
* Editor UI
* Forms

Additional Requirements:

* Follow shadcn-architecture.md strictly
* Respect Server/Client boundaries
* Never modify components/ui directly
* Prefer composition over prop drilling

---

## Shadcn/UI Tasks

Load:

* .github/prompts/frontend-engineer.md

Also Read:

* .github/prompts/shadcn-architecture.md
* docs/design-system.md
* docs/frontend-architecture.md

Requirements:

* Verify components exist before usage
* Provide install command when missing
* Use shadcn as infrastructure
* Build abstractions using primitives, blocks, and features

---

## DOCX Engine Tasks

Load:

* .github/prompts/openxml-specialist.md
* .github/prompts/technical-mentor.md

Also Read:

* docs/docx-engine.md
* docs/resume-schema.md

Examples:

* OpenXML parsing
* JSZip integration
* XML extraction
* Resume structure detection

Requirements:

* Prefer deterministic parsing
* Do not use AI when parsing can solve the problem

---

## Resume Domain Tasks

Load:

* .github/prompts/resume-domain-expert.md

Also Read:

* docs/resume-schema.md
* docs/product-requirements.md

Examples:

* ATS optimization
* Resume validation
* Section design
* Resume scoring

---

## Gemini Tasks

Load:

* .github/prompts/gemini-engineer.md

Also Read:

* docs/gemini-integration.md
* docs/ai-rules.md

Requirements:

* Gemini receives structured data
* Gemini returns structured output
* Gemini never parses DOCX directly
* Gemini never replaces deterministic parsing

Examples:

* Skill extraction
* Resume improvement
* ATS suggestions
* Keyword matching

---

## Product Tasks

Load:

* .github/prompts/product-manager.md

Also Read:

* docs/roadmap.md
* docs/milestones.md
* docs/feature-backlog.md

Examples:

* Feature prioritization
* MVP definition
* Scope decisions
* Product planning

Output:

* User Value
* Complexity
* Learning Benefit
* Recommendation

---

## Marketing Tasks

Load:

* .github/prompts/digital-marketer.md

Also Read:

* docs/user-personas.md
* docs/product-requirements.md

Examples:

* Landing pages
* Messaging
* Positioning
* Feature descriptions
* Marketing copy

---

## Research Tasks

Load:

* .github/prompts/ui-ux-trend-researcher.md
* .github/prompts/feature-researcher.md
* .github/prompts/growth-product-strategist.md

Also Read:

* docs/ui-ux-research.md
* docs/competitor-research.md
* docs/feature-backlog.md

Research Focus:

* Resume builders
* Productivity software
* Figma
* Notion
* Linear
* Framer
* AI products

Required Output:

1. Trend
2. User Value
3. Complexity
4. Risks
5. Recommendation
6. Priority

Priority Categories:

* Essential
* Valuable
* Future
* Experimental

---

# Documentation Update Rule

Whenever implementation changes architecture, workflows, folder structures, schemas, or major decisions:

Review:

* docs/architecture.md
* docs/roadmap.md
* docs/decisions.md
* docs/changelog.md

If updates are required:

1. Explain changes.
2. Update affected documentation.
3. Keep documentation synchronized with implementation.

---

# Development Philosophy

Optimize for:

* Learning
* Maintainability
* Clarity
* Scalability
* Reusability

Avoid:

* Premature optimization
* Architecture overengineering
* Massive components
* Tight coupling
* Direct modifications to shadcn infrastructure

---

# Current Priority

Always check:

docs/current-phase.md

Stay focused on the active phase.

Do not implement future phases unless explicitly requested.

---

# Final Verification Checklist

Before generating code verify:

* Correct role files were loaded
* Correct docs were loaded
* Server/Client boundaries are respected
* No raw shadcn modifications
* No any types
* Proper TypeScript typing
* Proper Zod validation
* Proper folder placement
* Proper architectural layering

Required hierarchy:

Page
↓
Feature
↓
Block
↓
Primitive
↓
UI

Maintain this hierarchy unless there is a documented architectural reason not to.
