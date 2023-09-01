# 🅰 Angular

- 👶 Since **2010** - supported by _Google_
- ⚙ Framework based on **_JS_**
- 🧩 **_Typescript_** as main language
- 📄 SPAs - **Single Page Application** => Angular focus
- 🏢 **Components** are the architecture base
- 🧹 **Organized** structure and well defined
- 🛠 Tooling system very rich: **CLI, HTTP, Router** ...

---

### AngularJS ≠ Angular

- **AngularJS** : 2010, Google, JavaScript
- **Angular**: 2016-2022 (stable release), Google, MIT License, Typescript

---

### ⚙ Angular and other frameworks

All of them are focus on SPAs:

- Angular
- React
- Aurelia
- Vue

---

### React 🆚 Angular

|                      |                                            React                                             |                     Angular                     |
| -------------------- | :------------------------------------------------------------------------------------------: | :---------------------------------------------: |
| **Mercado**          |                                              ❗                                              |                 ✔ - mais vagas                  |
| **Aprendizado**      |                                 ✔ - aprendizado mais rápido                                  |                       ❗                        |
| **Estratégia**       |                        Baixo nível de setup:<br>estrutura mais livre                         | Alto nível de setup:<br>estrutura mais definida |
| **Ferramentas**      | Utiliza mais biblioteca de terceiros (i.e. Redux):<br>problema de conflito entre bibliotecas |          Traz as ferraments já builtin          |
| **Typescript**       |                            Opcional (mas o mercado pede mais TS)                             |                   Obrigatório                   |
| **Material**         |                        Comunidade, features e colaboração mais ativa                         |                       ❗                        |
| **Mobile**           |                                         React Native                                         |                       ❗                        |
| **Powered by**       |                                           Facebook                                           |                     Google                      |
| **Definição**        |                                          Biblioteca                                          |                    Framework                    |
| **Templating**       |                                           JS + JSX                                           |                    HTML + TS                    |
| **Binding**          |                                           ↔ 2-Way                                            |                 ➡ Unidirecional                 |
| **DOM**              |                                         Virtual DOM                                          |                   Regular DOM                   |
| **App lógica/state** |                                  Flux/Redux ou context Api                                   |                    Services                     |

---

### 4 Camadas de uma Web APP

1.  **Componentes**<br>
    Elemento visual customizável e reutilizável, trabalhados de forma individual e combinados para compor uma página. São montados através de injeção de dependências - é um padrão de desenvolvimento utilizada em diversos cenários diferentes, é uma estratégia de desenvolvimento muito utilizada; E é feita quando algo depende de outra coisa para seu funcionamento, mas ele não produz diretamente esse conteúdo, tendo a dependência de algum agente externo.<br>
    Esses componentes são injetados no `<app-root>`<br><br>
2.  **Gerenciamento de estado**<br>
    _States_ - responsável por garantir que as informações dos componentes não estão dessincronizadas e facilitar a comunicação de um componente com outro.

    Exemplo: _atualizar carrinho de compras ao clicar no botão de comprar de um produto_

    **Ferramentas para gerenciamento de estado:**

    - _Flux_ - React
    - _Redux_ - React
    - _Context API_ - React
    - _Recoil_
    - _Storeon_
    - _VUEX_ - Vue
    - _NGRX_ - Angular
    - _NGXS_ - Angular<br><br>

3.  **Roteamento**<br>
    _Routes_ ou _Routing & Navigation_ - Responsável pela forma de navegar fazendo a troca de URL sem recarregar a página, mudando somente os componentes que são mostrados.

    **Bibliotecas para roteamento:**

    - _History API_ - nativo do browser
    - _React-Router_ - React
    - _Vue-Router_ - Vue
    - _Angular RoutingModule_ - Angular<br><br>

4.  **Renderização**<br>
    _Render_ - Responsável por decidir a melhor maneira de acessar e entregar para o browser o componente pronto para que ele seja desenhado na janela sem complicações.
    <br><br>
    **3 Tipos de Estratégia de Renderização:**

    - 100% Server - o servidor entrega o documento em HTML que já está preparado no back-end
    - Parte server e parte client - o servidor entrega o o documento em HTML que já está preparado no back-end, mas há uma parte que será compilada dinamicamente pela parte client
    - 100% Client - não haverá processo por parte do servidor. Tudo será montado dinamicamente pela parte client. _O Angular e o React se encaixam nessa estratégia._

    Um desvantagem da estratégia 100% client é a falta do SEO, já que por ser renderizado apenas quando é solicitado, não tem como rankear esse conteúdo. Nesse caso, a estratégia server/client seria ideal.
    No caso de performance, rapidez na resposta ao usuário, a estratégia 100% server seria ideal.

## Data Binding

### Parent to Child Component

**Parent Component (App)**<br>
parent.ts<br>
`export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buttonLabel: string = 'String label do parent component';
}` <br>

1. _Cria a propriedade **'buttonLabel'** do tipo **'string'** com o valor **'String label do parent component'**_

parent.html<br>
`<my-button [label]="buttonLabel"></my-button>`<br>
**ou**<br>
`<my-button label="{{ buttonLabel }}"></my-button>`<br>
**ou**<br>
`<my-button label="prop= + string com aspas duplas"></my-button>`<br>
**ou**<br>
`<my-button [label]="'[prop]= + String com aspas simples'"></my-button>`

2. _Adiciona uma **prop** (nome independente da propriedade) e atribui o nome da variavel/propriedade ou o valor da string direto_

**Child Component (Button)**<br>
child.ts<br>
`export class ButtonComponent {
  @Input() label: string = '';
}`

3. _Importa a **prop** que foi passada ao selector de **`<my-button>`**, com o decorator @Input(); O valor atribuido poderá vir do parent component, do child component ou definido dentro do próprio selector_

child.html<br>
`<button>{{ label }}</button>`

### Tipos de binding

- **Interpolação**: `{{valor}}`<br>
  Component TS → Template HTML<br> <br>
  **html**<br>

            <my-button label="{{ buttonLabel }}"></my-button>
            <my-button label="Click here"></my-button>

  **ts**<br>

          export class AppComponent {
              buttonLabel: string = 'Click here;
          }

  <br>

- **Property Binding**: `[propriedade]="valor"`<br>
  Component TS → Template HTML<br><br>
  **html**

            <my-button [label]="buttonFav"></my-button>
            <my-button [label]="'Click here'"></my-button>

  **ts**<br>

          export class AppComponent {
              buttonFav: string = 'Click here';
          }

  <br>

- **Event Binding**: `(evento) = "Handler"`<br>
  Template HTML → Component <br><br>
  **html**<br>

        <button (click)="getAlert()">{{ label }}</button>
        <button (click)="getAlertNum(1)">{{ label }}</button>
        <button (mouseover)="getAlertByHover()">{{ label }}</button>

  **ts**<br>

          export class ButtonComponent {
              getAlert() {
                  alert('Olá');
              }
              getAlertNum(num: number) {
                  alert(num);
              }
              getAlertByHover() {
                  alert(this.label);
              }
          }

  [More events on MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Element)

<br>

- **Two-Way Data Binding**: `[(ngModel)] = "propriedade"`<br>
  Template HTML ⇆ Component TS

  **html**

            <input
            type="text"
            [value]="placeholder"
            (input)="placeholder = $any($event.target).value"
            />
            <p>{{ placeholder }}</p>

  _Associa a propriedade 'placeholder' do TS a propriedade 'value' do HTML (property binding), conectando os dois (todos desse mesmo componente, porém o TS se comportará como 'pai' e o 'HTML' como filho). Nesse caso, o value irá recuperar o que o usuário digitar e será passado a propriedade placeholder que está atrelada ao event.target.value;
  <br>[value]="placeholder" => property binding - associa o TS ao HTML;
  <br>(input)="placeholder = $any($event.target).value" => event binding - associa o HTMl ao TS através de um evento que dispara uma ação para o TS_

  **ts**

            export class EntryDataComponent {
            placeholder: string = 'email';
            }
