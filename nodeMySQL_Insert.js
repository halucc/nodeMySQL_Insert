// mysqlモジュールの読み込み
const mysql = require('mysql');

// MySQLとのコネクションの作成
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    port: 3306,
    database: 'DemonSlayer'
});

// 接続
connection.connect();

//二次元配列
const kimetsu_characters_list = [
    ["竈門炭治郎", "かまどたんじろう", 15, 165],
    ["竈門禰豆子", "かまどねずこ", 14, 153],
    ["我妻善逸", "あがつまぜんいつ", 16, 164.5],
    ["嘴平伊之助", "はしびらいのすけ", 15, 164],
    ["不死川玄弥", "しなずがわげんや", 16, 180],
    ["栗花落カナヲ", "つゆりかなを", 16, 156],
    ["冨岡義勇", "とみおかぎゆう", 21, 176],
    ["胡蝶しのぶ", "こちょうしのぶ", 18, 151],
    ["煉獄杏寿郎", "れんごくきょうじゅろう", 20, 177],
    ["宇髄天元", "うずいてんげん", 23, 198],
    ["甘露寺蜜璃", "かんろじみつり", 19, 167],
    ["時透無一郎", "ときとうむいちろう", 14, 160],
    ["悲鳴嶼行冥", "ひめじまぎょうめい", 27, 220],
    ["伊黒小芭内", "いぐろおばない", 21, 162],
    ["不死川実弥", "しなずがわさねみ", 21, 179]
];

//SQL文
const sql = "INSERT INTO kimetsu_table1 (name, name_kana,age,height) VALUES ?";

//実行
const query = connection.query(sql, [kimetsu_characters_list], function (err, result) {
    console.log(result);
});

// 接続終了
connection.end();
