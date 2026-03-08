import './storagePolyfill'   // must be first — sets up window.storage
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ArtemisPrime from './ArtemisPrime'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ArtemisPrime />
  </React.StrictMode>
)
