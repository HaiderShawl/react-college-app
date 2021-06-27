import React from 'react';

import data from "./data/data"
import fields from "./data/fields"




class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      n: "",
      d: {},
      f:["Institution"]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const val = event.target.value
    const newState = this.state
    if (newState.f.includes(val)) {
      newState.f.splice(newState.f.indexOf(val), 1)
    } else {
      newState.f.push(val)
    }
    this.setState(newState);
    console.log(newState.f, val)

  }
  

  handleSubmit (event) {
    const name = event.target.name.value
    const collegeData = data[name]

    this.setState((state) => {
      const newState = state
      newState['n'] = name
      newState['d'] = collegeData
      return newState
    });
    event.preventDefault();
  }

  render () {
    let names = Object.keys(data).map( name => <option value={name}/>  )

    let collegeData = (Object.keys(data).includes(this.state.n)) ? fields.map( f => <tr><td>{f}</td><td>{this.state.d[f]}</td></tr> ) : []

    return (
    <div className="App">
      <div className="container-fluid p-5 pt-2">
        <form onSubmit={this.handleSubmit} className="pb-5">


          <label htmlFor="exampleDataList" className="form-label pt-4">College name:</label>
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." name="name" />
          <datalist id="datalistOptions">
              {names}
          </datalist>

          <input className="btn btn-outline-dark me-2 mt-3" type="submit" value="Search" />
        </form>

        <table className="table table-striped table-hover">
          <tbody>
            {collegeData}
          </tbody>
        </table>
          
      </div>
    </div>
    )
  }
}

export default App;
