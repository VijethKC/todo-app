import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Task } from '../types'

interface TaskProviderProps {
  children: ReactNode
}

interface TaskContextType {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id'>) => void
  updateTask: (id: number, updates: Partial<Task>) => void
  deleteTask: (id: number) => void
  getTaskById: (id: number) => Task | undefined
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'Wed 31, July 2024',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'Wed 31, July 2024',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'Wed 31, July 2024',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'Wed 31, July 2024',
      status: 'pending'
    },
    {
      id: 5,
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'Wed 31, July 2024',
      status: 'completed'
    }
  ])

  const addTask = (newTask: Omit<Task, 'id'>) => {
    const id = Math.max(...tasks.map(t => t.id), 0) + 1
    const task = {
      ...newTask,
      id,
      date: new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
    setTasks(prev => [...prev, task])
  }

  const updateTask = (id: number, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const getTaskById = (id: number) => {
    return tasks.find(task => task.id === id)
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      updateTask,
      deleteTask,
      getTaskById
    }}>
      {children}
    </TaskContext.Provider>
  )
}
