import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import LangContext from '../../contexts/LangContext'
import LangService from '../../services/lang-service'
import Card from '../Card/card'
import './dashboard.css'

class Dashboard extends Component {
  static contextType = LangContext

  state = {
    error: null,
    loaded: false
  }

  componentDidMount = () => {
    LangService.getLang()
      .then(res => {
        //console.log(res.language)
        this.context.setLang(res.language)
        this.context.setWords(res.words)
        this.setState({loaded: true})
      })
      .catch(this.context.setError)
    // console.log(LangService.getLang())
    
  }

  renderCard() {
    const {words=[]} = this.context
    // console.log(words[0].original)
    return words.map(word =>
      <li><Card key={word.id} word={word} /></li>
    )
  }

  render() {
    const {loaded} = this.state
    const {lang} = this.context
    console.log(loaded)
    return (
      <>
      <section className='header'>
        <h2>{lang.name}</h2>
        <p>Total correct answers: {lang.total_score}</p>
      </section>
      <h3>Words to practice</h3>
      <ul className='card-list'>
        {loaded && this.renderCard()}
      </ul>
      {/* <Button className="start-learning-button" type='button'>
              Start Learning
            </Button> */}
      <Link to='/learn'>Start practicing</Link>
    </>
    );
  }
}

export default Dashboard