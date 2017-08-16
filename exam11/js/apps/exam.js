(function (win, $) {
    'use strict';
    win.exam = win.exam || {};
    win.exam.common = win.exam.common || {};

    var UTIL = win.exam.common.util;

    // checkbox
    win.exam.chkboxFunc = function (args) {
        var defParams = {
            container : '.check_box',
            activeClass : 'chk_active'
        }
        this.opts = UTIL.def(defParams, (args || {}));
        if(!(this.obj = $(this.opts.container)).length) return;
        this.init();
    };
    win.exam.chkboxFunc.prototype = {
        init : function () {
            this.setElements();
            this.initLayout();
            this.bindEvents();
        },
        setElements : function () {
            this.chkbox = this.obj;
            this.input = this.chkbox.find('.ipt_chk');
            this.activeClass = this.opts.activeClass;
        },
        initLayout : function () {
            console.log(this.input.filter(':checked'));
            console.log(this.input.is(':checked'));
            this.input.filter(':checked').closest(this.chkbox).addClass(this.activeClass);
            this.input.filter(':not(:checked)').closest(this.chkbox).removeClass(this.activeClass);
        },
        bindEvents : function () {
            this.input.on('change', $.proxy(this.onChangeChk, this));
        },
        onChangeChk : function (e) {
            var target = $(e.currentTarget);
            //this.input 아닌 target으로 지정해야, 해당 체크박스에 각각 적용
            console.log(target);
            if (target.is(':checked')) {
                target.closest(this.chkbox).addClass(this.activeClass).prop('checked', true);
            } else {
                //toggle prop이 removeProp?
                target.closest(this.chkbox).removeClass(this.activeClass).prop('checked', false); 
            }
        }
    };

    // radiobox
    win.exam.rdoboxFunc = function (args) {
        var defParams = {
            container : '.radio_box',
            activeClass : 'chk_active'
        }
        this.opts = UTIL.def(defParams, (args || {}));
        if(!(this.obj = $(this.opts.container)).length) return;
        this.init();
    };
    win.exam.rdoboxFunc.prototype = {
        init : function () {
            this.setElements();
            this.initLayout();
            this.bindEvents();
        },
        setElements : function () {
            this.rdoBox = this.obj;
            this.input = this.rdoBox.find('.ipt_rdo');
            this.activeClass = this.opts.activeClass;
        },
        initLayout : function () {
            this.input.filter(':checked').closest(this.rdoBox).addClass(this.activeClass);
            this.input.filter(':not(:checked)').closest(this.rdoBox).removeClass(this.activeClass);
        },
        bindEvents : function () {
            this.input.on('change', $.proxy(this.onChangeChk, this));
        },
        onChangeChk : function (e) {
            var _this = this,
                target = $(e.currentTarget);
            this.input.filter(function () {
                if (target.attr('name') === $(this).attr('name')) {
                    $(this).closest(_this.rdoBox).toggleClass(_this.activeClass, $(this).prop('checked'));
                }
            });
        }
    };

    // selectbox
    win.exam.selboxFunc = function (args) {
        var defParams = {
            container : '.select_box',
            activeClass : 'chk_active'
        }
        this.opts = UTIL.def(defParams, (args || {}));
        if(!(this.obj = $(this.opts.container)).length) return;
        this.init();
    };
    win.exam.selboxFunc.prototype = {
        init : function () {
            this.setElements();
            this.initLayout();
            this.bindEvents();
        },
        setElements : function () {
            this.selBox = this.obj;
            this.input = this.selBox.find('.ipt_rdo');
            this.activeClass = this.opts.activeClass;
        },
        initLayout : function () {
            this.input.filter(':checked').closest(this.selBox).addClass(this.activeClass);
            this.input.filter(':not(:checked)').closest(this.selBox).removeClass(this.activeClass);
        },
        bindEvents : function () {
            this.input.on('change', $.proxy(this.onChangeChk, this));
        },
        onChangeChk : function (e) {
            var _this = this,
                target = $(e.currentTarget);
            this.input.filter(function () {
                if (target.attr('name') === $(this).attr('name')) {
                    $(this).closest(_this.selBox).toggleClass(_this.activeClass, $(this).prop('checked'));
                }
            });
        }
    };

})(window, window.jQuery);