import { parse } from 'node-html-parser';


export default async function handler(req, res) {

    const domain = `toonstream.co`

    const url = `https://${domain}`
    if (!url) return res.status(200).json({ error: "url" });

    try {
        // Fetch the external HTML content
        const response = await fetch(url, { method: "GET" });

        // Check if the response is ok
        if (!response.ok) {
            return res.status(response.status).json({ error: `Failed to fetch: ${response.statusText}` });
        }

        const html = await response.text();
        const root = parse(html); // Parse the HTML content

        // Extract the <body> content
        const body = root.querySelector('body');
        const bd = body.querySelector('.cont').querySelector('.bd').querySelector('.dfxc').querySelector('.main-site').querySelector("#widget_list_episodes-3").querySelector("ul");
        const latest_li = bd.querySelectorAll('li')
        const latest_series = body.querySelector('.cont').querySelector('.bd').querySelector('.dfxc').querySelector('.main-site').querySelector("#widget_list_movies_series-2").querySelector("#widget_list_movies_series-2-aa-movies").querySelector("#widget_list_movies_series-2-all").querySelector("ul").querySelectorAll("li")
        const latestMovies = body.querySelector('.cont').querySelector('.bd').querySelector('.dfxc').querySelector('.main-site').querySelector("#widget_list_movies_series-3").querySelector("#widget_list_movies_series-3-aa-movies").querySelector("#widget_list_movies_series-3-all").querySelector("ul").querySelectorAll("li")
        const randomSeries = body.querySelector('.cont').querySelector('.bd').querySelector('.dfxc').querySelector('aside').querySelector("div").querySelector("#widget_list_movies_series-4").querySelector("#widget_list_movies_series-4-aa-movies").querySelector("#widget_list_movies_series-4-all").querySelector("ul").querySelectorAll("li")
        const randomMovies = body.querySelector('.cont').querySelector('.bd').querySelector('.dfxc').querySelector('aside').querySelector("div").querySelector("#widget_list_movies_series-6").querySelector("#widget_list_movies_series-6-aa-movies").querySelector("#widget_list_movies_series-6-all").querySelector("ul").querySelectorAll("li")

        const latestMoviesArry = [];
        const latestSeriesArry = [];
        const latestEpisodeArry = [];

        const randomSeriesArry = [];
        const randomMoviesArry = [];

        latest_li.forEach(r => {
            const article = r.querySelector('article');
            const imgSrc = article.querySelector('.post-thumbnail').querySelector('figure').querySelector('img').getAttribute('data-src');
            const title = article.querySelector('.entry-header').querySelector('.entry-title') ? article.querySelector('.entry-header').querySelector('.entry-title').innerText.trim() : "no title";
            const numEpi = article.querySelector('.entry-header').querySelector('.num-epi') ? article.querySelector('.entry-header').querySelector('.num-epi').innerText.trim() : "no num epi";
            const time = article.querySelector('.entry-header').querySelector('.num-epi') ? article.querySelector('.entry-header').querySelector('.entry-meta').querySelector("span").innerText.trim() : "no num epi";
            const href = article.querySelector("a").getAttribute("href");

            latestEpisodeArry.push({
                imgSrc,
                title,
                numEpi,
                time,
                href
            });
        })

        latest_series.forEach(r => {
            const article = r.querySelector('article');
            const imgSrc = article.querySelector('.post-thumbnail').querySelector('figure').querySelector('img').getAttribute('data-src');
            const title = article.querySelector('.entry-header').querySelector('.entry-title') ? article.querySelector('.entry-header').querySelector('.entry-title').innerText.trim() : "no title";
            const vote = article.querySelector('.entry-header').querySelector('.entry-meta') ? article.querySelector('.entry-header').querySelector('.entry-meta').querySelector(".vote").innerText.trim() : "no vote";
            const href = article.querySelector('a').getAttribute('href');

            latestSeriesArry.push({
                imgSrc,
                title,
                vote,
                href
            });
        })

        latestMovies.forEach(r => {
            const article = r.querySelector('article');
            const imgSrc = article.querySelector('.post-thumbnail').querySelector('figure').querySelector('img').getAttribute('data-src');
            const title = article.querySelector('.entry-header').querySelector('.entry-title') ? article.querySelector('.entry-header').querySelector('.entry-title').innerText.trim() : "no title";
            const vote = article.querySelector('.entry-header').querySelector('.entry-meta') ? article.querySelector('.entry-header').querySelector('.entry-meta').querySelector(".vote").innerText.trim() : "no vote";
            const href = article.querySelector("a").getAttribute("href");

            latestMoviesArry.push({
                imgSrc,
                title,
                vote,
                href
            });
        })

        randomMovies.forEach(r => {
            const article = r.querySelector('article');
            const imgSrc = article.querySelector('.post-thumbnail').querySelector('figure').querySelector('img').getAttribute('data-src');
            const title = article.querySelector('.entry-header').querySelector('.entry-title') ? article.querySelector('.entry-header').querySelector('.entry-title').innerText.trim() : "no title";
            const vote = article.querySelector('.entry-header').querySelector('.entry-meta') ? article.querySelector('.entry-header').querySelector('.entry-meta').querySelector(".vote").innerText.trim() : "no vote";
            const href = article.querySelector("a").getAttribute("href");

            randomMoviesArry.push({
                imgSrc,
                title,
                vote,
                href
            });
        })

        randomSeries.forEach(r => {
            const article = r.querySelector('article');
            const imgSrc = article.querySelector('.post-thumbnail').querySelector('figure').querySelector('img').getAttribute('data-src');
            const title = article.querySelector('.entry-header').querySelector('.entry-title') ? article.querySelector('.entry-header').querySelector('.entry-title').innerText.trim() : "no title";
            const vote = article.querySelector('.entry-header').querySelector('.entry-meta') ? article.querySelector('.entry-header').querySelector('.entry-meta').querySelector(".vote").innerText.trim() : "no vote";
            const href = article.querySelector("a").getAttribute("href");

            randomSeriesArry.push({
                imgSrc,
                title,
                vote,
                href
            });
        })


        if (!body) {
            return res.status(500).json({ error: "No <body> tag found" });
        }

        res.status(200).json({ latestEpisodeArry, latestSeriesArry, latestMoviesArry, randomMoviesArry, randomSeriesArry });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }

}