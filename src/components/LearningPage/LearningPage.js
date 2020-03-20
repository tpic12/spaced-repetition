import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import LangContext from '../../contexts/LangContext'
import LangService from '../../services/lang-service'
import NextWordCard from '../NextWordCard/nextWordCard'
//import './learningPage.css'

class LearningPage extends Component {
  static contextType = LangContext

  state = {
    error: null,
    loaded: false,
    currentWord: null,
  }

  componentDidMount() {
    LangService.getNextWord()
      .then(res => {
        //console.log(res)
        this.setState({currentWord: res})
        this.setState({loaded: true})
      })
      .catch(this.context.setError)
  }

  render() {
    const {loaded, currentWord} = this.state
    return (
      <main>
        {loaded && <NextWordCard word={currentWord}/>}
      </main>
    );
  }
}

export default LearningPage