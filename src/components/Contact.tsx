import { CircleUserRound } from "lucide-react";
import TooltipContainer from "./ToolTipContent";

export default function Contact() {
  return (
    <div className="m-6">
      <h1 className="text-3xl font-semibold text-neutral-950">Contato</h1>
      <div className="m-6 flex flex-col gap-5">
        <div className="flex gap-4 font-semibold">
          <CircleUserRound />
          <TooltipContainer
            prevText="0800 100 1410"
            trigger="( Região de Clementina )"
            content="Alto alegre, Bilac, Brauna, Clementina, Gabriel Monteiro, Luiziânia, Piacatu, Queiroz e Santopolis"
          />
        </div>
        <div className="flex gap-4 font-semibold">
          <CircleUserRound />
          <TooltipContainer
            prevText="0800 100 1411"
            trigger="( Região de Bastos )"
            content="Arco-Iris, Bastos, Herculandia, Iacri e Tupã"
          />
        </div>
        <div className="flex gap-4 font-semibold">
          <CircleUserRound />
          <TooltipContainer
            prevText="0800 100 1412"
            trigger="( Região de Presidente Venceslau )"
            content="Caiuá e Presidente Venceslau"
          />
        </div>
      </div>
    </div>
  );
}
