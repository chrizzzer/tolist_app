$(function() {
  var todoItems = [];
  // TODO: Everything else

  var firstTodo = {
    text:'Do hm after js class', 
    completed: false
  }

  todoItems.push(firstTodo);

  var inputField = $('#new-todo');
  inputField.keypress(function(ev){

    if (ev.which === 13) {
      todoItems.push({
      text: inputField.val(),
      completed: false
      })
      var ul = $('todo-list');
      ul.html(render(todoItems));
      inputField.val("");
    }

    console.log(todoItems)

  })

  console.log("test")

});


function todoHTMLTemplate(todoItem, id) {
  var checked = "";
  if (todoItem.completed) {
    checked = "checked";
  }
  return "<li><div class='view'><input data-id='" + id + "' class='toggle' type='checkbox' " + checked + "><label>" + todoItem.text + "</label><button class='destroy'></button></div></li>"
}

function render(todoItemsArray) {
  var lis = "";
  for (var i = 0; i < todoItemsArray.length; i++) {
    lis = lis + todoHTMLTemplate(todoItemsArray[i], i);
  }
  return lis;
}
