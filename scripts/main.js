    //判斷手機板選單出現的寬度加上.mmenu-show
    function mobileMenuInit(maxwWidth) {
        $(window).on('resize', function() {
            if (Modernizr.mq('(max-width: '+ maxwWidth +'px)')) {
                $('body').addClass('mmenu-show');
            } else {
                $('body').removeClass('mmenu-show');
            }
        }).resize();
    }
    $(document).ready(function() {
        //手機板選單功能，數字為手機板選單要出現的寬度
        mobileMenuInit(1020);
    });

    // 手機置底slideToggle
    $(document).ready(function() {
        $('.slide-sum').click(function () {
            $('.fixed-in').not($(this).parent()).removeClass('active');
            $('.fixed-in').not($(this).parent()).children('.sum-bottom').slideUp();
            $(this).parent('.fixed-in').toggleClass('active');
            $(this).siblings('.sum-bottom').slideToggle();
        });
    });

    // 購物車明細slideToggle
    $(document).ready(function() {
        $('.item-btn').click(function () {
            $('.shopping-title').not($(this).parent()).removeClass('active');
            $('.shopping-item-box').not($(this).parents()).children('.shopping-item').slideUp();
            $(this).parent('.shopping-title').toggleClass('active');
            ($(this).parent()).siblings('.shopping-item').slideToggle();
        });
    });

    // goadd按鈕
    $(document).ready(function(){
        $('a.goadd').click(function(event) {
            var t = $(this).attr('href');
            $('html,body').animate({scrollTop:$(t).offset().top},800);
                return false;
        });
    });

    // 手機版加購輪播
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            //loop:true,
            nav:false,
            //center: true,
            responsive:{
                0:{
                    items:2
                },
                414:{
                    items:2
                },
                568:{
                    items:2
                }
            }
        })
    });

    //刪除購物車商品
    $(document).ready(function() {
        $('.delete .ibtn').on('click', function(){
            $(this).parents('.tr').addClass('remove').fadeOut('slow', function(){
                $('.tr.remove').remove();
            });
        });   
    });

    //燈箱轉fixed
    $(document).ready(function() {
        $('#lightbox-voucher,#lightbox-vouchers,#lightbox-freight,#lightbox-mamber').hide();
        //商品優惠券
        $('.voucher-btn.slidefixed-btn').click(function() {
            $('#lightbox-voucher').stop().addClass('slide').slideDown();
            $('body').addClass('slidefixed');
        });
        //訂單優惠券
        $('.voucher-box .slidefixed-btn,.voucher-box .btn.vouchers').click(function() {
            $('#lightbox-vouchers').stop().slideDown();
            $('body').addClass('slidefixed');
        });
        //運費查詢
        $('.freight.slidefixed-btn').click(function() {
            $('#lightbox-freight').stop().slideDown();
            $('body').addClass('slidefixed');
        });
        //會員條款
        $('.other-check .slidefixed-btn').click(function() {
            $('#lightbox-mamber').stop().slideDown();
            $('body').addClass('slidefixed');
        });
        //加購商品
        $('.plus-price #m-plus').click(function() {
            $('#plus-price').stop().stop().slideDown();
            $('body').addClass('slidefixed');
        });
        //紅利兌換
        $('.plus-bonus #m-plus').click(function() {
            $('#plus-bonus').stop().stop().slideDown();
            $('body').addClass('slidefixed');
        });
        $('body').click(function(evt) {
            if($(evt.target).parents('#lightbox-voucher,#lightbox-vouchers,#lightbox-freight,#lightbox-mamber,#plus-price,#plus-bonus').length==0 && 
                evt.target.id != 'm-voucher' && evt.target.id != 'lightbox-voucher' 
                && evt.target.id != 'm-vouchers' && evt.target.id != 'lightbox-vouchers' 
                && evt.target.id != 'm-freight' && evt.target.id != 'lightbox-freight' 
                && evt.target.id != 'm-mamber' && evt.target.id != 'lightbox-mamber' 
                && evt.target.id != 'm-plus' && evt.target.id != 'plus-price' && evt.target.id != 'plus-bonus') {
                $('#lightbox-voucher,#lightbox-vouchers,#lightbox-freight,#lightbox-mamber,#plus-price,#plus-bonus').stop().slideUp();
                $('body').removeClass('slidefixed');
            }
        });
        var t = $(this).attr('href');
        $('.fixed-close').click(function(evt) {
            $('#lightbox-voucher,#lightbox-vouchers,#lightbox-freight,#lightbox-mamber,#plus-price,#plus-bonus').stop().slideUp();
            $('body').removeClass('slidefixed');
        });
    });

    //表單單選&多選按鈕選定時，在外層label加上 ckecked 的class
    $(document).ready(function() {
        labelCkeckedInit();
    });

    function labelCkeckedInit() {
        $('label input[type="radio"]:checked, label input[type="checkbox"]:checked').parents('label').addClass('checked');
        $(document).on('click', 'label input[type="radio"]', function(e){
            var radioName = $(this).attr('name');
            if (radioName) {
                $('label input[name='+radioName+']').parents('label').removeClass('checked');
                $('label input[name='+radioName+']:checked').parents('label').addClass('checked');
            }
        });
        $(document).on('click', 'label input[type="checkbox"]', function(e){
            $(this).parents('label').toggleClass('checked');
        });
    }

    //表單input[type="text"]選定時，在外層form-group加上 ckecked 的class
    $(document).ready(function() {
        inputCkeckedInit();
    });

    function inputCkeckedInit() {
        $('input[type="text"]:focus').parent().parent('.form-group').addClass('checked');
        $(document).on('click', 'input[type="text"]', function(e){
            var inputName = $(this).attr('name');
            if (inputName) {
                $('input[name='+inputName+']').parent().parent('.form-group').removeClass('checked');
                $('input[name='+inputName+']:focus').parent().parent('.form-group').addClass('checked');
            }
        });
        $(document).on('click', 'input[type="text"]', function(e){
            $(this).parents('.form-group').toggleClass('checked');
        });
    }