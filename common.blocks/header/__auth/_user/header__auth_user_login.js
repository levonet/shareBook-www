modules.define('header', ['i-bem__dom'], function(provide, BEMDOM, Header) {
provide(Header.decl({block: 'header', elem: 'auth'}, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                var link = this.findBlockInside('auth', 'link'),
                    popup = this.findBlockInside('auth', 'popup')
                        .setAnchor(link);

                link.on('click', function() {
                    popup.setMod('visible', true);
                });
            }
        }
    }
}));

});
