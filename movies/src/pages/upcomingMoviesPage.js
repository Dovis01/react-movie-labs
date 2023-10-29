import React, { useState, useEffect } from "react";
import {getMovie, getUpcomingMovies} from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavorites from "../components/cardIcons/addToFavorites";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";

const UpcomingMoviesPage = () => {

    const { data, error, isLoading, isError } = useQuery(
        "upcoming",
        getUpcomingMovies
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data.results;

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <AddToFavorites movie={movie} />;
            }}
        />
    );
};

export default UpcomingMoviesPage;