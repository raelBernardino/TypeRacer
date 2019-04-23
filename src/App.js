import React, { Component } from 'react';
import Completed from './components/Completed'
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeChallenges: [
        {
          text: 'The quick brown fox jumps over the lazy dog.',
          completed: false
        },
        {
          text: '"Remember it\'s a sin to kill a mockingbird." That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it.',
          completed: false
        },
        {
          text: 'I think we dream so we don’t have to be apart for so long. If we’re in each other’s dreams, we can be together all the time.',
          completed: false
        },
        {
          text: 'Eddie pushed the money into Dominguez\'s palm. Then he walked out back to the storage area. A small "fishing hole" had been cut into the boardwalk planks years ago, and Eddie lifted the plastic cap. He tugged on a nylon line that dropped 80 feet to the sea. A piece of bologna was still attached.',
          completed: false
        },
        {
          text: '"You mean Dr. Carlisle Cullen\'s family?" the tall, older boy asked before I could respond, much to Lauren\'s irritation. He was really closer to a man than a boy, and his voice was very deep.',
          completed: false
        },
        {
          text: 'Remember also your Creator in the days of your youth, before the evil days come and the years draw near of which you will say, "I have no pleasure in them"',
          completed: false
        }
      ],
      displayedChallenge: '',
      userType: '',
      challengeArr: [],
      correct: true,
      completed: false,
      background: {
        backgroundColor: '',
      },
      timer: 0,
      startTimer: false
    }
    this._reset = this._reset.bind(this)
    this._checkIfCompleted = this._checkIfCompleted.bind(this)
    this._onChangeChecker = this._onChangeChecker.bind(this)
    this._changeDisplayedWords = this._changeDisplayedWords.bind(this)
    this._checkIfCorrect = this._checkIfCorrect.bind(this)
    this._randomChallengePicker = this._randomChallengePicker.bind(this)
    this._splitSentence = this._splitSentence.bind(this)
  }

  componentDidMount() {
    this._randomChallengePicker()
  }

  _timer() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 })
      console.log(this.state.timer)
    }, 1000)
  }

  _randomChallengePicker() {
    const typeChallenges = this.state.typeChallenges
    const background = this.state.background
    let num = Math.floor(Math.random() * Math.floor(typeChallenges.length))
    this.setState({
      displayedChallenge: typeChallenges[num].text,
      userType: '',
      background: {
        ...background,
        backgroundColor: 'rgb(106, 250, 202)'
      }
    })
    this._splitSentence(num)
  }

  _splitSentence(num) {
    const typeChallenges = this.state.typeChallenges
    let challengeArr = typeChallenges[num].text.split('')
    let displayedChallenge = typeChallenges[num].text
      .split(' ')
      .splice(0, 6)
      .join(' ')
    this.setState({
      challengeArr,
      displayedChallenge
    })
  }

  _onChangeChecker(e) {
    let typed = e.target.value
    let tempLetterArr = typed.split('')
    let tempWordArr = typed.split(' ')
    this.setState({ userType: typed }, () => this._checkIfCompleted())
    this._checkIfCorrect(tempLetterArr)
    this._changeDisplayedWords(tempWordArr)
  }

  _changeDisplayedWords(typedWord) {
    const challengeArr = this.state.challengeArr.join('').split(' ')
    for (var i = 0; i < typedWord.length; i++) {
      if (typedWord[i] === challengeArr[0]) {
        challengeArr.shift()
      }
    }
    this.setState({ displayedChallenge: challengeArr.splice(0, 6).join(' ') })
  }

  _checkIfCorrect(typedArr) {
    let challengeArr = this.state.challengeArr
    const correct = this.state.correct
    const background = this.state.background
    for (var i = 0; i < typedArr.length; i++) {
      if (typedArr.join('') === challengeArr.join('').slice(0, typedArr.length)) {
        this.setState({
          correct,
          background: {
            ...background,
            backgroundColor: 'rgb(106, 250, 202)'
          }
        })
      } else {
        this.setState({
          correct: !correct,
          background: {
            ...background,
            backgroundColor: 'rgb(250, 106, 106)'
          }
        })
      }
    }
  }

  _checkIfCompleted() {
    let userType = this.state.userType
    const challengeArr = this.state.challengeArr
      .join('')
    if (userType === challengeArr) {
      this.setState({
        completed: !this.state.completed,
        startTimer: !this.state.startTimer
      })
    }
  }

  _reset() {
    this.setState({
      completed: !this.state.completed
    })
    this._randomChallengePicker()
  }

  render() {
    return (
      <div className="type-racer" style={this.state.background}>
        {
          this.state.completed ?
            <Completed
              reset={this._reset}
            /> :
            <div className="app">
              <span className="app_text-header">
                {this.state.displayedChallenge}
              </span>
              <input className="app_input" onChange={(e) => this._onChangeChecker(e)} value={this.state.userType} />
              <button className="app_button" onClick={this._randomChallengePicker}>New</button>
            </div>
        }
      </div>
    );
  }
}