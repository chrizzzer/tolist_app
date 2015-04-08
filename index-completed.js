$(function() {

  // Grab the input element
  var inputEl = $("input");
  var todoItems = [];

  // When the user presses a key...
  inputEl.keypress(function(ev) {

    // Check if the event parameter (ev), is the code for
    // the enter key.
    if (ev.which == "13") {

      // Get the user input text.
      var text = inputEl.val();

      // Add the text to the HTML template and stick it
      // in the todo list ul element.
      todoItems.push({
        text: text,
        completed: false
      });
      $("#todo-list").html(render(todoItems));

      // Clear the input element's value.
      inputEl.val("");

      // On clicking complete...
      $(".toggle").click(function(ev) {

        // Grab the data-id attribute of the HTML to be
        // able to find the item in the todoItems array.
        var el = todoItems[$(this).data("id")];

        // Toggle the completed attribute.
        el.completed = !el.completed;
      });
    }
  });
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
