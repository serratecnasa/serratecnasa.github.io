var url = "https://apiwix.vercel.app/api/artigos";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText)
        var showresult = document.getElementById('showResult')
        var arrayresult = ''

        for (let i = 0; i < response.data.length; i++) {
            const artigo = response.data[i];

            console.log(artigo);

            arrayresult = arrayresult + `<div class="col-12 mt-4 mb-4">
        <div class="card" onclick="openartigo('https://www.serratecnasa.com/post/${artigo.slug}')">
            <img src="${artigo.coverMedia.image.url}" class="card-img-top"
                alt="Logo educa sustentável">
            <div class="card-body">
                <h2 class="card-title">${artigo.title}</h2>
                <p class="card-text">${artigo.excerpt}</p>
            </div>
        </div>
    </div>`

        }

        showresult.innerHTML = arrayresult

    }
};

xhr.send();







const openartigo = (url) => {



}