'use strict';

/*
nodegrind -o app.cpuprofile app.js
以上を実行することで、 app.cpuprofile ファイルにプロファイルの様子が出力されます。

この app.cpuprofile は、 Google Chrome のデベロッパーツールを利用してみることができます。
Chrome を起動し、デベロッパーツールを起動します。
デベロッパーツールの右端に表示される設定ボタンから More Tools を選択し、 JavaScript Profiler をクリックして JavaScript Profiler タブを表示させます。 ( Chrome のバージョンによっては既に Profile としてタブが表示されていることもあります）
JavaScript Profiler タブ (あるいは Profile タブ) を選択し、 "Record JavaScript CPU Profile" が選択された状態で、 Load ボタンをクリックし、 app.cpuprofile を読み込みます。
*/

function fib(n){
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}
