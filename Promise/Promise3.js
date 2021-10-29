
// 1. new Promise 
// 2. Executor
// Phải gọi hàm resolve() hoặc hàm reject()
// Why: Vì sẽ rơi vào trạng thái treo promise và xảy ra trường hợp memory leak 


// 1. Pendding: Đang chờ thành công hay thất bại
// 2. Fullfilled: Trạng thái thành công
// 3. Rejected: Thất bại

// -> XỬ LÝ CÁO THAO TÁC BẤT DỒNG BỘ
// Phiên bản js es6

var promise = new Promise(
    // Executor
    // Khi gọi new Promise thì Executor function được thực thi trước khi
    // gán cho promise luôn anh em nhé
    function(resolve, reject) {
        // Logic
        // Thành công resolve()
        // Thất bạt reject()
        
        // Fake call API
        reject('Có lỗi!!!')
    }
);

// How i use Promise


promise
    .then(function() {
        console.log('Successfully')    
    })
    .catch(function() {
        console.log('Failure!')
    })
    .finally(function() {
        console.log('Done!')
    })


