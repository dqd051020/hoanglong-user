'use client';

import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';

const DieukhoanComponent: React.FC = () => {
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
      <Breadcrumb items={[{ title: 'Điều khoản sử dụng', href: '/dieu-khoan-su-dung' }]} />
      <PageSection title="Điều khoản sử dụng" />

      <Text fontSize="lg" mt={4} mb={4} textAlign="justify">
        Khi truy cập và sử dụng website của Hợp tác xã Sản xuất và Chế biến Nông sản Hoàng Long (sau đây gọi là “HTX Hoàng Long”, “chúng tôi” hoặc “trang web”), bạn đồng ý tuân thủ các điều khoản sử dụng sau đây. Vui lòng đọc kỹ trước khi tiếp tục sử dụng dịch vụ.
      </Text>

      {/* 1. Quyền sở hữu nội dung */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        1. Quyền sở hữu nội dung
      </Text>
      <Text textAlign="justify" mb={2}>
        Tất cả nội dung hiển thị trên trang web này bao gồm nhưng không giới hạn: văn bản, hình ảnh, biểu trưng, video, thiết kế giao diện, mã nguồn,... đều thuộc quyền sở hữu của HTX Hoàng Long hoặc các bên thứ ba có liên quan. Việc sao chép, trích dẫn hay sử dụng lại phải có sự cho phép bằng văn bản.
      </Text>

      {/* 2. Trách nhiệm người dùng */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        2. Trách nhiệm của người dùng
      </Text>
      <Text textAlign="justify" mb={2}>
        Người dùng cam kết sử dụng website đúng mục đích, không được can thiệp, gây rối, hoặc thực hiện hành vi phá hoại hệ thống, làm ảnh hưởng đến tính bảo mật, tính toàn vẹn và hiệu suất hoạt động của trang web.
      </Text>

      {/* 3. Bảo mật thông tin */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        3. Bảo mật thông tin cá nhân
      </Text>
      <Text textAlign="justify" mb={2}>
        Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của người dùng. Mọi dữ liệu được thu thập chỉ nhằm mục đích liên hệ, cung cấp dịch vụ và sẽ không được chia sẻ cho bên thứ ba nếu không có sự đồng ý của bạn, trừ khi theo yêu cầu của pháp luật.
      </Text>

      {/* 4. Liên kết ngoài */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        4. Liên kết tới bên thứ ba
      </Text>
      <Text textAlign="justify" mb={2}>
        Trang web có thể chứa liên kết đến website của bên thứ ba. Chúng tôi không chịu trách nhiệm về nội dung hoặc chính sách bảo mật của các website này. Người dùng cần tự cân nhắc khi truy cập và sử dụng các liên kết ngoài.
      </Text>

      {/* 5. Sửa đổi điều khoản */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        5. Sửa đổi điều khoản
      </Text>
      <Text textAlign="justify" mb={2}>
        HTX Hoàng Long có quyền thay đổi, chỉnh sửa nội dung Điều khoản sử dụng bất kỳ lúc nào mà không cần thông báo trước. Việc tiếp tục sử dụng trang web sau khi các điều khoản được cập nhật đồng nghĩa với việc bạn đã đồng ý với những thay đổi đó.
      </Text>

      {/* 6. Luật áp dụng */}
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        6. Luật áp dụng
      </Text>
      <Text textAlign="justify" mb={2}>
        Các điều khoản này được điều chỉnh và giải thích theo pháp luật của nước Cộng hòa xã hội chủ nghĩa Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại cơ quan có thẩm quyền của Việt Nam.
      </Text>

      {/* Kết thúc */}
      <Text fontSize="md" mt={6} textAlign="justify">
        Nếu bạn có bất kỳ câu hỏi nào liên quan đến Điều khoản sử dụng, vui lòng liên hệ với chúng tôi qua email: <b>htxhoanglongnb@gmail.com</b> hoặc số điện thoại: <b>0911 191 558</b>.
      </Text>
    </Box>
  );
};

export default DieukhoanComponent;