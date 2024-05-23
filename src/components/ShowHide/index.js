// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isHiddenFname: false, isHiddenLname: false}

  onFistNameClick = () => {
    this.setState(prevState => ({
      isHiddenFname: !prevState.isHiddenFname,
      isHiddenLname: prevState.isHiddenLname,
    }))
  }

  onLastNameClick = () => {
    this.setState(prevState => ({
      isHiddenFname: prevState.isHiddenFname,
      isHiddenLname: !prevState.isHiddenLname,
    }))
  }

  getFirstName = () => {
    const {isHiddenFname} = this.state
    return isHiddenFname ? <p className="name">JOE</p> : null
  }

  getLastName = () => {
    const {isHiddenLname} = this.state
    return isHiddenLname ? <p className="name">Jonas</p> : null
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="btn-containers">
            <button onClick={this.onFistNameClick} className="btn">
              Show/Hide Firstname
            </button>
            {this.getFirstName()}
          </div>
          <div className="btn-containers">
            <button onClick={this.onLastNameClick} className="btn">
              Show/Hide Lastname
            </button>
            {this.getLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
