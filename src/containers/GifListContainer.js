// fetch data from the giphy api, store the first three gifs in state, pass to <GifList> as a prop

// will render <GifSearch /> (form) and pass down a submit handler

import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  state = {
    firstThreeGifs: []
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <GifList firstThreeGifs={this.state.firstThreeGifs} />
        </div>
        <div className="col-md-4">
          <GifSearch fetchGifs={this.fetchGifs} />
        </div>
      </div>
    )
  }

  fetchGifs = (searchValue) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json())
    .then(json => {
      this.setState({
        firstThreeGifs: json.data.slice(0, 3)
      })
    })
  }
}
