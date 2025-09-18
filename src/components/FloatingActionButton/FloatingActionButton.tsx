import React from 'react'
import './FloatingActionButton.css'

interface FloatingActionButtonProps {
  onClick: () => void
  icon?: React.ReactNode
  title?: string
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ 
  onClick, 
  icon,
  title = "Add new task"
}) => {
  const defaultIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <button className="fab" onClick={onClick} title={title}>
      {icon || defaultIcon}
    </button>
  )
}

export default FloatingActionButton
