import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './reset.css';
import './App.css';

class Movie extends Component {
  static propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
  }
  render(){
    return(
      <li>        
        <span className="poster_img"><img src={this.props.poster} alt="영화 포스터" /> </span>
        <div className="poster_info">
          <span className="title">{this.props.title}</span>                 
          <LinesEllipsis
            text={this.props.summary}
            maxLine='5'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </li>
    )
  }
}


export default Movie;