
// 1. new Promise 
// 2. Executor
// Phải gọi hàm resolve() hoặc hàm reject()
// Why: Vì sẽ rơi vào trạng thái treo promise và xảy ra trường hợp memory leak 


// 1. Pendding: Đang chờ thành công hay thất bại
// 2. Fullfilled: Trạng thái thành công
// 3. Rejected: Thất bại

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// -> XỬ LÝ CÁO THAO TÁC BẤT DỒNG BỘ
// Phiên bản js es6

// var cnt = 0

// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// } 

// sleep(1000)
//     .then(function() {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2)
//         return new Promise(function(resolve, reject) {
//             reject('failure')
//         })
//     })
//     .then(function() {
//         console.log(3)
//         return sleep(1000)
//     })
//     .catch(function(error) {
//         console.log(error)
//     })

// var promise = new Promise(
//     // Executor
//     // Khi gọi new Promise thì Executor function được thực thi trước khi
//     // gán cho promise luôn anh em nhé
//     function(resolve, reject) {
//         // Logic
//         // Thành công resolve()
//         // Thất bạt reject()
        
//         // Fake call API
//         // reject('Có lỗi!!!')

//         resolve()
//     }
// );

// How i use Promise

// promise
//     .then(function() {

//         // Tính chất Promise change
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1, 2, 3])
//             }, 3000)
//         })   
//     })
//     .then(function(data) {
//         console.log(data)
//         return 2;
//     })
//     .then(function(data) {
//         console.log(data)
//         return 3;
//     })
//     .catch(function() {
//         console.log('Failure !')
//     })
//     .finally(function() {
//         console.log('Done!')
//     })


// var successfulPromise = Promise.resolve('Sucsess!!!')

// successfulPromise
//     .then(function(result) {
//         console.log('result: ', result)
//     })

/*
    -> Vấn đề : Mất 7s để chạy 2 hàm bất đồng bộ không phụ thuộc vào nhau
    var promise1 = new promises(function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000)
    })

    var promise2 = new promises(function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000)
    })

*/

// -> Giải quyết

var promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1]);
    }, 2000)
})

var promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([2, 3]);
    }, 3000)
})

Promise.all([promise1, promise2])
    .then(function(result) {
        const res1 = result[0]
        const res2 = result[1]
        console.log(res1.concat(res2))
    })

