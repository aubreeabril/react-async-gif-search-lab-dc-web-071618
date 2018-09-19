import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    searchValue: null
  }

  render() {
    return (
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label>Enter a Search Term:
          <input type='text' className="form-text" onChange={this.handleChange} />
        </label><br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.searchValue)
  }

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
}
