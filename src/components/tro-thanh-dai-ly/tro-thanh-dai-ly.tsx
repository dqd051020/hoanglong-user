'use client';

import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';

const DailyComponent: React.FC = () => {
  return (
    <Box
      mt={8}
      p={6}
      bg="green.50"
      borderRadius="lg"
      boxShadow="md"
      maxW="container.lg"
      mx="auto"
      color="gray.700"
      pt={5}
    >
      <Breadcrumb items={[{ title: 'Trở thành đại lý', href: '/tro-thanh-dai-ly' }]} />
      <PageSection title="Trở thành đại lý" />

      {/* Tiêu đề chính */}
      <Text fontSize="3xl" fontWeight="bold" color="green.700" mb={6} textAlign="center">
        CƠ HỘI HỢP TÁC PHÂN PHỐI CÙNG HTX HOÀNG LONG
      </Text>

      {/* Giới thiệu ngắn gọn */}
      <Text fontSize="lg" mb={4} textAlign="justify" color="green.800">
        Hợp tác xã Sản xuất và Chế biến Nông sản Hoàng Long với sứ mệnh mang đến những sản phẩm nông nghiệp sạch, an toàn, chuẩn chất lượng vùng miền, đang tìm kiếm các đối tác trên toàn quốc để **phân phối sản phẩm chính hãng** và mở rộng chuỗi giá trị.
      </Text>

      {/* Lý do nên trở thành đại lý */}
      <Text fontWeight="semibold" fontSize="xl" color="green.600" mt={8} mb={3}>
        Vì sao bạn nên trở thành đại lý của chúng tôi?
      </Text>
      <Flex direction="column" gap={3} pl={4}>
        <Text>✅ Sản phẩm chất lượng, nguồn gốc rõ ràng, đạt tiêu chuẩn vệ sinh an toàn thực phẩm.</Text>
        <Text>✅ Giá cả cạnh tranh, chiết khấu hấp dẫn cho đại lý và cộng tác viên.</Text>
        <Text>✅ Hỗ trợ marketing, tài liệu bán hàng, mẫu thử và vận chuyển toàn quốc.</Text>
        <Text>✅ Sản phẩm đa dạng: Miến khoai lang, miến dong, sản phẩm chế biến từ thịt - cá - rau củ,...</Text>
        <Text>✅ Góp phần phát triển nông sản địa phương và nâng cao giá trị Việt.</Text>
      </Flex>

      {/* Giới thiệu sản phẩm tiêu biểu */}
      <Text fontWeight="semibold" fontSize="xl" color="green.600" mt={8} mb={3}>
        Một số sản phẩm tiêu biểu:
      </Text>
      <Flex direction="column" gap={2} pl={4}>
        <Text>🥬 Miến khoai lang Hoàng Long – 100% từ khoai lang nguyên chất.</Text>
        <Text>🌿 Miến dong Cúc Phương – Làm từ củ dong riềng, không tẩy trắng.</Text>
      </Flex>

      {/* Lời mời hợp tác */}
      <Text fontSize="lg" mt={8} mb={4} textAlign="justify" color="green.800">
        Với tiêu chí “Cùng phát triển – Cùng lan tỏa giá trị”, HTX Hoàng Long trân trọng mời bạn tham gia vào mạng lưới phân phối – đại lý chính thức của chúng tôi. Dù bạn là cửa hàng, siêu thị, doanh nghiệp hay cá nhân kinh doanh online, chúng tôi đều có chính sách riêng phù hợp để bạn dễ dàng khởi đầu.
      </Text>

      {/* Kêu gọi hành động */}
      <Text fontSize="xl" fontWeight="bold" color="green.700" mt={6} textAlign="center">
        👉 Hãy liên hệ ngay hôm nay để trở thành đại lý phân phối chính thức của HTX Hoàng Long!
      </Text>
      <Text textAlign="center" mt={2} color="green.600">
        📞 Hotline: 0911 191 558 — ✉️ Email: htxhoanglongnb@gmail.com
      </Text>
    </Box>
  );
};

export default DailyComponent;