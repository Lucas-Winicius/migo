import { CircleUserRound } from "lucide-react";
import TooltipContainer from "./ToolTipContent";
import { numbers } from "@/lib/data";

export default function Contact() {
  return (
    <div className="m-6">
      <h1 className="text-3xl font-semibold text-neutral-950">Contatos</h1>
      <div className="m-6 flex flex-col gap-5">
        {numbers.map((number) => (
          <div key={number.number} className="flex gap-4 font-semibold">
            <CircleUserRound />
            <TooltipContainer
              prevText={number.number}
              trigger={number.alt}
              content={number.cities.join(", ")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
