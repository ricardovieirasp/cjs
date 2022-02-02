export class ContaCorrente {
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

