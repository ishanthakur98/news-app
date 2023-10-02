
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Router,
} from "react-router-dom";


export default class App extends Component {

  constructor() {

    super();
    this.state = {
      progress: 0
    }
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (


      <div>

        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}

        />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} key="business1" pageSize={6} country={"IN"} category={"business"} />
          } />
          <Route exact strict path="/category/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} country={"IN"} category={"business"} />
          } />
          <Route exact strict path="/category/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} country={"IN"} category={"entertainment"} />
          } />
          <Route exact strict path="/category/general" element={<News setProgress={this.setProgress} key="general" pageSize={6} country={"IN"} category={"general"} />
          } />
          <Route exact strict path="/category/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country={"IN"} category={"health"} />
          } />
          <Route exact strict path="/category/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} country={"IN"} category={"science"} />
          } />
          <Route exact strict path="/category/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country={"IN"} category={"sports"} />
          } />
          <Route exact strict path="/category/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country={"IN"} category={"technology"} />
          } />
        </Routes>

      </div>

    )
  }
}


