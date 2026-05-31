# Building a Block Editor in React

This document outlines the architecture and concepts behind the Resume Block Editor in ForgeFlow.

## 1. What is a Block Editor?
A block editor breaks a large document (like a resume) into discrete, independent, and editable chunks called **Blocks**. 
Instead of having one giant text area, users edit a specific "Experience" block or "Education" block.

## 2. Benefits for Resume Editing
- **Structured Data**: Block editors force data into a structured schema (like our Zod `ResumeSchema`), making it perfectly suited for templating or passing to AI engines later.
- **Modularity**: Users can easily reorder, duplicate, or delete specific blocks without messing up the rest of the document's formatting.

## 3. Architecture Flow
1. **Source of Truth**: The parsed DOCX text is converted into our JSON schema. This JSON object is our source of truth.
2. **Block Mapping**: The editor takes this JSON object and maps its arrays (e.g., `experience`, `education`) into individual UI Block components.
3. **State Management**: Each Block component receives its initial data as props, along with callback functions (e.g., `onChange`, `onDelete`) to update the global or parent state.

## 4. Required Features
According to our `editor-architecture.md`, the block editor must support:
- **Edit**: Inline inputs to modify fields like `company`, `position`, `startDate`, etc.
- **Delete**: Removing a block from the array.
- **Reorder**: (Future Phase) Moving blocks up and down.
- **Duplicate**: (Future Phase) Copying an existing block.

## 5. UI Implementation Details
We use **shadcn/ui** components for a minimal, professional interface:
- `Card`: Wraps each block to provide visual separation.
- `Input` & `Textarea`: For editing the actual content.
- `Button` (with `lucide-react` icons): For actions like "Add Experience" or deleting a block.
