var username = form.username;
var password = form.password;
var identity = form.identity;

//表单校验
function check() {
    if ((username.value == "") || (username.value == null)) {
        alert("Please enter your username!");
        username.focus();
        return false;
    } else if ((password.value == "") || (password.value == null)) {
        alert("Please enter your password!");
        password.focus(); //获取焦点。
        return false;
    } else if (identity[0].checked == false && identity[1].checked == false) {
        alert("Please choose your identity!");
        return false;
    } else if (identity[0].checked == false && identity[1].checked == true) {
        //window.open("../pg/pages/zone_select.html");
        window.location.href = "../pg/pages/zone_select.html";        
        return true;
    }else{
        //window.open("http://10.9.120.108:8000/pages/interviewer.html");
        //window.open("../pg/pages/interviewer.html");
        window.location.href = "../pg/pages/candidate.html";
        return true;
    }
}

function login() {
    if (check()) {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "http://www.dutcmc.com/pg_test/getLogin.php",
            //url: "https://localhost/ssmdemo/user/login",
            data: $('#login-form').serialize(),
            success: function (result) {
                console.log(result);
                if (result.resultCode == 200) {
                    alert("success");
                }else{
                    alert("failing");
                }
            },
            error: function (result) {
                console.log(result.resultCode);
            }
        });
    }
}