let arr = [
  {
    imgSRC: "https://picsum.photos/200",
    title: "hello",
    content:"Cầu thủ người Đức sẽ rời Barça theo dạng chuyển nhượng tự do, anh sẽ kí vào bản hợp đồng có thời hạn 1 năm với nửa xanh thành Manchester."
  },
  {
    imgSRC: "https://picsum.photos/200",
    title: "bye",
    content:"Cầu thủ người Đức sẽ rời Barça theo dạng chuyển nhượng tự do, anh sẽ kí vào bản hợp đồng có thời hạn 1 năm với nửa xanh thành Manchester."
  },
  {
    imgSRC: "https://picsum.photos/200",
    title: "Hi",
    content:"Cầu thủ người Đức sẽ rời Barça theo dạng chuyển nhượng tự do, anh sẽ kí vào bản hợp đồng có thời hạn 1 năm với nửa xanh thành Manchester."
  }
]

let content = `${
    arr.map((cont, index) =>{
        // viết trong đây là return
      return`<div
        class="row total ${(index +1) % 2 === 0 ? 'right-content' : ''}"
      >
        <div class="col-md-6">
          <img src=${cont.imgSRC} alt="" />
        </div>
        <div class="col-md-6">
        <h1>${cont.title}</h1>
        <p>
        Cầu thủ người Đức sẽ rời Barça theo dạng chuyển nhượng tự do, anh sẽ kí vào bản hợp đồng có thời hạn 1 năm với nửa xanh thành Manchester.
        </p>
        </div>
      </div>`
    }).join(' ')
}`;

document.write(content);
