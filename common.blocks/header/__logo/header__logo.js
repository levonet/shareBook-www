modules.define('header', ['i-bem__dom'], function(provide, BEMDOM, Header) {
provide(Header.decl({block: 'header', elem: 'logo'}, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                var link = this.findBlockInside('logo', 'link'),
                    modal = this.findBlockInside('logo', 'modal');

                link.on('click', function() {
                    modal.setMod('visible', true);
                });
            }
        }
    }
}));

});
