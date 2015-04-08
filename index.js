$(function() {
  var todoItems = [];
  // TODO: Everything else
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
