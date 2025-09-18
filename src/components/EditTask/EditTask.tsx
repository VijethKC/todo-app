import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTaskContext } from '../../context/TaskContext'
import type { Task } from '../../types'
import EditTaskForm from '../EditTaskForm/EditTaskForm'
import './EditTask.css'

const EditTask = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { getTaskById, updateTask } = useTaskContext()
  const [initialTask, setInitialTask] = useState<Task | null>(null)

  // Load task data when component mounts
  useEffect(() => {
    if (id) {
      const task = getTaskById(parseInt(id))
      if (task) {
        setInitialTask(task)
      } else {
        // Task not found, redirect to home
        navigate('/')
      }
    }
  }, [id, getTaskById, navigate])

  const handleUpdate = (updates: Partial<Task>) => {
    if (id) {
      updateTask(parseInt(id), updates)
      navigate('/')
    }
  }

  const handleCancel = () => {
    navigate('/')
  }

  const handleBack = () => {
    navigate('/')
  }

  if (!initialTask) {
    return <div>Loading...</div>
  }

  return (
    <div className="edit-task-container">
      <header className="edit-task-header">
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1>Edit Task</h1>
      </header>
      
      <main className="edit-task-main">
        <EditTaskForm 
          task={initialTask}
          onSubmit={handleUpdate}
          onCancel={handleCancel}
        />
      </main>
    </div>
  )
}

export default EditTask
