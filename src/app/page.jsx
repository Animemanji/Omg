import React, { useEffect, useState } from 'react';

const AnimeList = () => {
    const [data, setData] = useState({
        latestEpisodes: [],
        latestSeries: [],
        latestMovies: [],
        randomSeries: [],
        randomMovies: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAnimeData = async () => {
        try {
            const response = await fetch('/api/anime'); // Adjust this to your API route
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimeData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Latest Episodes</h1>
            <ul>
                {data.latestEpisodes.map((episode, index) => (
                    <li key={index}>
                        <img src={episode.imgSrc} alt={episode.title} />
                        <h2>{episode.title}</h2>
                        <p>Episodes: {episode.numEpi}</p>
                        <p>Time: {episode.time}</p>
                        <a href={episode.href}>Watch Now</a>
                    </li>
                ))}
            </ul>

            <h1>Latest Series</h1>
            <ul>
                {data.latestSeries.map((series, index) => (
                    <li key={index}>
                        <img src={series.imgSrc} alt={series.title} />
                        <h2>{series.title}</h2>
                        <p>Vote: {series.vote}</p>
                        <a href={series.href}>Watch Now</a>
                    </li>
                ))}
            </ul>

            <h1>Latest Movies</h1>
            <ul>
                {data.latestMovies.map((movie, index) => (
                    <li key={index}>
                        <img src={movie.imgSrc} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>Vote: {movie.vote}</p>
                        <a href={movie.href}>Watch Now</a>
                    </li>
                ))}
            </ul>

            <h1>Random Series</h1>
            <ul>
                {data.randomSeries.map((series, index) => (
                    <li key={index}>
                        <img src={series.imgSrc} alt={series.title} />
                        <h2>{series.title}</h2>
                        <p>Vote: {series.vote}</p>
                        <a href={series.href}>Watch Now</a>
                    </li>
                ))}
            </ul>

            <h1>Random Movies</h1>
            <ul>
                {data.randomMovies.map((movie, index) => (
                    <li key={index}>
                        <img src={movie.imgSrc} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>Vote: {movie.vote}</p>
                        <a href={movie.href}>Watch Now</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimeList;