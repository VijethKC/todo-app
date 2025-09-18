import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { AddTask } from './components/AddTask'
import { EditTask } from './components/EditTask'
import { TaskProvider } from './context/TaskContext'
import './App.css'

const App = ()=> {
  return (
    <TaskProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>
      </div>
    </TaskProvider>
  )
}

export default App
