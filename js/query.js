$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name").val();
        var addr = $("#addr").val();
        var pincode = $("#pincode").val();
        var mobile = $("#mobile").val();
        var email = $("#email").val();
        var category = $("#category").val();
        var query = $("#message").val();
        
        if(name == "" || addr == "" || pincode == "" || mobile == "" || email == "" || category == "" || query == ""){
            
        }
    })
});