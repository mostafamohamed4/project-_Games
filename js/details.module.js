import { ui } from "./ui.module.js";

export class details {
    constructor(idGame) {
        this.ui = new ui();
        this.btn = document.getElementById("btn")
        this.btn.addEventListener('click', () => {
            document.querySelector(".home").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");

        })
        this.getDetails(idGame)
    }

    async getDetails(id) {
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

        let resultDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        resultDetails = await resultDetails.json()
        console.log(resultDetails);
        loading.classList.add("d-none");
        this.ui.displayDetails(resultDetails)

    }
}
