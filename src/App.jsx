
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './assets/home/HomePage'
import {ViewPage} from './assets/view/ViewPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/photo-view/:id" element={<ViewPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
