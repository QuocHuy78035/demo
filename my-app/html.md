# 📄 Các từ khóa HTML quan trọng

HTML (HyperText Markup Language) là ngôn ngữ đánh dấu tiêu chuẩn để tạo trang web. Dưới đây là các thẻ (tag), thuộc tính, APIs và event thường dùng trong HTML.

---

## 1. Cấu trúc cơ bản

- `<!DOCTYPE html>`: Khai báo loại tài liệu HTML
- `<html>`: Thẻ gốc chứa toàn bộ tài liệu HTML
- `<head>`: Phần đầu chứa meta, tiêu đề, liên kết CSS, v.v.
- `<title>`: Tiêu đề trang
- `<body>`: Nội dung hiển thị trên trình duyệt

---

## 2. Tiêu đề và văn bản

- `<h1>` đến `<h6>`: Các tiêu đề, từ lớn đến nhỏ
- `<p>`: Đoạn văn
- `<br>`: Ngắt dòng
- `<hr>`: Đường kẻ ngang
- `<strong>`: In đậm
- `<em>`: In nghiêng
- `<span>`: Nhóm nội dung nhỏ không có ngữ nghĩa cụ thể
- `<div>`: Khối nội dung lớn, dùng để bố cục

---

## 3. Danh sách

- `<ul>`: Danh sách không thứ tự
- `<ol>`: Danh sách có thứ tự
- `<li>`: Mục trong danh sách

---

## 4. Liên kết và hình ảnh

- `<a href="...">`: Liên kết đến trang khác
- `<img src="..." alt="...">`: Hiển thị hình ảnh

---

## 5. Bảng

- `<table>`: Tạo bảng
- `<tr>`: Hàng trong bảng
- `<td>`: Ô trong hàng
- `<th>`: Ô tiêu đề

---

## 6. Biểu mẫu (Forms)

- `<form>`: Khối biểu mẫu
- `<input>`: Trường nhập dữ liệu
- `<label>`: Nhãn cho input
- `<textarea>`: Trường nhập văn bản dài
- `<button>`: Nút bấm
- `<select>` & `<option>`: Danh sách lựa chọn

---

## 7. Đa phương tiện

- `<audio>`: Âm thanh
- `<video>`: Video
- `<source>`: Nguồn media

---

## 8. Thẻ ngữ nghĩa HTML5

- `<header>`: Phần đầu trang
- `<nav>`: Menu điều hướng
- `<main>`: Nội dung chính
- `<section>`: Phần nội dung
- `<article>`: Bài viết riêng lẻ
- `<aside>`: Nội dung phụ (sidebar)
- `<footer>`: Chân trang

---

## 9. Các thuộc tính HTML thông dụng

- `id`: Định danh duy nhất
- `class`: Phân loại nhóm phần tử
- `style`: Áp dụng CSS trực tiếp
- `href`: Đường dẫn liên kết
- `src`: Nguồn tài nguyên (ảnh, video)
- `alt`: Văn bản thay thế
- `type`: Kiểu dữ liệu input
- `value`: Giá trị mặc định
- `name`: Tên định danh cho input
- `placeholder`: Gợi ý nhập liệu

---

## 10. 🧠 HTML APIs (thường dùng với JavaScript)

HTML APIs là các giao diện lập trình cho phép bạn tương tác với các thành phần HTML thông qua JavaScript:

- **DOM API**: Truy cập và thao tác với tài liệu HTML
- **Canvas API**: Vẽ đồ họa 2D trên trình duyệt
- **Geolocation API**: Xác định vị trí của người dùng
- **Drag and Drop API**: Kéo và thả phần tử
- **Web Storage API**:
  - `localStorage`: Lưu dữ liệu cục bộ không hết hạn
  - `sessionStorage`: Lưu dữ liệu tạm thời theo phiên
- **Fetch API**: Gửi yêu cầu HTTP bất đồng bộ
- **WebSocket API**: Giao tiếp 2 chiều real-time
- **Notification API**: Hiển thị thông báo từ trình duyệt
- **Clipboard API**: Truy cập clipboard (sao chép, dán)

---

## 11. ⚡ HTML Event Attributes (Sự kiện HTML)

Các thuộc tính sự kiện cho phép gắn JavaScript trực tiếp trong HTML để xử lý các tương tác:

### Sự kiện chuột

- `onclick`: Khi người dùng click chuột
- `ondblclick`: Click đúp chuột
- `onmouseover`: Khi rê chuột vào
- `onmouseout`: Khi rê chuột ra
- `onmousedown`: Khi nhấn chuột xuống
- `onmouseup`: Khi nhả chuột

### Sự kiện bàn phím

- `onkeydown`: Khi nhấn phím
- `onkeypress`: Khi nhấn phím (phím in được)
- `onkeyup`: Khi thả phím

### Sự kiện biểu mẫu

- `onchange`: Khi giá trị thay đổi
- `onsubmit`: Khi form được gửi đi
- `onreset`: Khi form được reset
- `onfocus`: Khi phần tử được focus
- `onblur`: Khi phần tử mất focus
- `oninput`: Khi người dùng nhập dữ liệu

### Sự kiện trang

- `onload`: Khi tài liệu được tải hoàn toàn
- `onunload`: Khi người dùng rời khỏi trang
- `onresize`: Khi thay đổi kích thước cửa sổ
- `onscroll`: Khi cuộn trang

---

## 🔚 Tổng kết

HTML không chỉ đơn thuần là ngôn ngữ đánh dấu, mà còn kết hợp cùng JavaScript và APIs để xây dựng các ứng dụng web hiện đại. Việc hiểu rõ các thẻ, thuộc tính, APIs và event là nền tảng quan trọng cho phát triển web.
