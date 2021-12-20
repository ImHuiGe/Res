//您自己的js代码写到下面
//登录文字
$('.login-box-content').prepend('<div class="login-box-img mobile-hidden"><div class="desc"><div><p><i class="iconfont iconhuo"></i> 只需一步极速注册</p> <p><i class="iconfont iconhuo"></i> 辉哥助您马到成功</p> <p><i class="iconfont iconhuo"></i> 匠心打磨</p> <p><i class="iconfont iconhuo"></i> 服务为王</p></div></div><img src="/vip/img/vein.png" class="vein">')

//去除登录的背景
$("#login-box .modal-content").css("background-image","none");

// 添加登陆用户不查看,未登录的用户可见 
$(".hgLogin").click(function(){
    $("#login-box > div").attr("class","modal show-modal");
})
$(".login-box-top > .close-button").click(function(){
    $("#login-box > div").attr("class","modal");
})

var OriginTitile = document.title,
    titleTime;
document.addEventListener("visibilitychange",
function () {
    if (document.hidden) {
        document.title = "你别走吖 o(╥﹏╥)o";
        clearTimeout(titleTime)
    } else {
        document.title = "哇，你回来啦ヾ(o´∀｀o)ﾉ  ";
        titleTime = setTimeout(function () {
                document.title = OriginTitile
            },
            2000)
    }
});

// 禁用F12
setInterval(function() {
   check();
}, 2000);
var check = function() {
    function doCheck(a) {
      if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
        (function() {}['constructor']('debugger')());
      } else {
        (function() {}['constructor']('debugger')());
      }
      doCheck(++a);
    }
    try {
      doCheck(0);
    } catch (err) {}
};
check();

// 鼠标特效鼠标点击出现文字效果
var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("?", "富强", "?", "民主", "?", "文明", "?", "和谐", "?", "自由", "?", "平等", "?", "公正",
            "?", "法治", "?", "爱国", "?", "敬业", "?", "诚信", "?", "友善");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "font-size": "10px",
            "animation": "heartbeat .25s infinite .1s",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~
                ~(255 * Math.random()) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1000, function () {
            $i.remove();
        });
    });
});

/*夜间模式按钮切换*/
$("#ls").click(function () {
    if ($(this).hasClass("hg icon-yejian")) {
        $(this).removeClass("hg icon-yejian")
        $(this).addClass("hg icon-rijian")
    } else if ($(this).hasClass("hg icon-rijian")) {
        $(this).removeClass("hg icon-rijian")
        $(this).addClass("hg icon-yejian")
    }
})

// 落叶
jQuery(document).ready(function($) {
    $('body').wpSuperSnow({
        flakes: [
            '/wp-content/themes/b2child/Assets/Js/luoye/008.png',
            '/wp-content/themes/b2child/Assets/Js/luoye/007.png',
            '/wp-content/themes/b2child/Assets/Js/luoye/006.png',
            '/wp-content/themes/b2child/Assets/Js/luoye/004.png',
            '/wp-content/themes/b2child/Assets/Js/luoye/002.png',
            '/wp-content/themes/b2child/Assets/Js/luoye/001.png',
            '/wp-content/themes/b2child/Assets/Js/luoye/003.png',
            '/wp-content/themes/b2child/Assets/Js/luoye/002.png',
            '/wp-content/themes/b2child/Assets/Js/luoye/001.png'],
        totalFlakes: '60',
        zIndex: '9999999',
        maxSize: '30',
        maxDuration: '30',
        useFlakeTrans: true
    });
});
// 落叶js
(function (a) {
    a.fn.wpSuperSnow = function (g) {
        var q, h, r, b, s, n, f, t, m, l = a("head"),
            o = a("body"),
            p, u, d, k = {
                flakes: [],
                totalFlakes: 50,
                zIndex: 999999,
                maxSize: 50,
                maxDuration: 25,
                useFlakeTrans: false
            },
            c = ["wpSuperSnowFlake_l", "wpSuperSnowFlake_r"],
            j = ["wpSuperSnow_l", "wpSuperSnow_r"];
        g = a.extend({}, k, g);
        if (!g.flakes.length) {
            return this
        }
        if (a.wpSuperSnowCSS) {
            l.append('<style type="text/css">' + a.wpSuperSnowCSS + "</style>"), a.wpSuperSnowCSS = ""
        }
        var e = function (v, i) {
            v = (typeof v === "number") ? v : 0;
            i = (typeof i === "number") ? i : Number.MAX_VALUE;
            return Math.floor(Math.random() * (i - v + 1)) + v
        };
        return this.each(function () {
            p = a(this), u = "fixed";
            if (a.inArray(p[0].nodeName.toLowerCase(), ["html", "body"]) === -1) {
                p.css({
                    position: "relative",
                    overflow: "hidden"
                }), u = "absolute"
            }
            d = [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
            for (p = a(this), q = 1; q <= Number(g.totalFlakes); q++) {
                h = e(0, 100);
                r = e(1, 9);
                n = e(1, Number(g.maxSize));
                b = e(Math.floor(Number(g.maxDuration) / 5), Number(g.maxDuration));
                s = (d.length) ? d.shift() : e(0, Math.floor(b / 5));
                t = g.flakes[e(0, g.flakes.length - 1)];
                f = (t.indexOf("flake") !== -1) ? c[e(0, c.length - 1)] : j[e(0, j.length - 1)];
                m = a('<div class="wp-super-snow-flake"><img src="' + t + '" /></div>');
                m.css({
                    width: n + "px",
                    height: n + "px",
                    position: u,
                    "z-index": Number(g.zIndex),
                    left: h + "%",
                    top: "-200px",
                    opacity: "0",
                    "user-select": "none",
                    "-webkit-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none",
                    "backface-visibility": "visible",
                    "-webkit-backface-visibility": "visible",
                    "-moz-backface-visibility": "visible",
                    "-ms-backface-visibility": "visible",
                    animation: f + " " + b + "s infinite",
                    "animation-delay": s + "s",
                    "-webkit-animation": f + " " + b + "s infinite",
                    "-webkit-animation-delay": s + "s",
                    "-moz-animation": f + " " + b + "s infinite",
                    "-moz-animation-delay": s + "s",
                    "-ms-animation": f + " " + b + "s infinite",
                    "-ms-animation-delay": s + "s"
                }), a("img", m).css({
                    width: "100%",
                    height: "auto",
                    border: 0,
                    opacity: (g.useFlakeTrans) ? "." + r : 1
                });
                p.append(m)
            }
        })
    };
    a.wpSuperSnowCSS =
        "@keyframes wpSuperSnow_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; transform:translate3D(500px,1500px,0) rotate(250deg);}}";
    a.wpSuperSnowCSS +=
        "@keyframes wpSuperSnow_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; transform:translate3D(-500px,1500px,0) rotate(-500deg);}}";
    a.wpSuperSnowCSS +=
        "@-webkit-keyframes wpSuperSnow_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -webkit-transform:translate3D(500px,1500px,0) rotate(250deg);}}";
    a.wpSuperSnowCSS +=
        "@-webkit-keyframes wpSuperSnow_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -webkit-transform:translate3D(-500px,1500px,0) rotate(-500deg);}}";
    a.wpSuperSnowCSS +=
        "@-moz-keyframes wpSuperSnow_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -moz-transform:translate3D(500px,1500px,0) rotate(250deg);}}";
    a.wpSuperSnowCSS +=
        "@-moz-keyframes wpSuperSnow_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -moz-transform:translate3D(-500px,1500px,0) rotate(-500deg);}}";
    a.wpSuperSnowCSS +=
        "@-ms-keyframes wpSuperSnow_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -ms-transform:translate3D(500px,1500px,0) rotate(250deg);}}";
    a.wpSuperSnowCSS +=
        "@-ms-keyframes wpSuperSnow_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -ms-transform:translate3D(-500px,1500px,0) rotate(-500deg);}}";
    a.wpSuperSnowCSS +=
        "@keyframes wpSuperSnowFlake_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; transform:translate3D(500px,1500px,0) rotateY(720deg) rotate(250deg);}}";
    a.wpSuperSnowCSS +=
        "@keyframes wpSuperSnowFlake_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; transform:translate3D(-500px,1500px,0) rotateY(-720deg) rotate(-500deg);}}";
    a.wpSuperSnowCSS +=
        "@-webkit-keyframes wpSuperSnowFlake_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -webkit-transform:translate3D(500px,1500px,0) rotateY(720deg) rotate(250deg);}}";
    a.wpSuperSnowCSS +=
        "@-webkit-keyframes wpSuperSnowFlake_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -webkit-transform:translate3D(-500px,1500px,0) rotateY(-720deg) rotate(-500deg);}}";
    a.wpSuperSnowCSS +=
        "@-moz-keyframes wpSuperSnowFlake_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -moz-transform:translate3D(500px,1500px,0) rotateY(720deg) rotate(250deg);}}";
    a.wpSuperSnowCSS +=
        "@-moz-keyframes wpSuperSnowFlake_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -moz-transform:translate3D(-500px,1500px,0) rotateY(-720deg) rotate(-500deg);}}";
    a.wpSuperSnowCSS +=
        "@-ms-keyframes wpSuperSnowFlake_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -ms-transform:translate3D(500px,1500px,0) rotateY(720deg) rotate(250deg);}}";
    a.wpSuperSnowCSS +=
        "@-ms-keyframes wpSuperSnowFlake_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -ms-transform:translate3D(-500px,1500px,0) rotateY(-720deg) rotate(-500deg);}}"
})(jQuery);


// 倒计时小组件
function init_life_time() {
    function getAsideLifeTime() {
        let nowDate = +new Date();
        let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
        let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
        let todayPassHoursPercent = (todayPassHours / 24) * 100;
        $('#dayProgress .title span').html(parseInt(todayPassHours));
        $('#dayProgress .progress .progress-inner').css('width', parseInt(todayPassHoursPercent) + '%');
        $('#dayProgress .progress .progress-percentage').html(parseInt(todayPassHoursPercent) + '%');
        let weeks = {
            0: 7,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6
        };
        let weekDay = weeks[new Date().getDay()];
        let weekDayPassPercent = (weekDay / 7) * 100;
        $('#weekProgress .title span').html(weekDay);
        $('#weekProgress .progress .progress-inner').css('width', parseInt(weekDayPassPercent) + '%');
        $('#weekProgress .progress .progress-percentage').html(parseInt(weekDayPassPercent) + '%');
        let year = new Date().getFullYear();
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let monthAll = new Date(year, month, 0).getDate();
        let monthPassPercent = (date / monthAll) * 100;
        $('#monthProgress .title span').html(date);
        $('#monthProgress .progress .progress-inner').css('width', parseInt(monthPassPercent) + '%');
        $('#monthProgress .progress .progress-percentage').html(parseInt(monthPassPercent) + '%');
        let yearPass = (month / 12) * 100;
        $('#yearProgress .title span').html(month);
        $('#yearProgress .progress .progress-inner').css('width', parseInt(yearPass) + '%');
        $('#yearProgress .progress .progress-percentage').html(parseInt(yearPass) + '%');
    }
    getAsideLifeTime();
    setInterval(() => {
        getAsideLifeTime();
    }, 1000);
}
init_life_time();

// 首页前景
if($("#chakhsu")[0]){
    function chakhsu(r) {
        function t() {
            return b[Math.floor(Math.random() * b.length)]
        }
    
        function e() {
            return String.fromCharCode(94 * Math.random() + 33)
        }
    
        function n(r) {
            for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
                var l = document.createElement("span");
                l.textContent = e(), l.style.color = t(), n.appendChild(l)
            }
            return n
        }
    
        function i() {
            var t = o[c.skillI];
            c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) :
                    "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ?
                    c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0,
                        -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent =
                c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length -
                    c.skillP))), setTimeout(i, d)
        }
        /*以下内容自定义修改*/
        var l = "每一次相聚，",
            o = ["都将是一场离别的盛宴", ].map(function (r) {
                return r + ""
            }),
            a = 2,
            g = 1,
            s = 5,
            d = 75,
            b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)",
                "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)",
                "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)",
                "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
            c = {
                text: "",
                prefixP: -s,
                skillI: 0,
                skillP: 0,
                direction: "forward",
                delay: a,
                step: g
            };
        i()
    };
    chakhsu(document.getElementById('chakhsu'));
}

// 每年12月13日全站变灰
var date = new Date();
var year = date .getFullYear();
var month = date .getMonth()+1;
var day = date.getDate();
if(month=='12' && day=='13'){
   $("html").css({
       "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
       "-webkit-filter":"grayscale(100%)"
   });
  console.log("昭昭前事，惕惕后人，铭记历史，吾辈奋进。此刻，南京！");
}