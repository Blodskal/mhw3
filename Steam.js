function onSteamJson(json){
    console.log(json);
    const library = document.querySelector('#api1').querySelector('.container');
    library.innerHTML = '';
    const results = json.applist.apps; 
    let n_res = results.length;
    if(n_res > 6){
        n_res = 6;
    }
    for(let i=0; i<n_res; i++){
        const j = Math.floor(Math.random() * results.length) + 20;
        const app_list = results[j];
        const name = app_list.name;
        const gameId = app_list.appid;
        const game = document.createElement('div');
        game.classList.add('element');
        const game_name = document.createElement('span');
        game_name.classList.add('src-header');
        game_name.textContent = name;
        const store_pg = document.createElement('span');
        store_pg.classList.add('link');
        store_pg.innerHTML = '<a href="https://store.steampowered.com/app/' + gameId + '/' + name + '/" target="_blank">Vedi su Steam</a>';
        game.appendChild(game_name);
        game.appendChild(store_pg);
        library.appendChild(game);
    }
}