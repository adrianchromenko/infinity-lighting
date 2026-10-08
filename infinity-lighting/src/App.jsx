import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import AppRoutes from './routes'
import ScrollToTop from './components/ScrollToTop'
import FloatingPhone from './components/FloatingPhone'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          <FloatingPhone />
          <ChatBot />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
