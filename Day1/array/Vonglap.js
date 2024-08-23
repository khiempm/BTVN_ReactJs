console.log("Vòng lặp");

let users = ["Hải", "Huy", "Vy", "Hà"];
console.log(users);

    // 1. fill() cập nhật tất cả các phần tử của mảng thành 1 giá trị
// users.fill("hello");
// console.log(users);


    //2. forEach() Duyệt qua từng phần tử và trả về element, index trong callback
// không dừng được vòng lặp
// arrơw function (element, index) => {} là 1 (callback)
    users.forEach((user, index) => {
        console.log(user, index);     
    })

    //3. map(callback) duyệt qua từng phần tử trong mảng
// trả về element, index, trong callback
/*
    - Trả về 1 mảng mới chính là return trong callback
    - số lượng phần tử của mảng mới bằng số lượng phần tử của mảng ban đầu
    - sử dụng để giải quyết các bài toán về render dữ liệu lên trên giao diện
*/

    let newArray = users.map((user, index) => {
        console.log(user, index);   
        return `<h1>${user}</h1>`
    })
    console.log(newArray);
    document.write(newArray.join(' '))

    // 4. some(callback)

    /* 
     - Giá trị của hàm some =>> true hoặc false
     - Trả về true nếu: có ít nhất 1 lần lặp return true
     - Ví du: tìm trong hàm có số lẻ hay không 
     [1,2,3,4,5,6] => true;
     - Vòng lặp sẽ chạy tới khi có return true;
    */

// let numbers = [1,2,3,4,5,6];
// kiểm tra xem trong mảng number có số lẻ khong
// let check = numbers.some((num, index) => {
//     if(num % 2 !== 0){
//         console.log(num);
//         return true;
//     }
// })

// console.log(check);

    // 5. every(callback)

/*
    - trả về true / false
    - trả về true nêú tất cả trả về true 
    - trả về false nếu có 1 phần tử true
*/

let numbers = [1,2,3,4,5,6];
//kiểm tra xem trong mảng number có số lẻ khong
let check = numbers.every((num, index) => {
    if(num % 2 !== 0){
        console.log(num);
        return true;
    }
})
console.log(check);