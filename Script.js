const spotifyApi = 'https://api.spotify.com/v1/search?type=album&q=';
const spotifyToken = 'https://accounts.spotify.com/api/token';
const steamApi = 'http://api.steampowered.com/ISteamApps/GetAppList/v2/?tag=Indie';
const proxyURL = 'https://cors-anywhere.herokuapp.com/';

function onResponse(response){
    return response.json();
}

function onError(error) {
    console.log('Errore: ' + error);
}

function openContainer1(event){
    const target = event.currentTarget;
    const container = target.querySelector('.container');
    if(container.style.display === 'flex'){
        container.style.display = 'none';
        target.querySelector('span').innerHTML='▼';
    }else{
        container.style.display = 'flex';
        target.querySelector('span').innerHTML ='▲';
        fetch(proxyURL + steamApi, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
            }
        }).then(onResponse, onError).then(onSteamJson);
    }
}

function openContainer2(event){
    const target = event.currentTarget;
    const container = target.querySelector('.container');
    if(container.style.display === 'flex'){
        container.style.display = 'none';
        target.querySelector('span').innerHTML='▼';
    }else{
        container.style.display = 'flex';
        target.querySelector('span').innerHTML ='▲';
        const album_value = document.querySelectorAll('.gametitle');
        if(token===null){
            setTimeout(onTokenJson, 10);
        }else{
            for(let i=0; i<album_value.length; i++){
                const album_src = encodeURI(album_value[i].innerHTML);
                fetch(proxyURL + spotifyApi + album_src,
                {
                    method: 'GET',
                    headers:
                    {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + token
                    }
                }).then(onResponse, onError).then(onSpotifyJson);
            }
        }
    }
}

const api1 = document.querySelector('#api1');
api1.addEventListener('click', openContainer1);
const api2 = document.querySelector('#api2');
api2.addEventListener('click', openContainer2);


