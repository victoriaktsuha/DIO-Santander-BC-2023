//// => Esse .js funciona como componente, pois componente nada mais é do que um javascript retornando HTML, CSS e + JavaScript

//// => CardNews herda todos os comportamentos de um elemento HTML
class CardNews extends HTMLElement {
  //// constructor será a primeira cosa a ser executada de uma class
  constructor() {
    //// => super() invoca o método constructor de quem você está herdando, nesse caso, o HTMLElement
    super();

    const shadow = this.attachShadow({ mode: "open" });
    //// => essa class (this = CardNews) irá anexar/criar uma shadow; a shadow tem dos modos: o closed(modificações só podem ocorrer interiormente) e o open(possibilita manipular os elementos de forma dinamica pelo exterior do JS)
    //// => cria tag <h1></h1>
    // shadow.innerHTML = "<h1>Componente CardNews</h1>";

    //// => esses elementos serão utilizados através do selector abaixo 'card-news' como props
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  //// => metodo build - construir estrutura
  build() {
    //// => componentRoot deve ser reservada ao elemento mais alto na hierarqui no HTML, a tag que envolve (quase) tudo
    const componentRoot = document.createElement("div");
    //// => atribui uma class (assim como prop) com o valor "card"
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const autor = document.createElement("span");
    //// => define a prop "autor" a ser passada para o selector 'card-news'
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    //// => no caso de não haver nenhuma atribuição a prop no HTML, o conteudo após || será o default apresentado
    linkTitle.href = this.getAttribute("link-url") || "https://www.google.com";

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    const newsImage = document.createElement("img");
    //// => é possivel acessar os atributos próprios do ele mento que esta sendo criado como no caso 'src', 'alt', etc ..
    // newsImage.src =
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Star_Wars_-_Darth_Vader.jpg/640px-Star_Wars_-_Darth_Vader.jpg";
    newsImage.src = this.getAttribute("photo") || "assets/img-default.png";
    newsImage.alt = "Foto da Noticia";

    //// => estamos definindo que 'cardLeft' e 'cardRight' são filhos do componentRoot, assim como estava no index.html
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    cardRight.appendChild(newsImage);

    //// => é necessário retornar o componenteRoot para que ele seja acessivel ao shadow.appendChild(this.build());
    return componentRoot;
  }
  //// => metodo style - estiliza estrutura
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
        width: 80%;
        /* border: 1px solid gray; */
        display: flex;
        flex-direction: row;
        -webkit-box-shadow: 7px 7px 17px -7px rgba(0, 0, 0, 0.41);
        -moz-box-shadow: 7px 7px 17px -7px rgba(0, 0, 0, 0.41);
        box-shadow: 7px 7px 17px -7px rgba(0, 0, 0, 0.41);
        justify-content: space-between;
      }
      .card__left,
      .card__right {
        /* border: 1px solid blue; */
      }
      .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 10px;
      }
      
      .card__left > h1 {
        margin-top: 15px;
        font-size: 20px;
      }
      .card__left > p {
        color: gray;
      }
      .card__left > span {
        font-weight: 700;
      }
      .card__left > a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: 700;
      }
      .card__right > img {
        max-width: 100%;
      }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
//// => cria um elemento customizado que será chamado pelo selector 'card-news' e o método constructor dele é 'CardNews'; customElements precisa ter um hifen no nome
