
//grab the news container
let newsAccordian = document.getElementById("newsAccordian");

//create a get request
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=d19cc98e76e94027b5ca17d053b82767", "true")
xhr.onload = function () {
    if (xhr.status == 200) {
        let json = JSON.parse(xhr.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card pb-2">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-2 " > 
                                 <button  class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Click to read more </a>  </div>
                            </div>
                        </div>
                        `
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
}
xhr.send();