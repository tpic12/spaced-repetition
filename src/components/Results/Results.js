import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
//import LangContext from '../../contexts/LangContext'
//import LangService from '../../services/lang-service'
//import config from '../../config'
import './Results.css'


class Results extends Component {
  state={
    isCorrect:this.props.answer.isCorrect
  }


  render() {
    const {answer, currentWord, guess} = this.props
    return (
      <div className='results'>
    <section className="displayScore">
      <h2>{this.state.isCorrect ===false?`Good try, but not quite right :(`:`You were correct! :D`}</h2>
      <p className='displaysTotal'>{`Your total score is: ${answer.totalScore}`}</p>
      </section>
      <section className='DisplayFeedback' >
      <p>{`The correct translation for ${currentWord.nextWord} was ${answer.answer} and you chose ${guess}!`}</p>
      <button type='button' onClick={this.props.handleNextWord}>Try another word!</button>
    </section>
    </div>
    
    )
  }
}

export default Results