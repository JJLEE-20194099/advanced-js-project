// Sync / Async

/*
    Anh em nhớ JS là ngôn ngữ đồng bộ đơn luồng
    chạy theo kiểu đồng bộ nhưng lại có async

    Sync: Cái nào chạy trước cái nào chạy sau
*/

/*  Những thằng nào là async: 
    
    setTimeout, setInterval, fetch, 
    XMLHttpRequest, file reading,
    request animation frame

    Để biết khi nào là xong những phương thức async thì JS sinh ra 
    callback function

*/

setTimeout(function() {
    console.log(1)
}, 1000)

console.log(2)
