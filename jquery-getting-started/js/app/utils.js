(function (window, $) {

    window.util = {

        getDateString: function(){
            var dt = new Date();
            var month = (dt.getMonth() + 1);
            var day = dt.getDate();

            month = month > 10 ? month : '0' + month;
            day = day > 10 ? day : '0' + day;

            return dt.getFullYear() + '-' + month + '-' + day;
        },

        renderMarkup : function(sourceSelector, destinationSelector, callback){
            var
                $source = $(sourceSelector),
                $destination = $(destinationSelector);

            if($source.length > 0){
                $destination.html(window.util.replaceBrackets($source.html()));
                callback($source, $destination);
            }
        },

        replaceBrackets : function(markup){
            markup = markup.replace(/\</g, '&lt;');
            markup = markup.replace(/\>/g, '&gt;');
            return markup;
        }
    };

    $(function(){
        var
            $codeContainer = $('#code-container'),
            $codeBlock = $('#code-block');

        if($codeContainer.length > 0 &&
           $codeBlock.length > 0){
            var src = $codeBlock.html().replace('\n','');
            $codeContainer.html(window.util.replaceBrackets(src));
        }

        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });

        window.util.renderMarkup('#demo-content-container', '#demo-markup', function(src, destination){
            hljs.highlightBlock(destination[0]);
        });

        var items = $('#special-features li');
        items.width('200%')
             .height('200px')
             .addClass('highlight bordered')
             .each(function(index, item) {
               var $item = $(item);
               $item.text($item.text() + ' ' + $item.attr('data-feature-id'));
             });

    });
}(window, jQuery));
