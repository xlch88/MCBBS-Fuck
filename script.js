// ==UserScript==
// @name         FuckCMBBS
// @namespace    https://github.com/xlch88
// @version      0.1
// @description  去你妈的cmbbs | 取消右键屏蔽。| 删除闪图广告。
// @author       Xlch88
// @match        https://www.mcbbs.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a = document.createElement('style');
    a.innerHTML = 'html,body,*{user-select: initial;}';
    document.body.appendChild(a);
    document.oncontextmenu=function(){return true;};
    document.onselectstart=function(){return true;};
    jq('.hdc>div').html('<span style="color:white;font-size:22px;">FuckCMBBS V1.0 Enabled.</span>');
})();