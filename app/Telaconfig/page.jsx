"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";

export default function Telaconfig() {

  const [avatarUrl, setAvatarUrl] = useState("");
  const [userName, setUserName] = useState("");

  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const [newName, setNewName] = useState("");
  const [confirmName, setConfirmName] = useState("");
  const [nameError, setNameError] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");

  const { usuario: currentUser, usuarios: allUsu, login: entrar, logout: deslogar } = useAuth();

  const nameFirstRef = useRef(null);
  const passFirstRef = useRef(null);

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.nome);
      setAvatarUrl(currentUser.avatar);
    }
  }, [currentUser]);

  function salvarNome() {
    if (newName.trim() === "" || confirmName.trim() === "") {
      setNameError("Preencha os dois campos.");
      return;
    }

    if (newName !== confirmName) {
      setNameError("Os nomes não coincidem.");
      return;
    }

    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === currentUser.id ? { ...u, nome: newName } : u
      )
    );

    setUsuario((prev) => ({ ...prev, nome: newName }));

    setUserName(newName);

    setNewName("");
    setConfirmName("");
    setNameError("");
    setIsNameModalOpen(false);
  }

  function salvarSenha() {
    if (newPassword.trim() === "" || confirmPassword.trim() === "") {
      setPassError("Preencha os dois campos.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPassError("As senhas não coincidem.");
      return;
    }
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === currentUser.id ? { ...u, senha: newPassword } : u
      )
    );
    setUsuario((prev) => ({ ...prev, senha: newPassword }));

    setNewPassword("");
    setConfirmPassword("");
    setPassError("");
    setIsPasswordModalOpen(false);
  }

  if (!currentUser) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white text-2xl">
        Você não está logado.
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#7c3aed] min-h-screen pt-20 px-6 flex justify-center items-start">
        <div className="bg-white w-[95%] max-w-4xl mt-3 rounded-3xl shadow-xl p-8 sm:p-28 relative mx-auto">
          
          {/* BOTÃO VOLTAR */}
          <Link href="./" className="w-full block">
            <button className="absolute left-8 top-8">
              <svg
                width="30"
                height="30"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 22L10 14L18 6" />
              </svg>
            </button>
          </Link>

          {/* AVATAR */}
          <div className="flex flex-col items-center -mt-10 sm:-mt-12 mb-10 sm:mb-12">
            <Image
              src={avatarUrl}
              alt="avatar"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-8 ring-[#7c3aed] object-cover"
              width={120}
              height={120}
            />

            <Link href="/Telaconfig/Avatares">
              <Button className="mt-6 bg-[#7c3aed] hover:bg-purple-800 px-8 py-2 rounded-full shadow text-white">
                Alterar
              </Button>
            </Link>
          </div>

          {/* ALTERAR NOME */}
          <div className="flex justify-between bg-gray-200 px-6 py-4 rounded-full mb-4">
            <p>
              Alterar nome de usuário <br />
              <span className="font-semibold">{userName}</span>
            </p>

            <Button
              onClick={() => setIsNameModalOpen(true)}
              className="bg-[#7c3aed] hover:bg-purple-800 rounded-full"
            >
              Alterar
            </Button>
          </div>

          {/* ALTERAR SENHA */}
          <div className="flex justify-between bg-gray-200 px-6 py-4 rounded-full">
            <p>
              Alterar Senha <br /> ************
            </p>

            <Button
              onClick={() => setIsPasswordModalOpen(true)}
              className="bg-[#7c3aed] hover:bg-purple-800 rounded-full"
            >
              Alterar
            </Button>
          </div>

          {/* MODAL NOME */}
          {isNameModalOpen && (
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white p-8 rounded-2xl w-[90%] max-w-lg shadow-xl">
                <h2 className="text-xl font-semibold mb-6">
                  Alterar nome de usuário
                </h2>

                <Label>Novo nome</Label>
                <Input
                  ref={nameFirstRef}
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Digite o novo nome"
                  className="rounded-full mb-4 bg-gray-300"
                />

                <Label>Confirmar novo nome</Label>
                <Input
                  value={confirmName}
                  onChange={(e) => setConfirmName(e.target.value)}
                  placeholder="Digite novamente para confirmar"
                  className="rounded-full mb-4 bg-gray-300"
                />

                {nameError && <p className="text-red-500">{nameError}</p>}

                <div className="flex justify-end gap-4 mt-6">
                  <Button variant="ghost" onClick={() => setIsNameModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button className="bg-[#7c3aed] hover:bg-purple-800" onClick={salvarNome}>
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* MODAL SENHA */}
          {isPasswordModalOpen && (
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white p-8 rounded-2xl w-[90%] max-w-lg shadow-xl">
                <h2 className="text-xl font-semibold mb-6">Alterar senha</h2>

                <Label>Nova senha</Label>
                <Input
                  ref={passFirstRef}
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Digite a nova senha"
                  className="rounded-full mb-4 bg-gray-300"
                />

                <Label>Confirmar nova senha</Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Digite novamente para confirmar"
                  className="rounded-full mb-4 bg-gray-300"
                />

                {passError && <p className="text-red-500">{passError}</p>}

                <div className="flex justify-end gap-4 mt-6">
                  <Button variant="ghost" onClick={() => setIsPasswordModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button className="bg-[#7c3aed] hover:bg-purple-800" onClick={salvarSenha}>
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
