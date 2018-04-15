'use strict';

/*
nodegrind -o app.cpuprofile app.js
以上を実行することで、 app.cpuprofile ファイルにプロファイルの様子が出力されます。

この app.cpuprofile は、 Google Chrome のデベロッパーツールを利用してみることができます。
Chrome を起動し、デベロッパーツールを起動します。
デベロッパーツールの右端に表示される設定ボタンから More Tools を選択し、 JavaScript Profiler をクリックして JavaScript Profiler タブを表示させます。 ( Chrome のバージョンによっては既に Profile としてタブが表示されていることもあります）
JavaScript Profiler タブ (あるいは Profile タブ) を選択し、 "Record JavaScript CPU Profile" が選択された状態で、 Load ボタンをクリックし、 app.cpuprofile を読み込みます。
*/

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);


function fib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}
