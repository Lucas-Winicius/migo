import logo from "@/../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Links from "./Links";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-green-500 px-12 py-4">
      <div>
        <Image src={logo} height={70} alt="Migo logo" />
      </div>

      <div className="block sm:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify color="white" size={30} />
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col items-center gap-3 text-xl font-semibold text-black">
                  <Links />
                  <a target="_blank" href="Contrato.pdf">
                    Contrato de restação de serviços
                  </a>
                  <a target="_blank" href="ContratoComodato.pdf">
                    Contrato de comodato
                  </a>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden gap-5 text-white font-semibold text-lg sm:flex">
        <Links />
      </div>
    </header>
  );
}
