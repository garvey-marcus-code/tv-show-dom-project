//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  let topDiv = document.createElement("div");
  let bottomDiv = document.createElement("div");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  topDiv.id = "top";
  bottomDiv.id = "bottom";

  // Adding a live search bar input field
  let inputField = document.createElement("input");
  inputField.id = "searchBar";
  inputField.name = "searchBar";
  inputField.type = "search";
  inputField.placeholder = "Seach for a tv show";
  rootElem.appendChild(topDiv);
  topDiv.appendChild(inputField)
  inputField.insertAdjacentHTML(
    "afterend",
    "This will be the shows/total shows after searching in the input"
  );
  // Adding functionality to the input field search bar
  inputField.addEventListener("keyup", (e) => {
    let searchString = e.target.value.toLowerCase();
  });

  let filteredShows = showTvShows().filter((show) => {
    return (
      show.name.toLowerCase().includes(searchString) ||
      show.summary.toLowerCase().includes(searchString)
    );
  });

  // conditional statement to make search field equal to page information

  // Creating an element for all the shows on the page
  function showTvShows(tvShow) {
    for (let index = 0; index < episodeList.length; index++) {
      let card = document.createElement("article");
      card.className = "card";
      // Add classes to each element on the page to shape the card, template css will be created in styelsheet, i only add classes with JS.
      // Within each element i will have in order: A title, season/episode number, A dynamic imag and a summary of the episode.
      card.innerHTML = `
        <h3 class="card-info">${episodeList[index].name} - S0${episodeList[index].season}E0${episodeList[index].number}</h3>
        <img src=${episodeList[index].image.medium}>
        ${episodeList[index].summary}
        `;
      rootElem.appendChild(bottomDiv);
      bottomDiv.appendChild(card)
    }
  }

  showTvShows();

  // console.log(episodeList);
}

window.onload = setup;
