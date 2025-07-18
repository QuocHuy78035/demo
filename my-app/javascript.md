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
