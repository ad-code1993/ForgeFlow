"use client";

import * as React from "react";
import { UploadCloud, FileText } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { extractTextFromDocx } from "@/lib/docx/parser";

export function DocxUploader() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [extractedText, setExtractedText] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = async (file: File) => {
    if (!file.name.endsWith(".docx")) {
      toast.error("Invalid file type", {
        description: "Please upload a .docx file.",
      });
      return;
    }

    setIsProcessing(true);
    try {
      // In a real flow, this extracted text would be passed to an AI parser
      // or deterministic rules engine to map to the Zod schema.
      const text = await extractTextFromDocx(file);
      setExtractedText(text);
      toast.success("File processed successfully", {
        description: `Extracted ${text.length} characters from ${file.name}`,
      });
    } catch (error) {
      console.error(error);
      toast.error("Error processing file", {
        description: "Could not read the DOCX file.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Resume</CardTitle>
        <CardDescription>
          Drag and drop your DOCX resume to begin.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:bg-muted/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="p-4 bg-muted rounded-full">
              <UploadCloud className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">
                {isProcessing
                  ? "Processing..."
                  : "Click or drag file to this area to upload"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Supports .docx files only
              </p>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileInputChange}
            disabled={isProcessing}
          />
        </div>

        {extractedText && (
          <div className="mt-6 border rounded-md p-4 bg-muted/30">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold">Extracted Raw Text</h3>
            </div>
            <div className="text-xs text-muted-foreground whitespace-pre-wrap max-h-60 overflow-y-auto p-2 bg-background border rounded">
              {extractedText}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
