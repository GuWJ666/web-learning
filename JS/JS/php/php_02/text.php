<?php

// 声明一个分数类，有属性分子和分母，可以进行分数打印，分数四则运算，分数约分
class Fraction{
    public $fenzi;
    public $fenmu;

    // 构造分数方法
    function __construct($fenzi,$fenmu){
        $this -> fenzi = $fenzi;
        $this -> fenmu = $fenmu;
    }
    // 显示分数方法
    function show(){
        echo $this -> fenzi.'/'.$this -> fenmu;
    }
    // 分数约分
    // function yuefen(){
    //     $
    // }
    // 加
    function add(&$n){
        $x = $this -> fenzi;
        $y = $this -> fenmu;
        $p = $n -> fenzi;
        $q = $n -> fenmu;
        $max =$y>$q?$y:$q;
        for($i=0;$i<$y*$q;$i++){
            if($i % $y == 0 && $i % %q == 0){
                break;
            }
        }
        $x *= $i/$y;
        $p *= $i/$q;
        $z = $x+$p;
        $m = $i;
        return new Fraction($z,$m); 
    }
    // 减
    // 乘
    function times(&$n){
        $x = $this -> fenzi;
        $y = $this -> fenmu;
        $p = $n -> fenzi;
        $q = $n -> fenmu;
        $z = $x * $p;
        $m = $y * $q;
        return new Fraction($z,$m);
    }
    // 除
    function divisor(&$n){
        $x = $this -> fenzi;
        $y = $this -> fenmu;
        $p = $n -> fenzi;
        $q = $n -> fenmu;
        $z = $x * $q;
        $m = $y * $p;
        return new Fraction($z,$m);
    }
}
$f1 = new Fraction(1,2);
// $f1-> show();
$f2 = new Fraction(3,4);
// $f2 -> show();
$f2->times($f1)->show();
echo '<hr>';
$f2->divisor($f1)->show();
echo '<hr>';
$f2->add($f1)->show();






?>