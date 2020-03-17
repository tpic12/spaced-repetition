import React, { Component } from 'react'
//import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const LangContext = React.createContext({
  language: {},
  words: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setLanguage: () => {},
  setWords: () => {}
})

export default LangContext

export class LangProvider extends Component {
  constructor(props) {
    super(props)
    const state = { 
      lang: {},
      words:{},
      error: null
    }

    this.state = state;
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setLang = lang => {
    this.setState({ lang })
  }

  setWords = words => {
    console.log('setting words', words.length)
    this.setState({ words })
  }

  render() {
    const value = {
      lang: this.state.lang,
      words: this.state.words,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLang: this.setLang,
      setWords: this.setWords
    }
    return (
      <LangContext.Provider value={value}>
        {this.props.children}
      </LangContext.Provider>
    )
  }
}
