//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  /*
  Creating an element for 1 show on the page
  function showTvShow(show) {
    // Create the element on the page i wish to manipulate.
    let card = document.createElement("article");
    card.className = "card";
    // Add classes to each element on the page to shape the card, template css will be created in styelsheet, i only add classes with JS.
    // Within each element i will have in order: A title, season/episode number, A dynamic imag and a summary of the episode.
    card.innerHTML = `
    <h3 class="card-info">${episodeList[0].name} - S0${episodeList[0].season}E0${episodeList[0].number}</h3>
    <img src=${episodeList[0].image.medium}>
    ${episodeList[0].summary}
    `;
    rootElem.appendChild(card);
  }
  showTvShow();
  */
// Creating an element for all the shows on the page
  function showTvShows(show) {
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
      rootElem.appendChild(card);
    }
  }

  showTvShows();

  // console.log(episodeList);
}

window.onload = setup;
