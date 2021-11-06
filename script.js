//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  createFooter();
}

function makePageForEpisodes(episodeList) {
  const mainDiv = document.getElementById("main");
  const headDiv = document.getElementById("header");
  headDiv.textContent = `Got ${episodeList.length} episode(s)`;

  // Creating an element for all the shows on the page
  function showTvShows() {
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
      mainDiv.appendChild(card);
    }
  }

  showTvShows();

  // console.log(episodeList);
}

function createFooter() {
  const footer = document.getElementById("footer");
  const mainLink = document.createElement("a");
  const textLink = document.createTextNode("https://www.tvmaze.com/");
  mainLink.appendChild(textLink);
  mainLink.title = "TVMaze.com";
  mainLink.href = "https://www.tvmaze.com/";
  footer.appendChild(mainLink);
}

window.onload = setup;
