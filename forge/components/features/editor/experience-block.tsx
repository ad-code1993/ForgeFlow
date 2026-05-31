import * as React from "react";
import { Experience } from "@/lib/schema/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, GripVertical, Plus } from "lucide-react";

interface ExperienceBlockProps {
  experience: Experience;
  onChange: (updated: Experience) => void;
  onDelete: () => void;
}

export function ExperienceBlock({ experience, onChange, onDelete }: ExperienceBlockProps) {
  const handleChange = (field: keyof Experience, value: string) => {
    onChange({ ...experience, [field]: value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // For simplicity, we assume description is a newline-separated string
    const lines = e.target.value.split("\n").filter((line) => line.trim() !== "");
    onChange({ ...experience, description: lines });
  };

  const descriptionText = experience.description ? experience.description.join("\n") : "";

  return (
    <Card className="relative group border border-border shadow-sm">
      <div className="absolute left-[-32px] top-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
        <GripVertical className="h-6 w-6 text-muted-foreground" />
      </div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Experience Block</CardTitle>
        <Button variant="ghost" size="icon" onClick={onDelete} className="h-8 w-8 text-destructive">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Company</Label>
            <Input 
              value={experience.company} 
              onChange={(e) => handleChange("company", e.target.value)} 
              placeholder="Company Name" 
            />
          </div>
          <div className="space-y-2">
            <Label>Position</Label>
            <Input 
              value={experience.position} 
              onChange={(e) => handleChange("position", e.target.value)} 
              placeholder="Job Title" 
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Start Date</Label>
            <Input 
              value={experience.startDate || ""} 
              onChange={(e) => handleChange("startDate", e.target.value)} 
              placeholder="e.g., Jan 2020" 
            />
          </div>
          <div className="space-y-2">
            <Label>End Date</Label>
            <Input 
              value={experience.endDate || ""} 
              onChange={(e) => handleChange("endDate", e.target.value)} 
              placeholder="e.g., Present" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea 
            value={descriptionText} 
            onChange={handleDescriptionChange} 
            placeholder="Describe your responsibilities (one per line)" 
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
    </Card>
  );
}
