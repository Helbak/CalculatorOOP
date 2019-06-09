
function Model() {
    this.num1 = '';
    this.oldNum;
    this.result = 0;
    this.action;
    this.test = "Ok! Dude)))";
};

Model.prototype.setNum1 = function setNum1(value) {
    this.num1 = value;
};
Model.prototype.getNum1 = function getNum1() {
    return this.num1;
};
Model.prototype.clearNum1 =function clearNum1() {
    this.num1 = "";
};
Model.prototype.setOldNum =function setOldNum(value) {
    this.oldNum = value;
};
Model.prototype.getOldNum =function getOldNum() {
    return this.oldNum;
};

Model.prototype.clearOldNum =function clearOldNum() {
    this.oldNum = null;

};
Model.prototype.setResult =function setResult(value) {
    this.result = value;
};
Model.prototype.getResult =function getResult() {
    return this.result;
};
Model.prototype.clearResult =function clearResult() {
    this.result = 0;

};
Model.prototype.setAction =function setAction(value) {
    this.action = value;
};
Model.prototype.getAction =function getAction() {
    return this.action;
};
Model.prototype.clearAction =function clearAction() {
    this.action = null;

};