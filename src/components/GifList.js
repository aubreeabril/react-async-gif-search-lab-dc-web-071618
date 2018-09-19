import React from 'react'

export default class GifList extends React.Component {
  render(){
    console.log(this.props.firstThreeGifs)
    return (
      <ul>
        {this.props.firstThreeGifs.map(gif => (
          <li><img src={gif.images.original.url} alt={gif.title} /></li>
        ))}
      </ul>
    )
  }
}

// {this.props.firstThreeGifs.length > 0 ? <img src={this.props.firstThreeGifs[0].images.original.url} alt={this.props.firstThreeGifs[0].title}/>: ''}
