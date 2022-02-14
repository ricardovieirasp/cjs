import { Cliente } from "./Cliente.js"

import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Ricardo",10000, "123456789-00");
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Roseli" , 5000, "234567890-11");
gerente.cadastrarSenha("123");

const clienteLais = new Cliente("Lais","111546879-99","221332")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");
const clienteEstaLogado = SistemaAutenticacao.login(clienteLais,"22132");

console.log("gerente: " , gerenteEstaLogado);
console.log("diretor: " , diretorEstaLogado);
console.log("cliente: " , clienteEstaLogado);
