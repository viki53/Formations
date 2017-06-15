# Rappel des principales commandes Git

```bash
git init # Crée un repo dans le dossier courant

git clone <url> [<dirName>] # Copie un repo distant

git remote add <name> <url> # Lie un repo local au distant

git add # Présenter des fichiers (ou parties) à commiter

git commit -m <message> # Crée un commit avec les changements présentés

git push # Envoie l'historique local sur un repo distant

git merge <branch> # Fusionne une autre branche avec la branche courante

git rebase <branch> # Ré-écrit l'historique de la branche courante après celle d'une autre

git pull # Récupère l'historique du repo distant (fetch + merge)

git fetch # Récupère l'état distant

git diff <state1>..<state2> # Calcule les différences entre deux états (fichiers ou commits)

git branch # Affiche les branches

git checkout <hash> # Permet de naviguer dans l'historique

git checkout -b # Crée une branche et nous place dedans

git log # Affiche l'historique des commits

git tag -A # Crée un tag sur l'état actuel
```
