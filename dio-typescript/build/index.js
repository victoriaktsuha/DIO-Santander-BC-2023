"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printObjeto(pessoa) {
    console.log(pessoa);
}
printObjeto({
    name: "Name",
    vulgo: "User",
});
let ligado = false;
let nome = "Name";
let idade = 30;
let altura = 1.6;
let nulo = null;
let indefinido = undefined;
let retorno;
function executaQuery() { }
let retornoView = true;
let produto = {
    name: "Name",
    cidade: "SP",
    maior18: true,
};
let meuProduto = {
    nome: "Lápis",
    preco: 1.8,
    unidades: 25,
};
let dados = ["nome", "idade", "cidade"];
let dados2 = ["nome", "idade", "cidade"];
let dados3 = [1, 2, 3];
let dados4 = [1, 2, 3];
let infos = ["nome", 2024];
let boleto = ["água", 120, 123587469];
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Name"));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone("1158962154511"));
console.log(CallToPhone(1158962154511));
function getDB(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Name";
    });
}
function getNewDB(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Name";
    });
}
const bot = {
    id: 1,
    name: "megamen",
};
const bot2 = {
    id: 1,
    name: "megamen",
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
console.log(bot, bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, "batman");
console.log(p);
console.log(p.sayHello());
class Character {
    constructor(strength, skill) {
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1);
p1.attack();
