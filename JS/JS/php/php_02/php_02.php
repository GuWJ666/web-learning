<?php

    //修饰符以及继承
    // public:共有的,当前类内部可以访问，类的实例对象可以访问，当前的子类内部可以访问，子类创建的实例对象也可以访问
    // private:私有的，只能在当前类的内部访问，类的实例对象，子类，子类的实例独享都无法访问
    // protected:受保护的，当前类内部以及子类内部访问，自身实例对象和子类的实例对象无法访问

    class People{
        // 称为类实例对象的属性，也叫类的成员变量
        public $name = '小王';
        protected $age = 20;
        private $sex = '男';

        protected function getSex(){
            return $this -> sex;
        }
    }

    // PHP中通过extends实现类的继承
    // 声明一个学生类，继承于人类
    class Student extends People{
        public $school = 'xx第一中学';
        protected $className = '三年二班';
        private $id = '001';

        // 对外提供的访问受保护属性age的方法
        function getAge(){
            return $this->age;
        }
        // 对外提供的修改受保护属性age的方法
        function setAge($age){
            $this->age = $age;
        }

        function myGetSex(){
            return $this -> getSex();
        }
    }
    $p = new People();
    var_dump($p);
    echo '<hr>';
    $s = new Student();
    var_dump($s);
    echo '<hr>';

    // 共有属性，子类的实例对象可以访问
    // echo "{$s->school}<hr>";
    // echo "{$s->name}<hr>";

    // 受保护属性，实例对象无法访问，只能在类内部访问
    // echo "{$s->age}<hr>";
    // echo $s -> getAge();
    // $s -> setAge(30);
    // echo $s->getAge();

    // 私有的：子类也无法访问
    echo $s -> myGetSex();

    // static:静态的，静态变量只会初始化一次
    // 计数器
    function add(){
        // static修饰的变量只允许初始化一次，并且变量将驻扎在内存中，
        static $count = 0;//只执行第一次
        $count++;
        echo $count;
    }
    add();
    add();
    $count = 100;
    add();


    // const:常量（常变量）：值不会发生变化的变量
    // 常量的命名许需要以$开头，并且通常大写
    // 常量不允许被二次赋值
    // const PI = 3.1415926535;
    // echo PI;
    // define('PI',3.1415926535);
    // echo PI;

    





?>