function jisuan(num1,num2,operator){
    var res=0;
    if(operator=='+'){
        res=num1+num2;
    }else if(operator=='-'){
        res=num1-num2;
    }else if(operator=='*'){
        res=num1*num2;
    }else {
        res=num1/num2;
    }
    return res;
}
function abc() {
for(var i=0;i<arguments.length;i++){
    window.alert(arguments[i]);
}
}