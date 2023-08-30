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
