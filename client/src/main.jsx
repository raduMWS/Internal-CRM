import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Users from './components/Users'
import UsersTable from './components/UsersTable/UsersTable'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersTable />
  </React.StrictMode>,
)
