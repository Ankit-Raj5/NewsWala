import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import { News } from './components/News.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <div>
          <Routes>
            
            <Route path='/' element = {<News pageSize ={5} country ="us" category ="general"/>}/>
            <Route path='/business' element = {<News pageSize ={5} country ="us" category ="business"/>}/>
            <Route path='/entertainment' element = {<News pageSize ={5} country ="us" category ="entertainment"/>}/>
            <Route path='/sports' element = {<News pageSize ={5} country ="us" category ="sports"/>}/>
            <Route path='/science' element = {<News pageSize ={5} country ="us" category ="science"/>}/>
            <Route path='/technology' element = {<News pageSize ={5} country ="us" category ="technology"/>}/>
            <Route path='/health' element = {<News pageSize ={5} country ="us" category ="health"/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}