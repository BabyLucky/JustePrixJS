var valmax = prompt('Quelles est la valeur maximum souhaité ?');
alert('La valeur aléatoire sera donc compris entre 0 et '+valmax);
alert('Prêt ?');
var valaleatoire = Math.round(Math.random()*valmax);
var valutilisateur = 0;
while(valaleatoire != valutilisateur)
{
    valutilisateur = prompt('Choisissez une valeur.');
    if(valutilisateur > valaleatoire)
    {
        alert('La valeur aléatoire est inférieur.');
    }
    else if(valutilisateur < valaleatoire)
    {
        alert('La valeur aléatoire est supérieur.');
    }
    else if(valutilisateur == valaleatoire)
    {
        alert('Félicitation, vous avez trouvé le juste prix. La réponse était '+valaleatoire);
    }
}
var choix = prompt('Recommencer une partie ? (O/N)');
if(choix = 'N')
{
    alert("Merci d'avoir joué.");
}
else if(choix != 'N' && choix != 'O')
{
    alert("Ceci n'est pas une réponse");
}