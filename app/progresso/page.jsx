"use client";
import Navbar from "@/components/Navbar";
import Card from "./_components/Card";
import GraficoSemanal from "./_components/GraficoSemanal";
import GraficoMensal from "./_components/GraficoMensal";
import GraficoPizza from "./_components/GraficoPizza";

export default function Progresso() {
  const dadosSemanais = [
    { dia: "Seg", valor: 30 },
    { dia: "Ter", valor: 45 },
    { dia: "Qua", valor: 28 },
    { dia: "Qui", valor: 60 },
    { dia: "Sex", valor: 50 },
    { dia: "Sáb", valor: 75 },
    { dia: "Dom", valor: 90 },
  ];

  const dadosMensais = [
    { mes: "Jan", valor: 200 },
    { mes: "Fev", valor: 300 },
    { mes: "Mar", valor: 250 },
    { mes: "Abr", valor: 400 },
    { mes: "Mai", valor: 350 },
    { mes: "Jun", valor: 450 },
  ];

  const dadosPizza = [
    { name: "Concluído", value: 60 },
    { name: "Restante", value: 40 },
  ];

  return (
    <div className="h-[100dvh] w-full bg-black text-white flex flex-col overflow-hidden">
      <div className="flex-none z-50">
        <Navbar />
      </div>

      <div className="flex-1 flex flex-col p-4 pt-20 gap-3 min-h-0 w-full max-w-[1600px] mx-auto">
        <div className="flex-none mt-2">
          <h1 className="text-xl font-bold pl-1 leading-none">Seu Progresso</h1>
        </div>

        <div className="flex-none grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Card
            title="Horas Totais"
            value="5h"
            className="bg-[#7C3AED] border-none text-white py-2"
          />
          <Card title="Pausas" value="1h" className="py-2" />
          <Card title="Ranking" value="10º" className="py-2" />

          <div className="bg-zinc-900 border border-zinc-800 text-white p-2 rounded-xl shadow-lg flex flex-col items-center justify-center relative">
            <span className="absolute top-2 right-2 text-yellow-500 text-xs">
              ★
            </span>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400">
              Nota
            </p>
            <p className="text-2xl font-bold mt-0.5">6.5</p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 min-h-0 pb-2">
          <div className="lg:col-span-2 flex flex-col gap-3 h-full min-h-0">
            <div className="flex-1 min-h-0 border border-zinc-800 rounded-xl overflow-hidden">
              <GraficoSemanal data={dadosSemanais} />
            </div>
            <div className="flex-1 min-h-0 border border-zinc-800 rounded-xl overflow-hidden">
              <GraficoMensal data={dadosMensais} />
            </div>
          </div>

          <div className="h-full min-h-0 border border-zinc-800 rounded-xl overflow-hidden">
            <GraficoPizza data={dadosPizza} />
          </div>
        </div>
      </div>
    </div>
  );
}
