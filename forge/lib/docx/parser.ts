import JSZip from "jszip";

/**
 * Extracts raw text from a DOCX File object using JSZip.
 * It reads the word/document.xml file from the archive and strips out the XML tags.
 * 
 * @param file The DOCX File object
 * @returns A promise that resolves to the extracted text
 */
export async function extractTextFromDocx(file: File): Promise<string> {
  if (!file) {
    throw new Error("No file provided");
  }

  try {
    const zip = new JSZip();
    const loadedZip = await zip.loadAsync(file);

    // The main content of a Word document is stored in word/document.xml
    const documentXmlFile = loadedZip.file("word/document.xml");
    
    if (!documentXmlFile) {
      throw new Error("Invalid DOCX format: word/document.xml not found");
    }

    const xmlData = await documentXmlFile.async("string");
    
    // Simple tag stripping to get text. 
    // <w:p> is a paragraph, <w:r> is a run, <w:t> is text.
    // We replace </w:p> with a newline to maintain some structure, then strip all other tags.
    const textWithNewlines = xmlData.replace(/<\/w:p>/g, "\n");
    const plainText = textWithNewlines.replace(/<[^>]+>/g, "");
    
    // Clean up multiple newlines and spaces
    return plainText.replace(/\n\s*\n/g, "\n\n").trim();
  } catch (error) {
    console.error("Error parsing DOCX:", error);
    throw new Error("Failed to parse the uploaded document.");
  }
}
