import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import LP from './components/LP'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>hej test</p>
      <Navbar />
      <LP />
      <Footer />
    </div>
  )
}

export default App
