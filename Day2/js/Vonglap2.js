// tính chất hosting trong js (đưa lên trước)

// java... ==> chạy tuần tự

// let và const đều có cơ chế hoisting => chết trc khi in ra => lỗi, var thì undefined

// function decrlaration gọi trc khi tạo vẫn đc
console.log(sum(4,5)); // vẫn ra 9

function sum(a, b){
    return a + b;
}

//expression function
/* 
    arrow funciton
    const sum = () => {
        
    }
*/

// 1. filter( callback ) => return về 1 mảng
/**
 * - chỉ trả về những return true => cái gì true thì trả về giá trị đó
 */

let users = ["hải", "hùng", "vy", "mạnh"];

let array = users.filter((user, index) =>{
    return !user.includes("vy")
})

console.log(array);

let products =[
    {
        id: 1,
        name: "product 1",
        quantity: 1,
        price: 4
    },
    {
        id: 2,
        name: "product 2",
        quantity: 2,
        price: 4
    },
    {
        id: 3,
        name: "product 3",
        quantity: 3,
        price: 4
    },
    {
        id: 4,
        name: "product 4",
        quantity: 4,
        price: 4
    },
]

// tìm sản phẩm có id = 2
let idSearch = 2;
let searchPro = products.filter((pro, _) =>{
    return pro.id === idSearch;
})
console.log(searchPro);


// truthy, falsy
// cứ khác falsy thì auto là truthy
// falsy: "", 0, null, undefined, NaN, false


// 2. reduce (callback, initalvalue)

/**
 * - trong callback => 2 giá trị (có thể đặt tên tùy ý theo định dạng)
 * callback(prev, current) => hàm reduce luôn return prev
 *                            current => phần tử hiện tại sau mỗi lần lặp
 * 
 * - nguyên tắc: 
 * + output của lần lặp trước sẽ là input của lần lặp sau
 * --> giống bài toán tính tổng ( mỗi lần lặp thì gia trị tôngr thay đổi)
 * 
 * - các trường hợp:
 *  th1: không có initalvalue
 *   + prevValue mặc đinh sẽ là phần tử mảng đầu tiên
 *    vd: [1,2,3,4] => prev = 1, curr =2
 *   + prevValue của lần lặp sau sẽ là return của lần lặp trc (prev)
 *   + số lần lặp sẽ giảm đi 1
 *  
 *  th2: có initalvalue
 *   + prevValue sẽ lấy initalValue làm giá trị ban đầu
 *   + prevValue của lần lặp sau sẽ là return của lần lặp trc (prev)
 *   + số lần lặp sẽ giảm đi 1
 */

let check = products.reduce((total, pro) =>{
    //prev là 1 mảng
    return total;
    
}, 0)

console.log(check);

let numbers =[100,5,10,11,12,67]

let results = numbers.reduce((prev, current) =>{
    console.log(prev, current);
    return current;
},0 )

// tin tong cac phan tu co trong mang
let arr = [5,10,15,20,25]

let sumArr = arr.reduce((total, curr)=>{
    return total + curr
})
console.log(sumArr);


// tinh tong so tien cua product

let sumProduct = products.reduce((total, pro) =>{
    return total + (pro.price * pro.quantity)
},0)

console.log(sumProduct);


//4,5. find(callback) => tra ve 1 doi tuong object đầu tiên
//        findLast => cuối cùng

// chỉ lấy những phần tử có id = 1
let productMatch = products.find((pro) => pro.id !== 1)
console.log(productMatch);

// 6,7. findIndex, findLastIndex(callback) => trả về vị trí của thằng muốn tìm
let indexMatch = products.findLastIndex((pro) => pro.id===5)
//áp dụng cho những bài trong 1 mảng product
// có thằng nào trùng => khong thêm nó nữa, không trùng => thêm nó

//8. flatMap(callback) trải mảng => trả về 1 list (JSON)
let numbers2 = [1,2,3,[2,4], [7,10,[12,16]]]

let traiNum = numbers2.flatMap((index => index))
console.log(traiNum);


// 9. destrutoring => lấy các giá trị có trong 1 phương thức
// ví dụ cần chuyển ngày/ tháng/ năm => năm/ tháng/ ngày (không dùng locationString)

const formatDate = (dateString)=>{
    const [ngay, thang, nam] = dateString.split("/");
    return `${thang}/${nam}/${ngay}`;
}
console.log(formatDate("24/7/2023"));

// 10. spread => copy value
let a = [1,2,3,4,5,6,7];
let b = [2,4,5,6,7,8];
// gheps 2 mang thanh 1 
let ab =[...a,...b]
console.log(ab);

// ap dung trong function
function checkSpread(...args){
    console.log(...args);
    
}

checkSpread(1,2,3,4,5)