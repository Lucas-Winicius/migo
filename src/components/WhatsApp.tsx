import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { whatsAppNumbers } from "@/lib/data";
import { MessageSquareText } from "lucide-react";

export default function WhatsApp() {
  return (
    <Sheet>
      <SheetTrigger className="fixed bottom-5 right-5 rounded-full border-green-500 border-2 p-3 bg-white shadow">
        <MessageSquareText size={27} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Selecione a sua cidade</SheetTitle>
          <SheetDescription className="flex flex-col gap-2">
            {whatsAppNumbers
              .sort((a, b) => a.city.localeCompare(b.city))
              .map((data) => (
                <a
                  key={data.city}
                  href={`https://api.whatsapp.com/send?phone=${data.number}&text=Ol%C3%A1%2C%20necessito%20de%20ajuda.`}
                  target="_blank"
                  className="font-semibold text-zinc-800"
                >
                  {data.city}
                </a>
              ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
