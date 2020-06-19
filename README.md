# Frontend voor Designers opdracht 3

## Briefing

De opdracht is om een interactie uit te werken met externe data in de vorm van JSON en die dan dankzij een API en javascript wordt ingeladen. 

## API

De api die ik heb gekozen is Joke API. Wat deze API doet is een random grap inladen zodra de pagina wordt geladen. Deze grap komt met extra data, zoals een id, een getal van het aantal upvotes en een getal met het aantal downvotes.

https://rapidapi.com/LemmoTresto/api/joke3?endpoint=apiendpoint_c198a2fb-fc88-4a86-9e34-e2978fc1a7c2

## Uitleg ontwerp

Mijn interactie is dat mensen een willekeurige grap kunnen inladen en dan kunnen kiezen of ze deze een upvote of een downvote geven. Wanneer de gebruiker een nieuwe grap wilt zien kan de gebruiker op de spatiebalk drukken of op een knop.

Het ontwerp ziet er uiteindelijk zo uit:

<img width="1440" alt="Screenshot 2020-06-19 at 09 43 03" src="https://user-images.githubusercontent.com/51541543/85109244-4fba0280-b211-11ea-877e-fe7fe29423e4.png">

## Principles

### #4 Keep users in control

De gebruikers blijven in controle in mijn ontwerp doordat het systeem niks onverwachts doet en niks doet zonder dat de gebuiker iets zelf doet. Wanneer de gebruiker op een knop drukt met "New joke" dan komt er ook een nieuwe grap. Wanneer de gebruiker een grap upvote, dan wordt het getal groter. En het zelfde geldt wanneer de gebruiker een grap downvote. 

### #9 Appearance follows behaviour

De vormgeving van de 'New joke' knop zorgt ervoor dat het lijkt op een knop en weten gebruikers dat er op geklikt kan worden. De knop kan dus ook daadwerkelijk ingedrukt worden en nadat het is ingedrukt wordt er een nieuwe grap van de API ingeladen.

### #11 Strong visual hierarchies work best

De Visuele hierarchie in mijn ontwerp laat de gebruiker van helemaal het begin naar het eind begeleiden. De titel van het ontwerp "BruhMoments" is het grootste en pakt de aandacht van de gebruiker. Daarna wordt gaat de aandacht naar 'Joke' omdat het net iets kleiner is dan de titel. Hierna volgt de grap en de buttons. Hierdoor leest de gebruiker alles op volgorde. 

## Uitleg code

<img width="508" alt="Screenshot 2020-06-19 at 10 16 36" src="https://user-images.githubusercontent.com/51541543/85112539-0ddf8b00-b216-11ea-8a40-4c43bb220863.png">

Deze drie functies werken hetzelfde. Ze maken een paragraaf element aan, dan wordt met textContent de data van de API in het element gezet als string. Hierna wordt het in een sectie van de html gezet zodat het gezien wordt in de html. Bij de upvotes krijgen ze ook een ID zodat ik ze makkelijk later kan gebruiken in de code.

<img width="539" alt="Screenshot 2020-06-19 at 10 25 13" src="https://user-images.githubusercontent.com/51541543/85113384-7bd88200-b217-11ea-95fe-51ca815c9e58.png">

Deze twee functies werken ook hetzelfde. De paragrafen worden geselecteerd op basis van ID. De text staat in een string en omdat ik het aantal upvotes/downvotes + 1 wil doen moet het een number worden. Hiervoor gebruik ik parseFloat. Wanneer de string een nummer is verander ik de textContent naar het huidige getal + 1. Ik verwijder ook de eventlisteners zodat het niet herhaalt kan worden op dezelfde grap. 

## Valkuilen 

Ik had moeite met het veranderen van een string naar een number. Ik had hier een tijd naar zitten googlen maar uiteindelijk was het ook gelukt. Ik weet niet of er een betere manier is om dit te doen maar ben blij dat het teminste werkt nu. 
