import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import LangContext from '../../contexts/LangContext'
import './NextWordCard.css'

class nextWordCard extends Component {
  static contextType = LangContext

  render() {
    const {word} = this.props
    return (
      <>
    <section className='next-word-card'>
      <h2>Translate the word:</h2>
      <span>{word.nextWord}</span>
      
      <form className="submit-answer">

      <label htmlFor="learn-guess-input">What's the translation for this word?</label>
      
    <input required type="text" id="learn-guess-input"/>

  <button type="submit">Submit your answer</button>
    </form>
      <p>Your total score is: {word.totalScore}</p>
      <p>You have answered this word correctly {word.wordCorrectCount} times.</p>
      <p>You have answered this word incorrectly {word.wordIncorrectCount} times.</p>
    </section>
    
      </>
    );
  }
}

export default nextWordCard