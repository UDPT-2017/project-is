# Project - *Tìm và đặt phòng khách sạn*

**Tìm và đặt phòng khách sạn** là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1412269** - Hà Mạnh Kiệt - KietHa - hamanhkiet77@gmail.com - Tỉ lệ đóng góp cho đề tài 90%
* [ ] **1412282** - Nguyễn Hoàng Lân - NguyenHoangLan - hoanglanars96@gmail.com - Tỉ lệ đóng góp cho đề tài 90%
* [ ] **1412316** - Đặng Nhật Minh - DangNhatMinh96 - email - Tỉ lệ đóng góp cho đề tài
* [ ] **1412553** - Dương Minh Toàn - tqhb1995 - email - Tỉ lệ đóng góp cho đề tài

URL: **URL hosting của bài tập**
Báo cáo: **URL Github Page của đề tài**

## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Yêu cầu **GIT**
* [x] Có sử dụng GIT.
* [x] Sử dụng GIT theo Centralized Workflow.
* [ ] Sử dụng GIT theo Feature Branch Workflow.
* [ ] Sử dụng GIT theo Gitflow Workflow.

## Mô tả nghiệp vụ chung ứng dụng
Khách hàng cần tìm kiếm, đặt phòng khách sạn thì truy cập website. Thực hiện tìm kiếm khách sạn bằng form tìm kiếm, khách hàng gõ vào từ khóa tìm kiếm với tiêu chí là tên khách sạn hoặc tên thành phố, chức năng autocomplete sẽ đưa ra các gợi ý cho chúng ta chọn đúng keyword. Lưu ý: gõ đúng với tên chữ in hoa chữ cái đầu tiên, có thể chọn ngày để tìm. Nhấn vào nút tìm kiếm sẽ đưa ra các khách sạn đáp ứng yêu cầu, để xem thông tin chi tiết của từng khách sạn thì click vào nút "Chi tiết" bên cạnh.<br />
Trên trang chủ còn thể hiện tin tức với các chủ đề như khách sạn, du lịch,...<br />
Trang liên hệ thể hiện thông tin nhóm.<br />
Trang Du lịch hiển thị thông tin các tour du lịch sắp tổ chức, các sự kiện,..<br />
Chức năng chat cho phép website hỗ trợ chat trực tuyến

## Lập trình server
### MVC
* [x] MVC (MSSV1)
* [x] Config (MSSV1)
* [x] REST routing (MSSV1)
* [x] Layout & partial (MSSV1)

### Lập trình dữ liệu
* [ ] Thêm (MSSV1)
* [ ] Xóa (MSSV1)
* [ ] Sửa (MSSV1)
* [x] Tìm kiếm (1412269)

### Xử lý lỗi
* [ ] Xử lý lỗi trong cùng trang web (MSSV1)
* [ ] Xử lý lỗi dùng trang web riêng (MSSV1)
   * [ ] 401 (MSSV1)
   * [ ] 404 (MSSV1)
   * [ ] 500 (MSSV1)

### Tương tác API khác
Liệt kê các API nhóm đã sử dụng được ở đây
* [x] Facebook API: Thêm nút like cho từng bài viết trong trang Cẩm nang du lịch (MSSV1)
* [ ] Google API: mô tả (MSSV1)
* [ ] ...

## Lập trình client
* [ ] Kiểm tra dữ liệu (MSSV1)
* [x] Animation (1412269)
* [x] Thao tác DOM (1412269)
* [x] AJAX (1412269)

## Bảo mật
* [ ] Chứng thực (MSSV1)
* [ ] Phân quyền sử dụng một số trang web với nhiều vai trò khác nhau (MSSV1)
   * [ ] Không cho phép thao tác vào trang web khi không có quyền (MSSV1)
   * [ ] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau (MSSV1)
   * [ ] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (MSSV1)

## Nâng cao
* [ ] ...

## Chức năng đã thực hiện
Các **yêu cầu chức năng** (check và ghi MSSV vào các phần chức năng đã thực hiện)
* [x] Hiển thị gợi ý khi gõ keyword. (1412269)
* [x] Tìm kiếm khách sạn theo từ khóa. (1412269)
* [x] Hiệu ứng khi di chuyển chuột lên bài viết. (1412269)

## Demo

Link ảnh GIF demo ứng dụng:

![Video Walkthrough](demo.gif)

Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
