import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import { News } from './components/News.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  pageSize = 5;
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        />
        <div>
          <Routes>
            
            <Route path='/' element = {<News setProgress ={this.setProgress}  apiKey ={this.apiKey} key="general" pageSize ={this.pageSize} country ="us" category ="general"/>}/>
            <Route path='/general' element = {<News setProgress ={this.setProgress}  apiKey ={this.apiKey} key="general" pageSize ={this.pageSize} country ="us" category ="general"/>}/>
            <Route path='/business' element = {<News setProgress ={this.setProgress}  apiKey ={this.apiKey} key="business" pageSize ={this.pageSize} country ="us" category ="business"/>}/>
            <Route path='/entertainment' element = {<News setProgress ={this.setProgress}  apiKey ={this.apiKey} key="entertainment" pageSize ={this.pageSize} country ="us" category ="entertainment"/>}/>
            <Route path='/sports' element = {<News setProgress ={this.setProgress}  apiKey ={this.apiKey} key="sports" pageSize ={this.pageSize} country ="us" category ="sports"/>}/>
            <Route path='/science' element = {<News setProgress ={this.setProgress}  apiKey ={this.apiKey} key="science" pageSize ={this.pageSize} country ="us" category ="science"/>}/>
            <Route path='/technology' element = {<News setProgress ={this.setProgress}  apiKey ={this.apiKey} key="technology" pageSize ={this.pageSize} country ="us" category ="technology"/>}/>
            <Route path='/health' element = {<News setProgress ={this.setProgress}  apiKey ={this.apiKey} key="health" pageSize ={this.pageSize} country ="us" category ="health"/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}