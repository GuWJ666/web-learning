<?php
// array和object都是引用类型，不能直接使用echo或print输出
// 引用类型需要使用print_r或者var_dump
// 其中var_dump是php中常用的一种输出语句，既可以输出，也可以输出数据类型，通常用于代码的调试



// 数组的使用以及操作方法
// 1.字面量创建
// $arr1 = [1,'hello',3,4,5];
// var_dump($arr1);
// echo '<hr>';
// // 2.通过ayyay（）方法创建数组
// $arr2 = array(1,2,3,4,5);
// var_dump($arr2);
// echo '<hr>';
// // 3.通过下标创建数组
// $arr3[0] = 1;
// var_dump($arr3);
// echo '<hr>';

// 根据数组索引的不同，数组分为索引数组、关联数组
// 索引数组
$arr = [1,2,3,4,5];//遍历索引数组，直接使用循环遍历

//关联数组：
$colors = array('red'=>'红','orange'=>'橙','yellow'=>'黄','green'=>'绿','cyan'=>'青','blue'=>'蓝','purple'=>'紫');
// var_dump($colors);
// echo $colors['cyan'];//去下标
// 遍历关联数组需要使用foreach循环
/**
 * foreach循环语法
 * foreach($arr as $key=>$value){
 *  
 * }
 */
foreach($colors as $key=>$value){
    echo "{$key}=>{$value} <hr>";
}
// foreach($colors as $a){
//     echo "{$a} <hr>";
// }

// 数组的操作方法
// 数组长度:count(arr);
// echo count($colors);

// 添加：arrsy_push();
// array_push($colors,'黑');
// $colors[count($colors)] = '黑';
// var_dump($colors);

//删除
// arrry_unshift()//对数组进行添加修改，删除
// 会对数组的数字索引重置
// arary_pop();
// array_splice($colors,2,1,'黑');    

// 将数组内容反转,并且返回反转后的新数组，不对原来数组产生影响
// $c = array_reverse($colors);

// 数组拼接
// $d = array_merge($colors,$c);

// 数组截取
// $e = array_slice($colors,3,2);

// 判断数组中是否包含某元素:返回true表示包含，返回false不包含
// $f = in_array('红',$colors);

// 数组转字符串
// $str = implode($colors,' ');
// var_dump($str);                     

// 函数相关
// 1.函数名不区分大小写，不能重复声明名字相同的函数
// 2.全局作用域声明的变量想在局部作用域下使用，必须要先在局部作用域中用关键字global修饰，然后再去使用
// 函数名不区分大小写
// function a(){
//     echo 222;
// }
// $a = 20;
// function fn(){
//     global $a;//转化成全局变量
//     $a = 30;
// }
// fn();
// echo $a;


//引用赋值 &变量
// 声明一个函数，函数的功能是交换任意两个变量的值
function fn(&$a,&$b){
    $c = $a;
    $a = $b;
    $b = $c;
}
$x = 10;
$y = 20;
fn($x,$y);
echo "$x,$y";
?>