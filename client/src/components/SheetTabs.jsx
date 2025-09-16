import { useState, useEffect } from 'react'

const SheetTabs = ({ sheets, activeSheet, onSheetChange }) => {
  const [showClippy, setShowClippy] = useState(false);

  const handleLeftArrow = () => {
    const currentIndex = sheets.indexOf(activeSheet);
    if (currentIndex > 0) {
      onSheetChange(sheets[currentIndex - 1]);
    }
  };

  const handleRightArrow = () => {
    const currentIndex = sheets.indexOf(activeSheet);
    if (currentIndex < sheets.length - 1) {
      onSheetChange(sheets[currentIndex + 1]);
    }
  };

  const handleClippyToggle = () => {
    setShowClippy(!showClippy);
  };

  // Auto-show Clippy after 15 seconds, but only once per session
  useEffect(() => {
    const hasSeenClippy = localStorage.getItem('clippy-shown');

    if (!hasSeenClippy) {
      const timer = setTimeout(() => {
        setShowClippy(true);
        localStorage.setItem('clippy-shown', 'true');
      }, 15000); // 15 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="sheet-tabs">
      {/* Left Navigation Controls */}
      <div className="tab-controls">
        <div className="tab-arrow left" onClick={handleLeftArrow}>
          <span>◀</span>
        </div>
        <div className="tab-separator"></div>
        <div className="tab-arrow right" onClick={handleRightArrow}>
          <span>▶</span>
        </div>
      </div>

      {/* Sheet Tabs */}
      <div className="tabs-container">
        {sheets.map((sheet) => (
          <div
            key={sheet}
            className={`sheet-tab ${activeSheet === sheet ? 'active' : ''}`}
            onClick={() => onSheetChange(sheet)}
          >
            {sheet}
          </div>
        ))}
      </div>

      {/* Help Button with Clippy */}
      <div className="add-sheet-btn clippy-trigger" onClick={handleClippyToggle}>
        <span>?</span>
      </div>

      {/* Clippy Popup */}
      {showClippy && (
        <div className="clippy-popup">
          <div className="clippy-container">
            <div className="clippy-character">
              <img src="/clippy.png" alt="Clippy" />
            </div>
            <div className="clippy-speech-bubble">
              <div className="speech-bubble-content">
                <p>It looks like you're trying to VLOOKUP some talent.</p>
                <p>You might have found a MATCH!</p>
              </div>
              <button className="clippy-close" onClick={handleClippyToggle}>×</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SheetTabs
