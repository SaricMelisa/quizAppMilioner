function izmijesajNiz(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const pitanja = [
    {
        pitanje: "Koji je ispravan naziv amfiteatra 'ABG'?",
        odgovori: ["Branislav Galeb", "Branko Golub", "Branko Galeb", "Branislav Golub"],
        tacanOdg: "Branko Galeb",
        bodovi: 100
    },
    {
        pitanje: "Koji je ispravan naziv amfiteatra 'AMD'?",
        odgovori: ["Mirko Deželić", "Mladen Deželić", "Mladen Dačić", "Mirko Dačić"],
        tacanOdg: "Mladen Deželić",
        bodovi: 100

    },
    {
        pitanje: "Izbaci uljeza",
        odgovori: ["Irhad Fejzić", "Sead Delalić", "Iman Bekkaye", "Elmedin Selmanović"],
        tacanOdg: "Elmedin Selmanović",
        bodovi: 100
    },
    {
        pitanje: "Koji HTML element koristimo za povezivanje eksternog CSS stila?",
        odgovori: ["link", "style", "css", "script"],
        tacanOdg: "link",
        bodovi: 100
    },
    {
        pitanje: " Koja je svrha HTML atributa 'alt' u oznaci slike?",
        odgovori: ["Za postavljanje boje slike", "Za postavljanje opisa slike", 
        "Za postavljanje širine i visine slike", "Za postavljanje poveznice slike"],
        tacanOdg: "Za postavljanje opisa slike", 
        bodovi: 100
    },
    {
        pitanje: " Kako postaviti vanjski okvir oko HTML elementa pomoću CSS-a?",
        odgovori: ["border-style: external", "outline: solid;", "border: solid;", "frame: solid"],
        tacanOdg: "border: solid;", 
        bodovi: 100
    },
    {
        pitanje: "Koja jedinica se koristi za postavljanje veličine fonta u CSS-u?",
        odgovori: ["px", "em", "%","pt"],
        tacanOdg: "px", 
        bodovi: 100
    },
    {
        pitanje: "Kako deklarirati funkciju u JavaScriptu?",
        odgovori: ["function myFunction() {}", "def myFunction() {}", 
        "declare function myFunction() {}", "declare myFunction() {}"],
        tacanOdg: "function myFunction() {}", 
        bodovi: 100
    },
    {
        pitanje: "Kako pristupiti prvom elementu u nizu (array) u JavaScriptu?",
        odgovori: ["array[0]", " array.first()", "array.getElement(0)", "array.item(0)"],
        tacanOdg: " array[0]", 
        bodovi: 100
    },
    {
        pitanje: "Kako koristiti 'if' izjavu za provjeru je li broj veći od 10 u JavaScriptu?",
        odgovori: ["if (broj > 10) {}", "  if (broj < 10) {}", " if (broj == 10) {}", "if (broj >= 10) {}"],
        tacanOdg: " if (broj > 10) {}", 
        bodovi: 100
    },
    {
        pitanje: " Kako izvršiti petlju u JavaScriptu dok je određeni uvjet ispunjen?",
        odgovori: ["for petlja", "repeat petlja", "while petlja", "if naredba"],
        tacanOdg: "while petlja", 
        bodovi: 100
    },
    {
        pitanje: " Koja je svrha HTML elementa <div>?",
        odgovori: ["Definiranje naslova", "Grupiranje i organiziranje sadržaja", "Postavljanje slika", " Stvaranje poveznica"],
        tacanOdg: "Grupiranje i organiziranje sadržaja", 
        bodovi: 100
    },
    {
        pitanje: " Koji HTML element koristimo za unos teksta unutar obrazaca (form)?",
        odgovori: ["text", "input", "textbox", "formtext"],
        tacanOdg: "input", 
        bodovi: 100
    },
    {
        pitanje: " Kako postaviti pozadinu elementa u CSS-u?",
        odgovori: ["background-color", "color-background", " bg-color", "background"],
        tacanOdg: "background-color", 
        bodovi: 100
    },
    {
        pitanje: " Kako promijeniti font teksta u CSS-u?",
        odgovori: ["font-family", "text-font", "font-style", "text-family"],
        tacanOdg: "font-family", 
        bodovi: 100
    },
    {
        pitanje: " Kako provjeriti tip podatka varijable u JavaScriptu?",
        odgovori: ["typeof myVar", "type(myVar)", "myVar.type()", "typeOf(myVar)"],
        tacanOdg: "typeof myVar", 
        bodovi: 100
    },
    {
        pitanje: " Kako dodati novi element u kraj niza (array) u JavaScriptu?",
        odgovori: ["array.insert(newElement);", "array.add(newElement);", 
        "array.push(newElement);", "array.append(newElement);"],
        tacanOdg: "array.push(newElement);", 
        bodovi: 100
    },
    {
        pitanje: " Kako provjeriti tip podatka varijable u JavaScriptu? Kako provjeriti tip podatka varijable u JavaScriptu?",
        odgovori: ["break", "stop", "exit", "halt"],
        tacanOdg: "break", 
        bodovi: 100
    },
    {
        pitanje: " Koji atribut se koristi za postavljanje poveznice na drugi dokument ili resurs?",
        odgovori: ["src", "href", "link", "url"],
        tacanOdg: "href", 
        bodovi: 100
    },
    {
        pitanje: " Koji HTML element koristimo za organiziranje navigacijskih poveznica?",
        odgovori: ["nav", "menu", "navi", "navigate"],
        tacanOdg: "nav", 
        bodovi: 100
    },
    {
        pitanje: " Kako postaviti da se HTML element pojavljuje na sredini stranice?",
        odgovori: ["text-align: center;", "align: middle;", "margin: auto;", "position: center;"],
        tacanOdg: "margin: auto;", 
        bodovi: 100
    },
    {
        pitanje: " Kako primijeniti isti stil na više HTML elemenata u CSS-u?",
        odgovori: ["pseudo-klase", "elementi", "identifikatori", "klase"],
        tacanOdg: "klase", 
        bodovi: 100
    },
    {
        pitanje: " Kako postaviti da se pozadinska slika ponavlja samo horizontalno u CSS-u?",
        odgovori: ["background-repeat: horizontal;", "background-repeat: repeat-x;",
         "background-repeat: repeat-y;", "background-repeat: both;"],
        tacanOdg: "background-repeat: repeat-x;", 
        bodovi: 100
    },
    {
        pitanje: " Koja svojstva CSS-a koristimo za postavljanje vanjskog margina oko elementa?",
        odgovori: ["padding", "margin;", "border;", "spacing"],
        tacanOdg: "margin", 
        bodovi: 100
    },
    {
        pitanje: "  Kako koristiti 'switch' izjavu u JavaScriptu?",
        odgovori: ["switch (expression) { case value: ... }", 
        "if (expression) { switch (value) { ... }}", 
        "case value: switch (expression) { ... };", 
        "switch { value: expression; ... }"],
        tacanOdg: "switch (expression) { case value: ... }", 
        bodovi: 100
    },
    {
        pitanje: " Kako dohvatiti trenutni datum u JavaScriptu?",
        odgovori: ["currentDate()", "getToday()", "new Date()", "todayDate()"],
        tacanOdg: "new Date()", 
        bodovi: 100
    },
    {
        pitanje: " Kako ispisati 'Hello, World!' u Pythonu?",
        odgovori: ["print('Hello, World!')", "echo('Hello, World!')",
         "console.log('Hello, World!')", "System.out.println('Hello, World!')"],
        tacanOdg: "print('Hello, World!')", 
        bodovi: 100
    },
    {
        pitanje: "Kako dodati komentar u Pythonu?",
        odgovori: ["/* Ovo je komentar */", "<!-- Ovo je komentar -->", 
        "# Ovo je komentar", "// Ovo je komentar"],
        tacanOdg: "# Ovo je komentar", 
        bodovi: 100
    },
    {
        pitanje: " Kako deklarirati varijablu u Pythonu?",
        odgovori: ["variable x", "x = variable", "x = 5", "declare x = 5"],
        tacanOdg: "x = 5", 
        bodovi: 100
    },
    {
        pitanje: "Kako dohvatiti duljinu niza (list) u Pythonu?",
        odgovori: ["len(myList)", "myList.length()", "count(myList)", "length(myList)"],
        tacanOdg: "len(myList)", 
        bodovi: 100
    },
    {
        pitanje: "Kako koristiti 'if' izjavu za provjeru je li broj veći od 10 u Pythonu?",
        odgovori: ["if (broj > 10):", "if broj > 10:", "if (broj < 10):", "if broj < 10:"],
        tacanOdg: "if broj > 10:", 
        bodovi: 100
    },
    {
        pitanje: "Kako koristiti petlju 'for' za prolazak kroz listu u Pythonu?",
        odgovori: ["loop i in my_list:", "for (i in my_list):", "for i in my_list:", "foreach i in my_list:"],
        tacanOdg: "for i in my_list:", 
        bodovi: 100
    },
    {
        pitanje: "Kako zaokružiti decimalni broj na najbliži cijeli broj u Pythonu?",
        odgovori: ["ceil(x)", "round(x)", "int(x)", "floor(x)"],
        tacanOdg: "round(x)", 
        bodovi: 100
    },
    {
        pitanje: "Kako stvoriti praznu listu u Pythonu?",
        odgovori: ["empty_list = [None]", "empty_list = ()", "empty_list = {}", "empty_list = []"],
        tacanOdg: "empty_list = []", 
        bodovi: 100
    },
    {
        pitanje: "Kako pristupiti prvom elementu u listi?",
        odgovori: ["myList(0)", "myList[0]", "myList.first()", "first(myList)"],
        tacanOdg: "myList[0]", 
        bodovi: 100
    },
    {
        pitanje: " Kako kombinirati dvije liste u jednu u Pythonu?",
        odgovori: ["merged_list = join(list1, list2)", 
        "merged_list = list1 + list2", 
        "merged_list = concatenate(list1, list2)", 
        "merged_list = merge(list1, list2)"],
        tacanOdg: "merged_list = list1 + list2", 
        bodovi: 100
    },  
];
izmijesajNiz(pitanja);
let indexTrenutnogPitanja = 0;
let trenutniRez = 0;

function ucitajPitanje() {
    const trenutnoPitanje = pitanja[indexTrenutnogPitanja];
    document.getElementById("pitanje").innerHTML = trenutnoPitanje.pitanje;

    const answersContainer = document.getElementById("odgovori-container");
    answersContainer.innerHTML = ""; 

    trenutnoPitanje.odgovori.forEach(odgovor => {
        const button = document.createElement("button");
        button.innerHTML = odgovor;
        button.classList.add("odgovor");
        button.onclick = function() {
            provjeriPitanje(this, trenutnoPitanje.bodovi);
        };
        answersContainer.appendChild(button);
    });
}

function provjeriPitanje(selectedButton, bodovi) {
    const izabraniOdgovor = selectedButton.innerHTML;
    const tacanOdg = pitanja[indexTrenutnogPitanja].tacanOdg;

    if (izabraniOdgovor === tacanOdg) {
        trenutniRez += bodovi;
        document.getElementById('current-score').textContent = trenutniRez; 
        //alert("Tačan odgovor! Trenutni broj bodova: " + trenutniRez);
    } else {
        alert("Netačan odgovor.");
        krajIgre(); 
        indexTrenutnogPitanja = pitanja.length; 
    }
    function krajIgre() {
        const restart = confirm("Kviz završen. Osvojeni broj bodova: " + trenutniRez + "\nŽelite li ponovno igrati?");
        
        if (restart) {
            indexTrenutnogPitanja = 0;
            trenutniRez = 0;
            document.getElementById('current-score').textContent = trenutniRez; 
            ucitajPitanje(); 
        } else {
            alert("Hvala na igri!");
        }
    }
//function krajIgre() {
  //      alert("Kviz završen. Osvojeni broj bodova: " + trenutniRez);
    //}

    indexTrenutnogPitanja++;
    if (indexTrenutnogPitanja < pitanja.length) {
        pitanja[indexTrenutnogPitanja].bodovi += 50;
        ucitajPitanje();
    } else {
        krajIgre();
    }
}

ucitajPitanje();
