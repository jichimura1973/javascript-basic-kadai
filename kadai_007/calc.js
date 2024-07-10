//  変数の設定
let num = 2;

// 条件分岐の設定
if (num % 3 === 0 && num % 5 === 0){
    console.log('３と5の倍数です');
}
else if (num % 3 === 0){
    console.log('３の倍数です');
}
else if (num % 5 === 0){
    console.log('5の倍数です');
}
else {
    console.log(num);
}