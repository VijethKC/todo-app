export interface Task {
  id: number
  title: string
  description: string
  date: string
  status: 'in-progress' | 'pending' | 'completed'
}