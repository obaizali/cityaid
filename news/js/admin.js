$(document).ready(function(){
    $("#submit").click(function(e){
        var content = $("#content").val();
        var title = $("#title").val();
        var category = $("#category").val();

        var data = new FormData();
        data.append('content', content);
        data.append('title', title);
        data.append('category', category);
        $.ajax({
            type: 'POST',
            url: 'http://localhost/cityaid/news/php/admin.php',
            processData: false,
            contentType: false,
            data: data,
            success: function(result){
                var s = result.toString();
                if(s == 1){
                    $("#content").val("");
                    $("#title").val("");
                    alert("done");
                }
                else{
                    alert("failed");
                }
            }
        });
    });

});