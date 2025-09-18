import React from 'react'
import './SearchBar.css'
import { SearchIcon } from '../../assets'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
}) => {
  return (
    <div className="search-container">
      <div className="search-box">
        <SearchIcon />

        <input
          type="text"
          placeholder="Search To-Do"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchBar

