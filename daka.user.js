// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yida.alibaba-inc.com/s/wuhanfighting3
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('健康打卡');
    setTimeout( ()=>{
        console.log('修改数据');
    $("span.kuma-radio-group-item-content:contains('健康')").click();
    $("span.kuma-radio-group-item-content:contains('否')").click();
    $("span.kuma-radio-group-item-content:contains('14天内从未离开')").click();
    $("div.kuma-cascader-text input").click();
        setTimeout(()=>{
            console.log('上海');
            $("li:contains('上海')").click();
            setTimeout(()=>{
                console.log('上海市');
              $("li:contains('上海市')").click();
                setTimeout(()=>{
                  console.log('提交');
                  $("button:contains('提交')").click();
                }, 100);
            }, 100);
        }, 100);
    }, 1000)

    // Your code here...
})();
