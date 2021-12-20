(function(){
    if(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === ''){
        if(new Date().getHours() > 20 || new Date().getHours() < 6){
            document.body.classList.add('night');
            document.cookie = "night=1;path=/";
            $(".logo img").attr("src","//attch.tcdn.top/Blog/2021/04/2021040705171589.png@!ytwsy");
        }else{
            document.body.classList.remove('night');
            document.cookie = "night=0;path=/";
            $(".logo img").attr("src","//attch.tcdn.top/Blog/2021/04/2021040705171771.png@!ytwsy");
        }
    }else{
        var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
        if(night == '0'){
            document.body.classList.remove('night');
            $(".logo img").attr("src","//attch.tcdn.top/Blog/2021/04/2021040705171771.png@!ytwsy");
        }else if(night == '1'){
            document.body.classList.add('night');
            $(".logo img").attr("src","//attch.tcdn.top/Blog/2021/04/2021040705171589.png@!ytwsy");
        }
    }
})();
function switchNightMode(){
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if(night == '0'){
        document.body.classList.add('night');
        document.cookie = "night=1;path=/";
        $(".logo img").attr("src","//attch.tcdn.top/Blog/2021/04/2021040705171589.png@!ytwsy");
    }else{
        document.body.classList.remove('night');
        document.cookie = "night=0;path=/";
        $(".logo img").attr("src","//attch.tcdn.top/Blog/2021/04/2021040705171771.png@!ytwsy");
    }
}
