import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { whatsAppNumbers } from "@/lib/data";
import { Button } from "./ui/button";

export default function HireButton({
  plan,
  className,
}: {
  plan: string;
  className: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className={className}>Quero assinar</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Selecione sua cidade.</DialogTitle>
          <DialogDescription className="flex flex-wrap gap-2">
            {whatsAppNumbers.map((number) => {
              return (
                <a
                  key={number.city}
                  href={`https://api.whatsapp.com/send?phone=${
                    number.number
                  }&text=Ol%C3%A1%2C%20Sou%20de%20${number.city.toLocaleLowerCase()}%20e%20gostaria%20de%20contratar%20o%20plano%20de%20${plan}.`}
                  target="_blank"
                  className="font-bold text-white px-4 py-1 rounded bg-green-500 "
                >
                  {number.city}
                </a>
              );
            })}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
