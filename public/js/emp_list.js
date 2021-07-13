//今日の日付データを変数hidukeに格納
var hiduke = new Date();

//年・月・日・曜日を取得する
var year = hiduke.getFullYear();
var month = hiduke.getMonth() + 1;
var day = hiduke.getDate();

today = document.getElementById("today");
// 今日の日付を表示
today.textContent =
  year.toString() + "年" + month.toString() + "月" + day.toString() + "日 現在";

// 絞り込みボタン読み込
narrow_btn = document.getElementById("narrow_btn");
narrow_btn.addEventListener("click", () => {
  console.log("絞り込みボタンがクリックされました");
});

//表示順ボタン
order_left_btn = document.getElementById("order_left_btn");
order_right_btn = document.getElementById("order_right_btn");

//チェック切り替え用変数
//0: 50音順 1:入社順
var order_btn_flag = 0;

order_disp = document.getElementById("order_disp");

order_left_btn.addEventListener("click", function () {
  order_btn_flag = 0;
  order_left_btn.innerHTML = "&#10003;50音順";
  order_right_btn.innerHTML = "入社順";
  order_disp.innerHTML = "表示:50音順";

  console.log("表示:50音順", order_btn_flag);
});

order_right_btn.addEventListener("click", function () {
  order_btn_flag = 1;
  order_left_btn.innerHTML = "50音順";
  order_right_btn.innerHTML = "&#10003;入社順";
  order_disp.innerHTML = "表示:入社順";

  console.log("表示:入社順", order_btn_flag);
});
