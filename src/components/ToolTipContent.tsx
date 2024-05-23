import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipContainer({
  trigger,
  content,
  prevText,
}: {
  trigger: string;
  content: string;
  prevText?: string;
}) {
  return (
    <p className="flex gap-2">
      <span className="text-nowrap">{prevText}</span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>{trigger}</span>
          </TooltipTrigger>
          <TooltipContent>
            <span>{content}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </p>
  );
}
