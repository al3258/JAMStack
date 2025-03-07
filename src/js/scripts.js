const apiKey = `AbGJb6XIGRNvoQRnYZdFOfBVtIqAj641`;
const section = `technology`
const endPoint = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;

function getStories() {
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

function showData(stories) {
    let content = stories
    .map(
      (story) =>
      `
      <div class="item">
      <picture>
        <img src="${story.multimedia[2].url}" alt="" />
        <caption>${story.multimedia[2].caption}</caption>
      </picture>
      <h3><a href="${story.url}">${story.title}</a></h3>
      <h3>${story.title}</h3>
      <p>${story.abstract}</p>
      </div>
      `
    )
      .join("");
  
    document.querySelector(".stories").innerHTML = content;
  }

if(document.querySelector(".p-home")){
  getStories();
}
 