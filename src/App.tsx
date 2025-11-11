import './App.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📝 My Todo List
        </h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App
