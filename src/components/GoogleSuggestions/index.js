import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsList} = props
  const {suggestion, id} = suggestionsList
  return (
    <div className="background">
      {' '}
      <h1> {suggestion} </h1>{' '}
    </div>
  )
}

export default GoogleSuggestions
