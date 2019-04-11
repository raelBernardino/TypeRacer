import React, { Component } from 'react'

class Completed extends Component {
  render(){
    return(
      <div className="completed-page">
        <span className="completed-page_header">Completed</span>
        <button className="completed-page_button" onClick={this.props.reset}>Play Again</button>
      </div>
    )
  }
}

export default Completed