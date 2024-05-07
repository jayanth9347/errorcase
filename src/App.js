import GoogleSuggestions from './components/GoogleSuggestions'

import {Component} from "react"

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

const App = () => (
  class GoogleSuggestions extends Component{
    render(){

      return(


        <div>
    <div className="div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        className="image"
      />
      <div>
        <input type="search" placeholder="Search Google" onChange={this.onClick} />
      </div>
    </div>
    <ul>
      {suggestionsList.map(eachUser => (
        <GoogleSuggestions suggestionsList={suggestionsList} />
      ))}
    </ul>
  </div>




      )









    }
  
}
)

export default App
