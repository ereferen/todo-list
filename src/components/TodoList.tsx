import { useState } from 'react'
import TodoItem from './TodoItem'
import { Plus, Trash2 } from 'lucide-react'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim() === '') return

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date(),
    }

    setTodos([newTodo, ...todos])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Input Section */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="新しいタスクを入力..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={addTodo}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          追加
        </button>
      </div>

      {/* Stats Section */}
      {totalCount > 0 && (
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{totalCount}</span> 件中{' '}
            <span className="font-semibold text-green-600">{completedCount}</span> 件完了
          </div>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
            >
              <Trash2 size={16} />
              完了したタスクをクリア
            </button>
          )}
        </div>
      )}

      {/* Todo List Section */}
      {todos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            タスクがありません。新しいタスクを追加してください！
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
