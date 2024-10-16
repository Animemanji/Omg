import { parse } from 'node-html-parser';

export default async function handler(req, res) {

    if (req.method != "POST") {
        res.status(404).json({ "season & post": "must" });
        return;
    }

    const { season, post } = req.body
    // const season = 2
    // const post = 3812

    const urlencoded = new URLSearchParams();
    urlencoded.append("action", "action_select_season");
    urlencoded.append("season", season);
    urlencoded.append("post", post);

    const resi = await fetch("https://toonstream.co/wp-admin/admin-ajax.php", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.6",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Brave\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "_lscache_vary=68fa147aceac7ddcec0d10a95ea25d84; prefetchAd_8066108=true",
            "Referer": "https://toonstream.co/series/naruto-shippuden-hindi-dub/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": urlencoded,
        "method": "POST"
    });

    const res_json = await resi.text();
    const root = parse(res_json);
    const specEpisodeData = [];
    root.querySelectorAll("li").forEach(r => {
        const articles = r.querySelector("article");
        const postThumbnail = articles?.querySelector("div").querySelector("figure").querySelector("img")?.getAttribute('src');
        console.log(postThumbnail);
        const numEpi = articles?.querySelector('.num-epi')?.innerText?.trim();
        const h2 = articles?.querySelector('h2')?.innerText?.trim();
        const href = articles?.querySelector('a')?.getAttribute('href');

        specEpisodeData.push({
            numEpi,
            postThumbnail,
            h2,
            href
        })
    })

    res.status(200).json(specEpisodeData);
}