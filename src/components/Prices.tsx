import HireButton from "./HireButton";

export default function Prices() {
  return (
    <main className="m-6">
      <h1 id="plans" className="text-3xl font-semibold text-neutral-950">
        #VemSer<span className="text-green-500">Migo</span>
      </h1>
      <div className="flex flex-wrap items-center justify-around gap-3 my-8">
        <div className="flex flex-col gap-12 bg-white border-4 min-w-fit border-green-500 rounded-lg">
          <div className="flex flex-col items-center mt-6">
            <h1 className="font-bold text-3xl">200 MB</h1>
            <p className="font-semibold text-lg">Básico</p>
          </div>
          <div className="flex flex-col items-center mx-7">
            <h1 className="text-4xl font-extrabold text-green-500">R$ 79,90</h1>
            <p className="font-semibold">Plano Mensal</p>
          </div>
          <HireButton
            plan="200 MB"
            className="bg-green-500 text-center text-white text-xl font-semibold px-5 py-2"
          />
        </div>
        <div className="flex flex-col gap-12 bg-white border-4 min-w-fit border-teal-400 rounded-lg">
          <div className="flex flex-col items-center mt-6">
            <h1 className="font-bold text-3xl">300 MB</h1>
            <p className="font-semibold text-lg">Home</p>
          </div>
          <div className="flex flex-col items-center mx-7">
            <h1 className="text-4xl font-extrabold text-teal-400">R$ 89,90</h1>
            <p className="font-semibold">Plano Mensal</p>
          </div>
          <HireButton
            plan="300 MB"
            className="bg-teal-400 text-center text-white text-xl font-semibold px-5 py-2"
          />
        </div>
        <div className="flex flex-col gap-12 bg-white border-4 min-w-fit border-blue-300 rounded-lg">
          <div className="flex flex-col items-center mt-6">
            <h1 className="font-bold text-3xl">400 MB</h1>
            <p className="font-semibold text-lg">Pro</p>
          </div>
          <div className="flex flex-col items-center mx-7">
            <h1 className="text-4xl font-extrabold text-blue-300">R$ 109,90</h1>
            <p className="font-semibold">Plano Mensal</p>
          </div>
          <HireButton
            plan="400 MB"
            className="bg-blue-300 text-center text-white text-xl font-semibold px-5 py-2"
          />
        </div>
        <div className="flex flex-col gap-12 bg-white border-4 min-w-fit border-neutral-500 rounded-lg">
          <div className="flex flex-col items-center mt-6">
            <h1 className="font-bold text-3xl">600 MB</h1>
            <p className="font-semibold text-lg">Ultra</p>
          </div>
          <div className="flex flex-col items-center mx-7">
            <h1 className="text-4xl font-extrabold text-neutral-500">
              R$ 159,90
            </h1>
            <p className="font-semibold">Plano Mensal</p>
          </div>
          <HireButton
            plan="600 MB"
            className="bg-neutral-500 text-center text-white text-xl font-semibold px-5 py-2"
          />
        </div>
      </div>
    </main>
  );
}
