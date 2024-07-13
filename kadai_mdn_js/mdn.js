// 現在日時を取得
const date = new Date();

// 年月日を取得
const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

// console.log(date.toString());

// 年月日を出力
console.log(year + '年' + (month+1) + '月' + day + '日');