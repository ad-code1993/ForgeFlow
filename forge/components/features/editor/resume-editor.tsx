"use client";

import * as React from "react";
import { Experience } from "@/lib/schema/resume";
import { ExperienceBlock } from "@/components/features/editor/experience-block";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ResumeEditor() {
  // In a real application, this initial state would come from the parsed DOCX file.
  // For demonstration of the Block Editor, we'll start with empty state.
  const [experiences, setExperiences] = React.useState<Experience[]>([]);

  const handleAddExperience = () => {
    const newExperience: Experience = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: [],
    };
    setExperiences([...experiences, newExperience]);
  };

  const handleUpdateExperience = (index: number, updated: Experience) => {
    const newExperiences = [...experiences];
    newExperiences[index] = updated;
    setExperiences(newExperiences);
  };

  const handleDeleteExperience = (index: number) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 mt-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
          <p className="text-muted-foreground">Manage your work history.</p>
        </div>
        <Button onClick={handleAddExperience} size="sm">
          <Plus className="mr-2 w-4 h-4" />
          Add Experience
        </Button>
      </div>

      <div className="space-y-6">
        {experiences.length === 0 ? (
          <div className="text-center py-10 border-2 border-dashed rounded-lg text-muted-foreground">
            No experience added yet. Click the button above to add one.
          </div>
        ) : (
          experiences.map((exp, index) => (
            <ExperienceBlock
              key={index} // In a real app with drag/drop, use a unique ID instead of index
              experience={exp}
              onChange={(updated) => handleUpdateExperience(index, updated)}
              onDelete={() => handleDeleteExperience(index)}
            />
          ))
        )}
      </div>

      {experiences.length > 0 && (
        <div className="mt-8 p-4 bg-muted/30 rounded-md border text-xs">
          <h3 className="font-semibold mb-2">Internal JSON State (for testing):</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(experiences, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
