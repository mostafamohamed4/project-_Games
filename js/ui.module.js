export class ui {
    displayDataGame(data) {
        let temp = ``;
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card p-2 h-100" id="${data[i].id}" >
                <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="hstack justify-content-between">
                    <h3 class="h6  small">${data[i].title}</h3>
                        <span class="badge p-2">Free</span>    
                    </div>
                   <p class="card-text small text-center">${data[i].short_description.split(" ", 8)}</p>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge badge-color">${data[i].genre}</span>
                        <span class="badge badge-color">${data[i].platform}</span>
                    </div>
                </div>
            </div>
        </div>`
        }
        this.display = document.getElementById("display").innerHTML = temp

    }
    displayDetails(data) {
        const carton = `<div class="col-lg-4 col-md-4 pt-3">
        <div class="images">
            <img src="${data.thumbnail}" id="images" class="w-100" alt="">

        </div>
    </div>

    <div class="col-lg-8 col-md-8 pt-3">
        <div class="data">
            <h3>Title: ${data.title}</h3>
            <p>Category: <span class="badge text-bg-info">${data.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info">${data.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
            <p class="small">${data.description}
            </p>
            <a class="btn btn-outline-primary" href="${data.game_url}">Show Game</a>
        </div>
    </div>`
        document.getElementById("Details").innerHTML = carton;
    }
}