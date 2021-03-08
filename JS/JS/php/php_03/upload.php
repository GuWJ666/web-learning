<?php

    // $_FILES:存放了前端发送的文件数据
    // var_dump($_FILES);
    $file = $_FILES['file'];
    // $file是个关联数组
    // name：string，表示前端选择发送的文件的名字
    $name = $file['name'];
    // type:string，表示前端选择发送的文件的格式，例如：image/png
    $type = $file['type'];
    // error:integer,表示错误代码，0表示无错误
    $error = $file['error'];
    // size:integer,表示前端选择发送文件的大小，单位是b
    $size = $file['size'];
    // tmp_name:string,表示前端选择发送文件在服务器上的暂存地址，如果没有将暂存地址的文件进行处理，那么当前脚本执行结束会自动销毁暂存文件
    $tmp_name = $file['tmp_name'];
    // 将上传的图片从暂存区移动到服务器上的指定位置
    $res = move_uploaded_file($tmp_name,"img/{$name}");
    if($res){
        echo "上传成功";
    }else{
        echo "上传失败";
    }
    
?>