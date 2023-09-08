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

  <br>

## LyfeCycle Hooks

O conceito de _lifecycle_ dos componentes foi baseado no ciclo de vida dos humanos, onde ambos nascem, apresentam comportamentos específicos de acordo com eventos e tem então o seu fim.<br><br>

### 8 Tipos de LifeCycle Hooks<br>

**`ngOnInit()`** - interface importada e implementada no componente que será disparado quando o componente é iniciado, podendo conter, por exemplo, uma ação a ser executada assim que iniciado

    export class TitleComponent implements OnInit {
    nome: string = 'Name';
    constructor() {}

      ngOnInit(): void {
        console.log('Olá, eu sou o nascimento do Componente');
        this.nome = `Olá, ${this.nome}!`;
      }
    }

<br>

**`ngOnChanges()`** - disparada quando há alteração em algum valor/propriedade no componente<br><br>

**`ngDoCheck()`** - executado quando uma propriedade do componente é verificada; contém subeventos:<br><br>
&nbsp;&nbsp;&nbsp;`ngAfterContentInit()` - executa quando Angular realiza qualquer projeção de conteúdo em seus componentes<br>
&nbsp;&nbsp;&nbsp;`ngAfterContentChecked()` - executa sempre que um conteúdo do componente é verificado pelo mecanismo de detecção de alteração do Angular<br>
&nbsp;&nbsp;&nbsp;`ngAfterViewInit()` - executa depois que o componente é totalmente inicializado<br>
&nbsp;&nbsp;&nbsp;`ngAfterViewChecked()` - executa quando a visualização do componente é verificada pelo algoritmo de detecção de alterações do Angular<br><br>

**`ngOnDestroy()`** - utilizado quando o componente é destruido; É uma boa pratica utiliza-lo em conteúdos/componentes que não serão mais utilizados para evitar _memory leak_

Ordem de execução (por componente e também sua ordem):

1. `Constructor` - pois é a _class_ que gera o HTML
2. `OnChanges` - Precisa primeiro _"ler"_ o que está sendo _"inputado"_ (caso houver)...
3. `OnInit` - ... para depois iniciar o componente
4. `DoCheck` - verifica se houve alguma alteração antes de iniciar o conteúdo
5. `AfterContentInit` - executado quando o conteúdo é iniciado
6. `AfterContentChecked` - evento após inicialização do conteúdo
7. `AfterViewInit` - executa quando a visualização do conteúdo é iniciada
8. `AfterViewChecked` - evento após inicialização da visualização do conteúdo

## Diretivas

Diretivas são a maneira como o Angular manipula e altera o DOM dinamicamente

### Diretivas de atributo

Alteram a aparência ou comportamento de um elemento, componente ou outra diretiva

- `NgClass` - Adiciona ou remove conjuntos de classes CSS
- `NgStyle` - Adiciona ou remove um conjunto de estilos ao HTML
- `NgModel` - Adiciona vinculação de dados bidirecional a um elemento de um formulário

### Diretivas estruturais

Moldam ou remodelam a estrutura DOM, adicionando ou removendo elementos da tela

- `NgIf` - Condicional que verifica se o modelo deve ser visualizado ou não; Pode ser utilizado com `ng-template`, onde um template é criado e só será exibido em certa condição, como um 'else'
- `NgFor` - repete um elemento para cada item em uma lista
- `NgSwitch` - Utilizado para alternar entre comportamentos alternativos
  <br><br>

## Módulos

Contém componentes, diretivas, pipes e services. Conforme a expansão da aplicação, o ideal a criar outros módulos para agrupar componentes e inserir esses módulos no `app.module`, o módulo-core.

Um módulo pode:

- **Importar** e **Exportar** outros módulos;
- **Declarar** componentes, diretivas, pipes
- **Prover** services, API, DB..

Sua estrutura necessita importar a interface `NgModule` do `@angular/core` e utilizar o decorator `@NgModule({})`, indicando as `declarations`, `ìmports`, `exports`, `providers` e o componente principal desse módulo em `bootstrap`, sendo exportado como`class`

<hr>

`@Input()` permite que as propriedades abaixo dele sejam disponibilizadas no componente que utiliza o selector do componente onde o `@Input()` for criado:

- **component-1.component.ts**:

        export class Componente1 {

              @Input()
              title:string = '';

              constructor(){}

        }

- **component-2.component.html**:

        <componente-1 title="Título Dinâmico"></componente-1>

## Rotas

Navegação sem _'refresh'_ entre componentes definida no arquivo `app-routing.module.ts`:

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { TitleComponent } from './pages/index/title/title.component';
    import { CardComponent } from './pages/portifolio/card/card.component';

    const routes: Routes = [
      {
        path: '',
        component: TitleComponent,
        pathMatch: 'full',
        // pathMatch: 'full' = url exata / 'prefix' = url deve conter partes desse path para exibir o componente
      },
      // portifolio - parent
      // portifolio/{1} - children
      // portifolio/{1/abc} - children
      {
        path: 'portifolio',
        component: CardComponent,
        children: [
          {
            // tudo que for passado depois de 'portifolio/' estará dentro da variável ':id"
            path: ':id',
            component: CardComponent,
          },
          {
            path: ':id/:token',
            component: CardComponent,
          },
        ],
      },
      // redirecionamento de paths não existentes
      {
        path: '**',
        redirectTo: '',
      },
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
    })
    export class AppRoutingModule {}

E atrelada no HTML atráves do `[routerLink]`, substituindo o _href_ para evitar refresh da página

    <div>
      <ul>
        <li>
          <a
            [routerLink]="['/']"
            [routerLinkActive]="['activated']"
            [routerLinkActiveOptions]="{ exact: true }"
            >Home</a>
        </li>
        <li>
          <a [routerLink]="['/portifolio']" [routerLinkActive]="['activated']"
            >Portifólio</a>
        </li>
      </ul>
    </div>

`[routerLinkActive]` atribui uma class de estilo CSS para quando o link estiver ativo;
`[routerLinkActiveOptions]` aplica o estilo CSS apenas quando a rota for exatamente igual a definida em `[routerLink]`

## Services

### Os 3 pilares de um service

- São arquivos de class TS apenas para regras de negócio, como comunicação com APIs. `-components.ts` deve cuidar apenas da parte visual.
- Ele pode servir mais de um componente, não estando atrelado apenas em um componente.
- Não há um certo ou errado no uso de services, entre criar um service para todos ou cirar um service por componente. Mas de certa forma, como boa prática, um service deve ser _'especialista'_ no que executa, e não um amontoado de execuções aleatórias; Como um para cadastros, ou para API, etc..

O endereço da API pode ser incluído no `environment.ts`:

    export const environment = {
      production: false,
      pokeApi: 'https://pokeapi.co/api/v2/pokemon/',
    };

e o `service.ts` consumirá esse arquivo para prover esses dados a outros componentes.
Para criar esse componente de service: `ng g s nameService`

Conteúdo _Injectable_ ou Injeção de Dependências - poderá ser utilizado passando-o como dependência de outro objeto, de outra class. Exemplo: poderá ser passado como dependência/"injetado" ao _constructor_ de um componente para ser consumido por ele:

      constructor(private service: NameService) {}

Lembrando que para consumir a API, ele precisa se comunicar com o `environment.ts`, importando o _environment_ e atribuindo a URL a propriedade dentro do _constructor_ :

    import { environment } from 'src/environments/environment';
    export class PokemonService {
      private baseURL: string = '';
      constructor() {
        this.baseURL = environment.pokeApi;
      }
    }
