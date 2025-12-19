function fetchProfs(url) {
    // Récupérer le JSON à partir de l'URL fournie
    fetch(url)
    //then est une méthode qui retourne une promesse et prend en paramètre une
    //fonction callback qui sera exécutée une fois la promesse résolue
    .then(response => {
    // Vérifier si la réponse est correcte
    if (!response.ok) {
    // Si la réponse n'est pas correcte, lancer une erreur
    throw new Error('Network response was not ok');
    }
    // Si la réponse est correcte, retourner le JSON
    return response.json();
    })
    //then ici permettra de récupérer le JSON retourné par la promesse
    .then(data => {
    // Vérifier si le JSON est vide ou mal formé
    if (Object.keys(data).length === 0 && data.constructor === Object) {
    // Si le JSON est vide ou mal formé, lancer une erreur
    throw new Error('Empty JSON or malformed JSON');
    }
    //On affiche le JSON dans la console. Il s'agit d'un objet contenant les
    // intentions du chatbot
    console.log(data);
    afficherProf(data.profs);
    // Passer les intentions à la fonction sendMessage qui sera définie plus tard
    })
    //catch est une méthode qui retourne une promesse et prend en paramètre une
    //fonction callback qui sera exécutée en cas d’erreur
    .catch(error => {
    // En cas d’erreur, afficher un message d’erreur dans la console
    console.error("There was a problem with the fetch operation:", error);
    }) ;
}

function afficherProf(donnees){
    var conteneur = document.querySelector("#liste-profs");

    var templateProf = document.querySelector("#infos-prof");
    for(const prof of donnees){
        var clone = document.importNode(templateProf.content, true);
        let nom = clone.querySelector("#nom-prof");
        let image = clone.querySelector("#photo-prof");
        let classes = clone.querySelector("#classes");
        let diplomes = clone.querySelector("#diplomes");
        let contact = clone.querySelector("#contact");

        nom.textContent = prof.nom;
        if (image && prof.image) {
            image.src = "../img/profs/" + prof.image;
            image.alt = prof.nom || "Photo du prof";
        }
        contact.textContent = prof.mail;
        conteneur.appendChild(clone);
    }
}


fetchProfs("../json/profs.json");