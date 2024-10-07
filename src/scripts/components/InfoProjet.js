document.addEventListener("DOMContentLoaded", function(event) {

    
    if (window.location.pathname.includes("projet.html")) {

        console.log("Ça fonctionne!!!");

        var informations = [
            {
                id: "timconf",
                title: "TimConf",
                slogan: "Projet Scolaire",
                image: "assets/images/timconf.svg",
                description: "TimConf est un site web réalisé dans le cadre du cours de Conception Web III. Le site, fictif, devait promouvoir des conférences en lien avec les métiers du multimédia. Nous devions également nous mettre comme étant une personne offrant une conférence. Lors de ce projet, nous devions incorporer la librairie Swiper et utiliser le display:grid nouvellement appris en classe.",    
                gallery: [""]
            },
            {
                id: "webjam",
                title: "WEBJAM ",
                slogan: "Projet Scolaire",
                image: "assets/images/timconf.svg",
                description: "WEBJAM    est un site web réalisé dans le cadre du cours de Conception Web III. Le site, fictif, devait promouvoir des conférences en lien avec les métiers du multimédia. Nous devions également nous mettre comme étant une personne offrant une conférence. Lors de ce projet, nous devions incorporer la librairie Swiper et utiliser le display:grid nouvellement appris en classe.",    
                gallery: [""]
            }
        ];

        var type = new URLSearchParams(window.location.search).get("type");
        var infoPage = informations.find(x => x.id === type) || informations[0];

        var title = document.querySelector(".main-title");
        title.innerHTML = infoPage.title;

        var slogan = document.querySelector(".sub-title");
        slogan.innerHTML = infoPage.slogan;

        var description = document.querySelector(".sub-description p");
        description.innerHTML = infoPage.description;

        var image = document.querySelector(".sub-image img");
        image.src = infoPage.image;
    }
});
