//styles
import './Dashboard.css'

export default function AlbumFilter({
  currentFilter,
  changeFilter,
  filterList
}) {
  const handleClick = newFilter => {
    changeFilter(newFilter)
  }

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map(filter => (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  )
}
