import { Cliente } from "../Cliente.js";

// Classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta) {
            throw new Error("Você não pode instanciar uma classe Conta");
        }
        this._saldo = saldoInicial;
        this.cliente = cliente;
        this.agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // metodo abstrato
    sacar(valor){
        throw new Error("Metodo sacar não implementado");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }    
}