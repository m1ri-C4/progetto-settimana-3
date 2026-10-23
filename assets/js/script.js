const ricette = [
    {
        id: 1,
        nome: 'Pasta al pomodoro',
        categoria: 'PR',
        tempo: 20,
        procedimento: "Porta a ebollizione l'acqua e cuoci la pasta. In una padella fai rosolare l'aglio con un filo d'olio. Aggiungi la passata di pomodoro e lascia cuocere per 10min. Unisci la pasta al sugo e impiatta!",
        preferito: false
    },
    {
        id: 2,
        nome: "Risotto ai funghi",
        categoria: "PR",
        tempo: 45,
        procedimento: "Pulisci e taglia i funghi a fettine. In una padella fai soffriggere la cipolla tritata con un filo d'olio. Aggiungi i funghi e lasciali cuocere per qualche minuto. Versa il riso e fallo tostare, poi aggiungi gradualmente il brodo vegetale caldo, mescolando spesso. Dopo circa 18 minuti, spegni il fuoco e manteca con burro e parmigiano.",
        preferito: false
    },
    {
        id: 3,
        nome: "Pollo al limone",
        categoria: "SC",
        tempo: 30,
        procedimento: "Taglia il petto di pollo a bocconcini e infarinalo leggermente. Scalda un filo d'olio in una padella e aggiungi il pollo. Fallo rosolare su entrambi i lati, poi versa il succo di un limone e qualche cucchiaio d'acqua. Copri e lascia cuocere a fuoco medio per circa 15 minuti, fino a quando il pollo sarà completamente cotto e si sarà formata una salsa cremosa.",
        preferito: false
    },
    {
        id: 4,
        nome: "Hamburger fatto in casa",
        categoria: "HM",
        tempo: 30,
        procedimento: "Condisci la carne macinata con sale, pepe e le spezie che preferisci. Forma un hamburger e cuocilo in una padella calda, girandolo durante la cottura fino a quando sarà ben cotto anche al centro. Taglia il panino a metà e tostalo leggermente. Aggiungi lattuga, pomodoro, hamburger e la salsa che preferisci. Chiudi il panino e servi caldo.",
        preferito: false
    },
    {
        id: 5,
        nome: "Brownies al cioccolato",
        categoria: "DS",
        tempo: 45,
        procedimento: "Sciogli 150 g di cioccolato fondente con 100 g di burro e lascia intiepidire. In una ciotola mescola 2 uova con 120 g di zucchero. Aggiungi il cioccolato fuso, 80 g di farina e un pizzico di sale. Mescola fino a ottenere un composto omogeneo. Versa in una teglia rivestita di carta forno e cuoci a 180°C per circa 20-25 minuti. Lascia raffreddare prima di tagliare a quadrotti.",
        preferito: false
    },
    {
        id: 6,
        nome: "Pancake alla banana",
        categoria: "DS",
        tempo: 15,
        procedimento: "Schiaccia una banana matura con una forchetta. Aggiungi un uovo, 50 g di farina e mezzo cucchiaino di lievito per dolci. Mescola fino a ottenere una pastella omogenea. Scalda una padella antiaderente e versa piccole quantità di impasto. Cuoci ogni pancake per circa 2 minuti per lato, fino a doratura. Servi con frutta fresca, miele o sciroppo d'acero.",
        preferito: false
    }
];

const listaRicette = document.querySelector('#listaRicette');

ricette.forEach(ricetta => {

    const div = document.createElement('div');
    div.classList.add('singolaRicetta');

    const divBtn = document.createElement('div')
    divBtn.classList.add('btnRicetta');

    const nome = document.createElement('h3');
    nome.textContent = ricetta.nome;

    const par = document.createElement('p');
    par.textContent = `${ricetta.tempo} minuti`;
    par.classList.add('par');

    div.appendChild(divBtn);
    div.appendChild(nome);
    div.appendChild(par);

    listaRicette.appendChild(div);



    const fareBtn = document.createElement('button');
    fareBtn.textContent = 'Da fare';
    fareBtn.classList.add('ricetteBtn');
    divBtn.appendChild(fareBtn);

    const visulizzaBtn = document.createElement('button');
    visulizzaBtn.textContent = 'Visualizza';
    visulizzaBtn.classList.add('ricetteBtn');
    divBtn.appendChild(visulizzaBtn);

    const cuoreBtn = document.createElement('button');
    cuoreBtn.textContent = '♡';
    cuoreBtn.classList.add('ricetteBtn', 'cuoreBtn');
    divBtn.appendChild(cuoreBtn);


    const eliminaBtn = document.createElement('button');
    eliminaBtn.textContent = 'Elimina';
    eliminaBtn.classList.add('ricetteBtn');
    divBtn.appendChild(eliminaBtn);

});