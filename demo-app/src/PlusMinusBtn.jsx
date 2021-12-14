import { render } from "@testing-library/react"
import { Component } from "react"

// class PlusMinusBtn extends Component {
//     state = {
//         counter : 100
//     }
//     render(){
//         return(
//           <div className="d-flex mt-3">
//                 <button className="btn btn-danger m-2" onclick={()=>this.setState({counter: this.state.counter - 1})}>-</button>
//                 <h1>{this.state.counter}</h1>
//                 <button className="btn btn-success m-2" onclick={()=>this.setState({counter: this.state.counter + 1})}>+</button>
//           </div>
//             )
//         }
// }

// export default PlusMinusBtn

class PlusMinusBtn extends Component { // Component is another class, taken directly from the React Library

  // state is a reserved keyword, you have to use it
  state = {
      // a state object can be defined just in a class component.
      // what is a state? a state is an object that can carry information over time.
      counter: 0
  }
  render() {
      return (
          <div className="d-flex mt-3 align-items-center">
              <div >  Click the button{this.props.name}</div>
              <button className="btn btn-danger m-5" onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
              <h2 className="m-5">{this.state.counter}</h2>
              <button className="btn btn-success m-5" onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
          </div>
      )
  }
}

export default PlusMinusBtn


                                                const aim = function(){
                                                    if(DREAMS===true){
                                                      const mind = document. getElementById("mind") 
                                                      const goal = document.createElement("h1") 
                                                        h1.innerText ="its never too late" 
                                                        mind.appendChild(h1)
                                                        }
                                                        DREAMS.forEach(dream => {
                                                        let path = "Follow your" + `${dream}` 
                                                        let success = 100%
                                                      })
                                                      return success
                                                    }   