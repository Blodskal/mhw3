function onSpotifyJson(json){
    console.log(json);
    const library = document.querySelector('#api2').querySelector('.container');
    library.innerHTML = '';
    const results = json.albums.items;
    let n_res = results.length;
    if(n_res > 3){
        n_res = 3;
    }
    for(let i=0; i<n_res; i++){
        const playlists = results[i];
        const title = playlists.name;
        const image = playlists.images[1].url;
        const album = document.createElement('div');
        album.classList.add('element');
        const album_title = document.createElement('span');
        album_title.classList.add('src-header');
        album_title.textContent = title;
        album.style.backgroundImage = 'url('+image+')';
        album.style.backgroundSize = '120px';
        const store_pg = document.createElement('span');
        store_pg.classList.add('link');
        store_pg.innerHTML = '<a href="' + playlists.external_urls.spotify + '" target=_blank>Ascolta ora</a>';
        album.appendChild(album_title);
        album.appendChild(store_pg);
        library.appendChild(album);
    }
}


//fetch token
const client_id = '0d0341a989d44024a7b369e11386343d';
const client_secret = 'e425d381305844a38431e6d9539c314b';
let token;

fetch(spotifyToken,
{
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers:
    {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    }
}).then(onTokenResponse).then(onTokenJson);

function onTokenJson(json){
    token = json.access_token;
}

function onTokenResponse(response){
    return response.json();
}
