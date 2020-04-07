// var h =document.createElement('h1')
// var myValue = document.createTextNode('hello world!!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


var ul = document.getElementById('list');
var li;


var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem); 







function addItem(){
   var input = document.getElementById('input');
   var item = input.value;
   var textnode = document.createTextNode(item)
   ul=document.getElementById('list');

if (item === ''){
    return false;
}else{
    li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id','check');
var label = document.createElement('label');
label.setAttribute('for','item');

ul.appendChild(label);
li.appendChild(checkbox);
label.appendChild(textnode);
li.appendChild(label);
ul.insertBefore(li,ul.childNodes[0]);

setTimeout(() => {
    li.className='visual'; 
}, 3);
input.value='';



}




}

function removeItem(){
    // console.log('delete button clicked!!1');
    li = ul.children
    console.log(li);
    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element);
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
        
    }
}
