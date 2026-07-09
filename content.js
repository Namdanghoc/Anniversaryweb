/* =========================================================================
   NỘI DUNG TRANG WEB — CHỈ CẦN SỬA FILE NÀY
   Sửa xong lưu lại, mở lại index.html (hoặc push lên GitHub) là thấy thay đổi.
   Không cần biết code, chỉ cần sửa phần chữ/số trong dấu ' ' hoặc " ".
   ========================================================================= */

const SITE_CONTENT = {

  /* ---------------- TRANG CHỦ ---------------- */
  hero: {
    logo: "Hào & Huệ",       // Tên hiện góc trái thanh menu
    title: "3 năm <em>tình yêu</em> của Hào và Huệ", // <em>...</em> để in nghiêng màu hồng
    sub: "Từ ngày đầu tiên đến hôm nay — 3 năm và vẫn còn muốn đi cùng em thật xa.",
    // Ngày bắt đầu yêu nhau, định dạng ngày/tháng/năm — dùng để tính số ngày/số năm bên nhau
    // Để trống ("") nếu không muốn hiện bộ đếm
    startDate: "09/07/2023",
  },

  /* ---------------- DÒNG THỜI GIAN KỶ NIỆM ---------------- */
  // Thêm/xoá/sửa bao nhiêu mốc kỷ niệm tuỳ ý, chỉ cần giữ đúng cấu trúc { ... } và dấu phẩy giữa các mốc
  timeline: [
    {
      date: "Ngày thứ nhất",
      title: "Ánh mắt đầu tiên",
      text: "Một buổi chiều rất bình thường bỗng trở nên đặc biệt vì có Huệ xuất hiện. Ai ngờ đó lại là khởi đầu của một hành trình dài đến vậy.",
      // Dán link ảnh vào đây nếu muốn hiện ảnh thật, để trống "" nếu muốn dùng nền màu + số thứ tự
      img: "img/1.jpg",
    },
    {
      date: "Năm thứ nhất",
      title: "Lạc nhau giữa phố lạ",
      text: "Chúng ta cười suốt cả chặng đường chỉ vì đi sai lối. Từ đó mới biết, lạc đường cùng em vẫn vui hơn đi đúng đường một mình.",
      img: "img/2.jpg",
    },
    {
      date: "Năm thứ hai",
      title: "Pháo đài chăn gối",
      text: "Xây một pháo đài chăn trong ngày mưa bão và xem phim đến tận khuya. Những ngày bình dị như vậy hoá ra lại là kỷ niệm khó quên nhất.",
      img: "img/4.jpg",
    },
    {
      date: "Năm thứ ba",
      title: "Vượt qua sóng gió",
      text: "Có những lúc giận hờn, có những lúc mệt mỏi, nhưng cuối cùng vẫn chọn nắm tay nhau đi tiếp. Đó là lúc mới hiểu tình yêu này thật sự bền chặt.",
      img: "img/7.jpg",
    },
    {
      date: "Hôm nay — Tròn 3 năm",
      title: "Vẫn chọn nhau",
      text: "Sau tất cả, điều tuyệt vời nhất vẫn là mỗi ngày Hào đều được chọn Huệ. Cảm ơn em vì 3 năm đã qua, và hãy cùng nhau viết tiếp những năm tháng phía trước.",
      img: "img/8.jpg",
    },
  ],

  /* ---------------- LÁ THƯ ---------------- */
  letter: {
    ribbon: "KỶ NIỆM 3 NĂM",   // Nhãn nhỏ góc lá thư
    greet: "Gửi Huệ của anh,",
    body: `Vậy là đã 3 năm rồi kể từ ngày mình bắt đầu bên nhau. Có những điều anh chưa từng nói đủ, nhưng trái tim anh luôn biết ơn vì đã gặp được em.

3 năm không phải là khoảng thời gian ngắn, nhưng bên em, mọi thứ trôi qua nhanh đến lạ. Mỗi khoảnh khắc, dù bình thường hay đặc biệt, đều trở thành một phần ký ức mà anh trân trọng.

Cảm ơn em vì đã đồng hành, vì đã kiên nhẫn, vì đã luôn là Huệ của anh. Mong rằng chúng ta sẽ còn viết tiếp câu chuyện này thật lâu, thật dài — không chỉ 3 năm, mà là rất nhiều năm nữa.`,
    sign: "— Hào của em",
  },

  /* ---------------- SỔ LƯU BÚT ---------------- */
  // Email nhận lời chúc khi khách bấm "Gửi lời chúc" (mở sẵn ứng dụng email của khách)
  guestbookEmail: "ban@example.com",

  // Lời chúc bạn đã nhận và muốn hiển thị vĩnh viễn trên trang — copy dán vào đây
  // guestbookMessages: [
  //   { name: "Trưởng", message: "Chúc mừng 3 năm yêu nhau, mãi hạnh phúc nhé! ❤️", date: "01/01/2026" },
  //   { name: "Lan", message: "Đọc mà thấy ấm áp ghê, chúc mừng kỷ niệm 3 năm hai đứa!", date: "02/01/2026" },
  // ],

};
