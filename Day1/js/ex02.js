// console.log(document);

// khai báo theo kiểu ES5

var root = document.getElementById("root");
console.log([root]);
//đổ dữ liệu vào trong body

var content = `<h1>hello ae </h1>`;
//document.write(content); chỉ dùng write cho document

//document.getElementByClassName hay - document.querySelector - document.querySelectorAll
var root = document.querySelector("#root");
// đổ dữ liệu vào root

root.innerHTML = content;