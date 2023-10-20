### Promise.all

- suppose you want to make parrallel api calls and get the response in that case it is useful
- example suppose there 10 userids and you want to make 10 diffrent api calls to get the diffrent useinfo you will use it
- if there are multiple promise calls and multiple promises it will handle that
- it takes array of promises as input(iterable in document) example Promise.all([promise1, promise2, promise3]) in this case it will make 3 parallel api calls and get the result.
- **it also calls failfast**
- **success case**
- suppose we are making 3 api calls Parallelly and let assume promise1 taken 3sec to resolve and promise2 2sec and promise3 1 sec suppose all are success only in that case it will collect all promises result and keep it in sinle array like [value1, value2, value3]
- it will take 3 secs to resolve the all promises because here we are making parallelly api calls so **it will wait for all promises to resolve**
- **Failure case**
- suppose any promise is failed promise.all will work diffrent in that case
- in failure case suppose there are 3 promise api calls which you are making parallelly and here also one api making 3 secs and another api making 1 sec and another api making 2secs
- here suppose the api which is resolved in 1sec got failed in that case as soon as it got failed immediately it will throw the error.it will not even touch the other 2 promises
- so promise.all either give success response or failure response even 1 promise got failed
- suppose 2promise is failed as soon as it failed immediately thrown the error

### Promise.allSetteled

- Promise.allSetteled same as promise.all only in success response but it behaves diffrently in failure case
- suppose there are 3 promise apis Promise.allSetteled[p1,p2,p3] in this p2 is failed but still it will wait for all primises to settled once all promises are resolved then it give output inside array like [value1, error, value2];
- always it gives inside array only irrespecive of whether it is success or fail
- **usecases**
- suppose you are making 5 api called parelly and you real need data of 5 api's in this case you can use promise.all and you want to show 5 cards but even one api fails you want to show remaining 4 cards in that case you can use promise.allSetteled

### Promise.race

- its kind of race whatever promise setteld first it will give that promise result irrespective of whether its success or failure. as soon as 1st promise got setteld it give that promise result

### Promise.any

- its kind of race only this will wait for first success response but suppose if all of them got rejected then it will collect all errors and give you the aggregated error [err1, err2, err3]
