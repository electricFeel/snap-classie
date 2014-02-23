//Cargo cult coding from bonzo https://github.com/ded/bonzo

Snap.plugin(function(Snap, Element, Paper, global) {
    var elproto = Element.prototype;

    // class helper function
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    elproto.hasClass = function(c) {
        return classReg(c).test(this.attr('class'));
    }

    elproto.addClass = function(c) {
        if (!this.hasClass(c)) {
            this.attr({
                'class': this.attr('class') + ' ' + c
            })
        }
    }

    elproto.removeClass = function(c) {
        if (this.hasClass(c)) {
            this.attr({
                'class': this.attr('class').replace(classReg(c), ' ')
            })
        }
    }

    elproto.toggleClass = function(c) {
        var fn = this.hasClass(c) ? this.removeCLass : this.addClass;
        fun(c);
    }
});