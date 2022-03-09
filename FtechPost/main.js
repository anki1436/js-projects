document.getElementById("fetchPost").addEventListener("click", () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let html = "";
        data.forEach((post) => {
          const titleChar = post.title;
          const title = titleChar.charAt(0).toUpperCase() + titleChar.slice(1);
          const paragraph = post.body;
  
          html += ` <div class="card">
                          <div class="card-body">
                            <h2 class="card-title">${title}</h2>
                            <p class="card-text">${paragraph}</p>
                          </div>
                      </div>    <hr>`;
          document.getElementById("cards").innerHTML = html;
        });
      })
      .catch((error) => console.error(error));
  });
  