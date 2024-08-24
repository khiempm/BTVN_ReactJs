var customer = [
    'Nguyễn Văn Tiến Hải',
    'Nguyễn Minh Nhật Dương',
    'Phạm Tiến Manh',
    'Phan Văn Hải',
    'Phạm Xuân Yến',
    "Nguyên An A"
];

let sorted = customer.sort((a, b) => {
    const aFirstName = a.split(' ').pop();
    const bFirstName = b.split(' ').pop();
    return aFirstName.localeCompare(bFirstName);
});

console.log(sorted);
document.querySelector(".noiDung").innerHTML=sorted