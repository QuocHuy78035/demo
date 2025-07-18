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

# 🔑 CSS Keywords

Danh sách các từ khóa quan trọng trong CSS – được sử dụng để định nghĩa kiểu dáng, bố cục, hiệu ứng, và nhiều hơn nữa. Đây là những giá trị hoặc thuộc tính không thể dùng làm tên class hoặc id.

---

## 1. Các thuộc tính CSS cơ bản

- `color` – Màu chữ
- `background` – Nền của phần tử
- `font-size` – Kích thước chữ
- `font-family` – Kiểu chữ
- `margin` – Khoảng cách bên ngoài phần tử
- `padding` – Khoảng cách bên trong phần tử
- `border` – Viền phần tử
- `width` – Chiều rộng phần tử
- `height` – Chiều cao phần tử
- `display` – Kiểu hiển thị phần tử (block, inline, flex, grid, none,...)
- `position` – Vị trí (static, relative, absolute, fixed, sticky)
- `top`, `right`, `bottom`, `left` – Định vị trí phần tử

---

## 2. Các giá trị đặc biệt

- `inherit` – Kế thừa giá trị từ phần tử cha
- `initial` – Giá trị mặc định ban đầu của thuộc tính
- `unset` – Đặt lại giá trị về kế thừa hoặc mặc định
- `auto` – Tự động tính toán giá trị

---

## 3. Các kiểu hiển thị (display)

- `block`
- `inline`
- `inline-block`
- `flex`
- `inline-flex`
- `grid`
- `inline-grid`
- `none`

---

## 4. Các giá trị vị trí (position)

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`

---

## 5. Các từ khóa về Flexbox (Hộp linh hoạt)

Flexbox là một mô hình bố cục trong CSS giúp dễ dàng sắp xếp, căn chỉnh và phân phối không gian giữa các phần tử trong một container ngay cả khi kích thước của chúng không cố định.

---

### Các thuộc tính chính của Flex Container

- `display: flex;`  
  Kích hoạt chế độ Flexbox cho phần tử cha (container).

- `flex-direction`  
  Xác định hướng sắp xếp các phần tử con (flex items).  
  Giá trị phổ biến:

  - `row` (mặc định): sắp xếp theo chiều ngang từ trái sang phải
  - `row-reverse`: sắp xếp theo chiều ngang từ phải sang trái
  - `column`: sắp xếp theo chiều dọc từ trên xuống dưới
  - `column-reverse`: sắp xếp theo chiều dọc từ dưới lên trên

- `flex-wrap`  
  Quyết định các phần tử con có xuống dòng khi không vừa trong container hay không.  
  Giá trị:

  - `nowrap` (mặc định): không xuống dòng, các phần tử co lại vừa container
  - `wrap`: cho phép xuống dòng khi không vừa
  - `wrap-reverse`: xuống dòng nhưng thứ tự dòng bị đảo ngược

- `justify-content`  
  Căn chỉnh các phần tử con theo chiều chính (main axis).  
  Giá trị thường dùng:

  - `flex-start` (mặc định): căn về đầu trục chính
  - `flex-end`: căn về cuối trục chính
  - `center`: căn giữa theo trục chính
  - `space-between`: khoảng cách đều giữa các phần tử, phần tử đầu và cuối sát container
  - `space-around`: khoảng cách đều xung quanh mỗi phần tử
  - `space-evenly`: khoảng cách đều giữa các phần tử và cạnh container

- `align-items`  
  Căn chỉnh các phần tử con theo chiều phụ (cross axis).  
  Giá trị thường dùng:

  - `stretch` (mặc định): phần tử co giãn chiều cao/chiều rộng để vừa container
  - `flex-start`: căn lên đầu trục phụ
  - `flex-end`: căn xuống cuối trục phụ
  - `center`: căn giữa trục phụ
  - `baseline`: căn theo đường cơ sở của chữ

- `align-content`  
  Căn chỉnh các dòng flex (khi có nhiều dòng do wrap) theo chiều phụ.  
  Giá trị giống `align-items` nhưng áp dụng cho nhiều dòng.

---

### Các thuộc tính chính của Flex Items (phần tử con)

- `flex-grow`  
  Xác định phần tử có thể phóng to ra bao nhiêu khi còn dư không gian. Giá trị mặc định là 0 (không phóng to).

- `flex-shrink`  
  Xác định phần tử có thể thu nhỏ bao nhiêu khi không đủ chỗ. Giá trị mặc định là 1.

- `flex-basis`  
  Kích thước cơ sở của phần tử trước khi phân chia không gian còn dư.

- `flex`  
  Viết tắt của `flex-grow`, `flex-shrink`, và `flex-basis`. Ví dụ: `flex: 1 0 auto;`

- `align-self`  
  Ghi đè `align-items` cho từng phần tử riêng biệt.

---

## 6. Các từ khóa về grid

- `grid-template-columns`
- `grid-template-rows`
- `grid-column`
- `grid-row`
- `grid-area`
- `justify-items`
- `align-items`
- `justify-content`
- `align-content`

---

## 7. Các từ khóa về bảng chữ cái màu sắc (color keywords)

- `transparent`
- `currentColor`
- `inherit`
- `initial`

---

## 8. Các từ khóa về trạng thái (pseudo-classes)

- `:hover`
- `:active`
- `:focus`
- `:visited`
- `:checked`
- `:disabled`
- `:first-child`
- `:last-child`
- `:nth-child()`

---

## 9. Các từ khóa về media queries

- `min-width`
- `max-width`
- `min-height`
- `max-height`
- `orientation`
- `resolution`

---

## 10. Các từ khóa khác

- `important!` – Đặt ưu tiên cao cho thuộc tính
- `calc()` – Tính toán giá trị động
- `var()` – Sử dụng biến CSS

---

## ✅ Ghi chú:

- CSS có nhiều thuộc tính và giá trị, các từ khóa ở trên là những phần cơ bản và phổ biến nhất.
- Tránh dùng tên trùng với các từ khóa CSS làm tên class hoặc id để tránh nhầm lẫn và lỗi.

```

```

# 🔑 JavaScript Keywords

Danh sách các từ khóa (keywords) quan trọng trong JavaScript – được sử dụng để khai báo biến, điều kiện, vòng lặp, hàm, lớp, và nhiều hơn nữa. Đây là những từ khóa không thể dùng làm tên biến, hàm hoặc định danh khác.

---

## 1. Biến và Hằng

- `var` – Khai báo biến (cũ, có phạm vi function)
- `let` – Khai báo biến (phạm vi block)
- `const` – Khai báo hằng số (phạm vi block)

---

## 2. Điều kiện

- `if`
- `else`
- `switch`
- `case`
- `default`

---

## 3. Vòng lặp

- `for`
- `while`
- `do`
- `break`
- `continue`

---

## 4. Hàm và Mã

- `function` – Định nghĩa hàm
- `return` – Trả về giá trị
- `yield` – Tạm dừng và tiếp tục trong generator
- `await` – Chờ promise (dùng trong async function)
- `async` – Khai báo hàm bất đồng bộ

---

## 5. Lớp và Đối tượng (Object)

- `class` – Định nghĩa lớp
- `constructor` – Hàm khởi tạo trong lớp
- `extends` – Kế thừa lớp cha
- `super` – Gọi hàm hoặc constructor của lớp cha
- `this` – Tham chiếu đến đối tượng hiện tại
- `new` – Tạo instance mới của lớp hoặc hàm dựng

**Các phương thức và cú pháp liên quan đến Object:**

- `{}` – Khởi tạo object literal
- `Object.keys()` – Lấy danh sách các key trong object
- `Object.values()` – Lấy danh sách các giá trị trong object
- `Object.entries()` – Lấy danh sách các cặp [key, value]
- `hasOwnProperty()` – Kiểm tra object có thuộc tính hay không

---

## 6. Xử lý lỗi

- `try`
- `catch`
- `finally`
- `throw`

---

## 7. Logic và Kiểm tra

- `typeof` – Kiểu dữ liệu
- `instanceof` – Kiểm tra kiểu đối tượng
- `in` – Kiểm tra thuộc tính có trong object không
- `delete` – Xoá thuộc tính của object
- `void` – Trả về `undefined`

---

## 8. Định danh đặc biệt

- `null`
- `true`
- `false`
- `undefined`
- `NaN`
- `Infinity`

---

## 9. Mô-đun (ES6+)

- `import`
- `export`
- `from`
- `as`

---

## 10. Khác

- `with` _(không khuyến khích dùng)_
- `debugger` – Gỡ lỗi
- `arguments` – Đối tượng giả mảng chứa tham số truyền vào
- `eval` – Thực thi chuỗi như mã JavaScript _(không khuyến khích)_

---

## ✅ Ghi chú:

- Một số từ khóa như `enum`, `package`, `private`, `protected`, `public`, `interface` được bảo lưu cho tương lai (hoặc dùng trong TypeScript).
- Không nên sử dụng các từ khóa này làm tên biến hoặc hàm.
