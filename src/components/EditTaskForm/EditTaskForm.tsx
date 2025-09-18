import React, { useState } from 'react'
import type { Task } from '../../types'
import './EditTaskForm.css'

interface EditTaskFormProps {
  task: Task
  onSubmit: (updates: Partial<Task>) => void
  onCancel: () => void
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [status, setStatus] = useState<'pending' | 'in-progress' | 'completed'>(task.status)

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onSubmit({
        title: title.trim(),
        description: description.trim(),
        status
      })
    }
  }

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' }
  ]

  const isValid = title.trim() && description.trim()

  return (
    <div className="form-container">
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
          placeholder="Enter task title"
        />
      </div>
      
      <div className="input-group">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description-input"
          rows={4}
          placeholder="Enter task description"
        />
      </div>
      
      <div className="input-group">
        <div className="select-container">
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value as 'pending' | 'in-progress' | 'completed')}
            className="status-select"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="select-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="button-group">
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button 
          className="update-button" 
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default EditTaskForm
