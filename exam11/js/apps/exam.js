(function (win, $) {
    'use strict';
    win.exam = win.exam || {};
    win.exam.common = win.exam.common || {};

    var UTIL = win.exam.common.util;

    win.exam.chkbox = function (args) {
        var defParams = {
            container : '.check_box'
        }
        this.opts = UTIL.def(defParams, (args || {}));
        if(!(this.obj = $(this.opts.container)).length) return;
        this.init();
    };
    win.exam.chkbox.prototype = {
        init : function () {
            this.setElements();
            this.initLayout();
            this.bindEvents();
        },
        setElements : function () {
            this.input = this.obj.find('.ipt_chk');
        },
        initLayout : function () {
            console.log(this.input.filter(':checked'));
            console.log(this.input.is(':checked'));
            this.input.filter(':checked').closest('.check_box').addClass('chk_active');
            this.input.filter(':not(:checked)').closest('.check_box').removeClass('chk_active');
        },
        bindEvents : function () {
            this.input.on('change', $.proxy(this.onChangeChk, this));
        },
        onChangeChk : function (e) {
            var target = $(e.currentTarget);
            //this.input 아닌 target으로 지정해야, 해당 체크박스에 각각 적용
            if(target.is(':checked')){
                target.closest('.check_box').addClass('chk_active').prop('checked', true);
            }else{
                //toggle prop이 removeProp?
                target.closest('.check_box').removeClass('chk_active').prop('checked', false); 
            }
        }
    };
})(window, window.jQuery);