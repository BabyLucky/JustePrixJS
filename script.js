function playaudio()
{
    const audio = document.getElementById('audiomp3');
    audio.play();
}

function Modejoueur1()
{
    const Mode = 1;
    loadgame(Mode);
}

function Modejoueur2()
{
    const Mode = 2;
    loadgame(Mode);
}

function stopmp3()
{
    const audio = document.getElementById('audiomp3');
    audio.pause();
}

function volumemoins()
{
    const audio = document.getElementById('audiomp3');
    audio.volume = 0.5;
}

function loadgame(Mode)
{
    const ModeJoueurChoisi = Mode;
    if(ModeJoueurChoisi == 1)
    {
        alert('Mode 1 Joueur choisi');
        const valmax = prompt('Quelle est la valeur maximum souhaité ?');
        alert('La valeur aléatoire sera donc compris entre 0 et '+valmax);
        alert('Prêt ?');
        const valaleatoire = Math.round(Math.random()*valmax);
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
    }
    else if(ModeJoueurChoisi == 2)
    {
        alert('Mode 2 joueur choisi');
        const valtrouve = prompt('(Joueur 2) Quelle est la valeur à trouvé ?');
        const valmax = prompt('(Joueur 2) Quelle est la valeur maximum ?');
        alert('(Joueur 1) La valeur aléatoire sera donc compris entre 0 et '+valmax);
        alert('Prêt Joueur 1 ?');
        var valutilisateur = 0;
        var nombrecoup = 0;
        while(valtrouve != valutilisateur)
        {
            valutilisateur = prompt('(Joueur 1) Choisissez une valeur.');
            if(valutilisateur > valtrouve)
            {
                alert('(Joueur 1) La valeur aléatoire est inférieur.');
                nombrecoup++;
            }
            else if(valutilisateur < valtrouve)
            {
                alert('(Joueur 1) La valeur aléatoire est supérieur.');
                nombrecoup++;
            }
            else if(valutilisateur == valtrouve)
            {
                alert('Félicitation Joueur 1, vous avez trouvé le juste prix de Joueur 2. La réponse était '+valaleatoire+". Vous avez trouvé la valeur en "+nombrecoup+' coup(s).');
            }
        }
    }
}