export default async function handler(req, res) {

    const { query } = req.body;

    if (!query) {
        res.status(404).json({ "episode": "must" });
        return;
    }

    const fetchy = await fetch(`https://toonstream.co/wp-admin/admin-ajax.php?s=${encodeURIComponent(query)}&action=search_in_place&lang=en`, {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.5",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Brave\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-requested-with": "XMLHttpRequest", 
            "Referer": "https://toonstream.co/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });

    const resy = await fetchy.json()

    res.status(200).json(resy);
}