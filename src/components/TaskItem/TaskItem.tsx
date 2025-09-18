import React from 'react'
import type { Task } from '../../types'
import './TaskItem.css'

interface TaskItemProps {
  task: Task
  onEdit: (taskId: number) => void
  onDelete: (taskId: number) => void
}

const TaskItem = ({ task, onEdit, onDelete }: TaskItemProps) => {
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    onEdit(task.id)
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
      onDelete(task.id)
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress'
      case 'pending':
        return 'Pending'
      case 'completed':
        return 'Completed'
      default:
        return status
    }
  }

  return (
    <div className="task-item">
      <div className="task-avatar">
        <span>{task.title.charAt(0).toUpperCase()}</span>
      </div>
      <div className="task-content">
        <div className="task-header">
          <h3>{task.title}</h3>
            <span className={`task-status ${task.status}`}>
              {getStatusLabel(task.status)}
            </span>
        </div>
        <p className="task-description">{task.description}</p>
        <div className='task-footer'>
            <span className="task-date">{task.date}</span>
                    <div className="task-actions">
              <button className="action-btn edit-btn" onClick={handleEdit} title="Edit task">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11.333 2.00004C11.5081 1.82494 11.7169 1.68605 11.9457 1.59129C12.1745 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1582 1.49653 13.387 1.59129C13.6158 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.384 14.4084 2.61279C14.5032 2.84159 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82516 14.4084 4.05395C14.3137 4.28274 14.1748 4.49161 13.9997 4.66671L5.33301 13.3334L1.33301 14.6667L2.66634 10.6667L11.333 2.00004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="action-btn delete-btn" onClick={handleDelete} title="Delete task">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66667C4.31304 14.6667 3.97391 14.5262 3.72386 14.2761C3.47381 14.0261 3.33333 13.687 3.33333 13.3333V4M5.33333 4V2.66667C5.33333 2.31304 5.47381 1.97391 5.72386 1.72386C5.97391 1.47381 6.31304 1.33333 6.66667 1.33333H9.33333C9.687 1.33333 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31304 10.6667 2.66667V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
