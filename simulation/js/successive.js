function f(xx) {
    // let eq_drop = <HTMLSelectElement>document.getElementById('equ-select'); //id to be change
    var eq = equ;
    // alert(xx);
    var scope = { x: xx };
    //var eq1 = "-0.03^1.5"
    //alert(math.eval(eq1, scope));
    return math.eval(eq, scope);
}
// x^2-cos(x), exp(x)*cos(x)-1.4
//initial guess 0 1 x1=0 and x2=1
function g(xx) {
    let eq = g_equ;
    let scope = { x: xx };
    return math.eval(eq, scope);
    //cos(x)^0.5
    //log(1.4/cos(x))
    //cos(x)/exp(x)
}
function successive(x1) {
    let table = [];
    for (let i = 0; i < 10; i++) {
        table[i] = [];
        let x2 = g(x1);
        table[i][0] = i + 1;
        table[i][1] = x1;
        table[i][2] = f(x1);
        table[i][3] = x2;
        table[i][4] = f(x2);
        x1 = x2;
    }
    return table;
}
//# sourceMappingURL=successive.js.map