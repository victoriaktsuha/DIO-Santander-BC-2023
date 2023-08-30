class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    //// *3 steps para criar o componente*:

    //// 1. base do componente =======

    //// => cria elemento HTML "<h1></h1>" com o conteúdo em textContent
    const componentRoot = document.createElement("h1");
    // componentRoot.textContent = "Componente Título Dinâmico";

    //// => aqui o conteúdo será o quer for atribuido a propriedade (prop) "titulo", adiciona dentro do selector definido
    componentRoot.textContent = this.getAttribute("titulo");

    //// 2. estilizar componente ========

    //// => cria elemento HTML "<style></style>" com o conteúdo de estilização
    const style = document.createElement("style");
    style.textContent = `
        h1{
            color: red;
        }
    `;
    //// => esses estilos são de escopo, ou seja, existe apenas nesse componente, sem afetar outras tags identicas do HTML

    //// 3. anexar os elementos a shadow DOM ======

    //// => esses elementos serão utilizados através do selector abaixo 'titulo-dinamico'
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}
customElements.define("titulo-dinamico", TituloDinamico);
