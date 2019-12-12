<?php
header("Content-Type: text/html; charset=utf8");

    if(!isset($_POST['submit'])){
        exit("错误执行");
    }//判断是否有submit操作


$servername = "localhost";
$username = "root";
$pw = "jyjy6666.";
$dbname = "mydb";

// 创建连接
$conn = new mysqli($servername, $username, $pw, $dbname);
 
// 检测连接
if (mysqli_connect_error()) {
    die("数据库连接失败: " . mysqli_connect_error());
}
echo "连接成功";
    $name=$_POST['name'];//post获取表单里的name
    $password=$_POST['password'];//post获取表单里的password
    $q="select * from user where username='admin' and password='admin'";
    $result=mysql_query($q);
    $rows=mysql_num_rows($result);
    if($rows){//0 false 1 true
                   header("refresh:0;url=//dashboard/indexadmin.html");//如果成功跳转至welcome.html页面
                   exit;
             }else{
        $q="select * from user where username='$name' and password ='$password'";
        $result=mysql_query($q);
        $rows=mysql_num_rows($result);
        if($rows){//0 false 1 true
                   header("refresh:0;url=//dashboard/index.html");//如果成功跳转至welcome.html页面
                   exit;
             }else{
                echo "用户名或密码错误";
                echo "
                    <script>
                            setTimeout(function(){window.location.href='//signin/index.html';},1000);
                    </script>

                ";//如果错误使用js 1秒后跳转到登录页面重试，让其从新进行输入
             }
             

    }else{//如果用户名或密码有空
                echo "表单填写不完整";
                echo "
                      <script>
                            setTimeout(function(){window.location.href='login.html';},1000);
                      </script>";
                        //如果错误使用js 1秒后跳转到登录页面重试，让其从新进行输入
    }

    mysql_close();//关闭数据库
?>

