'use client';

import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';

const MyComponent: React.FC = () => {
  return (
    <Box mt={8}
         p={6}
         bg="green.50"
         borderRadius="lg"
         boxShadow="md"
         maxW="container.lg"
         mx="auto"
         color="gray.700"
         pt={5}>
      <Breadcrumb items={[{ title: 'Về chúng tôi', href: '/ve-chung-toi' }]} />
      <PageSection title="Về chúng tôi" />

        {/* Tiêu đề chính */}
        <Text fontSize="3xl" fontWeight="bold" color="green.700" mb={6} textAlign="center">
          HỢP TÁC XÃ SẢN XUẤT VÀ CHẾ BIẾN NÔNG SẢN HOÀNG LONG
        </Text>

        {/* Thông tin pháp lý và địa chỉ */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          mb={8}
          gap={6}
        >
          <Box flex={1} bg="white" p={5} borderRadius="md" boxShadow="sm">
            <Text fontWeight="semibold" fontSize="lg" mb={2} color="green.600">
              Thông tin pháp lý
            </Text>
            <Text><strong>Mã số thuế:</strong> 2700963024</Text>
            <Text><strong>Tên viết tắt:</strong> HTX SX & CB NÔNG SẢN HOÀNG LONG</Text>
            <Text><strong>Loại hình pháp lý:</strong> Hợp tác xã</Text>
            <Text><strong>Ngày cấp:</strong> 02/04/2024</Text>
            <Text>
              <strong>Tình trạng:</strong>{' '}
              <Text as="span" color="green.500" fontWeight="bold">
                Đang hoạt động
              </Text>
            </Text>
            <Text><strong>Đại diện pháp luật:</strong> QUÁCH HẠ LONG</Text>
            <Text><strong>Điện thoại:</strong> 0911191558</Text>
          </Box>

          <Box flex={1} bg="white" p={5} borderRadius="md" boxShadow="sm">
            <Text fontWeight="semibold" fontSize="lg" mb={2} color="green.600">
              Địa chỉ trụ sở
            </Text>
            <Text>
              Thôn Yên Mỹ, Xã Yên Quang, Huyện Nho Quan, Tỉnh Ninh Bình, Việt Nam
            </Text>
          </Box>
        </Flex>

        {/* Giới thiệu chi tiết */}
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          mb={6}
          lineHeight="tall"
          color="green.800"
          textAlign="justify"
        >
          Hợp tác xã sản xuất và chế biến nông sản Hoàng Long được thành lập nhằm hỗ trợ phát triển kinh tế nông nghiệp bền vững tại huyện Nho Quan – vùng đất được thiên nhiên ưu đãi với nguồn nguyên liệu sạch, giàu tiềm năng. Chúng tôi cam kết xây dựng chuỗi sản xuất nông nghiệp an toàn, sạch từ khâu trồng trọt đến chế biến, đảm bảo sản phẩm đạt chuẩn chất lượng cao, mang đậm hương vị tự nhiên của vùng đất Yên Quang.
        </Text>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          mb={6}
          lineHeight="tall"
          color="green.800"
          textAlign="justify"
        >
          Từ những cánh đồng thôn Yên Mỹ, được tưới mát bởi nguồn nước ngầm tinh khiết cùng không khí trong lành của cánh rừng Cúc Phương, hợp tác xã đã phát triển đa dạng ngành nghề kinh doanh, bao gồm trồng trọt, chăn nuôi, khai thác thủy sản nội địa, chế biến và bảo quản các sản phẩm nông sản, thực phẩm truyền thống như mì ống, mì sợi, miến khoai lang, cùng các sản phẩm chế biến từ thịt, thủy sản và rau quả.
        </Text>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          mb={6}
          lineHeight="tall"
          color="green.800"
          textAlign="justify"
        >
          Sản phẩm của chúng tôi luôn được kiểm soát nghiêm ngặt từ khâu nguyên liệu đầu vào đến quy trình sản xuất hiện đại, đảm bảo tiêu chuẩn an toàn vệ sinh thực phẩm và giữ trọn hương vị đặc trưng, tinh túy của vùng đất Hoàng Long. Hợp tác xã không chỉ đóng góp tạo công ăn việc làm cho người dân địa phương mà còn hướng tới xây dựng thương hiệu nông sản Việt Nam uy tín, góp phần nâng cao giá trị nông sản trên thị trường trong nước và quốc tế.

        </Text>

        <Text
        fontSize={{ base: 'md', md: 'lg' }}
        mb={6}
        lineHeight="tall"
        color="green.800"
        textAlign="justify"
        >

          Miến khoai lang Hoàng Long được làm 100% từ tinh bột khoai lang Hoàng Long nguyên chất, không pha bột sắn, không sử dụng chất tẩy trắng. Quá trình sấy miến được thực hiện trong nhà sấy hiện đại, đảm bảo không có bụi bẩn, không côn trùng. Sợi miến khoai lang dai, mềm mướt, không bị cứng như miến dong, không gây nóng ruột và rất tốt cho hệ tiêu hoá. Bên cạnh đó,có thêm sản phẩm miến dong được chúng tôi sản xuất từ củ dong riềng trồng tại vùng Cúc Phương theo hướng hữu cơ, không chất tẩy trắng, không pha thêm bột sắn, cho ra sợi miến dai tự nhiên, thơm ngon đặc trưng.
        </Text>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          mb={4}
          fontWeight="semibold"
          color="green.700"
        >
          Các ngành nghề kinh doanh chính của hợp tác xã bao gồm:
        </Text>

        <Box
          bg="green.100"
          p={4}
          borderRadius="md"
          maxH="320px"
          overflowY="auto"
          mb={6}
        >
          <Flex direction="column" gap={2}>
            {[
              { code: '1074', name: 'Sản xuất mì ống, mì sợi và sản phẩm tương tự (Ngành chính)' },
              { code: '0111', name: 'Trồng lúa' },
              { code: '0112', name: 'Trồng ngô và cây lương thực có hạt khác' },
              { code: '0113', name: 'Trồng cây lấy củ có chất bột' },
              { code: '0118', name: 'Trồng rau, đậu các loại và trồng hoa' },
              { code: '0121', name: 'Trồng cây ăn quả' },
              { code: '0128', name: 'Trồng cây gia vị, cây dược liệu, cây hương liệu lâu năm' },
              { code: '0150', name: 'Trồng trọt, chăn nuôi hỗn hợp' },
              { code: '0161', name: 'Hoạt động dịch vụ trồng trọt' },
              { code: '0162', name: 'Hoạt động dịch vụ chăn nuôi' },
              { code: '0163', name: 'Hoạt động dịch vụ sau thu hoạch' },
              { code: '0164', name: 'Xử lý hạt giống để nhân giống' },
              { code: '0240', name: 'Hoạt động dịch vụ lâm nghiệp' },
              { code: '0312', name: 'Khai thác thuỷ sản nội địa' },
              { code: '0322', name: 'Nuôi trồng thuỷ sản nội địa' },
              { code: '1010', name: 'Chế biến, bảo quản thịt và các sản phẩm từ thịt' },
              { code: '1020', name: 'Chế biến, bảo quản thủy sản và các sản phẩm từ thủy sản' },
              { code: '1030', name: 'Chế biến và bảo quản rau quả' },
              { code: '1040', name: 'Sản xuất dầu, mỡ động, thực vật' },
              { code: '1061', name: 'Xay xát và sản xuất bột thô' },
              { code: '1062', name: 'Sản xuất tinh bột và các sản phẩm từ tinh bột' },
              { code: '1071', name: 'Sản xuất các loại bánh từ bột' },
              { code: '1073', name: 'Sản xuất ca cao, sôcôla và mứt kẹo' },
              { code: '1075', name: 'Sản xuất món ăn, thức ăn chế biến sẵn' },
              { code: '1079', name: 'Sản xuất thực phẩm khác chưa được phân vào đâu' },
              { code: '2012', name: 'Sản xuất phân bón và hợp chất ni tơ' },
              { code: '2029', name: 'Sản xuất sản phẩm hoá chất khác chưa được phân vào đâu' },
              { code: '4620', name: 'Bán buôn nông, lâm sản nguyên liệu (trừ gỗ, tre, nứa) và động vật sống' },
              { code: '4669', name: 'Bán buôn chuyên doanh khác chưa được phân vào đâu' },
              { code: '4690', name: 'Bán buôn tổng hợp' },
              { code: '4772', name: 'Bán lẻ thuốc, dụng cụ y tế, mỹ phẩm và vật phẩm vệ sinh' },
              { code: '4773', name: 'Bán lẻ hàng hóa khác mới trong các cửa hàng chuyên doanh' },
              { code: '5590', name: 'Cơ sở lưu trú khác' },
              { code: '5629', name: 'Dịch vụ ăn uống khác' },
              { code: '0122', name: 'Trồng cây lấy quả chứa dầu' },
              { code: '0131', name: 'Nhân và chăm sóc cây giống hàng năm' },
              { code: '0132', name: 'Nhân và chăm sóc cây giống lâu năm' },
              { code: '7212', name: 'Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học kỹ thuật và công nghệ' },
              { code: '7213', name: 'Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học y, dược' },
              { code: '7214', name: 'Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học nông nghiệp' },
              { code: '7490', name: 'Hoạt động chuyên môn, khoa học và công nghệ khác chưa được phân vào đâu' },
            ].map(({ code, name }) => (
              <Text key={code} fontSize="sm" color="green.900">
                <strong>{code}</strong>: {name}
              </Text>
            ))}
          </Flex>
        </Box>




    </Box>
  );
};

export default MyComponent;
