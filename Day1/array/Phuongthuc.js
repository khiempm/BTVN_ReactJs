console.log(`Mảng`);

//int[] arr = new Array..

// khai báo theo ES6

/*
- let: phạm vi cục bộ

- const: phục vụ cơ chế hositing * không thể thay đổi
 */

// khai báo mảng user

let users = ["hải", "hiền", "hà"];
console.log(users);

function TestCheck() {
    let a = 1;
    console.log(a);
    
}
// 1.làm thế nào để kiểm tra 1 biến có phải là mảng hay không
// tại sao khia báo mảng -> lại là object

console.log(typeof users); //object 
console.log(typeof null); //object

// ->> check mảng Array.isArray(users)

// 2. duyệt mảng


    // a. for in --> trả về index và users
for(let index in users){
    console.log(users[index], index);
}

    // b. for of
for(let user of users){
    console.log(user);
    
}

    // 3. xóa mảng
    // xóa phần tử có tên Hiền
    let result = [];
    let indexOf = 1;
    for(let index in users){
        if(index == indexOf){
            // chuyen ve number: +value; Number(value); parseInt(value);
            continue;
        }
        result[result.length] = users[index];
    };
    console.log(result);
    
    // hoặc dùng splice(index, count)
        // users.splice(1,2)
        // users.splice(1,2, `thay 1`, `thay 2`) 

   
    // 4. nối mảng
   
// concat(arr1, arr2,...) 
    console.log(users.concat([1,2,3,3,4], ["x", "y", "z"]));
//
    
    // 5. xóa các phần tử rung nhau
let setMang = users.concat([1,2,3,4], [1,2,3]);
let mangLoaiBo = [...new Set(setMang)] 
console.log(setMang);
console.log(mangLoaiBo);

    // 6.indexOf(value) tìm vị trí xuất hiện đầu tiên của phần tử trong mảng
console.log(users.indexOf("hải")); //-1 thì không cods

    // 7. lastIndexOf(value)
console.log(users.lastIndexOf("hải")); //-1 thì không cods

    // 8.includes(values) tìm phần tử trong mảng
console.log(users.includes("hải"));

    // 9.slice(start, end) cắt mảng từ phần tử >= start và < end
console.log(users.slice(0,2));
console.log(users.slice(1)); // lấy từ vị trí này đến hết mảng
console.log(users.slice(-1)); // lấy từ cuối lên

    // 10.join() nối các phần tử trong mảng lại thành 1 chuỗi
console.log(users.join(' ')); // trong ngoặc không ghi gì thì tự động là dấu ,

    // 11.push() thêm phần tử vào cuối mảng, thay đổi mảng ban đầu, trả về số lượng phần tử sau khi thêm
    let count = users.push(`1`, `2`, `3`);
    console.log(count);
    console.log(users);

    // 12.unshift() thêm phần tử vào đầu mảng
    let count2 = users.unshift("Hello", "Bye");
    console.log(count2);
    console.log(users);

    //13. xóa phần tử cuối cùng, trả về giá trị phần tử vừa xóa
    let value = users.pop();
    console.log(value);
    console.log(users);

    //14.shift() xóa phần tử đầu mảng, trả về giá trị của phần tử vừa xóa

    let value2 = users.shift();
    console.log(value2);
    console.log(users);
    
    
    
    


    


