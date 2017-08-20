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
            this.input = this.obj.find('.ipt_chk');
            this.activeClass = this.opts.activeClass;
        },
        initLayout : function () {
            console.log(this.input.filter(':checked'));
            console.log(this.input.is(':checked'));
            this.input.filter(':checked').closest(this.obj).addClass(this.activeClass);
            this.input.filter(':not(:checked)').closest(this.obj).removeClass(this.activeClass);
        },
        bindEvents : function () {
            this.input.on('change', $.proxy(this.onChangeChk, this));
        },
        onChangeChk : function (e) {
            var target = $(e.currentTarget);
            target.closest(this.obj).toggleClass(this.activeClass, target.prop('checked'));
            /*
            if (target.is(':checked')) {
                target.closest(this.obj).addClass(this.activeClass).prop('checked', true);
            } else {
                target.closest(this.obj).removeClass(this.activeClass).prop('checked', false); 
            }
            */
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
            this.input = this.obj.find('.ipt_rdo');
            this.activeClass = this.opts.activeClass;
        },
        initLayout : function () {
            this.input.filter(':checked').closest(this.obj).addClass(this.activeClass);
            this.input.filter(':not(:checked)').closest(this.obj).removeClass(this.activeClass);
        },
        bindEvents : function () {
            this.input.on('change', $.proxy(this.onChangeChk, this));
        },
        onChangeChk : function (e) {
            var _this = this,
                target = $(e.currentTarget);
            this.input.filter(function () {
                if (target.attr('name') === $(this).attr('name')) {
                    $(this).closest(_this.obj).toggleClass(_this.activeClass, $(this).prop('checked'));
                }
            });
        }
    };

    // selectbox
    win.exam.selboxFunc = function (args) {
        var defParams = {
            container : '.select_box',
            menu : '.select_menu',
            activeClass : 'opened'
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
            this.menu = this.obj.find(this.opts.menu);
            this.submenu = this.obj.find('ul');
            this.submenuItm = this.submenu.children();
            this.activeClass = this.opts.activeClass;
        },
        initLayout : function () {
            this.obj.removeClass(this.activeClass);
            this.submenu.hide();
            this.isOpened = false;
        },
        bindEvents : function () {
            this.menu.on('click', $.proxy(this.onClickMenu, this));
            this.submenuItm.on('click', $.proxy(this.onClickSub, this));
        },
        onClickMenu : function () {
            !this.isOpened ? this.openSubFunc() : this.closeSubFunc();
        },
        onClickSub : function (e) {
            var target = $(e.currentTarget);
            this.menu.text(target.text());
            this.closeSubFunc();
        },
        openSubFunc : function () {
            this.obj.addClass(this.activeClass);
            this.isOpened = true;
            this.submenu.show();
            this.obj.on('clickoutside', $.proxy(this.outsideFunc, this));
        },
        closeSubFunc : function () {
            this.obj.removeClass(this.activeClass);
            this.isOpened = false;
            this.submenu.hide();
            this.obj.off('clickoutside');
        },
        outsideFunc : function () {
            this.closeSubFunc();
        }
    };

})(window, window.jQuery);