import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { FC } from "react";

interface ProjectFormStatusProps {}

const ProjectFormStatus: FC<ProjectFormStatusProps> = ({}) => {
  return (
    <div>
      <Label className="text-sm text-primary/80">Status</Label>
      <Select >
        <SelectTrigger className="w-full border-primary/20">
          <span className="text-primary/60">
            Select status
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="archived">Archived</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProjectFormStatus;
