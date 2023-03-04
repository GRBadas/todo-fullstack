import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListTodoComponent from './components/ListTodoComponent';
import CreateTodoComponent from './components/CreateTaskComponent';
import UpdateTodoComponent from './components/UpdateTaskComponent';

function App() {

  return (
    <div className="App" id='page'>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' exact element ={<ListTodoComponent />}/>
            <Route path='/add-task' element ={<CreateTodoComponent />}/>
            <Route path='/update-task/:id' element ={<UpdateTodoComponent />}/>
          </Routes>
        </div>
      <FooterComponent/>
      </Router>
    </div>
  )
}

export default App
