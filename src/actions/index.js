module.exports = {
    onChange:value=>({type:'change',value}),
    fetchUserRequest:value=>({type:'USER_FETCH_REQUEST',username:value}),
    fetchUserSuccess:user=>({type:'USER_FETCH_SUCCEEDED',user}),
    fetchUserFailed:message=>({type:'USER_FETCH_SUCCEEDED',message}),
}
