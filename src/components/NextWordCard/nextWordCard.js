import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import LangContext from '../../contexts/LangContext'
//import './nextWordCard.css'

class nextWordCard extends Component {
  static contextType = LangContext

  render() {
    const {word} = this.props
    return (
    <section className='next-word-card'>
      <h2>Translate the word:</h2>
      <span>{word.nextWord}</span>
      <p>Your total score is: {word.totalScore}</p>
      <p>You have answered this word correctly {word.wordCorrectCount}</p>
      <p>You have answered this word incorrectly {word.wordIncorrectCount}</p>
    </section>
    );
  }
}

export default nextWordCard