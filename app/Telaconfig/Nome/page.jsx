"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AlterarNome() {
  return (
    <div className="bg-[#8b3afd] min-h-screen flex flex-col items-center px-6">
      
      <div className="w-full flex flex-col items-center mt-4 mb-1">
        <h1 className="text-5xl font-extrabold text-white mb-2 text-center">Alterar Nome</h1>
        <span className="text-white text-lg text-center">Atualize sua informações de perfil.</span>
      </div>
      
      <div className="bg-white w-[95%] max-w-5xl mb-3 mt-3 rounded-3xl  shadow-xl p-10 relative flex flex-col gap-8">
       <Link href="/Telaconfig" className="w-full block">
        <button className="absolute left-8 top-8 ">
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#8b3afd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>
       </Link>
       
        <div>
          <Label className="ml-7 text-2xl font-bold mt-7 mb-0 block">Nome atual</Label>
          <div className="rounded-full bg-transparent px-2 py-1.5 flex items-center">
            <Input
              type="text"
              value="Bruno"
              readOnly
              className="bg-gray-300 text-xl border-none outline-none shadow-none pointer-events-none"
            />
          </div>
        </div>

       
        <div>
          <Label className="ml-7 text-2xl font-bold mb-0 block">Alterar Nome</Label>
          <div className="rounded-full bg-transparent px-2 py-1.5 flex items-center justify-between">
            <Input
              type="text"
              defaultValue="Bruno"
              className="bg-gray-300 text-xl border-transparent shadow-none flex-1"
            />
           
          </div>
        </div>

        
        <div className="flex justify-center"> <Button className="ml-4 bg-[#8b3afd] hover:bg-purple-800 px-24 py-2 rounded-full text-white font-semibold justify-center shadow-none">
              Confirmar
            </Button>
         </div>
      </div>
    </div>
  );
}