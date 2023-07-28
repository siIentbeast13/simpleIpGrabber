//
// Sends request to an api to get ip
//
const request = new XMLHttpRequest();
request.open("POST", "http://ip-api.com/xml/");
request.send();


//
// Sets request.onreadystatechange
//
request.onreadystatechange = (e)=>{
    //
    // Checks for response
    //
    if (request.response) {
        //
        // Parses response
        //
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(request.response, "text/xml");
        const xmlData = xmlDoc.querySelector("query");



        //
        // Extracts data from the parsed response
        //
        const data = xmlData.innerHTML.replace("<org/>", "");



        //
        // Makes sure the function doesnt run twice
        // 
        request.onreadystatechange = null;


        //
        // Sends data to server
        //
        request.open("POST", "/");
        request.send(data);
    }
}



//
// Feel free to add any code below
//
