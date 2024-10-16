
export function encryptPassword(password) {
    const version = 10;
    const timestamp = Math.floor(Date.now() / 1000);

    // This is a placeholder for the actual encryption function
    function encrypt(pwd, time) {
        // Complex encryption logic would go here
        return btoa(pwd + time); // This is just a simple base64 encoding for illustration
    }

    const encryptedPwd = encrypt(password, timestamp);

    return `#PWD_INSTAGRAM_BROWSER:${version}:${timestamp}:${encryptedPwd}`;
}

export async function login_try(username, password) {

    const request = await fetch("https://www.instagram.com/api/v1/web/accounts/login/ajax/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Brave\";v=\"128\"",
            "sec-ch-ua-full-version-list": "\"Chromium\";v=\"128.0.0.0\", \"Not;A=Brand\";v=\"24.0.0.0\", \"Brave\";v=\"128.0.0.0\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": "\"\"",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-ch-ua-platform-version": "\"10.0.0\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-asbd-id": "129477",
            "x-csrftoken": "n5nI_SOlegLFIBbYd3XTCa",
            "x-ig-app-id": "936619743392459",
            "x-ig-www-claim": "0",
            "x-instagram-ajax": "1016280942",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "mid=ZttXxQALAAH0y-Kbz0ZCrpZAF-Aw; ig_did=E85B6F5C-A014-44DE-B843-D657D2EE73A6; ig_nrcb=1; csrftoken=n5nI_SOlegLFIBbYd3XTCa; ig_did=0C826C21-17C3-444A-ABB7-EBABD37214D7; datr=z1fbZmU7d9TW2kn1Q4fMv98G; dpr=1.75; wd=722x817",
            "Referer": "https://www.instagram.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": encodeURIComponent(`enc_password=${password}&caaF2DebugGroup=0&loginAttemptSubmissionCount=0&optIntoOneTap=false&queryParams={}&trustedDeviceRecords={}&username=${username}`),
        "method": "POST"
    });

    const request_json = await request.json()

    return request_json

}

export async function get_order(params = {}) {
    const url = "http://44.218.223.44/follow_plus/gc2"; // Base URL

    const myHeaders = new Headers({
        "token": "cookie",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Apache-HttpClient/UNAVAILABLE (java 1.4)"
    });

    // Ensure params has default values for each key if not provided
    const urlencoded = new URLSearchParams({
        di: params.di || "afe006f26bf28888",
        pk: params.pk || "59234082900",
        api: params.api || "cg7YekUeQQh6UtN2"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    try {
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const response_json = await response.json();
        return response_json;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw error; // Re-throw or handle the error as needed
    }
}

export async function claim_order(ty, id) {
    const url = "http://44.218.223.44/follow_plus/lf2"; // Base URL

    const myHeaders = new Headers({
        "token": "cookie",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Apache-HttpClient/UNAVAILABLE (java 1.4)"
    });

    // Construct the body from params with default values
    const urlencoded = new URLSearchParams({
        ty: ty,
        di: "afe006f26bf28888",
        pk: "59234082900",
        id: id,
        api: "cg7YekUeQQh6UtN2"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    try {
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const response_json = await response.json();

        return response_json;
    } catch (error) {
        console.error('Error claiming order:', error);
        throw error; // Re-throw or handle the error as needed
    }
}

export async function user_data(user) {

    const user_data = await fetch("https://next-n4qlnydxv-garas-projects-169dee57.vercel.app/api/userInfo", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.6",
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Brave\";v=\"128\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "cookie": "_vercel_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJKaXg5UHpVN0s0NUlackJxVHlua2NoTmciLCJpYXQiOjE3MjU3MDM4NjQsImF1ZCI6Im5leHQtbjRxbG55ZHh2LWdhcmFzLXByb2plY3RzLTE2OWRlZTU3LnZlcmNlbC5hcHAiLCJ1c2VybmFtZSI6InRyb2xsaW5nc291bmQiLCJzdWIiOiJzc28tcHJvdGVjdGlvbiJ9.8cDuJ5UDoiLHLCyy7b9QvAb8k9SN4TFh8rjkV19Xwcc",
            "Referer": "https://next-n4qlnydxv-garas-projects-169dee57.vercel.app/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: JSON.stringify({ "data": user }),
        "method": "POST"
    });

    const user_data_json = await user_data.json()

    return user_data_json

}

export async function create_order(pc, fl, id, nm) {

    const myHeaders = new Headers();
    myHeaders.append("token", "cookie"); // Use environment variable for sensitive data
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Host", "44.218.223.44");
    myHeaders.append("Connection", "Keep-Alive");
    myHeaders.append("User-Agent", "Apache-HttpClient/UNAVAILABLE (java 1.4)");

    const urlencoded = new URLSearchParams();
    urlencoded.append("pc", pc);
    urlencoded.append("ui", ""); // Consider parameterizing this if dynamic
    urlencoded.append("ty", "follow");
    urlencoded.append("di", "afe006f26bf28888");
    urlencoded.append("fl", fl);
    urlencoded.append("tl", "35");
    urlencoded.append("pk", "59234082900");
    urlencoded.append("id", id);
    urlencoded.append("api", "cg7YekUeQQh6UtN2"); // Use environment variable for sensitive data
    urlencoded.append("nm", nm);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    try {
        const response = await fetch("http://44.218.223.44/follow_plus/cc2", requestOptions);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const request_json = await response.json();
        return request_json;

    } catch (error) {
        console.error("Error in create_order:", error);
        return { error: error.message };
    }
}
