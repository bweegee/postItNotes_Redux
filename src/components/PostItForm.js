import React from 'react'
import { connect, } from 'react-redux'

class PostItForm extends React.Component {
  state = { name: '', }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, } = this.props
    const { name, } = this.state
    dispatch({ type: 'ADD_POSTIT', postit: name })
    this.setState({ name: '', })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }

  render() {
    const { name, } = this.state;

    return(
      <div>
        <h3>New Post-It</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default connect()(PostItForm)
