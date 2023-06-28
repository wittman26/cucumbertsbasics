export class Calculator {
     x: any;
     y: any;
    private result: any;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        this.result = this.x + this.y;
    }

    getResult() {
        return this.result;
    }
}