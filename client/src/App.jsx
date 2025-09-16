import { useState, useEffect } from 'react'
import './App.css'
import SpreadsheetGrid from './components/SpreadsheetGrid'
import SheetTabs from './components/SheetTabs'

function App() {
  const [activeSheet, setActiveSheet] = useState('About')
  const [sheets] = useState(['About', 'Resume', 'Portfolio - 1', 'Portfolio - 2', 'Portfolio - 3'])

  return (
    <div className="excel-app">
      <div className="spreadsheet-container">
        <SpreadsheetGrid activeSheet={activeSheet} />
      </div>
      <SheetTabs
        sheets={sheets}
        activeSheet={activeSheet}
        onSheetChange={setActiveSheet}
      />
    </div>
  )
}

export default App
