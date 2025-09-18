import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import type { Task } from '../../types'
import './TaskList.css'
import { TaskSection } from '../TaskSection'

interface TaskListProps {
  tasks: Task[]
  onEditTask: (taskId: number) => void
  onDeleteTask: (taskId: number) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask, onDeleteTask }) => {
  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status)
  }

  const [expandedSections, setExpandedSections] = React.useState({
    'in-progress': true,
    'pending': false,
    'completed': false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }))
  }

  const inProgressTasks = getTasksByStatus('in-progress')
  const pendingTasks = getTasksByStatus('pending')
  const completedTasks = getTasksByStatus('completed')

  return (
    <div className="tasks-container">
      <TaskSection
        title="In Progress"
        status="in-progress"
        count={inProgressTasks.length}
        isExpanded={expandedSections['in-progress']}
        onToggle={() => toggleSection('in-progress')}
      >
        {inProgressTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </TaskSection>

      <TaskSection
        title="Pending"
        status="pending"
        count={pendingTasks.length}
        isExpanded={expandedSections['pending']}
        onToggle={() => toggleSection('pending')}
      >
        {pendingTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </TaskSection>

      <TaskSection
        title="Completed"
        status="completed"
        count={completedTasks.length}
        isExpanded={expandedSections['completed']}
        onToggle={() => toggleSection('completed')}
      >
        {completedTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </TaskSection>
    </div>
  )
}

export default TaskList
