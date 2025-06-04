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
      <Breadcrumb items={[{ title: 'Chính sách đổi trả', href: '/chinh-sach-doi-tra' }]} />
      <PageSection title="Chính sách đổi trả" />

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

      {/* 5. Liên hệ hỗ trợ */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        5. Liên hệ hỗ trợ
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
