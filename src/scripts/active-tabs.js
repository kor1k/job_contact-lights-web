(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

        var tabIndex = window.location.hash.replace('#tab','')-1;
        if (tabIndex != -1) $('ul.tabs__caption li').eq(tabIndex).click();

        $('a[href*=#tab]').click(function() {
            var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
            $('ul.tabs__caption li').eq(tabIndex).click();
        });

    });
})(jQuery);