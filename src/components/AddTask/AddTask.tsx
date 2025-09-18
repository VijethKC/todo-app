import { useNavigate } from 'react-router-dom'
import { useTaskContext } from '../../context/TaskContext'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import type { Task } from '../../types'
import './AddTask.css'

const AddTask = () => {
  const navigate = useNavigate()
  const { addTask } = useTaskContext()

  const handleSubmit = (task: Omit<Task, 'id' | 'date'>) => {
    addTask({
      ...task,
      date: new Date().toLocaleDateString()
    })
    navigate('/')
  }

  const handleCancel = () => {
    navigate('/')
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="add-task-container">
      <header className="add-task-header">
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1>Add Task</h1>
      </header>
      
      <div className="add-task-main">
        <AddTaskForm 
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  )
}

export default AddTask
