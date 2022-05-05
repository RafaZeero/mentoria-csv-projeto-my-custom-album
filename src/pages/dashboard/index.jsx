import { useState } from 'react'

//hooks
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

//styles
import './Dashboard.css'
import AlbumFilter from './ProjectFilter'

export default function Dashboard() {
  const { documents, error } = useCollection('album')
  const [currentFilter, setCurrentFilter] = useState('all')
  const { user } = useAuthContext()

  const changeFilter = newFilter => {
    setCurrentFilter(newFilter)
  }

  const filterList = ['all', 'mine', 'development', 'design', 'monsters', 'npc']
  const filters = {
    all: 'all',
    mine: 'mine',
    development: 'development',
    design: 'design',
    monsters: 'monsters',
    npc: 'npc'
  }

  const projects = documents
    ? documents.filter(document => {
        switch (currentFilter) {
          case filters.all:
            return true
          case filters.mine:
            let assignToMe = false
            document.assignedUsersList.forEach(u => {
              if (user.uid === u.id) {
                assignToMe = true
              }
            })
            return assignToMe
          case filters.design:
          case filters.development:
          case filters.monsters:
          case filters.npc:
            console.log(document.category, currentFilter)
            return document.category === currentFilter
          default:
            return true
        }
      })
    : null

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <div className="error">{error}</div>}
      {documents && (
        <AlbumFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
          filterList={filterList}
        />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  )
}
