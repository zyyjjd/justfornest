"use strict";
exports.__esModule = true;
/*
 * @Date: 2023-04-17 09:07:25
 * @LastEditTime: 2023-04-17 09:23:32
 * @FilePath: /justfornest/src/test.ts
 * @Description:测试rxjs api
 *
 */
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
//==========案例一，rxjs发布订阅===============
var ob = new rxjs_1.Observable(function (subscriber) {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(function () {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});
ob.subscribe({
    next: function (value) {
        console.log(value);
    }
});
//===========案例二，interval500ms执行一次pipe
var subs = (0, rxjs_1.interval)(500)
    .pipe((0, operators_1.map)(function (v) { return ({ num: v }); }))
    .subscribe(function (e) {
    console.log(e);
    if (e.num === 10) {
        subs.unsubscribe();
    }
});
