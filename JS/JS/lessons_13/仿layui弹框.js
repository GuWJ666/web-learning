// 提示框的类
function PromptBox(){
    
}

PromptBox.prototype.open = function({
    title:title,
    content:content,
    area:area,
    btn:arr,
    yes:callback1,
    cancel:callback2
}){
    $('<div class="shade"></div>').css({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
        position:'fixed',
        left:0,
        top:0,
        zIndex:100,
        background:'rgba(0,0,0,.2)',
        // opacity:0.3
    }).appendTo('body')
    $('<div class="wraning"></div>').css({
        width:area.length==0?260:area[0],
        height:area.length==0?200:area[1],
        position:'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
        margin:'auto',
        background:'#fff',
        boxShadow: '1px 1px 50px rgba(0,0,0,.3)',
        zIndex:200,
    }).fadeIn(500).appendTo('.shade').slideDown(500)

    $('<div class="title"></div>').css({
        background:'#f8f8f8',
        fontSize:'14px',
        height:'43px',
        lineHeight:'43px',
        paddingLeft:'20px',
        whiteSpace:'wrap'
    }).html(title).appendTo('.wraning')

    $('<div class="content"></div>').css({
        padding:'20px',
        fontSize:'14px',
        whiteSpace:'wrap'
    }).html(content).appendTo('.wraning')

    if(arr.length == 1){
        $('<div class="btn"></div>').css({
            width:60,
            height:30,
            background:'#1e9fff',
            color:'#fff',
            lineHeight:'30px',
            textAlign:'center',
            position:'absolute',
            borderRadius:'2px',
            left:'calc(50% - 30px)',
            bottom:20,
            cursor:'pointer'
        }).html(arr[0]).appendTo('.wraning').click(function(){
            if($('.btn').html() == '确定'){
                callback1();
            }else{
                callback2();
            }
        })
    }

    if(arr.length  == 2){
        $('<div class="btn1"></div>').css({
            width:60,
            height:30,
            background:'#1e9fff',
            color:'#fff',
            lineHeight:'30px',
            textAlign:'center',
            position:'absolute',
            borderRadius:'2px',
            right:100,
            bottom:20,
            cursor:'pointer'
        }).html(arr[0]).appendTo('.wraning').click(function(){
            if($('.btn1').html() == '确定'){
                callback1();
            }else{
                callback2();
            }
        })
        $('<div class="btn2"</div>').css({
            width:60,
            height:30,
            border:'1px solid #ddd',
            color:'#333',
            lineHeight:'30px',
            textAlign:'center',
            position:'absolute',
            borderRadius:'2px',
            right:20,
            bottom:20,
            cursor:'pointer'
        }).html(arr[1]).appendTo('.wraning').click(function(){
            if($('.btn2').html() == '确定'){
                callback1();
            }else{
                callback2();
            }
        })
    }
}

// PromptBox.prototype.open = function({
//     title:title,
//     content:content,
//     area:area,
//     btn:arr,
//     yes:callback1,
//     cancel:callback2
// }){
//     this.show(title,content,area,arr,callback1,callback2);
// }
var promptbox = new PromptBox();

