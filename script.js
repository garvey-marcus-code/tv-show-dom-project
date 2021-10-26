//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  // Create the element on the page i wish to manipulate.

  function showTvShow(show) {
    let card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
    <h3 class="card-info">${episodeList[0].name} - S0${episodeList[0].season}E0${episodeList[0].number}</h3>
    <img src=${episodeList[0].image.medium}>
    ${episodeList[0].summary}
    `;
    rootElem.appendChild(card);
  }
  showTvShow()
  console.log(episodeList)


  // Add classes to each element on the page to shape the card, template css will be created in styelsheet, i only add classes with JS.
  // Within each element i will have in order: A title, season/episode number, A dynamic imag and a summary of the episode.
}

window.onload = setup;
