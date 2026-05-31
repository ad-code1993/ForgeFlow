# Parsing DOCX with JSZip

This document details how we extract text from a `.docx` file in the browser without relying on an external server or API.

## 1. What is a DOCX file?
A `.docx` file is not a single document; it is actually a **ZIP archive** containing various XML files, images, and configuration data according to the Office Open XML (OOXML) standard.

If you rename a `resume.docx` to `resume.zip` and extract it, you will see a folder structure that looks like this:
- `_rels/`
- `docProps/`
- `word/`
  - `document.xml` (The main content!)
  - `styles.xml`
  - `theme/`
- `[Content_Types].xml`

## 2. Using JSZip
Because a DOCX is just a ZIP file, we can use the `jszip` library in the browser to read it.
1. We pass the user's `File` object into `JSZip.loadAsync(file)`.
2. This parses the ZIP directory structure into an object we can query.

## 3. Extracting the Text
The actual text content of a Word document lives inside `word/document.xml`.
1. Once we load the zip, we request this specific file: `zip.file("word/document.xml")`.
2. We read its content as a string using `.async("string")`.
3. The resulting string is raw XML.

## 4. Stripping the XML
The raw `document.xml` contains many tags like `<w:p>` (paragraph), `<w:r>` (run), and `<w:t>` (text). 
To get plain text:
- We can use a regular expression (e.g., `/<.*?>/g`) or the browser's native `DOMParser` to strip away the XML tags, leaving only the raw text content.
- For our initial deterministic parsing pipeline, we extract the pure text as a starting point. Later, we can extract structured blocks (paragraphs, lists, headings) to preserve formatting.

## 5. Architectural Placement
The parsing logic resides in `forge/lib/docx/parser.ts`. By isolating this logic in the `lib` folder, we decouple the UI components from the file parsing implementation, adhering to the project's architecture guidelines.
