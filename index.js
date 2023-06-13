// 指定 DOM
var sendData = document.querySelector('.send');
var list = document.querySelector('.list');
var dataBase = JSON.parse(localStorage.getItem('listItem')) || []; //取出存在localStorage裡的資料並轉為陣列型別，如果瀏覽器裡沒存資料則跑空值

//事件監聽及更新網頁
sendData.addEventListener('click', addData); //點擊加入就觸發addData函式
list.addEventListener('click', delData); //點擊刪除就觸發delData函式
updateList(dataBase); //載入頁面時將儲存在 localStorage 的待辦事項顯示到畫面上

//將待辦事項寫入資料庫，並同步更新網頁與 localstorage
function addData(e){  
  e.preventDefault();
  var txt = document.querySelector('.text').value;
  if(txt.trim() === ""){
    alert('請輸入文字!!')
    return;
  } // 禁止空白(移除空白後如為空值就跳提醒視窗並中斷函式)
  var todo = {
    content: txt
  }; //新增物件，內容為待辦事項
  dataBase.push(todo); //把待辦事項存入資料庫陣列
  updateList(dataBase); //在網頁上更新資訊
  localStorage.setItem('listItem',JSON.stringify(dataBase)); //轉為字串才可存入localStorage作更新
  document.querySelector('.text').value = ''; //增加完待辦事項後，輸入欄位中的字清除
}

//把dataBase裡每一筆資料加入網頁並更新網頁內容
function updateList(dataBase){
  str = '';
  for( i=0 ; i<dataBase.length ; i++ ){
    str += '<li><a href="#" data-num='+ i +'>刪除　</a>'+ (i+1) + '. ' + dataBase[i].content +'</li>';
  }
  list.innerHTML = str;
}

//刪除待辦事項
function delData(e){
    
  e.preventDefault();
  if(e.target.nodeName !== 'A'){return;}; //如果點擊的不是a標籤就中斷函式
  console.log(e)
  var num = e.target.dataset.num; //取得待辦事項編號
  dataBase.splice(num,1); //刪除點選的資料一筆
  localStorage.setItem('listItem',JSON.stringify(dataBase)); //轉為字串才可存入localStorage作更新
  updateList(dataBase);//在網頁上更新資訊
}

var db = firebase.database();

data = {
  student1:{
    name : 'Tom',
    num : 1
  },
  student2 :{
    name : 'eleanore',
    num : 2
  }
}
todos

db.ref().set(data);
db.ref('/student1/name').set('Jack');
db.ref('myName').set('hello');

//-------------- once
/*myName.once('value', snap => {
    let data2 = snap.val();
    console.log(data2);
})*/
//--------------on
  /*let myName = database.ref('myName');
  myName.on('value',snap =>{
  console.log(snap.val());
  setTimeout(()=>{
    db.ref('myName').set('mk2000');
  },5000)
  setTimeout(()=>{
    db.ref('myName').set('mk3');
  },10000)
})*/
//-------------- push
var todos = db.ref('todos');
todos.push({content:'要去看電影'});
todos.push({content:'要去看跑步'});
todos.push({content:'要聽看音樂'});
todos.push({content:'ㄅㄞ不出來了!'});

//-------------- child 子路徑、remove 移除 {Todolist：移除待辦}

// child 子路徑：移至根目錄下的 todos 
var todos = db.ref('todos')
// remove 移除：移除todos下的 -L1H5cAAQnE9y72dCpJ7(要去看電影)
todos.child('-NXo5_kFJm0bORVKq3Zb').remove();

// let student2 = db.ref('student2');
// console.log(student2.child('name').remove())


//--------------網頁上即時瀏覽資料庫資訊 
let path = db.ref();
path.on('value',(span)=>{
  document.querySelector('title').textContent = JSON.stringify(span.val(),null,3)
})