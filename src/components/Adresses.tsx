import { Store } from "lucide-react";
import { adresses } from "@/lib/data";

export default function Adresses() {
  return (
    <div className="m-6">
      <h1 className="text-3xl font-semibold text-neutral-950">Nossos Endereços</h1>
      <div className="m-6 flex flex-col gap-5">
        {adresses.map((address) => (
          <div key={address} className="flex gap-4 font-semibold">
            <Store />
            <p>{address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
