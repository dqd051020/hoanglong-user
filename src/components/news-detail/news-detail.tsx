// 'use client';

// import { Box, Flex, Icon, Text } from '@chakra-ui/react';
// import { usePathname } from 'next/navigation';
// import { FaCalendarAlt } from 'react-icons/fa';
// import Breadcrumb from '../common/breadcrumb';

// const NewsDetailComponent: React.FC<{ id: string }> = ({ id }) => {
//   const pathname = usePathname();

//   return (
//     <Box pt={5}>
//       <Breadcrumb
//         items={[
//           { title: 'Tin tức', href: '/tin-tuc' },
//           { title: 'Chi tiết tin tức', href: pathname, isActive: true }
//         ]}
//       />

//       <Box mt={{ xs: 5, lg: 10 }}>
//         <Text fontWeight={700} lineHeight={{ xs: '26px', lg: '30px' }} fontSize={{ xs: 18, md: 20, lg: 22 }}>
//           HỢP TÁC XÃ SẢN XUẤT VÀ CHẾ BIẾN NÔNG SẢN HOÀNG LONG
//         </Text>

//         <Flex align="center" gap={2} mt={3}>
//           <Icon as={FaCalendarAlt} color="#828282" fontSize={14} />
//           <Text as="span" fontWeight={500} mt={0.5}>
//             22/03/2025
//           </Text>
//         </Flex>

//         <Text fontWeight={500} lineHeight="22px" mt={{ xs: 6, lg: 8 }} fontSize={14}>
//           Hợp tác xã sản xuất và chế biến nông sản Hoàng Long được thành lập nhằm hỗ trợ phát triển kinh tế nông nghiệp bền vững tại huyện Nho Quan – vùng đất được thiên nhiên ưu đãi với nguồn nguyên liệu sạch, giàu tiềm năng. Chúng tôi cam kết xây dựng chuỗi sản xuất nông nghiệp an toàn, sạch từ khâu trồng trọt đến chế biến, đảm bảo sản phẩm đạt chuẩn chất lượng cao, mang đậm hương vị tự nhiên của vùng đất Yên Quang.

//           Từ những cánh đồng thôn Yên Mỹ, được tưới mát bởi nguồn nước ngầm tinh khiết cùng không khí trong lành của cánh rừng Cúc Phương, hợp tác xã đã phát triển đa dạng ngành nghề kinh doanh, bao gồm trồng trọt, chăn nuôi, khai thác thủy sản nội địa, chế biến và bảo quản các sản phẩm nông sản, thực phẩm truyền thống như mì ống, mì sợi, miến khoai lang, cùng các sản phẩm chế biến từ thịt, thủy sản và rau quả.

//           Sản phẩm của chúng tôi luôn được kiểm soát nghiêm ngặt từ khâu nguyên liệu đầu vào đến quy trình sản xuất hiện đại, đảm bảo tiêu chuẩn an toàn vệ sinh thực phẩm và giữ trọn hương vị đặc trưng, tinh túy của vùng đất Hoàng Long. Hợp tác xã không chỉ đóng góp tạo công ăn việc làm cho người dân địa phương mà còn hướng tới xây dựng thương hiệu nông sản Việt Nam uy tín, góp phần nâng cao giá trị nông sản trên thị trường trong nước và quốc tế.

//           Miến khoai lang Hoàng Long được làm 100% từ tinh bột khoai lang Hoàng Long nguyên chất, không pha bột sắn, không sử dụng chất tẩy trắng. Quá trình sấy miến được thực hiện trong nhà sấy hiện đại, đảm bảo không có bụi bẩn, không côn trùng. Sợi miến khoai lang dai, mềm mướt, không bị cứng như miến dong, không gây nóng ruột và rất tốt cho hệ tiêu hoá. Bên cạnh đó,có thêm sản phẩm miến dong được chúng tôi sản xuất từ củ dong riềng trồng tại vùng Cúc Phương theo hướng hữu cơ, không chất tẩy trắng, không pha thêm bột sắn, cho ra sợi miến dai tự nhiên, thơm ngon đặc trưng.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default NewsDetailComponent;
'use client';

import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import { newsData } from './news-data';

const NewsDetailComponent: React.FC<{ slug: string }> = ({ slug }) => {
  const pathname = usePathname();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <Box pt={5}>
        <Text>Không tìm thấy bài viết</Text>
      </Box>
    );
  }

  return (
    <Box pt={5}>
      <Breadcrumb
        items={[
          { title: 'Tin tức', href: '/tin-tuc' },
          { title: article.title, href: pathname, isActive: true }
        ]}
      />

      <Box mt={{ xs: 5, lg: 10 }}>
        <Text fontWeight={700} fontSize={{ xs: 18, md: 20, lg: 22 }}>
          {article.title}
        </Text>

        <Flex align="center" gap={2} mt={3}>
          <Icon as={FaCalendarAlt} color="#828282" fontSize={14} />
          <Text as="span" fontWeight={500} mt={0.5}>
            {article.date}
          </Text>
        </Flex>

        <Text fontWeight={500} lineHeight="22px" mt={{ xs: 6, lg: 8 }} fontSize={14}>
          {article.content}
        </Text>
      </Box>
    </Box>
  );
};

export default NewsDetailComponent;


