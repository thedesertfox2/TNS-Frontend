import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TriviaQuestion from '../components/TriviaQuestion';
import ResultsScreen from '../screens/ResultsScreen'
import {HOST_WITH_PORT} from '../../environment'
import TriviaScreen from './TriviaScreen'



class QuestionsScreen extends Component{
    state = {
        takingQuiz: false,
        trivia: null,
        i: 0,
        numberCorrect: 0
    }

    takingQuiz =() => {
        fetch(`${HOST_WITH_PORT}/quiz`)
        // fetch("http://localhost:3000/quiz")
        .then(res => res.json())
        .then(data => this.setState({trivia: data.question, takingQuiz: true}))
    }

    nextQuestion = (num1, num2) => {
        this.setState({
            i: this.state.i += num2,
            numberCorrect: this.state.numberCorrect += num1
        })
    
    }

    newQuiz = () => {
        this.setState({
            takingQuiz: false,
            trivia: null,
            i: 0,
            numberCorrect: 0
        })
    }

    render(){
        // console.log(this.props.navigation)
        // debugger
        return(
            <View>
                {
                    this.state.takingQuiz && this.state.trivia.length === this.state.i 
                    ?
                    <ResultsScreen 
                        newQuiz={this.newQuiz} 
                        correct={this.state.numberCorrect} 
                        i={this.state.i} 
                        trivia={this.state.trivia}
                    />
                    :
                    this.state.takingQuiz
                    ? 
                    this.state.trivia[this.state.i].map(trivia => 
                        <TriviaQuestion 
                            question={trivia.question} 
                            choices={trivia.choices} 
                            correct={trivia.choices.correct} 
                            nextQuestion={this.nextQuestion}
                            i={this.state.i}
                            numberCorrect={this.state.numberCorrect}
                        />
                    )
                    :
                    <TriviaScreen
                        takingQuiz={this.takingQuiz}
                    />
                }
            </View>
        )
    }
}

export default QuestionsScreen