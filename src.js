// ==UserScript==
// @name         WHUT-calendar
// @namespace    https://github.com/ooohy/course2calender
// @version      0.1
// @description  try to take over the world!
// @author       ooohy
// @match        http://sso.jwc.whut.edu.cn/Certification/toIndex.do
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const tb = document.getElementById("xqkb").getElementsByClassName("table-box").item(0)
        .getElementsByTagName("table").item(0)
        .getElementsByClassName("table-class-even").item(0)
    const time_block = tb.getElementsByTagName("tr")
    
    // new list
    var list = [];
    const weekday = 7
    
    for (let i = 0; i < time_block.length; i++) {
        for (let j = 0; j < weekday; j++) {
            list.push(time_block.item(i).getElementsByTagName("td").item(2 + j).innerText);
        }
    }
})();