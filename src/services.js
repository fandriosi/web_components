export default class Services{
    message(){
        return "Hello Campinas";    
    }
    postServices(url = ``, data = {}) {
        // Default options are marked with *
        console.log('data', data);
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header            
        }).then(response => response.json()); // parses response to JSO    
    }   
    
    async getServices(url= ``){
        const request = await fetch(url);
        const payload = await request.json(); 
        return payload;
    }
}