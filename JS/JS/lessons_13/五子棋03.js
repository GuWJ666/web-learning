// 棋盘类，负责和棋盘相关的事务处理
function ChessMap(n) {
    this.n = n;//表示棋盘中一个格子的宽度
    this.type = 1;//1表示改下黑棋了，2表示该下白棋子了
    this.group = [];//用来存放下在棋盘上的棋子对象
}
// 绘制棋盘的方法
ChessMap.prototype.draw = function () {
    var n = this.n;
    for (var i = 0; i <= 500 / n; i++) {
        // 横线
        $('<div class="line"></div>').css({
            width: '500px',
            height: '1px',
            top: i * n,
            left: 0
        }).appendTo('#box');

        // 竖线
        $('<div class="line"></div>').css({
            width: '1px',
            height: '500px',
            top: 0,
            left: i * n
        }).appendTo('#box');
    }
}
// 棋盘点击的方法
// var Arr = [];
ChessMap.prototype.on = function () {
    var _this = this;
    $('#box').on('click', function (e) {
        //获取鼠标坐标(棋盘内)
        var cx = e.clientX - $(this).offset().left,
            cy = e.clientY - $(this).offset().top;
        // 对坐标进行处理，保证棋子落在线的交点上
        var x = Math.round(cx / _this.n),
            y = Math.round(cy / _this.n);

        // 判断当前算出来的位置已经存在棋子
        for (var i = 0; i < _this.group.length; i++) {
            var c = _this.group[i];//每一个棋子对象
            if (c.x == x && c.y == y) {
                return;
            }
        }
        // for(var i=0;i<Arr.length;i++){
        //     if(Arr[i][0] == x && Arr[i][1] == y){
        //         return;
        //     }
        // }
        // var arr = [];
        // arr.push(x,y);
        // Arr.push(arr);
        // 创建棋子对象，并显示
        var chess = new Chess(x, y, _this.n, _this.type);
        chess.show();
        // 改变棋子颜色
        _this.type = _this.type > 1 ? 1 : 2;
        // 存储棋子对象
        _this.group.push(chess);
        // 判断胜负
        _this.win();
    })
}
// 一处点击的方法
ChessMap.prototype.off = function(){
    $('#box').off();
}
// 判断胜负的方法
ChessMap.prototype.win = function () {
    // 遍历棋盘上所有的棋子以每一颗为“米”字的中心，判断胜负
    for (var i = 0; i < this.group.length; i++) {
        var cx = this.group[i].x, cy = this.group[i].y;
        var cc = this.group[i].c;
        var count = 0;//记录连续棋子的数量
        // 水平方向上
        for (var j = 0; j < this.group.length; j++) {
            var nx = this.group[j].x, ny = this.group[j].y;
            var nc = this.group[j].c;
            if (cc == nc && ny == cy && nx >= cx - 2 && nx <= cx + 2) {
                count++;
            }
        }
        if(this.msg(count, cc)){return};
        count = 0;
        // 垂直方向
        for (var n = 0; n < this.group.length; n++) {
            var x = this.group[n].x, y = this.group[n].y;
            var c = this.group[n].c;
            if (cc == c && x == cx && y >= cy - 2 && y <= cy + 2) {
                count++;
            }
        }
        if(this.msg(count, cc)){return};
        count = 0;
        // 左倾
        for (var j = 0; j < this.group.length; j++) {
            var nx = this.group[j].x, ny = this.group[j].y;
            var nc = this.group[j].c;
            if (cc == nc) {
                if (nx == cx - 1 && ny == cy - 1 || nx == cx - 2 && ny == cy - 2 || nx == cx + 1 && ny == cy + 1 || nx == cx + 2 && ny == cy + 2 || nx == cx && ny == cy) {
                    count++;
                }
            }
        }
        if(this.msg(count, cc)){return};
        count = 0;
        // 右倾
        for (var j = 0; j < this.group.length; j++) {
            var nx = this.group[j].x, ny = this.group[j].y, nc = this.group[j].c;
            if (cc == nc) { 
                if (nx == cx - 1 && ny == cy + 1 || nx == cx - 2 && ny == cy + 2 || nx == cx + 1 && ny == cy - 1 || nx == cx + 2 && ny == cy - 2 || nx == cx && ny == cy) {
                    count++;
                }
            }
        }
        if(this.msg(count, cc)){return};
        count = 0;
    }
}
// 显示胜利信息的方法
ChessMap.prototype.msg = function (count, type) {
    var _this = this;
    if (count == 5) {
        setTimeout(function () {
            var winner = type > 1 ? '白方' : '黑方';
            var res = confirm(winner+'胜利，是否在再战一局？');
            if(res){
                // 再来一局
                _this.group = [];
                $('#box').empty();
                _this.draw();
                _this.type = 1;
            }else{
                _this.off();
            }
        }, 20)
        return true;
    }
    return false;
}

// 棋子类
function Chess(x, y, size, c) {
    this.x = x;//棋子坐标
    this.y = y;
    this.size = size;//棋子尺寸
    this.c = c;//棋子颜色
}
// 棋子显示的方法
Chess.prototype.show = function () {
    $('<div class="chess"></div>').css({
        width: this.size,
        height: this.size,
        top: this.y * this.size - this.size / 2,
        left: this.x * this.size - this.size / 2,
        background: this.c > 1 ? 'snow' : 'black'
    }).appendTo('#box');
}