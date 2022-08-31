$(function(){
    

    var slide1 = $('.instagram>ul.instagram_1');//슬라이드전체영역
 
    //width()메서드는 선택한 요소의 너비를 반환
    //height()메서드는 선택한 요소의 높이를 반환
    var slideListWidth1 = $('.instagram>ul.instagram_1>li').width();

    var current = 0;

    var setInterval01;
     

    mainSlide1();

    function mainSlide1(){
        setInterval01 = setInterval(function(){
            slide1.stop().animate({left:-slideListWidth1},500 ,function(){
                $('.instagram>ul.instagram_1>li:first').insertAfter('.instagram>ul.instagram_1>li:last');
                //슬라이드에 다음이미지 삽입하기 insertAfter()
                //지정한 요소 시작부분에 내용을 삽입 Before()
                slide1.css('left',0);
            })
        },2000);
    }

    $('.instagram>ul>li').on({

        mouseover: function(){
            clearInterval(setInterval01);
        }, mouseout: function(){
            mainSlide1();
        }
    });
});



$(function(){

    var visual = $('#banner>ul>li');//슬라이드이미지
    var button = $('#buttonList>li');//동그라미버튼
    var leftBtn = $('.arrow_left');//이전버튼
    var rightBtn = $('.arrow_right');//다음버튼
    var current = 0;
    var setIntervalId;//clearInterval을 사용하기위해 변수가 필요함.

    timer(); //사용자 지정함수

    function timer(){
        setIntervalId = setInterval(function(){

            var prev = visual.eq(current);
            var pn = button.eq(current); 

            move(prev, 0, '-100%');
            pn.removeClass('on');

            current++;
            
            if(current == visual.size()){current=0}

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0);
            pnn.addClass('on');

        },3000);
    };

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500);
    }

    /* 동그라미 버튼클릭했을 때 */
    button.on({click:function(){

        var tg = $(this);
        var i = tg.index();

        button.removeClass('on'); //현재 활성화된 'on'이 두 번생기는 일을 방지하기위해(ex.이렇게 removeclass를 안해준다면,밑의 작은 동그라미들 클릭하고난뒤 클릭해제가 영원히 안될것이다,,,클릭된상태의동그라미들(까만동그라미)만 늘어날것,,,)
        tg.addClass('on'); //선택한 버튼에만 'on'기능 활성화

        move1(i); //호출하는 기능,,,아래 move함수가 실행되도록 호출

        }
    });    //배너사진들이 자동 롤링되면서 클릭했을때 버튼이 까맣게 변하는거까지 함


    function move1(i){
        if(current == i) return //현재 보이는 이미지가 i와 같다면 종료.
        
        var currentEl = visual.eq(current); //현재보여지는순번
        var nextEl = visual.eq(i) //내가선택하는순번


        //현재보이는 이미지를 왼쪽으로 이동
        currentEl.css({left:0}).stop().animate({left:'-100%'},500);
        //다음이미지를 현재로 이동... %(문자)때문에 100%는 ''(문자)안에 작성해야함
        nextEl.css({left:'100%'}).stop().animate({left:0},500);

        current = i; //선택되어진 i(순번)은  current가 됨.
    }

    //호버 시 멈추게 하는 기능
    $('#banner').on({

        mouseover: function(){
            clearInterval(setIntervalId);
        }, mouseout: function(){
            timer();
        }
    });
    //호버 시 멈추게 하는 기능 (배너사진위에 마우스 커서 올려놓으면 커서 사라질때까지 롤링안되고 멈춰잇게하는거)끝










// 오른쪽화살표or왼쪽화살표 누르면 배너사진들이 휙휙빠르게 롤링되는거 

    rightBtn.click(function(){

        var prev = visual.eq(current);  
        var pn = button.eq(current);/*작은동그라미3개  버튼까지 같이 변화하게하는거 */

        move(prev, 0, '-100%');
        pn.removeClass('on');/* 작은동그라미3개 버튼까지 같이 변화하게하는거 */

        current++;  

        if (current == visual.size()){current = 0;}
         

        var next = visual.eq(current);
        var pnn =  button.eq(current);/* 작은동그라미3개 버튼까지 같이 변화하게하는거 */

        move(next, '100%', 0);
        pnn.addClass('on');/* 작은동그라미3개 버튼까지 같이 변화하게하는거 */

        return; 
    });



    leftBtn.click(function(){

        var prev = visual.eq(current);
        var pn = button.eq(current);/* 아래의 작은동그라미버튼 3개까지 같이 변화하게하는거 */


        move(prev, 0, '100%');
        pn.removeClass('on');/* 작은동그라미3개 버튼까지 같이 변화하게하는거 */

        current--; 

        if (current == -visual.size()){current = 0;}
        

        var next = visual.eq(current);
        var pnn =  button.eq(current);/* 작은동그라미3개 버튼까지 같이 변화하게하는거 */

        move(next, '-100%', 0);
        pnn.addClass('on');/* 작은동그라미3개 버튼까지 같이 변화하게하는거 */

        return; 
    });

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left: end}, {duration: 500,ease: 'easeOutCubic'});  
    }

   // 오른쪽화살표or왼쪽화살표 누르면 배너사진들이 휙휙빠르게 롤링되는거 끝끝




   


});


/*  */
 // 1. 회사 소개 ~ 고객지원 까지의 큰메뉴
    $("#menu_slide>nav>ul>li").mouseenter(function () { //마우스엔터 대신 호버를 써도 동일하게 동작됨
        $("#menu_slide>nav>ul>li ul").stop().slideDown(300); /* 기본 속도는 0.4s */
        $("#menu_slide>nav>ul>li").stop().slideDown(300);
        $(".sub_shadow").stop().slideDown(300);
      });

    $("#menu_slide>nav>ul>li").mouseleave(function () {
        $("#menu_slide>nav>ul>li ul").stop().slideUp();
        $(".sub_shadow").stop().slideUp();
    });


    // 2. 내부의 소메뉴에 대해서 Mouse over Event
    $("#menu_slide>nav>ul>li > ul > li").mouseenter(function () {
        $(this).css("background-color", "#9ed57e"); /* 선택된것만 초록색으로 */
    });

    $("#menu_slide>nav>ul>li > ul > li").mouseleave(function () {
        $(this).css('border-bottom', "0px")
     });


    // 3. 모바일 페이지에서 동작하도록 설정 버튼에 대한 이벤트
    var trigger = $('#trigger');
    var btn = 1

    $(trigger).on('click', function () {
        var menu = $('#menu_slide');
        if (btn == 0) {
            menu.slideUp();

            btn = 1;
        } else {
            menu.slideDown();

            btn = 0;
        }

        e.preventDefault();
    });


    $(document).ready(function () {

        // 1. 회사 소개 ~ 고객지원 까지의 큰메뉴
        $("#menu_slide>nav>ul>li").mouseenter(function () { //마우스엔터 대신 호버를 써도 동일하게 동작됨
            $("#menu_slide>nav>ul>li ul").stop().slideDown(300); /* 기본 속도는 0.4s */
            $("#menu_slide>nav>ul>li").stop().slideDown(300);
            $(".sub_shadow").stop().slideDown(300);
            $("#menu_slide>nav>ul ul").css("background-color", " rgba(255, 255, 255, .9)"); /* 모든ul의배경은흰색 */
            $(this).find('ul').css("background-color", " rgba(255, 255, 255, .9)"); /* 선택된것만 초록색으로 */
         });
    
        $("#menu_slide>nav>ul>li").mouseleave(function () {
            $("#menu_slide>nav>ul>li ul").stop().slideUp();
            $(".sub_shadow").stop().slideUp();
        });
    
    
        // 2. 내부의 소메뉴에 대해서 Mouse over Event
        $("#menu_slide>nav>ul>li > ul > li").mouseenter(function () {
            $(this).css("background-color", "#9ed57e"); /* 선택된것만 초록색으로 */
        });
    
        $("#menu_slide>nav>ul>li > ul > li").mouseleave(function () {
            $(this).css('border-bottom', "0px")
            $(this).css("background-color", "white");
        });
    
    
        // 3. 모바일 페이지에서 동작하도록 설정 버튼에 대한 이벤트
        var trigger = $('#trigger');
        var btn = 1
    
        $(trigger).on('click', function () {
            var menu = $('#menu_slide');
            if (btn == 0) {
                menu.slideUp();
    
                btn = 1;
            } else {
                menu.slideDown();
    
                btn = 0;
            }
    
            e.preventDefault();
        });

    });



    
$(document).ready(function () {

    // 1. 회사 소개 ~ 고객지원 까지의 큰메뉴
    $(".footer1_1>ul>li").mouseenter(function () { //마우스엔터 대신 호버를 써도 동일하게 동작됨
        $(".footer1_1>ul>li ul").stop().slideDown(300); /* 기본 속도는 0.4s */
        $(".footer1_1>ul>li").stop().slideDown(300);
        $(".footer1_1>ul ul").css("background-color", "whi"); /* 모든ul의배경은흰색 */
        $(this).find('ul').css("background-color", "#ecfdb"); /* 선택된것만 초록색으로 */

    });

    $(".footer1_1>ul>li").mouseleave(function () {
        $(".footer1_1>ul>li ul").stop().slideUp();
    });


    // 2. 내부의 소메뉴에 대해서 Mouse over Event
    $(".footer1_1>ul>li").mouseenter(function () {
        $('.sub_menu').removeClass('none')
    });

   
    $(".sub_menu").mouseleave(function () {
        $('.sub_menu').addClass('none')
    });

    $(".sub_menu > ul > li").mouseenter(function () {
        $(this).css('background-color', '#999');
    })

    $(".sub_menu > ul > li").mouseleave(function () {
        $(this).css('background-color', '');
    })


     


 

});

$(function(){

//반응형,,,,,,,,,,,,,태블릿 모바일 메뉴 햄버거
$('.m_nav_btn').click(function(){
    $('#mo_nav').css('display','block')
})
$('.mo_close').click(function(){
    $('#mo_nav').css('display','none')
})

$('.mo_depth2').hide();

//모바일 서브메뉴 슬라이드 toggle()
 

 $('.mo_depth1>li>div').toggle(function(){
        var tg = $(this);
        var th = tg.next('.mo_depth2');

        th.slideDown();
        tg.addClass('on');

    }, function(){
        var tg = $(this);
        var th = tg.next('.mo_depth2');

        th.slideUp();
        tg.removeClass('on');
    })


});









