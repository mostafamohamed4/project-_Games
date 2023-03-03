import { ui } from "./ui.module.js";
import { details } from "./details.module.js";
export class games {
    constructor() {
        this.getgames("mmorpg")
        this.links = document.querySelectorAll("ul li a ");
        for (var i = 0; i < this.links.length; i++) {
            this.links[i].addEventListener('click', (e) => {
                this.getgames(e.target.dataset.category)
                // start active
                document.querySelector(".active").classList.remove("active");
                e.target.classList.add("active");
                // end active
            })
        }
        this.ui = new ui();

    }

    async getgames(category) {
        // start loading
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        // end loading
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f2b536615emsh5645e15d92ae651p17c4f5jsn5a9235808f44',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let result = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        result = await result.json()
        console.log(result);
        this.ui.displayDataGame(result)
        // loading
        loading.classList.add("d-none");
        this.startdetiles(result);

    }

    startdetiles() {
        document.querySelectorAll(".card").forEach(e => {
            e.addEventListener('click', () => {
                const id = e.id
                console.log(id);
                this.showDetails(id);
            })
        });
    }
    showDetails(idGame) {
        this.details = new details(idGame);
        document.querySelector(".home").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }


}




