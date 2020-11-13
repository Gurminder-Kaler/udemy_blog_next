import React, {useState, useEffect, Component} from 'react';
import FrontEnd from '../layouts/frontend';
import HomeSlider from '../components/homeslider';
import MovieList from '../components/movielist';
import {getMovies} from '../actions/index';

export default class Home extends Component {
    state = {
        movies: []
    }
    async componentDidMount() {
        // called only once when webpage is visited the first time, untill unless cookies
        // are refreshed
        const movies = await getMovies()
        this.setState({movies})
    }
    render() {
        return (
            <FrontEnd>
                <div className="col-lg-9">
                    <HomeSlider/>
                    <div className="row">
                        <MovieList movies={this.state.movies}/>
                    </div>
                </div>
            </FrontEnd>
        )
    }
}