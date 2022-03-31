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

10. Ik heb een map genaamd 'views' aangemaakt voor al mijn ejs-bestanden.

11. Ik heb een map genaamd 'public' aangemaakt voor de css en de images.

Het volledige project is te vinden op mijn github-pagina: 'https://github.com/DustinSchouten/progressive-web-apps-2122'.

## Hoe werkt het server-side-rendering in mijn applicatie:
Zoals ik hierboven al eerder heb beschreven, heb ik mijn app doormiddel van server-side-rendering de HTML-bestanden laten genereren. Hierbij wordt er gebruikgemaakt van een template engine genaamd ejs. Een template engine maakt het mogelijk om variabelen in een template-bestand om te zetten in HTML-content die als HTML-bestand naar de client kan worden gestuurd. 

Het framework dat gebruikt wordt om onder andere de ejs-bestanden te prepareren is een Express-applicatie. Express is een webapplicatie framework van Node.js dat gebruikt wordt voor het bouwen van web- en mobiele applicaties. Met deze package kun je met de JavaScriptregel 'const app = express()' een Express-applicatie definiëren. Met de regel 'app.set('view engine', 'ejs')' wordt vervolgens de view-engine (template-engine) op ejs gedefinieerd.

Met de applicatie kun je vervolgens routes aanmaken waarmee je voor iedere pagina in je webapplicatie kunt bepalen welke data er gerenderd wordt.
 
## Waarom server-side-rendering:
Er zijn een aantal redenen om voor dit principe te kiezen:

- De pagina laadt sneller. Bij client-side-rendering moet de browser bij iedere link op de HTML-pagina (zoals CSS- en JavaScriptbestanden maar ook bij images) opnieuw een request naar de server sturen. Op deze manier wordt de webpagina steeds verder opgebouwd. Bij server-side-rendering hoeft de browser maar één request naar de server te sturen. De server rendert vervolgens de volledige pagina inclusief alle CSS en images. Dit zorgt ervoor dat de webpagina sneller aan de gebruiker getoond kan worden.

- De pagina wordt beter indexeerbaar voor zoekmachines. Doordat alle inhoud bij het opvragen van de pagina direct beschikbaar is, kunnen zoekmachines de webpagina beter indexeren. De pagina wordt hierdoor SEO-vriendelijk (Search Engine Optimization).

- Doordat het opbouwen van de pagina op de server gebeurt, kost dit de gebruiker daardoor minder data en is het voor de gebruiker dus goedkoper.




Bronnen:
- https://www.sdim.nl/helpcentrum/begrippenlijst/server-side-rendering/#:~:text=Voordelen%20van%20server%2Dside%20rendering%20zijn%3A,klaar%20is%20om%20te%20renderen.
- https://lightbase.nl/kennisbank/techniek/wat-is-server-side-rendering
- https://expressjs.com/en/guide/using-template-engines.html#:~:text=A%20template%20engine%20enables%20you,to%20design%20an%20HTML%20page.