import { parse } from 'node-html-parser';

export default async function handler(req, res) {

    const { query } = req.body;

    if (!query) {
        res.status(404).json({ "episode": "must" });
        return;
    }

    try {
        const main_server = await fetch(`https://toonstream.co/${query}`, { method: "GET" });

        const html = await main_server.text();
        const root = parse(html);

        const body = root.querySelector('body')?.querySelector('.bd');

        const article = body?.querySelector('article');

        const votes = article?.querySelector('footer')?.querySelector('.vote-cn')?.querySelector('.vote .num')?.innerText?.trim() || "no rating";

        const postThumbnail = article?.querySelector('.dfxb .post-thumbnail figure img')?.getAttribute('data-src');

        const aside = article?.querySelector('.dfxb aside');
        const header = aside?.querySelector('.entry-header');
        const entryMeta = header?.querySelector('.entry-meta');

        const title = header?.querySelector('h1')?.innerText?.trim();
        const description = aside?.querySelector('.description')?.innerText?.trim() || 'no description';

        const genresArry = entryMeta?.querySelectorAll('.genres a')?.map(r => ({
            href: r.getAttribute('href'),
            text: r.innerText.trim()
        })) || [];

        const tagArry = entryMeta?.querySelectorAll('.tag a')?.map(r => ({
            href: r.getAttribute('href'),
            text: r.innerText.trim()
        })) || [];

        const duration = entryMeta?.querySelector('.duration')?.innerText?.trim();
        const year = entryMeta?.querySelector('.year')?.innerText?.trim();
        const seasons = entryMeta?.querySelector('.seasons')?.innerText?.trim();
        const episodes = entryMeta?.querySelector('.episodes')?.innerText?.trim();

        const sections = body?.querySelectorAll('section') || [];
        const sectionsArray = Array.from(sections);

        const iframeArry = []
        sectionsArray[0].querySelector("#aa-options").querySelectorAll("div").forEach(r => {

            const iframe = r.querySelector('iframe');
            iframeArry.push({
                src: iframe.getAttribute('data-src')
            })
        })

        const videoOptionsArry = []

        sectionsArray[0].querySelector(".video-options").querySelector(".d-flex-ch").querySelector("#ln0").querySelector("ul").querySelectorAll("li").forEach(r => {
            const a = r.querySelector("a")
            const dataArry = [];

            a.querySelectorAll("span").forEach(r => {
                const textArr = r.innerText.trim().split(" ");
                const server = textArr[0] || "no server";
                const serverName = textArr[textArr.length - 1] || "no server Name";  // Get the last element
                dataArry.push({ server, serverName });  // Push as an object
            });

            videoOptionsArry.push({
                dataArry
            });

        })

        const sessionEpisodesArray = sectionsArray?.[1]?.querySelector('#episode_by_temp')?.querySelectorAll('li')?.map(r => {
            const articles = r.querySelector('article');
            if (articles) {
                const postThumbnail = articles?.querySelector('.post-thumbnail figure img')?.getAttribute('data-src');
                const numEpi = articles?.querySelector('.num-epi')?.innerText?.trim();
                const h2 = articles?.querySelector('h2')?.innerText?.trim();
                const time = articles?.querySelector('.entry-meta span')?.innerText?.trim();
                const href = articles?.querySelector('a')?.getAttribute('href');

                if (postThumbnail && numEpi && h2 && time && href) {
                    return {
                        postThumbnail,
                        numEpi,
                        h2,
                        time,
                        href
                    };
                }
            }
            return null;
        })?.filter(episode => episode !== null) || [];

        const relatDataArry = sectionsArray[2]?.querySelector('.owl-carousel')?.querySelectorAll("article")?.map(r => {
            if (r) {
                const postThumbnail = r?.querySelector('.post-thumbnail figure img')?.getAttribute('data-src');
                const h2 = r?.querySelector('h2')?.innerText?.trim();
                const vote = r?.querySelector('.entry-meta span')?.innerText?.trim();
                const href = r?.querySelector('a')?.getAttribute('href');

                if (postThumbnail && h2 && vote && href) {
                    return {
                        postThumbnail,
                        h2,
                        vote,
                        href
                    };
                }
            }
            return null;
        })?.filter(series => series !== null) || [];

        const numberOfSessions = [];
        sectionsArray?.[1]?.querySelector(".section-header")?.querySelector("div")?.querySelector(".aa-cnt")?.querySelectorAll("li")?.forEach(r => {
            const a = r.querySelector("a");
            const dataPost = a?.getAttribute("data-post");
            const dataSeason = a?.getAttribute("data-season");
            const text = a?.innerText || "";

            if (dataPost && dataSeason) {
                numberOfSessions.push({
                    dataPost,
                    dataSeason,
                    text
                });
            }
        });

        // res.status(200).json(relatDataArry);

        res.status(200).json({
            votes,
            postThumbnail,
            title,
            description,
            genresArry,
            tagArry,
            duration,
            year,
            seasons,
            episodes,
            iframeArry,
            videoOptionsArry,
            sessionEpisodesArray,
            relatDataArry,
            numberOfSessions
        })
    } catch (e) {
        req.status(400).send({ message: "Couldn't connect to toonstream" });
    }

}