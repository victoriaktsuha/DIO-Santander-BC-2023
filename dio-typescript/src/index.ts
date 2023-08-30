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
