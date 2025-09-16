import AboutSheet from './sheets/AboutSheet'
import ResumeSheet from './sheets/ResumeSheet'
import PortfolioSheet1 from './sheets/PortfolioSheet1'
import PortfolioSheet2 from './sheets/PortfolioSheet2'
import PortfolioSheet3 from './sheets/PortfolioSheet3'

const SpreadsheetGrid = ({ activeSheet }) => {
  // Calculate visible columns and rows based on typical viewport
  // Assuming 100px column width and 25px row height
  const columnWidth = 100
  const rowHeight = 25
  const headerHeight = 30
  
  // Calculate visible columns (A-Z but limit to what fits)
  const maxColumns = Math.min(26, Math.floor(window.innerWidth / columnWidth))
  const columnHeaders = Array.from({ length: maxColumns }, (_, i) =>
    String.fromCharCode(65 + i)
  )

  // Calculate visible rows (limit to what fits in viewport)
  const maxRows = Math.min(50, Math.floor((window.innerHeight - headerHeight - 40) / rowHeight))
  const rowHeaders = Array.from({ length: maxRows }, (_, i) => i + 1)

  const renderSheetContent = () => {
    switch (activeSheet) {
      case 'About':
        return <AboutSheet />
      case 'Resume':
        return <ResumeSheet />
      case 'Portfolio - 1':
        return <PortfolioSheet1 />
      case 'Portfolio - 2':
        return <PortfolioSheet2 />
      case 'Portfolio - 3':
        return <PortfolioSheet3 />
      default:
        return <AboutSheet />
    }
  }

  return (
    <div className="spreadsheet-grid">
      {/* Column Headers */}
      <div className="column-headers">
        <div className="corner-cell"></div>
        {columnHeaders.map((header) => (
          <div key={header} className="column-header">
            {header}
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid-container">
        {/* Row Headers */}
        <div className="row-headers">
          {rowHeaders.map((row) => (
            <div key={row} className="row-header">
              {row}
            </div>
          ))}
        </div>

        {/* Grid Cells */}
        <div className="grid-cells">
          {rowHeaders.map((row) => (
            <div key={row} className="grid-row">
              {columnHeaders.map((col, colIndex) => (
                <div
                  key={`${col}${row}`}
                  className="grid-cell"
                >
                  {/* Empty cells for now */}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Sheet Content Overlay */}
        <div className="sheet-content">
          {renderSheetContent()}
        </div>
      </div>
    </div>
  )
}

export default SpreadsheetGrid
