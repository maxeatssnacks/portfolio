# Personal Website - Excel Style

A personal website that mimics the look and functionality of a Microsoft Excel workbook, built with React, Vite, Node.js, and Express.

## Features

- **Excel-like Interface**: Spreadsheet grid with column headers (A-Z) and row headers (1-50)
- **Bottom Sheet Tabs**: Navigation tabs at the bottom, just like Excel
- **Multiple Sheets**: About, Resume, and Portfolio sections
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Data**: Fetches data from a Node.js backend API

## Project Structure

```
personal/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── SpreadsheetGrid.jsx
│   │   │   ├── SheetTabs.jsx
│   │   │   └── sheets/
│   │   │       ├── AboutSheet.jsx
│   │   │       ├── ResumeSheet.jsx
│   │   │       └── PortfolioSheet.jsx
│   │   ├── App.jsx
│   │   └── App.css
├── server/                 # Node.js backend (Express)
│   └── index.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v20.15.0 or higher)
- npm

### Installation

1. Clone or download this project
2. Install dependencies for both frontend and backend:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Running the Application

From the root directory, run:

```bash
npm run dev
```

This will start both the frontend (Vite dev server on port 5173) and backend (Express server on port 5000) concurrently.

### Individual Commands

- **Frontend only**: `npm run client`
- **Backend only**: `npm run server`
- **Build for production**: `npm run build`
- **Start production server**: `npm start`

## Customization

### Personal Information

Update your personal information in the backend API routes:

- **About**: Edit `/server/index.js` - `/api/about` route
- **Resume**: Edit `/server/index.js` - `/api/resume` route  
- **Portfolio**: Edit `/server/index.js` - `/api/portfolio` route

### Styling

The Excel-like appearance is controlled by CSS in:
- `client/src/App.css` - Main spreadsheet styling
- `client/src/index.css` - Global styles and resets

### Adding New Sheets

1. Create a new sheet component in `client/src/components/sheets/`
2. Add the sheet name to the `sheets` array in `client/src/App.jsx`
3. Add a case in the `renderSheetContent` function in `SpreadsheetGrid.jsx`
4. Create a corresponding API route in `server/index.js` if needed

## API Endpoints

- `GET /api/about` - Returns personal information
- `GET /api/resume` - Returns resume data
- `GET /api/portfolio` - Returns portfolio projects

## Technologies Used

- **Frontend**: React 18, Vite, CSS3
- **Backend**: Node.js, Express, CORS
- **Development**: Concurrently, Nodemon

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [ISC License](LICENSE).
