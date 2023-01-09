import './BuilderLP.css'
import BuilderLP from './BuilderLP';
import StartingPage from './StartingPage';
import BuilderStart from './components/BuilderStart';

function App() {

  return (
    <div className="App">
      {<BuilderLP />}
      {<BuilderStart />}
      <StartingPage />
    </div>
  )
}

export default App
