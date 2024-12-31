import './App.css'
import MainRouter from './routes/MainRouter'
import { QuestionsProvider } from './context/QuestionsContext'

function App() {

  return (
    <QuestionsProvider>
      <MainRouter />
    </QuestionsProvider>
  )
}

export default App
