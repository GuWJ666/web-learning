<?php

$file = $_FILES['file'];
$name = $file['name'];
$type = $file['type'];
$error = $file['error'];
$size = $file['size'];
$tmp_name = $file['tmp_name'];
$res = move_uploaded_file($tmp_name,"./{$name}");
if($res){
    echo "上传成功";
}else{
    echo "上传失败";
}

?>