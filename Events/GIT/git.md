# GitITDone

https://doodle.com/meeting/participate/id/5eVnxxoe

https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/

## Inleidng

### Noodzaak versie controle

We hebben het allemaal al vast meegemaakt in het middelbaar wanneer we in groep aan een taak moesten werken.
Nadat we allemaal de bestanden naar elkaar doorgestuurd hebben eindigen we met 3 verschillende versies van de taak met namen zoals taak.docx, taak1.docx, taakFINAAL.docx.
In de IT wereld werken hele departementen aan één codebase en dan is zo absoluut geen manier van werken. Er is nood aan een systeem dat de verschillende versies van de documenten en code bij houd. Een *version control system*.

### GIT?

Een technologie die ons hier bij kan helpen is *git*. Git is bedacht en ontworpen in 2005 door Linus Torvalds (de maker van Linux) en is dus gemaakt voor de Unix command interface. Git houdt alle code en files bij in een repo*sitory*.Ondertussen bestaan er ook grafische interfaces/implementaties zoals GitHub , Gitkraken, GitLab etc.

- GitHub is een cloud hosting service voor het hosten van je repositories maar ze bieden ook een gui aan voor lokaal te werken met git en nog veel meer.

- Gitkraken gui voor git

- Zoals GitHub maar met een licht andere focus

Een van de pijlers van git is dat het gedistribueerd is, dwz de repository wordt niet bijgehouden op één centrale server maar iedereen die aan het project werkt heeft (een versie van)  de repository lokaal.

## Git

### De git workflow

![](./gitWorkflow.png)

### Configurations

Om te beginnen pas je best deze zaken aan. Je kan dit ook doen door in een text editor de config file aan te passen.

```git
git config --global user.name "YOUR_USERNAME"
git config --global user.email "YOUR@EMAIL.HERE"
```

### Create a repo

Oke nu kunnen we beginnen met onze eerste repo. Navigeer eerst (met behulp van cd) naar de directory waar we onze repo willen maken. Met het **init** commando maken we een nieuwe lege repository.

```git
git init
```

### git add

We gaan onze eerste file stagen. Eerst maken we een nieuwe file aan. Een goede om mee te beginnen is de README.md. In dit document geven we uitleg  over onze repo en de inhoud er van.

```bash
touch README.md
```

Daarna voegen we deze toe aan de staging area. We kunnen dit op twee manieren doen, allebei maken ze gebruik van het **add** commando. Op de eerste manier stagen we alle unstaged files in onze working directory. Op de tweede enkel degene die wij specifiek aanduiden (kies dus één van de twee commando's).

```git
git add .
git add README.md
```

### git commit

Als we zeker zijn dat deze files in hun gestagede vorm mogen toegevoegd worden aan de lokale repo kunnen we ze committen. Dit kunnen we doen met het **commit** commando. Git verwacht van ons dat we een woordje uitleg geven over de verandering die we gemaakt hebben. Daarom voegen we optie **-m** toe waarin we tussen "" uitleg geven over onze commit.

```git
git commit -m"Een readme file toegevoegd"
```

### git remote

### git push

### Unstagen

### git checkout

## Collaborate

### git clone

### git fetch & git merge

### .gitignore

## Branching
