import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import LangContext from '../../contexts/LangContext'
import LangService from '../../services/lang-service'
import config from '../../config'
import './NextWordCard.css'
import Results from '../Results/Results'

class nextWordCard extends Component {
  
   state={
      word:this.props.word,
      isCorrect:null,
      guessed: false,
      answer: null,
      guess: null
    }
  
  static contextType = LangContext;

// change(
//   if({this.state.isCorrect==true}){
    
//   }
// )


  handleSubmitAnswer = event=>{
event.preventDefault();
const guess= event.target.answer.value
this.setState({
  guess
})
console.log("this is the guess",guess)

fetch(`${config.API_ENDPOINT}/language/guess`,{
    
  method: "POST",
  headers: {
    "content-type": "application/json",
    authorization:"bearer " + TokenService.getAuthToken()
  },
  body: JSON.stringify({
    guess
  })
})
.then(res=>res.json())
.then(data=>{
  this.setState({
    answer:data,
    guessed: true
  })

})
 // console.log("is correct?",data))

// .then(data=>{
//   console.log("this is response data", data)
//   LangService.getNextWord()
// })
// .then(data=>{
//   this.setState({
//     word:data
//   })
// })
}
handleNextWord = (event) => {
  event.preventDefault();
  //call get to /head and reset state, also change guessed to false
  LangService.getNextWord()
    .then(res => {
      //console.log(res)
      this.setState({word: res})
      this.setState({guessed: false})
  })
  .catch(this.context.setError)
}

  render() {
    const {word, guessed} = this.state
    return (
      <>
    <section className='next-word-card'>
      <h2>Translate the word:</h2>
      <span>{word.nextWord}</span>
      
      <form className="submit-answer" onSubmit={this.handleSubmitAnswer}>

      <label htmlFor="learn-guess-input">What's the translation for this word?</label>
      
    <input name="answer"required type="text" id="learn-guess-input"/>

  <button type="submit">Submit your answer</button>
    </form>

      <p>Your total score is: {word.totalScore}</p>
      <p>You have answered this word correctly {word.wordCorrectCount} times.</p>
      <p>You have answered this word incorrectly {word.wordIncorrectCount} times.</p>
    </section>
    <section className="displayScore">
    <p>{}</p>
      </section>
      {guessed && <Results answer={this.state.answer} currentWord={this.state.word} guess={this.state.guess} handleNextWord={this.handleNextWord}/>}
      </>
    );
  }
}

export default nextWordCard