var submit = $("#submit-new-item");
var items = JSON.parse(localStorage.getItem("items")) || [];
localStorage.removeItem(.onclick())
for(var i = 0; i < items.length; i++) {
    $("#newList").append(`<li><button class="delete">x</button> ${items[i]}`)
}

function addNewItem() {
    var input = $("#inputBox").val();
    items.push(input);
    localStorage.setItem("items", JSON.stringify(items));
    $("#newList").append(`<li><button class="delete">x</button>  ${input}</li`);
}
submit.click(addNewItem);



$('#newList').on('click', '.delete', function(){
  $(this).closest('li').remove()
});