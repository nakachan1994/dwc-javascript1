
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

var js_hand = getJShand();

var judge = winLose(user_hand,js_hand);


alert('あなたの選んだ手は' + user_hand + 'です。JavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  var js_hand_num = Math.floor(Math.random()*3);
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー"
  }else if(js_hand_num == 1){
    hand_name = "チョキ"
  }else if(js_hand_num == 2){
    hand_name = "パー"
  }
  return hand_name;
}

function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}


var promptStr = prompt('何か好きな文字を入力してください');

alert(promptStr);

var alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  var addStr = "Hello" + strA;
  return addStr;
}


var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて'　+ max + 'を超えるのに必要だった回数は' + count +'回です');
var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
}else if(orrange == apple){
  alert('みかんとりんごが同じ値段');
}else{
  alert('みかんの値段がりんごより安い')
}

var hello = 'Hello World';
alert(hello);
var int1 = 1;
alert(int1);
alert(4 + 3);