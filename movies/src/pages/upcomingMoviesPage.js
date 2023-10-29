import React from "react";
import {getUpcomingMovies} from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavorites from "../components/cardIcons/addToFavorites";
import AddToWatchList from "../components/cardIcons/addToWatchList";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";

const UpcomingMoviesPage = () => {
    //have done for using react-query
    const {data, error, isLoading, isError} = useQuery(
        "upcoming",
        getUpcomingMovies
    );

    if (isLoading) {
        return <Spinner/>;
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
                return (
                    <>
                        <AddToFavorites movie={movie}/>
                        <AddToWatchList movie={movie}/>
                    </>
                );
            }}
        />
    );
};

export default UpcomingMoviesPage;