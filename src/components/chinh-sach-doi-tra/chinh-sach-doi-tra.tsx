'use client';

import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';

const ChinhsachComponent: React.FC = () => {
  return (
    <Box
      mt={8}
      p={6}
      bg="gray.50"
      borderRadius="lg"
      boxShadow="md"
      maxW="container.lg"
      mx="auto"
      color="gray.700"
      pt={5}
    >
      <Breadcrumb items={[{ title: 'Chính sách đổi trả bảo hành vận chuyển', href: '/chinh-sach-doi-tra' }]} />
      <PageSection title="Chính sách đổi trả bảo hành vận chuyển" />

      <Text fontSize="lg" mt={4} mb={4} textAlign="justify">
        HTX Hoàng Long cam kết cung cấp sản phẩm chất lượng và dịch vụ uy tín. Trong trường hợp quý khách không hài lòng hoặc sản phẩm có lỗi, chúng tôi hỗ trợ đổi trả theo chính sách dưới đây để đảm bảo quyền lợi người tiêu dùng.
      </Text>

      {/* 1. Điều kiện đổi trả */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        1. Điều kiện đổi trả
      </Text>
      <Text textAlign="justify" mb={2}>
        - Sản phẩm còn nguyên tem, nhãn mác, bao bì, chưa qua sử dụng hoặc chế biến.<br />
        - Đổi trả trong vòng <b>3 ngày</b> kể từ khi nhận hàng.<br />
        - Có hóa đơn mua hàng hoặc thông tin xác minh đơn hàng.<br />
        - Lỗi thuộc về sản phẩm: hư hỏng, bể vỡ, sai chủng loại, quá hạn sử dụng.
      </Text>

      {/* 2. Trường hợp không áp dụng */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        2. Trường hợp không áp dụng đổi trả
      </Text>
      <Text textAlign="justify" mb={2}>
        - Sản phẩm đã bị thay đổi hình dạng, mất bao bì gốc hoặc có dấu hiệu đã sử dụng.<br />
        - Sản phẩm không phải do HTX Hoàng Long cung cấp.<br />
        - Hết thời hạn đổi trả theo chính sách.
      </Text>

      {/* 3. Quy trình đổi trả */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        3. Quy trình đổi trả
      </Text>
      <Text textAlign="justify" mb={2}>
        Bước 1: Liên hệ với chúng tôi qua số điện thoại hoặc email để thông báo đổi trả.<br />
        Bước 2: Cung cấp thông tin đơn hàng và hình ảnh sản phẩm lỗi (nếu có).<br />
        Bước 3: Gửi sản phẩm về địa chỉ của HTX Hoàng Long.<br />
        Bước 4: Chúng tôi kiểm tra và thực hiện đổi trả trong vòng <b>3–5 ngày làm việc</b>.
      </Text>

      {/* 4. Chi phí đổi trả */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        4. Chi phí đổi trả
      </Text>
      <Text textAlign="justify" mb={2}>
        - Trường hợp lỗi do chúng tôi: HTX Hoàng Long chịu 100% chi phí vận chuyển đổi trả.<br />
        - Trường hợp khách thay đổi nhu cầu: quý khách vui lòng thanh toán phí vận chuyển.
      </Text>

{/* 5. Quy trình vận chuyển */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        5. Quy trình vận chuyển
      </Text>
      <Text textAlign="justify" mb={2}>
        - HTX Hoàng Long hợp tác với các đơn vị vận chuyển uy tín để đảm bảo sản phẩm đến tay khách hàng nhanh chóng và an toàn.<br />
        - Thời gian vận chuyển dự kiến từ <b>2–5 ngày làm việc</b> tùy vào địa chỉ nhận hàng.<br />
        - Quý khách có thể theo dõi trạng thái đơn hàng thông qua mã vận đơn được cung cấp sau khi giao hàng.
      </Text>

{/* 6. Chính sách kiểm hàng */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        6. Chính sách kiểm hàng
      </Text>
      <Text textAlign="justify" mb={2}>
        - Quyền kiểm tra: Khách hàng có quyền mở gói hàng và kiểm tra ngoại quan sản phẩm (số lượng, bao bì, nhãn mác, tính nguyên vẹn) ngay tại thời điểm nhân viên giao hàng (Shipper) tới giao.<br />
        - Hình thức kiểm hàng: Kiểm tra thực tế số lượng, chủng loại, tình trạng đóng gói sản phẩm. Lưu ý: Không hỗ trợ dùng thử hoặc bóc seal sản phẩm khi chưa thanh toán.<br />
        - Xử lý khi phát hiện vi phạm/lỗi:
      </Text>
      <Text ml={4} mb={2}>
        - Nếu hàng hóa không đúng chủng loại, mẫu mã, bị hư hỏng, đứt gãy hoặc hết hạn sử dụng: Khách hàng có quyền từ chối nhận hàng.<br />
        - Khách hàng tiến hành chụp ảnh/quay video hiện trạng gói hàng và lập biên bản xác nhận với nhân viên giao hàng, đồng thời liên hệ Hotline: 0911191558 để được tư vấn và giao lại đơn mới.
      </Text>

      {/* 7. Nghĩa vụ của người bán và nghĩa vụ của khách hàng trong mỗi giao dịch */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        7. Nghĩa vụ của người bán và nghĩa vụ của khách hàng trong mỗi giao dịch
      </Text>
      <Text textAlign="justify" mb={2}>
        Nghĩa vụ của Người bán (HTX SX & CB Nông sản Hoàng Long)
      </Text>
      <Text ml={4} mb={2}>
        - Cung cấp thông tin đầy đủ, chính xác về sản phẩm, giá cả, phương thức thanh toán và giao nhận cho khách hàng.<br />

        - Đảm bảo chất lượng sản phẩm đúng như cam kết, đạt tiêu chuẩn vệ sinh an toàn thực phẩm.<br />

        - Đóng gói cẩn thận và giao hàng cho đơn vị vận chuyển đúng thời hạn.<br />

        - Giải quyết các khiếu nại, hỗ trợ đổi trả sản phẩm lỗi theo chính sách đã công bố.<br />

        - Xuất hóa đơn/chứng từ bán hàng theo đúng quy định pháp luật khi khách hàng yêu cầu.
      </Text>

      <Text textAlign="justify" mb={2}>
        Nghĩa vụ của Khách hàng:
      </Text>
      <Text ml={4} mb={2}>
        - Cung cấp chính xác và đầy đủ các thông tin giao nhận (Họ tên, số điện thoại, địa chỉ nhận hàng).<br />

        - Thanh toán đầy đủ giá trị đơn hàng và phí vận chuyển (nếu có) theo thỏa thuận.<br />

        - Trực tiếp kiểm tra hàng hóa khi nhận từ nhân viên giao hàng.<br />

        - Thông báo ngay cho Người bán nếu phát hiện bất kỳ sự cố nào về sản phẩm hoặc đơn hàng.
      </Text>

      {/* 8. Phân định trách nhiệm của tổ chức cung ứng dịch vụ Logistics trong quá trình giao nhận */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        8. Phân định trách nhiệm của tổ chức cung ứng dịch vụ Logistics trong quá trình giao nhận
      </Text>
      <Text textAlign="justify" mb={2}>
        - Trách nhiệm giao hàng: Đơn vị Logistics chịu trách nhiệm vận chuyển hàng hóa nguyên vẹn từ kho của Người bán đến địa chỉ nhận hàng của Khách hàng theo thời gian cam kết.<br />
        - Trách nhiệm bảo quản: Đảm bảo điều kiện bảo quản sản phẩm trong suốt quá trình vận chuyển, không làm móp méo, mẻ vỡ hay ảnh hưởng đến chất lượng sản phẩm.<br />
        - Trách nhiệm bồi thường: Chịu trách nhiệm bồi thường thiệt hại cho Khách hàng/Người bán nếu phát sinh tổn thất, mất mát hoặc hư hỏng sản phẩm trong quá trình vận chuyển do lỗi trực tiếp từ nhà vận chuyển.<br />
        - Cung cấp chứng từ: Cung cấp chữ ký/biên bản xác nhận giao hàng hoặc mã vận đơn theo dõi cho các bên liên quan.

      </Text>

      {/* 9. Liên hệ hỗ trợ */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        9. Liên hệ hỗ trợ
      </Text>
      <Text textAlign="justify" mb={2}>
        Mọi thắc mắc hoặc yêu cầu liên quan đến đổi trả, xin vui lòng liên hệ:
      </Text>
      <Text ml={4} mb={2}>
        - Hotline: <b>0911 191 558</b><br />
        - Email: <b>htxhoanglongnb@gmail.com</b><br />
        - Địa chỉ: Thôn Yên Mỹ, Xã Yên Quang, Huyện Nho quan, Tỉnh Ninh Bình, Việt Nam
      </Text>

      {/* Kết thúc */}
      <Text fontSize="md" mt={6} textAlign="justify">
        HTX Hoàng Long luôn nỗ lực phục vụ khách hàng tốt nhất. Cảm ơn quý khách đã tin tưởng và ủng hộ!
      </Text>
    </Box>
  );
};

export default ChinhsachComponent;
