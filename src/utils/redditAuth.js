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

export function retrieveToken(state, code) {
    return ""
}