import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
//import LangContext from '../../contexts/LangContext'
//import LangService from '../../services/lang-service'
//import config from '../../config'
//import './NextWordCard.css'


class Results extends Component {
  state={
    isCorrect:this.props.word.isCorrect
  }

  render() {
    return (
    <section className="displayScore">
    <h2>{this.state.isCorrect ===false &&`Good try, but not quite right :( `}</h2>
    <p>{this.state.isCorrect ===false && `The correct translation for * was * and you chose *!`}</p>
      </section>
    
    
    )
  }
}

export default Results