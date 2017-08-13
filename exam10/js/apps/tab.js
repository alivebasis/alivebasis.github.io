(function (win, $) {
    'use strict';
    win.examTab = win.examTab || {};
    win.examTab.common = win.examTab.common || {};

    var UTIL = win.examTab.common.util;

    // prototype 호출구문
    win.examTab.changeFunc = function (container, args) {
        var defParams = {
            boxWrap : '.cast_box'
        };
        this.opts = UTIL.def(defParams, (args || {}));
        if(!(this.obj = $(this.opts.boxWrap)).length) return;
        this.init();
    };
    // prototype 선언구문
    win.examTab.changeFunc.prototype = {
        init : function () {
            this.setElements();
            this.setLayout();
            this.bindEvents();
        },
        setElements : function () {
            this.contWrap = this.obj.find('.cast_cont');
            this.cont = this.contWrap.find('.cast_article');
            this.tabWrap = this.obj.find('.cast_tab');
            this.tab = this.tabWrap.find('li').children();
            this.pagingWrap = this.obj.find('.cast_setting');
            this.btnArea = this.pagingWrap.find('.cast_btn');
            this.prevBtn = this.btnArea.find('button:nth-child(1)');
            this.nextBtn = this.btnArea.find('button:nth-child(2)');
            this.NumArea = this.pagingWrap.find('.cast_num');
            this.currentNum = this.NumArea.find('.current');
            this.totalNum = this.NumArea.find('.total');
        },
        setLayout : function () {
            this.totalNum.get(0).innerHTML = this.tab.length;
            this.cont.hide();
            this.currentIdx = this.tabWrap.find('.active').index();
            this.cont.eq(this.currentIdx).show();
            this.oldIdx = this.currentIdx;
        },
        bindEvents : function () {
            this.tab.on('click', $.proxy(this.onClickTab, this));
            this.prevBtn.on('click', $.proxy(this.onPrevCont, this));
            this.nextBtn.on('click', $.proxy(this.onNextCont, this));
        },
        onClickTab : function (e) {
            var target = $(e.currentTarget);
            this.currentIdx = target.closest('li').index();
            if(this.oldIdx !== this.currentIdx){
                this.onChangeTab();
            }
        },
        onChangeTab : function () {
            this.tab.closest('li').eq(this.oldIdx).removeClass('active');
            this.tab.closest('li').eq(this.currentIdx).addClass('active');
            this.onChangeCont();
        },
        onChangeCont : function () {
            this.cont.eq(this.oldIdx).hide().removeClass('active');
            this.cont.eq(this.currentIdx).show().addClass('active');
            this.oldIdx = this.currentIdx;
            this.onChangePageNum();
        },
        onPrevCont : function () {
            this.slideDirection = 'left';
            this.currentIdx -= 1;
            if(this.currentIdx < 0){
                this.currentIdx = this.tab.length - 1;
            }
            this.onChangeTab();
        },
        onNextCont : function () {
            this.slideDirection = 'right';
            this.currentIdx += 1;
            if(this.currentIdx >= this.tab.length){
                this.currentIdx = 0;
            }
            this.onChangeTab();
        },
        onChangePageNum : function () {
            this.currentNum.get(0).innerHTML = this.currentIdx + 1;
        }
    };
})(window, window.jQuery);