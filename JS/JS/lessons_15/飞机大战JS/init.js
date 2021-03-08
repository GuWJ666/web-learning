let imgSrc = ['./飞机大战JS/img/background.png', './飞机大战JS/img/herofly.png', './飞机大战JS/img/enemy1.png', './飞机大战JS/img/enemy2.png', './飞机大战JS/img/enemy3.png', './飞机大战JS/img/bullet1.png', './飞机大战JS/img/prop.png', './飞机大战JS/img/bomb.png'];//存放图片路径
let imgs = [];//存放图片
let count = 0;//图片加载完成数量
let cv = document.getElementById('cv');
let cf = cv.getContext('2d');//获取画笔
let w = cv.width;//宽度
let h = cv.height;//高度
let bg;//背景对象
let hero;//我方飞机对象
let bullets = [];//子弹数组
let enemys = [];//敌机
let dbBullet = false;
var fsBullet = false;
// 预加载函数
let preload = callback => {
    // 图片预加载
    for (let i = 0; i < imgSrc.length; i++) {
        var img = new Image();
        imgs.push(img);
        img.onload = function () {//一张图片加载完成
            count++;
            if (count == imgSrc.length) {//所有图片加载完成
                callback();//调用函数
            }
        }
        img.src = imgSrc[i];
        console.log(...imgSrc);
        // imgs[i].src = ...imgSrc;
    }
}
// 背景类
class Bg {
    // 构造函数
    constructor(img = imgs[0], y = 0) {
        this.img = imgs[0],
            this.y = 0
    }
    // 绘制
    draw() {
        this.move();
        cf.beginPath();
        cf.drawImage(this.img, 0, this.y, w, h);//画图片
        cf.drawImage(this.img, 0, this.y - h, w, h);
    }
    // 移动
    move() {
        this.y += 5;
        if (this.y > h) {
            this.y = 0;
        }
    }
}
// 我方飞机
class Hero {

    constructor(img = imgs[1]) {
        this.img = imgs[1];
        this.w = this.img.width / 5;
        this.h = this.img.height;
        this.x = (w - this.w) / 2;
        this.y = h - this.h;
        this.index = 1;//截取图片时的位置下标
        this.left = false;
        this.top = false;
        this.right = false;
        this.bottom = false;
        this.speed = 3;//移动速度
    }

    // 绘制
    draw() {
        this.move();
        cf.beginPath();
        cf.drawImage(this.img, this.w * this.index, 0, this.w, this.h, this.x, this.y, this.w, this.h);
    }
    // 移动
    move() {
        if (this.left) { this.x -= this.speed };
        if (this.top) { this.y -= this.speed };
        if (this.right) { this.x += this.speed };
        if (this.bottom) { this.y += this.speed };
        this.x < 0 ? this.x = 0 : this.x;
        this.y < 0 ? this.y = 0 : this.y;
        this.x > w - this.w ? this.x = w - this.w : this.x;
        this.y > h - this.h ? this.y = h - this.h : this.y;
    }
}
// 子弹
class Bullet {
    constructor(x) {
        this.img = imgs[5];
        this.w = this.img.width;
        this.h = this.img.height;
        this.x = x;
        this.y = hero.y - this.h;
        this.speed = 5;
    }
    draw() {
        this.move();
        cf.beginPath();
        cf.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    move() {
        this.y -= this.speed;
    }
}
let bulletNum = 0;
let bulletSpe = 10;
let bullet_creat = () => {
    bulletNum++;
    bulletSpe = fsBullet ? 5 : 10;
    if (bulletNum % bulletSpe == 0) {
        if (!dbBullet) {
            let bullet = new Bullet(hero.x + hero.w / 2 - 3);
            bullets.push(bullet);
        } else {
            bullets.push(new Bullet(hero.x), new Bullet(hero.x + hero.w - 6));
        }
    }
}
let bullet_draw = () => {
    bullet_creat();
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].y < -bullets[i].h) {
            bullets.splice(i, 1);
            i--;
            continue;
        }
        bullets[i].draw();
    }
}
// 敌机
class Enemy {
    constructor(img, n, speed, g) {
        this.img = img;
        this.w = this.img.width / n;
        this.h = this.img.height;
        this.x = rn(0, w - this.w);
        this.y = -this.h - 50;
        this.index = 0;
        this.speed = speed;
        this.maxIndex = n - 1;
        this.die = false;
        this.g = g;
    }
    draw() {
        this.move();
        cf.beginPath();
        cf.drawImage(this.img, this.w * this.index, 0, this.w, this.h, this.x, this.y, this.w, this.h);
    }
    move(){
        if (this.die) {
            return;
        }
        this.y += this.speed;
    }
}
let enemyNum = 0;
let enemy_creat = () => {
    if (rn(1, 100) > 50) {
        enemyNum++;
    }
    if (enemyNum > 30) {
        let type = rn(1, 100);
        enemyNum = 0;
        if (type >= 40) {
            let enemy = new Enemy(imgs[2], 5, rn(4, 6),50);
            enemys.push(enemy);
        } else if (type >= 10) {
            let enemy = new Enemy(imgs[3], 6, rn(3, 4),100);
            enemys.push(enemy);
        } else {
            let enemy = new Enemy(imgs[4], 10, rn(1, 2),200);
            enemys.push(enemy);
        }
        
    }
}
let  enemy_draw = () => {
    enemy_creat();
    for (let i = 0; i < enemys.length; i++) {
        if(enemys[i].y > h){
            enemys.splice(i,1);
            i--;
            continue;
        }
        enemys[i].draw();
    }
}
preload(() => {
    // 背景
    bg = new Bg();
    // bg.draw();
    // 我方飞机
    hero = new Hero();
    // hero.draw();

    // 箭头函数
    setInterval(() => {
        cv.width = cv.width;
        bg.draw();
        hero.draw();
        bullet_draw();
        enemy_draw();
    }, 20)
})


document.onkeydown = function (e = e || window.event) {
    // console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            hero.left = true;
            break;
        case 38:
            hero.top = true;
            break;
        case 39:
            hero.right = true;
            break;
        case 40:
            hero.bottom = true;
            break;
        // case 32://炸弹
    }
}

document.onkeyup = function (e = e || window.event) {
    // console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            hero.left = false;
            break;
        case 38:
            hero.top = false;
            break;
        case 39:
            hero.right = false;
            break;
        case 40:
            hero.bottom = false;
            break;
        // case 32://炸弹
    }
}
function rn(x,y){
    return Math.round(Math.random()*(y-x)+x);
}