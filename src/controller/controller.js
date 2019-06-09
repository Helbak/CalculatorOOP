function Controller() {
    this.logic = new Logic();
    this.model = new Model();
};

Controller.prototype.init = function () {
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const plus = document.getElementById('plus');
    const minus = document.getElementById('minus');
    const divide = document.getElementById('divide');
    const multi = document.getElementById('multi');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const zero = document.getElementById('zero');
    const dot = document.getElementById('dot');
    const reset = document.getElementById('reset');
    const equal = document.getElementById('equal');
    const del = document.getElementById('del');

    // button.addEventListener('click', function () {
    //     console.log(this);
    //     this.logic.foo(this.model.mod);
    // }.bind(this), false)


    one.addEventListener('click', function () {
            this.writeOne(this.model.getNum1());
        }.bind(this),
        false);
    two.addEventListener('click', function () {
        this.writeTwo(this.model.getNum1());
    }.bind(this), false);
    three.addEventListener('click', function () {
        this.writeThree(this.model.getNum1());
    }.bind(this), true);
    four.addEventListener('click', function () {
        this.writeFour(this.model.getNum1());
    }.bind(this), true);
    five.addEventListener('click', function () {
        this.writeFive(this.model.getNum1());
    }.bind(this), true);
    six.addEventListener('click', function () {
        this.writeSix(this.model.getNum1());
    }.bind(this), true);
    seven.addEventListener('click', function () {
        this.writeSeven(this.model.getNum1());
    }.bind(this), true);
    eight.addEventListener('click', function () {
        this.writeEight(this.model.getNum1());
    }.bind(this), true);
    nine.addEventListener('click', function () {
        this.writeNine(this.model.getNum1());
    }.bind(this), true);
    zero.addEventListener('click', function () {
        this.writeZero(this.model.getNum1());
    }.bind(this), true);
    dot.addEventListener('click', function () {
        this.writeDot(this.model.getNum1());
    }.bind(this), true);
    plus.addEventListener('click', function () {
        this.writeActionPlus(this.model.getNum1());
    }.bind(this), true);
    equal.addEventListener('click', function () {
        this.calculate(this.model.getNum1());
    }.bind(this), true);
    minus.addEventListener('click', function () {
        this.writeActionMinus(this.model.getNum1());
    }.bind(this), true);
    divide.addEventListener('click', function () {
        this.writeActionDivide(this.model.getNum1());
    }.bind(this), true);
    multi.addEventListener('click', function () {
        this.writeActionMulti(this.model.getNum1());
    }.bind(this), true);
    del.addEventListener('click', function () {
        this.ce(this.model.getNum1());
    }.bind(this), true);
    reset.addEventListener('click', function () {
        this.allNull();
    }.bind(this), true);
};

Controller.prototype.writeOne = function writeOne() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeOne(num1));
    this.toScreen(this.model.getNum1());

};

Controller.prototype.writeTwo = function writeTwo() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeTwo(num1));
    this.toScreen(this.model.getNum1());

};

Controller.prototype.writeThree = function writeThree() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeThree(num1));
    this.toScreen(this.model.getNum1());

};

Controller.prototype.writeFour = function writeFour() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeFour(num1));
    this.toScreen(this.model.getNum1());

};

Controller.prototype.writeFive = function writeFive() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeFive(num1));
    this.toScreen(this.model.getNum1());
};

Controller.prototype.writeSix = function writeSix() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeSix(num1));
    this.toScreen(this.model.getNum1());
};

Controller.prototype.writeSeven = function writeSeven() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeSeven(num1));
    this.toScreen(this.model.getNum1());
};

Controller.prototype.writeEight = function writeEight() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeEight(num1));
    this.toScreen(this.model.getNum1());
};

Controller.prototype.writeNine = function writeNine() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeNine(num1));
    this.toScreen(this.model.getNum1());
};

Controller.prototype.writeZero = function writeZero() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeZero(num1));
    this.toScreen(this.model.getNum1());
};

Controller.prototype.writeDot = function writeDot() {
    let num1 = this.model.getNum1();
    this.model.setNum1(this.logic.writeDot(num1));
    this.toScreen(this.model.getNum1());
};


Controller.prototype.enableButton = function enableButton(btn) {
    btn.disabled = false;
};

Controller.prototype.disableButton = function disableButton(btn) {
    btn.disabled = true;
};

Controller.prototype.saveOldNum = function saveOldNum() {
    // this.enableButton(dot);
    this.model.setOldNum(parseFloat(this.model.getNum1()));
    this.model.clearNum1();
    this.toScreen("");
};

Controller.prototype.writeActionPlus = function writeActionPlus() {
    this.saveOldNum();
    this.model.setAction('doPlus');
};

Controller.prototype.writeActionMinus = function writeActionMinus() {
    if (this.model.getNum1() === '') {
        this.toScreen("-");
        this.model.setNum1('-');
    }
    this.saveOldNum();
    this.model.setAction('doMinus');

};

Controller.prototype.writeActionDivide = function writeActionDivide() {
    this.saveOldNum();
    this.model.setAction('doDivide');
};

Controller.prototype.writeActionMulti = function writeActionMulti() {
    this.saveOldNum();
    this.model.setAction('doMulti');
};

Controller.prototype.calculate = function calculate() {

    let res = this.logic.doMath(this.model.getAction(), this.model.getOldNum(), this.model.getNum1());
    this.model.setResult(res);
    this.model.setOldNum(null);
    let numberResult = this.model.getResult();
    let stringResult = String(numberResult);
    this.model.setNum1(stringResult);
    this.toScreen(this.model.getNum1());
};

Controller.prototype.allNull = function allNull() {
    // this.disableButton(dot);
    this.model.setOldNum(null);
    this.model.setNum1('');
    this.toScreen(0);
};

Controller.prototype.toScreen = function toScreen(n) {
    inputFirst.value = n;
};


Controller.prototype.ce = function ce() {
    model.setNum1(model.getNum1().substring(0, model.getNum1().length - 1));
    this.toScreen(model.getNum1());
};


// };



