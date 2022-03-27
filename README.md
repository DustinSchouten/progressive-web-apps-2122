# Progressive Web Apps

## Installatie-instructies progressive web app:
Hieronder heb ik in stappen beschreven hoe ik mijn progressive web app heb geïmplementeerd en hoe ik de server (localhost) werkend heb gekregen waar de web app op draait.

1. Ik heb node.js gedownload en geïnstalleerd.

2. Ik heb een nieuwe map genaamd 'myapp' in mijn filesysteem aangemaakt waar ik de web app wil laten runnen.

3. Ik heb de git-repository 'https://github.com/cmda-minor-web/progressive-web-apps-2122' geforkt. Vervolgens heb mijn geforkte repository gecloned naar mijn apparaat met het commando `git clone https://github.com/DustinSchouten/progressive-web-apps-2122.git`. Deze repo heb ik gecloned naar de map 'myapp'.

4. Ik heb een terminal geopend, genavigeerd naar de map 'myapp' en het commando `npm init` uitgevoerd. NPM staat voor Node Package Manager en met npm kun je JavaScript-packages installeren.

5. Na dit commando kreeg ik een korte vragenlijst waarin ik de volgende antwoorden heb gegeven:

package name: (test_web_app) `myapp`
version: (1.0.0) `0.0.1`
description: `Progressive Web App`
entry point: (index.js) `main.js`
test command: ``
git repository: `https://github.com/DustinSchouten/progressive-web-apps-2122.git`
keywords: ``
author: `Dustin Schouten`
license: (ISC) ``

Hierna is er een bestand genaamd 'package.json' geïnstalleerd.

6. Hierna heb ik het commando `npm install express` uitgevoerd om de package Express te installeren. Met Express ga ik de web app server-side laten renderen. Dit commando genereert een aantal modules van node.js.

7. Naast Express package zijn er nog drie packages nodig. Dit zijn 'dotenv', 'ejs' en 'node-fetch'. Met dotenv kun je omgevingsvariabelen initialiseren en gebruiken. Met ejs (staat voor Embedded JavaScript templates) kun je HTML genereren met plain JavaScript. De package 'node-fetch' is nodig om data uit de API te halen die ik in de quotes app ga renderen.

Om deze drie packages te installeren voer je de volgende commando's uit:
- `npm install dotenv -s`
- `npm install ejs -s`
- `npm install node-fetch -s`

8. Ik heb vervolgens een nieuw JavaScript bestand aangemaakt genaamd 'main.js'. Dit bestand is terug te vinden in mijn github pagina. Hierin heb ik alle packages ingeladen, de express-app geïnitialiseerd en de verschillende routes aangemaakt. Deze app heb ik laten luisteren naar een server met poortnummer 3000. Dit poortnummer heb ik als omgevingsvariabele gedefinieerd in het aangemaakte bestand '.env'. Ook heb ik de zogenaame 'view engine' op 'ejs' gezet, zodat ik met de ejs package de HTML van mijn applicatie kan renderen.

9. Wanneer ik mijn app wil laten runnen, moet ik telkens het commando `node main.js` uitvoeren. Doordat dit het startpunt van mijn applicatie is, heb ik in het package.json bij "scripts" de regel `"start": "node main.js"` tussen regelnummer 6 en 7 toegevoegd. Hiermee kan ik de app laten runnen d.m.v. het commando `npm start`.

10. Ik heb een map genaamd 'views' aangemaakt al mijn ejs-bestanden.

11. Ik heb een map genaamd 'public' aangemaakt voor de css en de images.

Het volledige project is te vinden op mijn github-pagina: 'https://github.com/DustinSchouten/progressive-web-apps-2122'.


