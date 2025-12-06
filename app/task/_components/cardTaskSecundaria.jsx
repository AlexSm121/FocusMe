"use client"
import { useState,useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"

//agora as tasks vêm como props
export default function CardTaskSecundaria({id,title,tasks,onSwap}) {
  const [localTasks, setLocalTasks] = useState(tasks)
  
  //troca de listas via onSwap, pra atualizar quando vier nova lista
  useEffect(()=> {
    setLocalTasks(tasks)
  },[tasks])

  function toggleDone(taskId, checked) {
    setLocalTasks(prev => prev.map(t => (t.id === taskId ? { ...t, done: !!checked } : t)))
  }

  return (
    <div className=" bg-white rounded-2xl shadow-xl p-4 w-full border-l-4 border-purple-400">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800"> 
          {title}{" "}
          <span className="font-normal text-gray-600"> 
            ({localTasks.length}tasks)
          </span>
        </h3>
        <button
        onClick={()=> onSwap(id)}
        className="text-sm text-gray-8-- underline hover:text-purple-600">
          more
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {localTasks.slice(0,2).map(task => (
          <li key={task.id} className="flex items-center text-sm">
            <span className="w-1.5 h-5 bg-purple-500 rounded mr-2"/>
            <Checkbox
            checked={task.done}
            className="mr-2"
            onCheckedChange={c => toggleDone(task.id, c)} />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}