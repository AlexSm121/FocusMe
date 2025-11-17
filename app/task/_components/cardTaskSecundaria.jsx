import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/buttonCompletar"

export default function CardTaskSecundaria() {
    return(
       <section className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl border-l-4 border-purple-400">
                   <button
             type="button"
             className="absolute top-6 right-6 z-10 w-9 h-9 flex items-center justify-center text-2xl text-purple-600 hover:text-purple-800 rounded-md bg-transparent"
             aria-label="Adicionar Task"
           > + </button>
                   <header className="mb-4 top-8 right-8"> 
                   <h2 className="text-2xl font-bold text-gray-800 mb-3 top-8 right-8 ">Tasks diárias <span className="font-normal text-gray-600">(6 tasks)</span></h2>
               </header>
                       <div className="container mx-auto px-4">
                       <ul className="space-y-3 mb-6">
                           <li className="flex items-center">
                               <span className="w-1.5 h-7 bg-purple-600 rounded mr-4" />
                              <Checkbox /> <span className="ml-3 text-1xl font-medium">Teste 1 de anotação</span>
                           </li>
                           <li className="flex items-center">
                               <span className="w-1.5 h-7 bg-purple-600 rounded mr-4" />
                              <Checkbox /><span className="ml-3 text-1xl font-medium">Teste 2 de anotação</span>
                           </li>
                           <li className="flex items-center">
                               <span className="w-1.5 h-7 bg-purple-600 rounded mr-4" />
                              <Checkbox /><span className="ml-3 text-1xl font-medium">Teste 3 de anotação</span>
                           </li>
                           <li className="flex items-center">
                               <span className="w-1.5 h-7 bg-purple-600 rounded mr-4" />
                              <Checkbox /><span className="ml-3 text-1xl font-medium">Teste 4 de anotação</span>
                           </li>
                           <li className="flex items-center">
                               <span className="w-1.5 h-7 bg-purple-600 rounded mr-4" />
                              <Checkbox /><span className="ml-3 text-1xl font-medium">Teste 5 de anotação</span>
                           </li>
                           <li className="flex items-center">
                               <span className="w-1.5 h-7 bg-purple-600 rounded mr-4" />
                              <Checkbox /><span className="ml-3 text-1xl font-medium">Teste 6 de anotação</span>
                           </li>
                       </ul>
                   </div>
                   <footer className="flex justify-end">
                        <Button>Completar</Button>
                    </footer>
               </section>
    )
}