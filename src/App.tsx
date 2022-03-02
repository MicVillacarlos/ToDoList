import React from 'react'
import { Navbar } from './components/Navbar'
import { List } from './components/List'
import { Home } from './components/Home'
import { CreateTodo } from './components/InputTodo'
import { BrowserRouter as  Router,Route,Routes } from 'react-router-dom'
import { GlobalStyle } from './style'

const App = () => {

  return(
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tasks" element={<List/>}/>
          <Route path="/tasks/add" element={<CreateTodo/>}/>
      </Routes>
    </Router>
   
  )
}

export default App

