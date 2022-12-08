$(document).ready(function() {

    $('pre code').each(function(i, block) {

        hljs.highlightBlock(block);

    });



    $('.btn-fixed').click(function(){

        $('.right-sidebar').toggleClass('active');

        $(this).toggleClass('active');

    });



    var $isdebarMenu = $('.sidebar-menu');

    //$('.sub-menu', $isdebarMenu).eq(0).slideDown();



    $('.collapse-hadle').each(function (index) {

        var $collapseHandle = $(this);

        var $collapseParent = $collapseHandle.parent();

        var $collapseOptions = $collapseHandle.next();



        $collapseHandle.on('click', function (event) {

            event.preventDefault();



            $('.sub-menu', $isdebarMenu).not($collapseOptions).slideUp('normal', function () {

                $('li', $isdebarMenu).not($collapseParent).removeClass('open');

                $collapseParent.addClass('open');

                $collapseOptions.slideDown();

            });

        });

    });



    $('.document-menus a').each(function (index) {

        var $anchor = $(this);

        var $template = $anchor.data('template');

        var $parent = $anchor.parent();



        $anchor.on('click', function (event) {

            event.preventDefault();



            $('.document-menus li').removeClass('active');

            $parent.addClass('active');
			
			if($template == "introduction")
				$template = "index";
			
			window.location = $template+'.html?ver=1.2';
/*
            $('.docs-section').load('./templates/'+$template+'.html?ver=1.2', function(){

                $('.docs-section').find('pre code').each(function(i, block) {

                    hljs.highlightBlock(block);

                });

            });*/

        })

    })

});