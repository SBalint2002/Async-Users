document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('all').addEventListener('click', async () => {
        //Bekérés
        let response = await fetch('./users.json');
        let eredmeny = await response.json();

        //Sorba rendezés
        let sorrend = eredmeny.users.sort(function(a, b){
            let elso = a.lastName.toUpperCase();
            let masodik = b.lastName.toUpperCase();

            if(elso < masodik){
                return -1;
            }else if( elso > masodik){
                return 1;
            }else{
                return 0;
            }
        });

        //Eltűntetés
        document.getElementById('haketto').textContent = "";
        let adatok = document.getElementById('adatok');
        adatok.textContent = '';
        let tabla = document.getElementById('table');
        tabla.innerHTML = "";
        document.getElementById('haketto').textContent = "";

        //Kiiratás felsorolásként
        for (let p of sorrend){
            let li = document.createElement('li');
            li.innerHTML = p.lastName.toUpperCase() + "&emsp;" + p.firstName;
            adatok.appendChild(li);
        }
    });

    document.getElementById('contact').addEventListener('click', async () => {
        //Bekérés
        let response = await fetch('./users.json');
        let eredmeny = await response.json();

        //Sorba rendezés
        let sorrend = eredmeny.users.sort(function(a, b){
            let elso = a.username.toUpperCase();
            let masodik = b.username.toUpperCase();

            if(elso < masodik){
                return -1;
            }else if( elso > masodik){
                return 1;
            }else{
                return 0;
            }
        });

        //Eltűntetés
        document.getElementById('haketto').textContent = "";
        let adatok = document.getElementById('adatok');
        adatok.textContent = '';
        let tabla = document.getElementById('table');
        tabla.innerHTML = "";
        document.getElementById('haketto').textContent = "";


        //Kiírás táblázat szerűen
        for (let p of sorrend){
            let sor = document.createElement('tr');

            let nev = document.createElement('td');
            let email = document.createElement('td');
            let phone = document.createElement('td');

            nev.textContent = p.username;
            email.textContent = p.email;
            phone.textContent = p.phone;

            sor.appendChild(nev);
            sor.appendChild(email);
            sor.appendChild(phone);
            tabla.appendChild(sor);
        }
    })

    document.getElementById('weight').addEventListener('click', async () => {
        //Bekérés
        let response = await fetch('./users.json');
        let eredmeny = await response.json();

        //Összegzés
        let magassag = document.getElementById('magassag').value
        let kivalogatott = eredmeny.users.filter(e => e.height >= magassag);

        let osszeg = 0;
        for(let a of kivalogatott){
            osszeg += a.weight;
        }
        console.log(osszeg);


        //Eltűntetés
        let adatok = document.getElementById('adatok');
        adatok.textContent = '';
        let tabla = document.getElementById('table');
        tabla.innerHTML = "";
        document.getElementById('haketto').textContent = "";

        //Kiiratás
        if(!magassag){
            magassag = 0;
        }
        document.getElementById('haketto').textContent = magassag + " cm-nél magasabb emberek össz súlya: " + osszeg + " kg";

    })

    document.getElementById('browneye').addEventListener('click', async () => {
        //Bekérés
        let response = await fetch('./users.json');
        let eredmeny = await response.json();

        //Eltűntetés
        let adatok = document.getElementById('adatok');
        adatok.textContent = '';
        let tabla = document.getElementById('table');
        tabla.innerHTML = "";
        document.getElementById('haketto').textContent = "";

        let tomb = eredmeny.users.filter(e => e.eyeColor == 'Brown');
        document.getElementById('haketto').textContent = "Barna szeműek száma: " + tomb.length;
    })

})