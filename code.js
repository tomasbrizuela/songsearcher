let btn = document.getElementById("btn");
let input = document.querySelector("input");
let song = document.getElementById("song");
let term;

const key = "359e51897bmsh2f7cfd9dee0bddbp11f1d8jsn0531c735e864";
const url = `https://shazam.p.rapidapi.com/search?term=${term}&locale=en-US&offset=0&limit=5`;



async function search() {
    term = input.value;
    const url = `https://shazam.p.rapidapi.com/search?term=${term}&locale=en-US&offset=0&limit=5`;
    const options = {
        "method": 'GET',
        "headers": {
            'X-RapidAPI-Key': '359e51897bmsh2f7cfd9dee0bddbp11f1d8jsn0531c735e864',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
        },
    }
    const response = await fetch(url, options);
    const data = await response.json();
    const answer = (data.tracks.hits[0].track.hub.providers[0].actions[0].uri);

    
    const openSpotify = document.createElement("a");
    openSpotify.href = answer;
    document.body.appendChild(openSpotify);
    openSpotify.click();
    document.body.removeChild(openSpotify);

    // console.log(data.tracks.hits[0].track.hub);
    // song.href= `${answer}`;
}



btn.addEventListener('click', search);

