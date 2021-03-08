<?php

// 字符串及字符串操作方法
// 依然可以使用‘’或“”表示字符串，同类型引号不能嵌套，不同的地方在于，PHP中的“”可以解析变量
$name = '小王';
$age = 20;
// echo '我的名字叫'.$name.',我今年'.$age.'岁了';
// echo "我的名字叫{$name},我今年{$age}岁了";
// echo '我的名字叫$name,我今年$age岁了';

// 定界符声明字符串
// $str = <<<EEE
//     你好,
//     我是{$name},
//     我今年{$age}岁了。
// EEE;
// echo $str;

// 1.读取字符串长度,PHP中字符串长度对汉字的处理，每个汉字占三个长度
$str = 'hello world';
// $str = '你好 世界';
$len = strlen($str);
echo $len;
// echo substr($str,4,3);
// print_r(strpos($str,'world'));
// var_dump(strpos($str,'world'));
// 2.转数组:exlpode()  
// 3.截取：substr(string,start,length);
// 4.大写：strtoupper()
// 5.小写：strtolower()
// 6.每个单词首字母大写：ucwords()
// 7.ucfirst()	如果字符串第一个字符是字符，将其转为大写
// 8.ltrim()函数只从字符的开始处（左边）去除空格
// rtrim()函数只从函数的结束处（右边）去除空格
// 9.PHP strrev() 函数反转字符串：
// 10.PHP strpos() /  stripos()->不区分大小写  函数用于检索字符串内指定的字符或文本。如果找到匹配，则会返回首个匹配的字符位置。如果未找到匹配，则将返回 FALSE
// 11.PHP str_replace('1','2',$str) / strtr($str,'1','2')函数用一些字符串替换字符串中的另一些字符。
// 下面的例子用 "Kitty" 替换文本 "world"：





// implode()  （jion()是implode()函数的别名）
// 把数组元素组合为字符串：
?>