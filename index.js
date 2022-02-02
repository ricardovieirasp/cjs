class Cliente{
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    _saldo=0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log("saque em " + this.agencia + " no valor de " + valor);
            return valor;
        }
    }

    depositar(valor) {
        if(valor>0) {
            this._saldo += valor;
            console.log("deposito em " + this.agencia + " no valor de " + valor);
            return valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "ricardo";
cliente1.cpf = "888999777-11";

const cliente2 = new Cliente();
cliente2.nome = "roseli";
cliente2.cpf = "555666444-55";

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 2553;

console.log(cliente1);
console.log(cliente2);

console.log(contaCorrenteRicardo);
contaCorrenteRicardo.sacar(100);
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.depositar(1000);
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.sacar(100);
console.log(contaCorrenteRicardo);

