<?php
    $username=$_Post['username'];
    $password=$_POST['password'];
?>
$conn= new mysql('localhost','root','','test');
if($conn->connect_error){
    die('connection Failed: '.$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into loginpage(username,password)
    values(?,?)")
    $stmt->bind_param("ss",$username,$password)
    $stmt->execute()
    echo "sucessfully loggedin....."
    $conn->close()
}
}