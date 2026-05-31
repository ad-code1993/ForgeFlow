# DOCX Engine

## DOCX Structure

DOCX is a ZIP archive.

Important files:

word/document.xml
word/styles.xml
word/numbering.xml

---

## Processing Pipeline

DOCX
↓
JSZip
↓
XML Extraction
↓
Resume Schema

---

## Responsibilities

Extract:

- Text
- Headings
- Lists
- Tables
- Formatting