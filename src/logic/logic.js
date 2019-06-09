function Logic() {

};



Logic.prototype.writeOne = function writeOne(num1) {

    if (num1.length <= 7) {
        return (num1 + '1');
    }
    return num1;
};

Logic.prototype.writeTwo = function writeTwo(num1) {
    if (num1.length <= 7) {
        return (num1 + '2');
    }
    return num1;
};

Logic.prototype.writeThree = function writeThree(num1) {
    if (num1.length <= 7) {
        return (num1 + '3');
    }
    return num1;
};

Logic.prototype.writeFour = function writeFour(num1) {
    if (num1.length <= 7) {
        return (num1 + '4');
    }
    return num1;
};

Logic.prototype.writeFive = function writeFive(num1) {
    if (num1.length <= 7) {
        return (num1 + '5');
    }
    return num1;
};

Logic.prototype.writeSix = function writeSix(num1) {
    if (num1.length <= 7) {
        return (num1 + '6');
    }
    return num1;
};

Logic.prototype.writeSeven = function writeSeven(num1) {
    if (num1.length <= 7) {
        return (num1 + '7');
    }
    return num1;
};

Logic.prototype.writeEight = function writeEight(num1) {
    if (num1.length <= 7) {
        return (num1 + '8');
    }
    return num1;
};

Logic.prototype.writeNine = function writeNine(num1) {
    if (num1.length <= 7) {
        return (num1 + '9');
    }
    return num1;
};

Logic.prototype.writeZero = function writeZero(num1) {
    if (num1.length <= 7) {
        return (num1 + '0');
    }
    return num1;
};

Logic.prototype.writeDot = function writeDot(num1) {
    if (num1.length <= 6)
        return(num1 + '.');
    return num1;
};


// function writeMinus() {
//     setNum1(getNum1() + '-');
//     toScreen(getNum1());
//     return getNum1();
// };

Logic.prototype.doPlus = function doPlus(oldNum, num1) {
    return oldNum + parseFloat(num1);
};

Logic.prototype.doMinus = function doMinus(oldNum, num1) {
    return oldNum + parseFloat(num1);
};

Logic.prototype.doDivide = function doDivide(oldNum, num1) {
    return oldNum / parseFloat(num1);
};

Logic.prototype.doMulti = function doMulti(oldNum, num1) {
    return oldNum * parseFloat(num1);
};

Logic.prototype.doMath = function doMath(action, oldNum, num1) {

    switch (action) {
        case "doPlus":
            return this.doPlus(oldNum, num1);
        case "doMinus":
            return this.doMinus(oldNum, num1);
        case "doMulti":
            return this.doMulti(oldNum, num1);
        case "doDivide":
            return this.doDivide(oldNum, num1);
    }
};



