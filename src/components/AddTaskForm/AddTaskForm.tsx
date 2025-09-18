import React, { useState } from 'react'
import type { Task } from '../../types'
import './AddTaskForm.css'

interface AddTaskFormProps {
  onSubmit: (task: Omit<Task, 'id' | 'date'>) => void
  onCancel: () => void
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onSubmit({
        title: title.trim(),
        description: description.trim(),
        status: 'pending'
      })
    }
  }

  const isValid = title.trim() && description.trim()

  return (
    <div className="form-container">
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
      </div>
      
      <div className="input-group">
        <textarea
          placeholder="Enter the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description-input"
          rows={4}
        />
      </div>
      
      <div className="button-group">
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button 
          className="add-button" 
          onClick={handleSubmit}
          disabled={!isValid}
        >
          ADD
        </button>
      </div>
    </div>
  )
}

export default AddTaskForm
