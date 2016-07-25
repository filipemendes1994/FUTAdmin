export class Pagamento {

    mes: number;
    ano: number;
    valor: number;
    dataPagamento: any;

    constructor(mes: number, ano: number, valor: number) {
        this.dataPagamento = Math.floor(Date.now() / 1000);
    }
}
