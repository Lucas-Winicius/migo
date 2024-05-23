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
      <p className="text-nowrap">{prevText}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p>{trigger}</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>{content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </p>
  );
}
