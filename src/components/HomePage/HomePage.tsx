import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTaskContext } from '../../context/TaskContext'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import {TaskList} from '../TaskList'
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton'
import './HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()
  const { tasks, deleteTask } = useTaskContext()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEditTask = (taskId: number) => {
    navigate(`/edit-task/${taskId}`)
  }

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId)
  }

  const handleAddTask = () => {
    navigate('/add-task')
  }

  return (
    <div className="home-page">
      <Header title="TO-DO APP" />
      
      <div className="app-main">
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
        />

        <TaskList 
          tasks={filteredTasks}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>

      <FloatingActionButton onClick={handleAddTask} />
    </div>
  )
}

export default HomePage
