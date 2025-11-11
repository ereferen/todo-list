import { Trash2, CheckCircle2, Circle } from 'lucide-react'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 text-gray-400 hover:text-indigo-600 transition-colors"
      >
        {todo.completed ? (
          <CheckCircle2 size={24} className="text-green-500" />
        ) : (
          <Circle size={24} />
        )}
      </button>

      <span
        className={`flex-1 text-lg transition-all ${
          todo.completed
            ? 'text-gray-400 line-through'
            : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
      >
        <Trash2 size={20} />
      </button>
    </li>
  )
}
