import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className="app">
      <div className="appGlass">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App