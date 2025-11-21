import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Ranking() {
  const usuarios = [
    { nome: "Marquinhos", Horas: 29, avatar: "/imagens/marquinhos.png" },
    { nome: "Amanda", Horas: 19, avatar: "/imagens/amanda.png" },
    { nome: "Andressa", Horas: 15, avatar: "/imagens/andressa.png" },
    { nome: "Ariana", Horas: 9, avatar: "/imagens/Ariana.png" },
    { nome: "Bruno", Horas: 13, avatar: "/imagens/bruno.png" },
    { nome: "Phellipe", Horas: 10, avatar: "/imagens/phellipe.png" },
    { nome: "Lele", Horas: 7, avatar: "/imagens/lele.png" },
    { nome: "Marcela", Horas: 21, avatar: "/imagens/marcela.png" },
    { nome: "Vitinho", Horas: 7, avatar: "/imagens/Vitinho.png" },
    { nome: "Carlos", Horas: 23, avatar: "/imagens/carlos.png" },
  ];

  const ordem = usuarios.sort((a, b) => b.Horas - a.Horas);

  const primeiro = ordem[0];
  const segundo = ordem[1];
  const terceiro = ordem[2];

  const tabela = ordem.slice(3);

  return (
    <div className="min-h-screen min-w-full bg-[#0F0F0F] flex items-center justify-center">
      <div className="flex items-center justify-center">
        {/* Componente branco com cards dentro */}
        <div className="bg-[#F6F6F6] rounded-2xl rounded-b-none absolute bottom-0 flex flex-col items-center justify-center w-[45rem] h-[35rem] pt-40">
          {/* Divisão dos cards */}
          <div className="flex items-end gap-6 -mt-36">
            <div className="h-[11rem] w-[8rem]  bg-[#8B5CF6] rounded-lg flex flex-col items-center justify-between p-3 transition duration-300 ease-in-out transform hover:scale-110  delay-200">
              <Image
                className="-mt-2"
                src={segundo.avatar}
                width={40}
                height={40}
                alt="Ícone segundo lugar"
              />
              <p className="text-white font-semibold -mt-7 text-[12px]">
                {segundo.nome}
              </p>
              <p className="text-white font-semibold flex items-center gap-1 bg-[#7C3AED] rounded px-2 -mt-6 text-[10px]">
                {segundo.Horas}H
                <Image
                  src="/imagens/estrela.png"
                  width={10}
                  height={10}
                  alt="Estrela"
                />
              </p>
              <Image
                className="-mt-2"
                src="/imagens/trofeudois.png"
                width={60}
                height={60}
                alt="Troféu segundo lugar"
              />
            </div>
            <div className="h-[13rem] w-[8rem] bg-[#8B5CF6] rounded-lg flex flex-col items-center justify-between p-3 transition duration-100 ease-in-out transform hover:scale-110 delay-200">
              <Image
                className="mt-0"
                src={primeiro.avatar}
                width={40}
                height={40}
                alt="Ícone primeiro lugar"
              />
              <p className="text-white font-semibold text-[12px] -m-20">
                {primeiro.nome}
              </p>
              <p className="text-white text-[10px] flex items-center gap-1 bg-[#7C3AED] rounded px-2 font-semibold mt-1">
                {primeiro.Horas}H
                <Image
                  src="/imagens/estrela.png"
                  width={10}
                  height={10}
                  alt="Estrela"
                />
              </p>
              <Image
                className="-mt-16"
                src="/imagens/primeirolugar.png"
                width={78}
                height={78}
                alt="Troféu primeiro lugar"
              />
            </div>
            <div className="h-[10rem] w-[8rem] bg-[#8B5CF6] rounded-lg flex flex-col items-center justify-between p-3 transition duration-300 ease-in-out transform hover:scale-110 delay-200">
              <Image
                src={terceiro.avatar}
                width={33}
                height={33}
                alt="Icone terceiro lugar"
              />
              <p className="text-white font-semibold -mt-3 text-[12px]">
                {terceiro.nome}
              </p>
              <p className="text-white font-semibold flex items-center gap-1 bg-[#7C3AED] rounded px-2 -mt-2 text-[10px]">
                {terceiro.Horas}H
                <Image
                  src="/imagens/estrela.png"
                  width={10}
                  height={10}
                  alt="Estrela"
                />
              </p>
              <Image
                className="-mt-1 "
                src="/imagens/terceiro.png"
                width={60}
                height={50}
                alt="Troféu terceiro lugar"
              />
            </div>
          </div>
          {/* Divisão da tabela */}
          <div>
            <table className=" w-[38rem] h-[13rem] relative mt-12 bg-[#7C3AED] rounded-lg">
              <thead>
                <tr className=" text-white text-xs ">
                  <th className="px-4 py-2"> RANK </th>
                  <th className="px-4 py-2"> NOME </th>
                  <th className="px-4 py-2"> HORAS </th>
                </tr>
              </thead>
              <tbody className=" bg-[#7C3AED] font-semibold">
                {tabela.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-[#F6F6F6] even:bg-[#8B5CF6] odd:text-[#8B5CF6] even:text-[#F6F6F6]"
                  >
                    <td className="text-center text-[0.75rem]"> {index + 4}</td>
                    <td
                      className="flex items-center gap-2 w-16
                     mx-auto "
                    >
                      <Image
                        className="rounded-full"
                        src={item.avatar}
                        width={20}
                        height={20}
                        alt="avatar de cada item"
                      />
                      <span className="text-[0.75rem]">{item.nome}</span>
                    </td>
                    <td className=" text-center text-[0.75rem]">
                      {item.Horas}H
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="h-[2rem] p-1 absolute bottom-[34rem] bg-[#F6F6F6] w-[13rem] flex justify-center rounded-2xl">
          <h1 className="text-center font-semibold">RANKING BOARD</h1>
        </div>
      </div>
    </div>
  );
}
