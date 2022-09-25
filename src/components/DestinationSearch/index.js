// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchResult: ''}

  onSearchedResult = event => {
    this.setState({searchResult: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchResult} = this.state

    const searchedList = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchResult),
    )

    return (
      <div>
        <ul>
          <h1>Destination Search</h1>
          <input
            type="search"
            placeholder="Search"
            value={searchResult}
            onChange={this.onSearchedResult}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
          {searchedList.map(eachUser => (
            <DestinationItem destinationItem={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
