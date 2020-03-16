import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import LangContext from '../../contexts/LangContext'
import LangService from '../../services/lang-service'
//import './dashboard.css'

class Dashboard extends Component {
  static contextType = LangContext

  state = {
    error: null
  }

  componentDidMount = () => {
    // LangService.getLang()
    //   .then(this.context.setLang())
    //   .then(this.context.setWords())
    //   .catch(this.context.setError)
    console.log(LangService.getLang())
  }

  render() {
    return (
    <h2>{this.state.error}</h2>
    );
  }
}

export default Dashboard