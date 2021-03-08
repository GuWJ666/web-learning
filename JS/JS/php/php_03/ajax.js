// 仿照jq提供的ajax方法对原生ajax进行封装
// 支持：
// 1.设置请求类型（如果不设置默认为get）
// 2.设置同步/异步（如果不设置默认为异步）
// 3.设置请求地址
// 4.设置携带参数（可以是string，也可以是object）
// 5.设置成功回调

// function ajax({
//     url: url,
//     type: type,
//     async: async,
//     data: data,
//     success: callback
// }) {
//     // 创建请求对象
//     var xhr;
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else {
//         xhr = new ActiveXObject('Microsoft.XMLHTTP');
//     }
//     // 准备请求&发送请求
//     if(type == 'get'){
//         var d;
//         if(typeof data == 'object'){
//             for(var x in data){
//                 d += (x+'='+data[x]+'&');
//             }
//         }else if(typeof data == 'string'){
//             d = data;
//         }
//         xhr.open(type,url+'?'+d,async?async:true);
//         xhr.send();
//     }else{
//         xhr.open(type,url,async?async:true);
//         // 创建请求头
//         xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//         // 发送请求
//         xhr.send(data);
//     }
//        // 请求监听
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && xhr.status == 200){
//             callback();
//         }
//     }
// }

function ajax(option) {
    // 1.创建请求对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    // 2.准备请求
    // 判断请求类型(对请求类型进行大小写的同一)
    var type = option.type?option.type.toUpperCase():'GET';
    var async = option.async?option.async:true;
    // 处理数据格式
    var data = [];
    if(option.data && typeof option.data === 'object'){
        for(var x in data){
            data.push(x+'='+option.data[x]);
        }
        data = data.join('&');
    }else{
        data = option.data;
    }

    if (type && type === 'POST') {
        // post请求
        xhr.open(type,option.url,async);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        // 准备请求
        xhr.send(data);
    } else {
        // get请求
        xhr.open(type,option.url+'?'+data,async);
    }

    // 监听请求
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            if(option.success){
                option.success(xhr.responseText,'success',xhr);
            }
        }
    }

}
