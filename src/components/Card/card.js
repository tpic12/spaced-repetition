import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import LangContext from '../../contexts/LangContext'
//import './card.css'

class Card extends Component {
  static contextType = LangContext

  render() {
    return (
    <section className='card'>
      <h4>{this.props.word.original}</h4>
      <p>correct answer count: {this.props.word.correct_count}</p>
      <p>incorrect answer count: {this.props.word.incorrect_count}</p>
    </section>
    );
  }
}

export default Card