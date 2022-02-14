import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static numeroContas = 0;

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial,cliente,agencia);
        ContaPoupanca.numeroContas += 1;
    }

    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}