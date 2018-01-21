$(function () {
    let $imgCarousel = $('#img-carousel');
    let $imgCarouselUl = $('ul', $imgCarousel);
    let $imgCarouselLis = $('li', $imgCarouselUl);
    let $mask = $('.mask', $imgCarousel); //遮罩层
    let $bar = $('.progress-bar .bar', $imgCarousel); //进度条
    $imgCarouselUl.iNow = 0; //当前显示的图片
    $imgCarouselUl.iOneLiWidth = $imgCarouselLis.eq(0).width();
    $imgCarouselUl.iNowProcess = 0; //切换图片的百分比
    // 插入导航栏部分轮播图的背景图片
    $imgCarouselLis.each(function (index, elem) {
        $(this).css('background', 'url(img/' + (index + 1) + '.jpg) no-repeat center/cover');
    });

    // 给遮罩层绑定鼠标事件
    $mask.on('mousedown', function (e) {
        let iLeft = e.clientX;
        let iUlLeft = $imgCarouselUl.offset().left;
        let bFlag = false; //表示鼠标移动时是否切换图片索引
        // 点击左侧区域
        if (iLeft < $imgCarouselUl.iOneLiWidth / 3) {
            $imgCarouselUl.iNow--;
            $imgCarouselUl.iNow = $imgCarouselUl.iNow < 0 ? $imgCarouselLis.length - 1 : $imgCarouselUl.iNow;
        } else if (iLeft > $imgCarouselUl.iOneLiWidth * 2 / 3) {
            // 点击右侧区域
            $imgCarouselUl.iNow++;
            $imgCarouselUl.iNow = $imgCarouselUl.iNow == $imgCarouselLis.length ? 0 : $imgCarouselUl.iNow;
        } else {
            // 点击中间区域
            $mask.get(0).onmousemove = function (e) {
                let iNowLeft = e.clientX;
                $imgCarouselUl.animate({
                    left: iUlLeft + iNowLeft - iLeft
                }, 0);
                if (!bFlag && iNowLeft - iLeft >= 100) {
                    bFlag = true;
                    $imgCarouselUl.iNow--;
                    $imgCarouselUl.iNow = $imgCarouselUl.iNow < 0 ? $imgCarouselLis.length - 1 : $imgCarouselUl.iNow;
                } else if (!bFlag && iNowLeft - iLeft <= -100) {
                    bFlag = true;
                    $imgCarouselUl.iNow++;
                    $imgCarouselUl.iNow = $imgCarouselUl.iNow == $imgCarouselLis.length ? 0 : $imgCarouselUl.iNow;
                }
            };
        }
    });

    $(document).on('mouseup', function () {
        $mask.get(0).onmousemove = null;
        changeImg();
    });

    // 切换图片
    function changeImg() {
        $imgCarouselUl.animate({
            left: -$imgCarouselUl.iOneLiWidth * $imgCarouselUl.iNow
        }, 500);
    }

    // 进度条
    function step() {
        $imgCarouselUl.iNowProcess += 0.2;
        $bar.width($imgCarouselUl.iNowProcess + '%');
        if ($imgCarouselUl.iNowProcess < 100) {
            window.requestAnimationFrame(step);
        } else {
            $imgCarouselUl.iNowProcess = 0;
            $imgCarouselUl.iNow++;
            $imgCarouselUl.iNow = $imgCarouselUl.iNow == $imgCarouselLis.length ? 0 : $imgCarouselUl.iNow;
            changeImg();
            requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    requestAnimationFrame(step);


});