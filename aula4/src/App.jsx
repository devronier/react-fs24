
import './App.css'
import MyRoutes from './MyRoutes'
import Menu from './components/Menu'

function App() {

  return (
    <div id="app">
      <Menu />
      <div id='conteudo'>
        <MyRoutes /> 
      </div>    
    </div>
  )
}

export default App
