import { DocxUploader } from "@/components/features/upload/docx-uploader";
import { ResumeEditor } from "@/components/features/editor/resume-editor";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center py-10 px-4 space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Resume Parser Engine</h1>
          <p className="text-muted-foreground">
            Upload your DOCX resume to extract its contents and build a structured profile.
          </p>
        </div>
        
        <DocxUploader />
        <ResumeEditor />
      </div>
  );
}
