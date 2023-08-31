type hero = {
  name: string;
  vulgo: string;
};
function printObjeto(pessoa: hero) {
  console.log(pessoa);
}
printObjeto({
  name: "Name",
  vulgo: "User",
});
//// tsc - typescript compiler / npx (node package execute)
//// ao rodar 'npx tsc path/file.ts' ou 'npx tsc file.ts', o node irá transpilar o arquivo ts para que seja possivel lê-lo, duplicando o mesmo arquivo mas com extensão .js

//// * tipando variaveis - ajuda a manter a estratégia *

//// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Name";
let idade: number = 30;
let altura: number = 1.6;

//// tipos especiais: null e undefined
let nulo: null = null; //// => recebe apenas null
let indefinido: undefined = undefined; //// => recebe apenas null

//// tipos abrangentes: any e void - cariaveis/funcções que não há um retorno
let retorno: void; //// => não aceita nenhuma atribuiçã senao o proprio 'void'
function executaQuery(): void {}
let retornoView: any = true; //// => aceita qualquer coisa; utilizado em funções que podem retornar um valor não previsível(pode ser objeto, string, void, etc ..)

//// variavel do tipo objeto sem previsibilidade - pode retornar quaisquer valores
let produto: object = {
  name: "Name",
  cidade: "SP",
  maior18: true,
};

//// variavel do tipo objeto "tipado" - prevê/tipa os valores que devem ser definidos e retornados
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};
let meuProduto: ProdutoLoja = {
  nome: "Lápis",
  preco: 1.8,
  unidades: 25,
};

//// arrays/vetor
//// => Duas maneiras de declarar e tipar array/vetor no TS:
let dados: string[] = ["nome", "idade", "cidade"];
let dados2: Array<string> = ["nome", "idade", "cidade"];

let dados3: number[] = [1, 2, 3];
let dados4: Array<number> = [1, 2, 3];

//// => Tambem podemos declarar array/vetor com mais de 1 tipo
let infos: (string | number)[] = ["nome", 2024]; //receberá apenas string ou number; o mais ideal seria criar um objeto tipado/shapado

//// Tuplas - vetor multitype que além de tipar, define a ordem de retorno
let boleto: [string, number, number] = ["água", 120, 123587469];

//// arrays métodos
// dados.map();

//// Datas
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());

//// Funções - tipar os argumentos e a propria função
function addNumber(x: number, y: number): number {
  return x + y;
}
//// a variavel deve ter o mesmo tipo da função
let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string) {
  return `Hello ${name}`;
}
console.log(addToHello("Name"));

//// Funções Multitypes - tipar os argumentos e a propria função; Nesse caso, ao tipar a função, pode ser ':any' (não muito recomendado) ou os tipos que a função irá retornar
function CallToPhone(phone: number | string): number | string {
  return phone;
}
console.log(CallToPhone("1158962154511"));
console.log(CallToPhone(1158962154511));

//// Funções Assíncronas - devem ser tipadas como Promise
async function getDB(id: number): Promise<string> {
  return "Name";
}

//// Funções Assíncronas Multittpe - devem ser tipadas como Promise, incluindo os tipos a serem retornados
async function getNewDB(id: number): Promise<string | number> {
  return "Name";
}

//// Interfaces (type x interface)
//// utilizado mais para tipar objetos
type robot = {
  id: number | string;
  readonly name: string; //// não-atribuivel (nem no console.log)
};

const bot: robot = {
  id: 1,
  name: "megamen",
};

//// utilizado mais para trabalhar com classes
interface robot2 {
  id: number | string;
  readonly name: string;
  sayHello(): string;
}

const bot2: robot2 = {
  id: 1,
  name: "megamen",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  },
};
console.log(bot, bot2);

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello ${this.name}`;
  }
}
const p = new Pessoa(1, "batman");
console.log(p);
console.log(p.sayHello());

//// classes

//// Data Modifiers - modificadores de acesso: public, private or protected

class Character {
  private name: string; //// 'private' indica que essa propriedade só é acessível dentro da class,não sendo possível acessá-la como extensão; i.e. 'p1.name'
  public strength: number; //// 'public' indica que essa propriedade é acessível fora da class, sendo possível acessá-la como extensão; i.e. 'p1.strength'. Esse é o valor default.
  readonly skill?: number; //// '?' indica que esse propriedade é opcional, não sendo necessária passa-la ao constructor e não sendo obritoria sua utilização
  protected gender: string; //// indica que essa propriedade só é acessível dentro da class e das subclasses que herdem essa class, não sendo possível acessá-la como extensão; i.e. 'p1.gender'

  constructor(name: string, strength: number, gender: string) {
    //// essa estrutura pode ser traduzida como: "o 'strength'(aquele adicionado lá em cima) dessa classe(this) receberá o 'strength' atribuido nesse constructor"
    this.name = name;
    this.strength = strength;
    this.gender = gender;
  }
  //// o método attack é 'void' pq não retorna nada pra outra função (return)
  //// os modifiers também podem ser aplicados em métodos
  public attack(): void {
    console.log(`Attack with ${this.strength} points`);
  }
}
const p1 = new Character("Name", 98, "No defined");
console.log(p1);
p1.attack(); //// como no método 'attack()' não temos nenhum retorno e já está executando o console.log dentro do método, não precisamos utilizar o console.log aqui novamente

//// subclass
// Character: superclass - Magician: subclass
class Magician extends Character {
  magicPoints: number;
  //// o constructor dessa subclass tem acesso as propriedades da superclass 'Character', mas é preciso adicioná-los novamente como argumento por conta do 'super', que é exigido em subclasses para invocar o 'constructor' da class 'pai' (superclass); Os argumentos devem ser então passados novamente ao 'super', mas sem a tipagem
  constructor(
    name: string,
    strength: number,
    gender: string,
    magicPoints: number
  ) {
    super(name, strength, gender);
    this.magicPoints = magicPoints;
  }
}
const p2 = new Magician("Mago", 9, "undefined", 100);

//// generics - ao utilizar <T> para tipar a function, os argumentos e o retorno ao invés de :any[] para tipar apenas os argumentos e o retorno, a tipagem se torna 'dinâmica', podem ser definida a cada utilização da função como 'const numArray = concatArray<number[]>' ou 'const stgArray = concatArray<string[]>'

function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}
const numArray = concatArray<number[]>([1, 5], [3]);
console.log(numArray); //// [1, 5, 3]

const stgArray = concatArray<string[]>(["Name", "Lastname"], ["Other name"]);
console.log(stgArray); //// [ 'Name', 'Lastname', 'Other name' ]

/* npm i ts-node-dev -D -> ts-node-dev é um servidor local que entende TS / '-D' é para instalar apenas no ambiente de desenvolvimento. evitando executar npm run start todo o tempo para gerar uma build com o typescript transpilado para js */

//// decorators - 'decora' uma função para, quando encontrar a condição ideal, ser executada. Por ser uma feature experimental, deve ser habilitada no tsconfig.json
function ExibirNome(target: any) {
  console.log(target);
}
//// 'decora' função 'ExibirNome' que será executada assim que o codigo for executado e exibirá o que vir logo abaixo, que deve ser uma class; Para atrelar o decorator a alguma coisa, adicione-o acima dessa coisa
@ExibirNome
class Funcionario {}
//// é exibido no console [class Funcionario]

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: "name" });
  };
}
@apiVersion("1.10")

//// attribute decorator - posicionado em cima de uma propriedade
function minLength(length: number){
  return (target: any, key: string) => {
    let _value = target[key]; //// target = propriedade
    // console.log(key); //// key = valor
  }
}
class Api {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api("produtos");
// console.log(api.name); //// produtos



