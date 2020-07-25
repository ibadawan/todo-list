






var list = document.getElementById("list")
function addItem() {
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement('li')
    li.setAttribute("class" , "li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    var delBtn = document.createElement('button') 
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.setAttribute("class" , "btnn")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit Text')
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.setAttribute("class" , "btnn")
    


    list.appendChild(li)

    todo_item.value = " "
    console.log(li)
}

function deleteItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = " "
}

function editItem(e) {

    var val = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)

    e.parentNode.firstChild.nodeValue = val;

}
