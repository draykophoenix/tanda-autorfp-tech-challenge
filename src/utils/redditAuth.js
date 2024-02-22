import { encode } from "base-64";

const client_id = "h4S3l2XkCCXeiqjERXO-5g"
const redirect_uri = "http://35.201.16.88"

export function createAuthorizeURL(state) {
    return `
https://www.reddit.com/api/v1/authorize?
client_id=${client_id}
&response_type=code
&state=${state}
&redirect_uri=${redirect_uri}
&duration=temporary
&scope=read`
} 

export async function retrieveToken(code) {
    const res = await fetch("https://www.reddit.com/api/v1/access_token", {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Basic ' + encode(client_id + ":" + import.meta.env.VITE_REDDIT_SECRET),
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: new URLSearchParams({
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': redirect_uri,
        })
    });

    const data = await res.json() 
    return data.access_token
}