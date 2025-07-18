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
