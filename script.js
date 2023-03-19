function playaudio()
{
    const audio = document.getElementById('audiomp3');
    audio.play();
}

function stopmp3()
{
    const audio = document.getElementById('audiomp3');
    audio.pause();
}

function loadgame()
{
    playaudio();

    var valmax = prompt('Quelle est la valeur maximum souhaité ?');
    alert('La valeur aléatoire sera donc compris entre 0 et '+valmax);
    alert('Prêt ?');
    var valaleatoire = Math.round(Math.random()*valmax);
    var valutilisateur = 0;
    var nombrecoup = 0;
    while(valaleatoire != valutilisateur)
    {
        valutilisateur = prompt('Choisissez une valeur.');
        if(valutilisateur > valaleatoire)
        {
            alert('La valeur aléatoire est inférieur.');
            nombrecoup++;
        }
        else if(valutilisateur < valaleatoire)
        {
            alert('La valeur aléatoire est supérieur.');
            nombrecoup++;
        }
        else if(valutilisateur == valaleatoire)
        {
            alert('Félicitation, vous avez trouvé le juste prix. La réponse était '+valaleatoire+". Vous avez trouvé la valeur en "+nombrecoup+' coup(s).');
        }
    }
    var choix = prompt('Recommencer une partie ? (O/N)');
    while((choix == 'O') || (choix == 'N'))
    {
        if(choix == 'O')
        {
            location.reload();
        }
        else if(choix == 'N')
        {
            alert("Merci d'avoir joué.");
        }
        else if(choix != 'N' && choix != 'O')
        {
            alert("Ceci n'est pas une réponse");
        }
    }
}