const ricette = [
    {
        id: 1,
        nome: 'Pasta al pomodoro',
        categoria: 'PR',
        tempo: 20,
        procedimento: `1. Porta a ebollizione l'acqua e cuoci la pasta. 
        2. In una padella fai rosolare l'aglio con un filo d'olio. 
        3. Aggiungi la passata di pomodoro e lascia cuocere per 10min. 
        4. Unisci la pasta al sugo.`,
        preferito: false
    },
    {
        id: 2,
        nome: "Risotto ai funghi",
        categoria: "PR",
        tempo: 45,
        procedimento: `1. Pulisci e taglia i funghi a fettine. 
        2. In una padella fai soffriggere la cipolla tritata con un filo d'olio. 
        3. Aggiungi i funghi e lasciali cuocere per qualche minuto. 
        4. Versa il riso e fallo tostare, poi aggiungi gradualmente il brodo vegetale caldo, mescolando spesso. 
        5. Dopo circa 18 minuti, spegni il fuoco e manteca con burro e parmigiano.`,
        preferito: false
    },
    {
        id: 3,
        nome: "Pollo al limone",
        categoria: "SC",
        tempo: 30,
        procedimento: `1. Taglia il petto di pollo a bocconcini e infarinalo leggermente. 2. Scalda un filo d'olio in una padella e aggiungi il pollo. 
        3. Fallo rosolare su entrambi i lati, poi versa il succo di un limone e qualche cucchiaio d'acqua. 
        4. Copri e lascia cuocere a fuoco medio per circa 15 minuti, fino a quando il pollo sarà completamente cotto e si sarà formata una salsa cremosa.`,
        preferito: false
    },
    {
        id: 4,
        nome: "Hamburger fatto in casa",
        categoria: "HM",
        tempo: 30,
        procedimento: `1. Condisci la carne macinata con sale, pepe e le spezie che preferisci. 
        2. Forma un hamburger e cuocilo in una padella calda, girandolo durante la cottura fino a quando sarà ben cotto anche al centro. 
        3. Taglia il panino a metà e tostalo leggermente. 4. Aggiungi lattuga, pomodoro, hamburger e la salsa che preferisci. Chiudi il panino e servi caldo.`,
        preferito: false
    },
    {
        id: 5,
        nome: "Brownies al cioccolato",
        categoria: "DS",
        tempo: 45,
        procedimento: `1. Sciogli 150 g di cioccolato fondente con 100 g di burro e lascia intiepidire. 2.In una ciotola mescola 2 uova con 120 g di zucchero. 
        3. Aggiungi il cioccolato fuso, 80 g di farina e un pizzico di sale. 4. Mescola fino a ottenere un composto omogeneo. 
        5. Versa in una teglia rivestita di carta forno e cuoci a 180°C per circa 20-25 minuti. 6. Lascia raffreddare prima di tagliare a quadrotti.`,
        preferito: false
    },
    {
        id: 6,
        nome: "Pancake alla banana",
        categoria: "DS",
        tempo: 15,
        procedimento: ` 1. Schiaccia una banana matura con una forchetta. 2. Aggiungi un uovo, 50 g di farina e mezzo cucchiaino di lievito per dolci. 
        3. Mescola fino a ottenere una pastella omogenea. 4. Scalda una padella antiaderente e versa piccole quantità di impasto. 
        5. Cuoci ogni pancake per circa 2 minuti per lato, fino a doratura. 6. Servi con frutta fresca, miele o sciroppo d'acero.`,
        preferito: false
    }
];

const listaRicette = document.querySelector('#listaRicette');

function mostraRicette() {
    listaRicette.textContent = '';
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
        fareBtn.classList.add('ricetteBtn', 'statoBtn');
        divBtn.appendChild(fareBtn);

        fareBtn.addEventListener('click', (e) => {
            if (fareBtn.textContent === 'Da fare') {
                fareBtn.classList.add('fareBtn');
                fareBtn.textContent = 'Fatto';
            } else {
                fareBtn.classList.remove('fareBtn');
                fareBtn.textContent = 'Da fare';
            }
            aggiornaContatore();
        });

        const visulizzaBtn = document.createElement('button');
        visulizzaBtn.textContent = 'Visualizza';
        visulizzaBtn.classList.add('ricetteBtn');
        divBtn.appendChild(visulizzaBtn);

        const cardProcedimento = document.createElement('div');
        visulizzaBtn.addEventListener('click', (e) => {
            cardProcedimento.classList.toggle('visible');
        });

        cardProcedimento.textContent = ricetta.procedimento;
        cardProcedimento.classList.add('procedimento');
        div.appendChild(cardProcedimento);


        const cuoreBtn = document.createElement('button');
        cuoreBtn.textContent = '♡';
        cuoreBtn.classList.add('ricetteBtn', 'cuoreBtn');
        divBtn.appendChild(cuoreBtn);
        cuoreBtn.addEventListener('click', (e) => {
            if (cuoreBtn.textContent === '♡') {
                cuoreBtn.textContent = '❤';
                cuoreBtn.classList.add('preferito');
                setTimeout(() => {
                    alert('Hai messo la ricetta nei preferiti!');
                }, 50);
            } else {
                cuoreBtn.textContent = '♡';
                cuoreBtn.classList.remove('preferito');
            }
            aggiornaContatore();
        });


        const eliminaBtn = document.createElement('button');
        eliminaBtn.setAttribute('type', 'button');
        eliminaBtn.textContent = 'Elimina';
        eliminaBtn.classList.add('ricetteBtn');
        divBtn.appendChild(eliminaBtn);

        eliminaBtn.addEventListener('click', (e) => {
            if (div) {
                div.remove();
                setTimeout(() => {
                    alert('Hai eliminato la ricetta!');
                }, 50);
                aggiornaContatore();
            }
        });
    });
    aggiornaContatore();
}

const contatore = document.querySelector('#contatore');
const progresso = document.querySelector('#progresso');
const statistiche = document.querySelector('#statistiche');

function aggiornaContatore() {
    const tutteRicette = document.querySelectorAll('.singolaRicetta');
    let preferiti = 0;
    let daFare = 0;
    let fatte = 0;
    let totale = tutteRicette.length;

    statistiche.textContent = '';
    tutteRicette.forEach((ricetta) => {
        const pulsante = ricetta.querySelector('.statoBtn');
        const cuore = ricetta.querySelector('.cuoreBtn');

        if (cuore.classList.contains('preferito')) {
            preferiti++;
        };

        if (pulsante.textContent === 'Da fare') {
            daFare++;
        } else {
            fatte++;
        };
    });

    const numeroTot = document.createElement('span');
    numeroTot.textContent = totale;
    numeroTot.classList.add('numero');

    const testoTot = document.createElement('span');
    testoTot.textContent = 'Ricette';
    testoTot.classList.add('testo');

    statistiche.appendChild(testoTot);
    statistiche.appendChild(numeroTot);

    const daFareTot = document.createElement('span');
    daFareTot.textContent = daFare;
    daFareTot.classList.add('numero');

    const testoDafareTot = document.createElement('span');
    testoDafareTot.textContent = 'Da fare';
    testoDafareTot.classList.add('testo');

    statistiche.appendChild(testoDafareTot);
    statistiche.appendChild(daFareTot);

    const fatti = document.createElement('span');
    fatti.textContent = fatte;
    fatti.classList.add('numero');

    const testoFatte = document.createElement('span');
    testoFatte.textContent = 'Fatte';
    testoFatte.classList.add('testo');

    statistiche.appendChild(testoFatte);
    statistiche.appendChild(fatti);

    const preferite = document.createElement('span');
    preferite.textContent = preferiti;
    preferite.classList.add('numero');

    const testoPreferite = document.createElement('span');
    testoPreferite.textContent = 'Preferite';
    testoPreferite.classList.add('testo');

    statistiche.appendChild(testoPreferite);
    statistiche.appendChild(preferite);

    progresso.style.width = `${(fatte / totale) * 100}%`
};
mostraRicette();

const aggiungiBtn = document.querySelector('#aggiungiBtn');
const nomeInput = document.querySelector('#nome');
const categoriaInput = document.querySelector('#categoria');
const tempoInput = document.querySelector('#tempo_cottura');
const procedimentoInput = document.querySelector('#procedimento');
const messaggioErrore = document.querySelector('#messaggioErrore');


aggiungiBtn.addEventListener('click', (e) => {
    e.preventDefault();
    messaggioErrore.textContent = '';

    const nome = nomeInput.value;
    const categoria = categoriaInput.value;
    const tempo = tempoInput.value;
    const procedimento = procedimentoInput.value;

    if (nome.trim() === '') {
        messaggioErrore.textContent = ' *Inserisci il nome della ricetta!';
        return;
    }

    if (categoria.trim() === '') {
        messaggioErrore.textContent = ' *Seleziona la categoria!';
        return;
    }

    if (tempo.trim() === '') {
        messaggioErrore.textContent = ' *Seleziona il tempo di cottura!';
        return;
    }

    if (procedimento.trim() === '') {
        messaggioErrore.textContent = ' *Inserisci il procedimento!';
        return;
    }

    const nuovoId = Date.now();
    const nuovaRicetta = {
        id: nuovoId,
        nome: nome,
        categoria: categoria,
        tempo: tempo,
        procedimento: procedimento,
        preferito: false
    };

    ricette.push(nuovaRicetta);
    mostraRicette();
});

const cercaInput = document.querySelector('#cerca');


cercaInput.addEventListener('input', (e) => {
    const testoCercato = cercaInput.value.toLowerCase();
    const tutteRicette = document.querySelectorAll('.singolaRicetta');

    tutteRicette.forEach((ricetta) => {
        const nomeRicetta = ricetta.querySelector('h3').textContent.toLocaleLowerCase();
        if (nomeRicetta.includes(testoCercato)) {
            ricetta.style.display = '';
        } else {
            ricetta.style.display = 'none';
        }
    });
});

const filtraPer = document.querySelector('#filtraPer');

filtraPer.addEventListener('change', () => {
    const filtroScelto = filtraPer.value;
    const tutteRicette = document.querySelectorAll('.singolaRicetta');

    tutteRicette.forEach((ricetta) => {
        const pulsante = ricetta.querySelector('.statoBtn');

        const statoRicetta = pulsante.textContent;
        const cuore = ricetta.querySelector('.cuoreBtn')

        if (filtroScelto === 'FT') {

            if (statoRicetta === 'Fatto') {
                ricetta.style.display = '';
            } else {
                ricetta.style.display = 'none';
            }

        } else if (filtroScelto === 'TT') {
            ricetta.style.display = '';

        } else if (filtroScelto == 'PR') {

            if (cuore.classList.contains('preferito')) {
                ricetta.style.display = '';
            } else {
                ricetta.style.display = 'none';
            }
        }
    });

});

const darkMode = document.querySelector('#darkMode');
const lightMode = document.querySelector('#lightMode');

darkMode.addEventListener('click', (e) => {
    document.body.classList.add('temaScuro');
    darkMode.style.display = 'none';
    lightMode.style.display = 'inline-block';
});

lightMode.addEventListener('click', (e) => {
    document.body.classList.remove('temaScuro');
    lightMode.style.display = 'none';
    darkMode.style.display = 'inline-block';
});
