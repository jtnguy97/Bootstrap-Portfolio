const formId = "1FAIpQLSfQ9RpWAUeWaTt3fXIx46pXA_BGlqZSL9u6wkH1T96T3Z-RqQ";
const entry1 = "entry.687365732";
const entry2 = "entry.565083551";
const entry3 = "entry.2025325419"
const entry4 = "entry.766095249";
const getPath = formId => `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const getURL = function (path, params){
    const url = new URL (path);
    for (let key in params){
    url.searchParams . set (key, params [key]);
    }
    return url;
   } 
   
const postToGoogleDB = function(data){
    const path = getPath(formId);
    const url = getURL(path, data)
    sendRequest('POST', url)
    .then(responseEvent);
   } 
   
const sendRequest = async function(verb, url){
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
   } 

   const initRequest = function(verb, url){
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
   } 
   
   const responseEvent = response => email_animation.innerHTML = "message sent &#128231;";
   