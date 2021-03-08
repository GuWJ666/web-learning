<?php
//PHP中的对象
// PHP中必须先有类，才能创建对象，无法直接字面量创建对象
/**
 * 声明类的语法：
 *      
 *    class 类名{
 *          本类对象的属性（类内部的变量）
 *          本类对象的方法（类内部的函数）
 *     }
 */

// 声明一个People类
 class People{
//类内部声明变量可以使用var
    // public $name = '小王';
    // public $age = 20;
    // public $sex = '男';
    public $name;
    public $age;
    public $sex;

    // 将来创建的实例对象的方法
    function hello(){
        // $this在方法中就表示当前类的实例对象
        echo "hello,my name is {$this -> name},I'm {$this -> age} years old";
    }

    // 构造方法(显式)：类在创建实例对象的时候，会自动调用构造方法，如果类内部没有显式的构造方法，那么系统会自动为类添加一个隐式的构造方法
    function __construct($name,$age,$sex){
        $this -> name = $name;
        $this -> age = $age;
        $this -> sex = $sex;
    }
 }
//  创建people的实例对象
//  PHP中对象访问自身属性和方法，没有点语法，需要使用‘->’来使用；
$p  = new People('小王',10,'男');
var_dump($p);
$p -> hello();

echo '<hr>';

 $p2  = new People('小李',20,'女');
//  $p2->name = '小李';
//  $p2->age = 30;
//  $p2->sex = '女';
 var_dump($p2);
 $p2 -> hello();
?>
