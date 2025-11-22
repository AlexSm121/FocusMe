"use client"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/buttonCompletar"
import NewTaskModal from "./newTaskModal"
import BotaoCriarTask from "./botaoCriarTask"

export default function CardTaskPrincipal() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Teste 1 de anotação", done: false },
    { id: 2, title: "Teste 2 de anotação", done: false },
    { id: 3, title: "Teste 3 de anotação", done: false },
    { id: 4, title: "Teste 4 de anotação", done: false },
    { id: 5, title: "Teste 5 de anotação", done: false },
    { id: 6, title: "Teste 6 de anotação", done: false },
  ])

  const [showModal, setShowModal] = useState(false)

  function handleAdd(newData) {
    const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1
    const newTask = { id: nextId, title: newData.title, done: false }
    setTasks((prev) => [newTask, ...prev])
    setShowModal(false)
  }

  return (
    <section className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl border-l-4 border-purple-400 ">
      {/* Botão posicionado no canto do card */}
      <BotaoCriarTask onClick={() => setShowModal(true)} />

      {/* Renderiza o modal apenas quando showModal === true */}
      {showModal && (
        <NewTaskModal
          initialText=""
          onClose={() => setShowModal(false)}
          onSave={handleAdd}
        />
      )}

      <header className="mb-4 top-8 right-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 top-8 right-8 ">
          Tasks diárias <span className="font-normal text-gray-600">(6 tasks)</span>
        </h2>
      </header>

      <div className="container mx-auto px-4">
        <ul className="space-y-3 mb-6">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center">
              <span className="w-1.5 h-7 bg-[#7C3AED] rounded mr-4" />
              <Checkbox />
              <span className="ml-3 text-1xl font-medium">{task.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="flex justify-end">
        <Button>Completar</Button>
      </footer>
    </section>
  )
}