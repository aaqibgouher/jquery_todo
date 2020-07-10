$(document).ready(function(){
    var todos = ["first task", "go to market", "drink water"];

    function todo_list(){
        var todo_list_html = "";

        if(todos.length){
            for(todo in todos){
                todo_list_html += '<li class="list-group-item"><span class="todo_text">'+todos[todo]+'</span><button class="btn btn-danger btn-xs pull-right todo_delete_btn">x</button></li>';
            }
        }else{
            todo_list_html = '<li class="list-group-item text-danger">No Data Available</li>';
        }
        $("#todo_list").html(todo_list_html)
        $("#todo_count").html(todos.length)
    }

    function todo_add_ajax(){
        var todo = $("#todo_input").val();
        if(todo){
            todos.push(todo)
            console.log(todos)
            todo_list();
            $("#todo_input").val("");
        }
    }

    function  todo_add(){
        $("#todo_btn").click(function(e){
            e.preventDefault();
            todo_add_ajax()
        })
        $("#todo_input").keyup(function(e){
            e.preventDefault();
            if(e.keyCode === 13)
                todo_add_ajax()
        })
    }

    function todo_delete(){
        $(document).on("click", ".todo_delete_btn", function(){
            var todo_alert = confirm("Are you sure, you want to delete?");
            if(todo_alert === true){
                var todo = $(this).parent().find(".todo_text").text()
                console.log(todo)
                todo_index = todos.indexOf(todo)
                if(todo_index > -1){
                    todos.splice(todo_index, 1)
                }
                todo_list();
                console.log(todos)
            }

        })
    }

    function init(){
        todo_list();
        todo_add();
        todo_delete()
    }

    init();
});