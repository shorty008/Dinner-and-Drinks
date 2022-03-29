var archive = [];
var favSectionEl = document.querySelector("#favSection");

function allStorage () {
    for (var i = 0; i<localStorage.length; i++) {
        archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    };
};

function genFavCard () {
    console.log(localStorage.length)
    for (var i = 0; i < localStorage.length; i++) {

        console.log(i);

        var favCardEl = document.createElement("div");
            favCardEl.setAttribute("id","fav"+[i]);
            favCardEl.setAttribute("class","card col-5 m-2");

            var cardTitleEl = document.createElement("div");
                cardTitleEl.setAttribute("class", "card-header");
                cardTitleEl.textContent = JSON.stringify(archive[i].title);

            var cardBodyEl = document.createElement("div");
                cardBodyEl.setAttribute("class","card-body");

                var cardImgEl = document.createElement("img");
                    cardImgEl.setAttribute("src", archive[i].image);

                var cardTextEl = document.createElement("p");
                    cardTextEl.textContent = JSON.stringify(archive[i].instructions);

                var cardDeleteEl = document.createElement("a");
                    cardDeleteEl.setAttribute("class","btn btn-primary");
                    cardDeleteEl.textContent = "Unfavorite :(";

        favSectionEl.appendChild(favCardEl);

            favCardEl.appendChild(cardBodyEl);
                cardBodyEl.appendChild(cardTitleEl);
                cardBodyEl.appendChild(cardImgEl);
                cardBodyEl.appendChild(cardTextEl);
                cardBodyEl.appendChild(cardDeleteEl);

    };
};
allStorage();
genFavCard();

console.log(archive);
console.log(JSON.stringify(archive[0].id));
console.log(JSON.stringify(archive[1].id));