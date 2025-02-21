const { callAIChatAPI } = require('./utilities/llm_api');
const systemContent = 'Bạn là một trợ lý ảo';
async function example(user_content) {
    try {
        const response = await callAIChatAPI(user_content, systemContent);
        console.log('AI Response:', response);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
const_test_text = `Hãy giúp tôi tổng hợp thông tin này , tập trung vào các điểm chính, các con số, hay các báo cáo quan trọng :  
Title: Chiến sự Ukraine ngày 1.093: Nga giành lại lãnh thổ tại Kursk, Mỹ gây sức ép lên Ukraine


 Admicro AdX
 Thứ Sáu, 21/2/2025
 Đà Nẵng 25 o C
 Bạn cần biết Tiện ích Liên hệ
 Theo dõi báo trên
 Podcast Quảng cáo Đặt báo Đăng nhập
 Bình luận mới được duyệt Xem tất cả
 Thông tin tài khoản Đổi mật khẩu Tin đã lưu Tin đã xem Đăng xuất
 Chính trị
 Chính trị
 Thời sự
 Thời sự
 Thế giới
 Thế giới
 Kinh tế
 Kinh tế
 Đời sống
 Đời sống
 Sức khỏe
 Sức khỏe
 Giới trẻ
 Giới trẻ
 Giáo dục
 Giáo dục
 Du lịch
 Du lịch
 Văn hóa
 Văn hóa
 Giải trí
 Giải trí
 Thể thao
 Thể thao
 Công nghệ
 Công nghệ -
 Game
 Xe
 Xe
 Video
 Video
 Tiêu dùng
 Tiêu dùng
 Thời trang trẻ
 Thời trang
 trẻ
 Đóng menu
 Chào ngày mới Tin 24h Tin thị trường Tin 360
 Video Podcast Magazine
 Tiện ích Bạn cần biết Liên hệ Thông tin toà soạn Liên hệ quảng cáo
 Thế giới Quân sự
 <h1> Chiến sự Ukraine ngày 1.093: Nga giành lại lãnh thổ tại Kursk, Mỹ gây sức ép lên Ukraine
 </h1>
 Trí Đỗ - mtri1904@gmail.com
 21/02/2025 05:15 GMT+7
 Chia sẻ
 Play
 0:00
 5:24
 Bài đầy đủ
 Bài đầy đủ Bài tóm tắt
 1.00x Chọn tốc độ đọc
 Điều chỉnh âm lượng
 Ngọc Huyền Chọn giọng đọc
 Ngọc Huyền
 Thảo Trinh
 Minh Hoàng
 Anh Khôi
 <h2> Tướng Nga Sergei Rudskoi khẳng định quân đội Nga đang nắm thế chủ động và tiến công trên mọi mặt trận ở tỉnh Kursk (Nga), trong khi lực lượng Ukraine phải rút khỏi nhiều khu vực.</h2>
 The Kyiv Independent ngày 20.2 dẫn lời ông Rudskoi cho hay lực lượng Nga đã giành lại hơn 800 km 2 lãnh thổ từ Ukraine ở khu vực Kursk, tương đương khoảng 64% phần lãnh thổ mà Kyiv kiểm soát được kể từ cuộc đột kích bất ngờ khu vực này vào năm 2024. "Năm ngoái là bước ngoặt cho mục tiêu của chúng ta. Kyiv sẽ không còn có thể thay đổi đáng kể tình hình trên chiến trường nữa", theo ông Rudskoi.
 Tự động phát sau
 3
 Current Time 0:00
 /
 Duration 1:58
 auto
 1080p 720p 480p 360p auto
 Tướng Nga hé lộ ý đồ khi tung quân theo hướng mới vào Ukraine
 00:01:58
 Tướng Nga hé lộ ý đồ khi tung quân theo hướng mới vào Ukraine
 Ngoài Kursk, ông Rudskoi tuyên bố Moscow đã kiểm soát 75% khu vực Donetsk, Zaporizhzhia và Kherson, cùng 99% tỉnh Luhansk ở Ukraine. Tổng diện tích quân đội Nga giành thêm trong năm 2024 là gần 4.500 km 2 , con số này trong 2 tháng đầu năm 2025 là hơn 600 km 2 . Tướng Rudskoi cho rằng các đợt tuyển quân của Ukraine hiện nay "không thể bù đắp tổn thất lớn trên chiến trường, chưa nói đến xây dựng lực lượng dự bị chiến lược mới". Theo ông, Ukraine đã mất phần lớn khả năng sản xuất các vũ khí, thiết bị và đạn dược cần thiết, cũng như việc huy động quân thường là bắt buộc.
 Một tòa nhà bị hư hại do giao tranh giữa lực lượng Nga và Ukraine tại tỉnh Kursk hồi tháng 8.2024
 ẢNH: REUTERS
 Ông Rudskoi khẳng định tương lai của cuộc xung đột không còn phụ thuộc vào Ukraine, mà phụ thuộc vào việc liệu phương Tây có đồng ý xây dựng một cấu trúc an ninh châu Âu mới có tính đến lợi ích của Nga hay không. Giới chức Ukraine chưa bình luận về phát biểu của tướng Nga. Tuy nhiên, hôm 13.2, Tư lệnh quân đội Ukraine Oleksandr Syrsky thừa nhận Kyiv còn kiểm soát khu vực rộng 500 km 2 tại Kursk, tương đương 38% lãnh thổ giành được trong giai đoạn đầu chiến dịch phát động hồi tháng 8.2024.<h2> Giới chức Mỹ gây sức ép lên Ukraine</h2>
 Advertisements
 X
 Các cuộc thảo luận về thỏa thuận hòa bình ở Ukraine đã trở thành đề tài đặc biệt sôi nổi kể từ khi ông Donald Trump nhậm chức tổng thống Mỹ hôm 20.1. Kể từ khi lên nắm quyền, ông Trump đã có những động thái đảo chiều chính sách với Nga và Ukraine. Trong những ngày gần đây, sự thay đổi này càng rõ rệt hơn khi ông Trump chỉ trích đích danh Tổng thống Ukraine Volodymyr Zelensky và ca ngợi cuộc họp giữa giới chức Nga – Mỹ ở Ả Rập Xê Út hôm 18.2.
 Một quân nhân Ukraine tại vùng chiến sự ngày 16.2.2025
 ẢNH: REUTERS
 Nhà Trắng tiếp tục gây sức ép với Ukraine về những nỗ lực chấm dứt xung đột Nga - Ukraine , kêu gọi nước này kiềm chế chỉ trích và nhanh chóng ký một thỏa thuận khoáng sản do Tổng thống Trump thúc đẩy. "Họ cần phải dịu giọng hơn, xem xét kỹ lưỡng rồi mới ký thỏa thuận đó", Cố vấn an ninh quốc gia Nhà Trắng Mike Waltz trả lời phỏng vấn với Fox News ,
 Tự động phát sau
 3
 Current Time 0:00
 /
 Duration 0:00
 Ông Putin giải thích vì sao Nga-Mỹ họp mà không có Ukraine, EU
 00:02:10
 Ông Putin giải thích vì sao Nga-Mỹ họp mà không có Ukraine, EU
 Cố vấn an ninh quốc gia Nhà Trắng Waltz ngày 20.2 phủ nhận việc các đồng minh của Mỹ và Ukraine không được tham gia đàm phán. "Trong ngoại giao có một thuật ngữ dành cho điều này. Nó được gọi là ngoại giao con thoi, bởi vì việc đưa tất cả mọi người vào bàn đàm phán cùng một lúc không hề hiệu quả. Vì vậy, chúng tôi đã đàm phán trước với một bên. Sau đó, chúng tôi sẽ thu hút bên còn lại. Kết quả, chúng tôi sẽ có một tiến trình tiến triển theo sự chỉ đạo và lãnh đạo của Tổng thống Trump", ông Waltz lập luận. Cũng trong ngày 20.2, Reuters dẫn 3 nguồn thạo tin cho hay Mỹ từ chối đồng bảo trợ cho dự thảo nghị quyết của Liên Hiệp Quốc liên quan đánh dấu 3 năm kể từ chiến dịch quân sự đặc biệt của Nga tại Ukraine. Dự thảo nghị quyết có nội dung gồm ủng hộ toàn vẹn lãnh thổ của Kyiv và lên án hành động của Nga. Chuỗi động thái trên diễn ra một ngày sau khi Tổng thống Trump và Tổng thống Zelensky khẩu chiến, càng phản ánh sự rạn nứt ngày càng sâu sắc giữa Mỹ và Ukraine. Phản ứng về phát ngôn gần đây của Tổng thống Trump, Phó Chủ tịch Hội đồng an ninh Nga Dmitry Medvedev ngày 19.2 bày tỏ sự hoan nghênh, cho rằng ông Trump đã hoàn toàn đúng về Tổng thống Ukraine. "Nếu có ai đó nói với tôi cách đây 3 tháng rằng đó là những lời từ Tổng thống Mỹ, tôi có lẽ đã bật cười. Tổng thống Trump đúng 200%", ông Medvedev viết trên mạng xã hội X. Trước đó, Ngoại trưởng Nga Sergey Lavrov bày tỏ sự hài lòng, nói rằng ông Trump đang ngày càng "thấu hiểu" lập trường của Điện Kremlin.
 Giới chức Ukraine chưa bình luận về các thông tin trên. Tuy nhiên, ngày 20.2, ông Kyrylo Budanov, người đứng đầu cơ quan tình báo quân sự GUR của Ukraine, tin rằng lệnh ngừng bắn trong cuộc xung đột Nga - Ukraine có thể đạt được trong năm nay. "Tôi nghĩ điều đó sẽ xảy ra. Có hầu hết các yếu tố để điều đó xảy ra", Reuters dẫn lời ông Budanov. Ông không đưa ra thông tin chi tiết. Ông Budanov nói thêm: "Nó sẽ kéo dài bao lâu, hiệu quả ra sao - lại là một câu hỏi khác".<h2> Châu Âu đứng về phía Ukraine</h2>
 Tổng thống Pháp Emmanuel Macron bắt tay Thủ tướng Đức Olaf Scholz (trái) ở Paris
 ẢNH: REUTERS
 Trước những diễn biến bất lợi với Kyiv, các đồng minh châu Âu tuyên bố sẽ tiếp tục ủng hộ Ukraine. Phát biểu trên Đài truyền hình công cộng ARD, Thủ tướng Đức Olaf Scholz ngày 20.2 nhấn mạnh tầm quan trọng của việc tiếp tục con đường để Ukraine gia nhập Liên minh châu Âu (EU), đồng thời bác bỏ những ý kiến cho rằng Kyiv phải chịu trách nhiệm về cuộc xung đột với Nga. Trong trường hợp đạt được giải pháp hòa bình trong tương lai, Thủ tướng Scholz cho biết Ukraine phải có một đội quân mạnh, "mà chúng tôi ở châu Âu và các đối tác quốc tế và xuyên Đại Tây Dương cùng chia sẻ trách nhiệm". Trước đó, sau cuộc họp khẩn cấp với các đối tác EU, Canada, Iceland và Na Uy, Tổng thống Pháp Emmanuel Macron ngày 19.2 cho biết châu Âu có lập trường thống nhất và rõ ràng về cuộc xung đột và sẽ tiếp tục hỗ trợ Ukraine cũng như chịu trách nhiệm về hòa bình, an ninh khu vực. Ông cũng nhấn mạnh quan điểm bất cứ đàm phán hòa bình nào cũng phải có Ukraine và đó phải là một nền hòa bình bền vững, có các đảm bảo an ninh, ngoài ra, những lo ngại an ninh của châu Âu cũng phải được tính đến.
 <h2> Dòng sự kiện: Xung đột Nga-Ukraine </h2>
 <h3> Tướng Nga hé lộ ý đồ khi tung quân theo hướng mới vào Ukraine </h3>
 21/02
 <h3> Chiến sự Ukraine ngày 1.093: Nga giành lại lãnh thổ tại Kursk, Mỹ gây sức ép lên Ukraine </h3>
 21/02
 <h3> Lãnh đạo Mỹ - Ukraine khẩu chiến kịch liệt </h3>
 21/02
 <h3> Mỹ sẽ điều chỉnh lệnh cấm vận Nga tùy theo thỏa thuận Ukraine </h3>
 20/02
 <h3> Anh, Pháp muốn lập lực lượng bảo vệ Ukraine sẽ nhiều thách thức </h3>
 20/02
 Xem thêm
 <h2> Tin liên quan </h2>
 <h3> Chiến sự Ukraine ngày 1.091: Chỉ ông Trump có thể chấm dứt xung đột Ukraine? </h3>
 Ngoại trưởng Mỹ Marco Rubio nhấn mạnh vai trò của Tổng thống Mỹ Donald Trump đối với khả năng kết thúc chiến sự ở Ukraine, sau khi nhà ngoại giao này đối thoại cùng các quan chức Nga.
 <h3> Chiến sự Ukraine ngày 1.092: Nga tấn công mạnh, ông Putin lên tiếng sau đối thoại Mỹ-Nga </h3>
 <h3> Anh, Pháp muốn lập lực lượng bảo vệ Ukraine sẽ nhiều thách thức </h3>
 Chia sẻ
 UKRAINE nga Mỹ châu Âu Zelensky Donald Trump Olaf Scholz eu
 Bình luận
 Gửi bình luận
 Quan tâm nhất Mới nhất
 Xem thêm bình luận
 Admicro AdX
 Admicro AdX
 Admicro AdX
 ADVERTISEMENT
 Admicro AdX
 Admicro AdX
 Admicro AdX
 Admicro AdX
<h2> Đọc thêm </h2>
 Thế giới<h3> Tướng Nga hé lộ ý đồ khi tung quân theo hướng mới vào Ukraine </h3>
 Tổng thống Vladimir Putin hôm 19.2 cho biết quân đội Nga đã tiến vào vùng Sumy phía đông bắc Ukraine lần đầu tiên kể từ năm 2022.
 Thế giới<h3> Tổng thống Putin bảo đảm ghế trên bàn đàm phán cho Ukraine </h3>
 Tổng thống Nga Vladimir Putin hôm 19.2 khẳng định Ukraine không bị loại khỏi bàn đàm phán để tìm giải pháp chấm dứt chiến sự, nhưng thành công hay không phụ thuộc vào việc gia tăng mức độ...
 <h3> Asta Healthcare USA - một thương hiệu mới trong ngành dược </h3>
 Tin tài trợ
 Thế giới<h3> Tổng thống Ukraine phản pháo phát ngôn mới của Tổng thống Trump </h3>
 Tổng thống Ukraine Volodymyr Zelensky ngày 19.2 đã đáp lại phát ngôn mới của Tổng thống Mỹ Donald Trump về xung đột Nga-Ukraine.
 Thế giới<h3> Kết quả tức thì từ đối thoại Mỹ - Nga về Ukraine </h3>
 Ngoại trưởng Mỹ và Nga đã hé lộ kết quả ban đầu của cuộc đối thoại song phương đầu tiên về khủng hoảng Ukraine mà không có sự tham gia của phía Ukraine.
 <h3> Giải phóng bệnh nhân khỏi nỗi ưu phiền do bệnh trĩ </h3>
 Tin tài trợ
 Thế giới<h3> Lãnh đạo Mỹ - Ukraine khẩu chiến kịch liệt </h3>
 Tổng thống Mỹ Donald Trump chỉ trích người đồng cấp Ukraine Volodymyr Zelensky, gây sốc cho lãnh đạo các nước đồng minh lẫn giới lập pháp nước Mỹ.
 Quân sự<h3> Anh, Pháp muốn lập lực lượng bảo vệ Ukraine sẽ nhiều thách thức </h3>
 Anh và Pháp được cho là đang lên kế hoạch thành lập một 'lực lượng trấn an' của châu Âu để đảm bảo Nga sẽ không tấn công Ukraine một lần nữa nếu đạt được một lệnh ngừng bắn và thỏa thuận...
 Thế giới<h3> Ông Trump 'nghe nói Ukraine bực bội', có khả năng gặp ông Putin trong tháng 2 </h3>
 Trong một tuyên bố ngày 18.2 (giờ Mỹ), Tổng thống Donald Trump thể hiện sự lạc quan về khả năng đạt được thỏa thuận chấm dứt xung đột tại Ukraine, đồng thời tiết lộ khả năng sẽ gặp người...
 Thế giới<h3> Ông Trump gọi ông Zelensky là 'nhà độc tài' trong cuộc đấu khẩu về hòa đàm </h3>
 Tổng thống Mỹ Donald Trump trong một bài đăng trên Truth Social hôm 19.2 gọi Tổng thống Ukraine Volodymyr Zelensky là "kẻ độc tài không có bầu cử". Ông Trump cũng viết rằng ông Zelensky...
 Quân sự<h3> Ukraine đang cạn tên lửa Patriot </h3>
 Tổng thống Ukraine Volodymyr Zelensky cho biết lực lượng phòng không nước này đang lâm vào tình trạng cạn kiệt tên lửa cho các khẩu đội Patriot do Mỹ sản xuất.
 Thế giới<h3> 'Ông Trump rất thất vọng về ông Zelensky, muốn Ukraine thỏa thuận khoáng sản 500 tỉ USD' </h3>
 Nhà Trắng kêu gọi Tổng thống Ukraine Volodymyr Zelensky ngừng chỉ trích Tổng thống Donald Trump, mà hãy ký kết thỏa thuận khoáng sản trị giá 500 tỉ USD.
 <h3> Asta Healthcare USA - một thương hiệu mới trong ngành dược </h3>
 Tin tài trợ
 Thế giới<h3> Ông Trump bất ngờ nặng lời về ông Zelensky, nhiều bên bị sốc </h3>
 Tổng thống Mỹ Donald Trump có những lời bình luận mang tính xúc phạm nhằm vào người đồng cấp Ukraine Volodymyr Zelensky, khiến nhiều bên bị sốc và lo ngại về những diễn biến tiếp theo.
 Thế giới<h3> Mỹ sẽ điều chỉnh lệnh cấm vận Nga tùy theo thỏa thuận Ukraine </h3>
 Bộ trưởng Tài chính Mỹ hé lộ rằng Washington có thể tăng cường hoặc nới lỏng lệnh cấm vận lên Nga tùy vào sự sẵn sàng của Moscow trên bàn đàm phán về chiến sự Ukraine.
 Thế giới<h3> Ông Putin giải thích vì sao Nga-Mỹ họp mà không có Ukraine, EU </h3>
 Tổng thống Nga Vladimir Putin đã chia sẻ quan điểm của mình về cuộc đàm phán cấp cao Nga-Mỹ diễn ra hôm 18.2 tại Riyadh, Ả Rập Xê Út.
 Bóng đá Việt Nam<h3> Các đội giỏi phòng ngự thống trị V-League: Đã hiểu tại sao thầy Kim... mê Xuân Son </h3>
 Chiếm thế thượng phong ở lượt đi V-League 2024 - 2025 đang là các đội bóng giỏi phòng ngự, thay vì giỏi tấn công.
 Thế giới<h3> Bầu cử Đức đến giai đoạn nước rút </h3>
 Đảng bảo thủ CDU/CSU tại Đức đang dẫn đầu, song vấn đề tìm liên minh để lập chính phủ sẽ là một thách thức.
 Xem thêm
 x
 Chính trị Thời sự Thế giới Kinh tế
 Đời sống Sức khoẻ Giới trẻ Giáo dục
 Du lịch Văn hoá Giải trí Thể thao
 Công nghệ Xe Thời trang trẻ Video
 Podcast Bạn đọc Rao vặt
 Đặt báo Quảng cáo RSS Tòa soạn Chính sách bảo mật
 Theo dõi báo trên
 Hotline 0906 645 777 Liên hệ quảng cáo 0908 780 404
 Tổng biên tập: Nguyễn Ngọc Toàn Phó tổng biên tập: Hải Thành Phó tổng biên tập: Lâm Hiếu Dũng Phó tổng biên tập: Trần Việt Hưng Tổng thư ký tòa soạn: Đức Trung
 Giấy phép xuất bản số 110/GP - BTTTT cấp ngày 24.3.2020
 © 2003-2025 Bản quyền thuộc về Báo Thanh Niên. Cấm sao chép dưới mọi hình thức nếu không có sự chấp
 thuận bằng văn bản.
 Top
 <h4> </h4>
 <h4> Bạn không thể gửi bình luận liên tục. Xin hãy đợi 60 giây nữa.</h4>
 Bình luận
 Gửi bình luận
 Đăng nhập để bình luận
 Quan tâm nhất Mới nhất
 Xem thêm bình luận
`
example(const_test_text);