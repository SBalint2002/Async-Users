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

        for (let p of sorrend){
            let li = document.createElement('li');
            li.innerHTML = p.lastName.toUpperCase() + " " + p.firstName;
            adatok.appendChild(li);
        }
    });
})