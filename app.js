
const sendBtn = document.querySelector('.send');
const list = document.querySelector('.list');
const todoContent = document.querySelector('.text')
list.addEventListener('click', delData);
sendBtn.addEventListener('click', addData);

let db = firebase.database();

let todoList;

let todoListFromDB = db.ref('/todos');

todoListFromDB.on('value', snap =>{
    let str = '';
    todoList = snap.val();
    let count = 0;
    for(let item in todoList){
        str += `<li><a href="#" data-num=${item}>刪除</a> ${count+1}.${todoList[item]}</li>`;
        count+=1;
    }
    count = 0;
    list.innerHTML = str;
});

function addData(e){
    e.preventDefault();
    let content = todoContent.value;
    todoListFromDB.push(content);
}

function delData(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){
        return;
    }; 
    var num = e.target.dataset.num; 
    todoListFromDB.child(num).remove();
}




