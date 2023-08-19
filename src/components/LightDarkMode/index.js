// Write your code here
import {Component} from 'react'
import './index.css'

const blackBG = 'card-container'
const white = 'card-container1'

class LightDarkMode extends Component {
  state = {isTrue: true}

  lightDarkModeButton = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
  }

  render() {
    const {isTrue} = this.state
    const container = isTrue ? blackBG : white
    const textContent = !isTrue ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="bg-container">
        <div className={container}>
          <h1 className="heading">click to change mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.lightDarkModeButton}
          >
            {textContent}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
