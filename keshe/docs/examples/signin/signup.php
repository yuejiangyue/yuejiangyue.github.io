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
    $q="insert into user(username,password) values('$name','$password')";//向数据库插入表单传来的值的sql
    if ($conn->query($q) === TRUE) {
        echo "新记录插入成功";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
 
    $conn->close();

?>