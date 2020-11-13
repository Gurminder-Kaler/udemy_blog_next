import React, { Component, Fragment } from 'react';

class MovieList extends Component {

  renderMovies() {
    function shorten(text) {
      if (text && text.length > 200) {
        return text.substr(0, 200) + '...'
      }
      return text
    }
    return this
      .props
      .movies
      .map((movie, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
          <div className="card h-100">
            <a href="#"><img className="card-img-top homepage_image" src={movie.image} alt="" /></a>
            <div className="card-body">
              <h6 className="card-title">
                <a href="#">{movie.name}</a>
              </h6>
              <h5>${movie.cost}</h5>
              <p className="card-text">{shorten(movie.description)}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734; &nbsp; {movie.rating}</small>
            </div>
          </div>
        </div>
      ))
  }
  render() {
    return (
      <Fragment>
        {
          this.renderMovies()
        }
      </Fragment >
    )
  }
}

export default MovieList
