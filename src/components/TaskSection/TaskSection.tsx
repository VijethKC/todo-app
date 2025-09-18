  import './TaskSection.css'
  
  const TaskSection: React.FC<{
    title: string
    status: string
    count: number
    isExpanded: boolean
    onToggle: () => void
    children: React.ReactNode
  }> = ({ title, count, isExpanded, onToggle, children }) => (
    <section className="task-section">
      <div className="section-header" onClick={onToggle}>
        <span>{title} ({count})</span>
        <svg 
          className={`chevron ${isExpanded ? 'expanded' : ''}`}
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none"
        >
          <path d="M4 6L8 10L12 6" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {isExpanded && (
        <div className="tasks-list">
          {children}
        </div>
      )}
    </section>
  )

  export default TaskSection