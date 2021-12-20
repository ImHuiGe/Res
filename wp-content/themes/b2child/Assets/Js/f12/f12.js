

//debug调试时跳转页面
    var element = new Image();
    Object.defineProperty(element,'id',{get:function(){window.location.href="//api-oss.tcdn.top/404.html"}});
    // console.log(element);
    
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
      
      
      document.onkeydown = function () {
        var e = window.event || arguments[0];
       if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            //ctrl + shift + i
            
            return false;
        } 
    }


// 禁止图片拖放
document.ondragstart = function() {
	return false
};
// 禁止选择文本
// document.onselectstart = function() {
// 	if (event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password") return false;
// 	else return true;
// };
// if (window.sidebar) {
// 	document.onmousedown = function(e) {
// 		var obj = e.target;
// 		if (obj.tagName.toUpperCase() == "INPUT" || obj.tagName.toUpperCase() == "TEXTAREA" || obj.tagName.toUpperCase() == "PASSWORD") return true;
// 		else return false;
// 	}
// };
// 禁止frame标签引用
if (parent.frames.length > 0) top.location.replace(document.location);



//屏蔽右键菜单
document.oncontextmenu = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}
//屏蔽粘贴
// document.onpaste = function (event) {
//     if (window.event) {
//         event = window.event;
//     }
//     try {
//         var the = event.srcElement;
//         if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
//             return false;
//         }
//         return true;
//     } catch (e) {
//         return false;
//     }
// }
//屏蔽复制

//屏蔽剪切
document.oncut = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}


 

//禁止f12

function fuckyou() {
    window.close(); //关闭当前窗口(防抽)
    window.location = "about:blank"; //将当前窗口跳转置空白页
}
//禁止Ctrl+U
var arr = [123, 17, 18];
document.oncontextmenu = new Function("event.returnValue=false;"), //禁用右键

    window.onkeydown = function (e) {
        var keyCode = e.keyCode || e.which || e.charCode;
        var ctrlKey = e.ctrlKey || e.metaKey;
        // console.log(keyCode + "--" + keyCode);
        if (ctrlKey && keyCode == 85) {
            e.preventDefault();
        }
        if (arr.indexOf(keyCode) > -1) {
            e.preventDefault();
        }
    }

function ck() {
    console.profile();
    console.profileEnd();
    //我们判断一下profiles里面有没有东西，如果有，肯定有人按F12了，没错！！
    if (console.clear) {
        console.clear()
    };
    if (typeof console.profiles == "object") {
        return console.profiles.length > 0;
    }
}
