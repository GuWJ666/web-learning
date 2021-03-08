// 棋子类
function Chess(x,y,l,t,c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.w = n;
    this.h = n;
    this.l = l;
    this.t = t;
}
Chess.prototype.show = function(){
    var chess = $('<div class="chess"></div>').css({
        width: this.w,
        height: this.h,
        left: this.l,
        top: this.t,
        backgroundColor: this.c>1?'white':'black'
    }).appendTo('#box');
}

// 棋盘类
function ChessMap(){
    this.map = [];
}
ChessMap.prototype.init = function(){
    for(var i=0;i<=500/n;i++){
        var arr = [];
        for(var j=0;j<=500/n;j++){
            arr[j] = 0;
        }
        this.map.push(arr);
    }
    this.on();
}
ChessMap.prototype.draw = function(n){
    this.init();
    for(var i=0;i<=500/n;i++){
        $('<div class="line"></div>').css({
            width: 500,
            height: 1,
            top: n*i,
            left: 0
        }).appendTo('#box');
        $('<div class="line"></div>').css({
            width: 1,
            height: 500,
            top: 0,
            left: n*i
        }).appendTo('#box');
    }
}
ChessMap.prototype.win = function(chess){
    var count = 0;
    var x = chess.x ,y = chess.y ,count = 0;
    var min = 0, max = this.map.length;

    for(var i=0;x-i>=min;i++){
        if(this.map[y][x] != this.map[y][x-i]){
            break;
        }
        count++;
    }
    for(var i=1;x+i<=max;i++){
        if(this.map[y][x] != this.map[y][x+i]){
            break;
        }
        count++;
    }
    if(count >= 5){
        this.showMsg(chess);
        return;
    }

    count = 0;
    for(var i=0;y-i>=min;i++){
        if(this.map[y][x] != this.map[y-i][x]){
            break;
        }
        count ++;
    }
    for(var i=1;y+i<=max;i++){
        if(this.map[y][x] != this.map[y+i][x]){
            break;
        }
        count ++;
    }
    if(count >= 5){
        this.showMsg(chess);
        return;
    }

    count = 0;
    for(var i=0;x-i>=min&&y-i>=min;i++){
        if(this.map[y][x] != this.map[y-i][x-i]){
            break;
        }
        count ++;
    }
    for(var i=1;x+i<=max&&y+i<=max;i++){
        if(this.map[y][x] != this.map[y+i][x+i]){
            break;
        }
        count ++;
    }
    if(count >= 5){
        this.showMsg(chess);
        return;
    }
    count = 0;
    for(var i=0;x+i<=max&&y-i>=min;i++){
        if(this.map[y][x] != this.map[y-i][x+i]){
            break;
        }
        count ++;
    }
    for(var i=1;x-i>=min&&y+i<=max;i++){
        if(this.map[y][x] != this.map[y+i][x-i]){
            break;
        }
        count ++;
    }
    if(count >= 5){
        this.showMsg(chess);
        return;
    }

}
ChessMap.prototype.reset = function(){
    $('#box').empty();
    this.map = [];
    this.draw(n);
    type = 1;
}
ChessMap.prototype.showMsg = function(chess){
    var win = chess.c>1?'白方胜':'黑方胜';
    setTimeout(function(){
        layui.use('layer',function(){
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: [win,'font-size:30px;'],
                content: '是否战个痛？',
                area: '300px',
                btn: ['确定','取消'],
                yes: function(index){
                    layer.close(index);
                    map.reset();
                }
            })
        })
    })
    this.off();
}
ChessMap.prototype.on = function(){
    $('#box').on('click',function(e){
        var x = e.clientX - $(this).offset().left;
        var y = e.clientY - $(this).offset().top;
        x = Math.round(x/n);
        y = Math.round(y/n);
        if(map.map[y][x] > 0){return;}
        map.map[y][x] = type;
        var l = x*n - n/2;
        var t = y*n - n/2;
        var chess = new Chess(x,y,l,t,type);
        chess.show();
        map.win(chess);
        type==1?type=2:type=1;
    })
}
ChessMap.prototype.off = function(){
    $('#box').off();
}