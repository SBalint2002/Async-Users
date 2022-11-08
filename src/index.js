document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('all').addEventListener('click', async () => {
        let response = await fetch('./users.json');
        let eredmeny = await response.json();

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

        let adatok = document.getElementById('adatok');
        adatok.textContent = '';
        let tabla = document.getElementById('table');
        tabla.innerHTML = "";

        for (let p of sorrend){
            let li = document.createElement('li');
            li.innerHTML = p.lastName.toUpperCase() + "&emsp;" + p.firstName;
            adatok.appendChild(li);
        }
    });

    document.getElementById('contact').addEventListener('click', async () => {
        let response = await fetch('./users.json');
        let eredmeny = await response.json();

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

        let adatok = document.getElementById('adatok');
        adatok.textContent = '';

        let tabla = document.getElementById('table');
        tabla.innerHTML = "";

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
})