import React, { Component } from 'react'

 class ClassComponent2 extends Component {
  render() {
    return (
      <div>
         <p>Trenutno posjeduješ {this.props.money*2}</p>
      </div>
    )
  }
}
export {ClassComponent2};
