/*
 * @Date: 2023-04-17 09:07:25
 * @LastEditTime: 2023-04-17 09:23:32
 * @FilePath: /justfornest/src/test.ts
 * @Description:测试rxjs api
 *
 */
import { Observable, interval, take } from 'rxjs';
import { map, filter, reduce, find, findIndex } from 'rxjs/operators';

//==========案例一，rxjs发布订阅===============
const ob = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

ob.subscribe({
  next: (value) => {
    console.log(value);
  },
});

//===========案例二，interval500ms执行一次pipe
const subs = interval(500)
  .pipe(
    map((v) => ({ num: v })),
    // filter((v) => v.num % 2 == 0),
  )
  .subscribe((e) => {
    console.log(e);
    if (e.num === 10) {
      subs.unsubscribe();
    }
  });
