/* 
    Khi sử dụng callback anh em thấy có 
    vấn đề gì ở đây ???

    Đó là Callback hell
    -> Pyramid of doom
*/

// Callback hell Example
// Các tác vụ phụ thuộc vào nhau quá nhiều

setTimeout(function(){
    console.log(1);
    setTimeout(function(){
        console.log(2)
        setTimeout(function(){
            console.log(3)
            setTimeout(function(){
                console.log(4)  
            }, 1000)
        }, 1000)     
    }, 1000)
}, 1000)



