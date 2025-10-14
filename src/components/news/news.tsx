// 'use client';

// import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
// import Link from 'next/link';
// import { FaCalendarAlt } from 'react-icons/fa';
// import Breadcrumb from '../common/breadcrumb';
// import PageSection from '../common/page-section';
// import Pagination from '../common/pagination';

// const NewsComponent: React.FC = () => {
//   return (
//     <Box pt={5}>
//       <Breadcrumb items={[{ title: 'Tin tức', href: '/tin-tuc' }]} />
//       <PageSection title="Tin tức" />

//       <Flex mt={10} gap={8} direction="column">
//         {[
//           {
//             slug: 'mien-khoai-lang-dac-san-sach',
//             title: 'Miến khoai lang – Đặc sản sạch từ vùng đất Hoàng Long',
//             description:
//               'Miến khoai lang Hoàng Long được chế biến 100% từ củ khoai lang tươi, không pha bột sắn, không sử dụng chất tẩy trắng. Sản phẩm giữ nguyên màu sắc tự nhiên, đảm bảo vệ sinh an toàn thực phẩm và tốt cho tiêu hóa.',
//             date: '02/06/2025',
//             image: '/images/mien1.jpg',
//           },
//           {
//             slug: 'quy-trinh-san-xuat-mien',
//             title: 'Bên trong quy trình sản xuất miến khoai lang sạch chuẩn VietGAP',
//             description:
//               'Từ khâu chọn củ khoai đến công nghệ sấy hiện đại, HTX Hoàng Long tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh và kỹ thuật. Miến được sấy trong nhà sấy không bụi, không côn trùng, đảm bảo chất lượng từng sợi.',
//             date: '28/05/2025',
//             image: '/images/quytrinh.jpg',
//           },
//           {
//             slug: 'tac-dung-mien-khoai-lang',
//             title: 'Lợi ích của miến khoai lang đối với sức khoẻ',
//             description:
//               'Miến khoai lang chứa nhiều chất xơ, hỗ trợ tiêu hoá, không gây nóng ruột như miến dong. Đây là sự lựa chọn lý tưởng cho người ăn kiêng, người lớn tuổi và trẻ nhỏ.',
//             date: '25/05/2025',
//             image: '/images/mien1.jpg',
//           },
//           {
//             slug: 'dong-rieng-cuc-phuong',
//             title: 'Miến dong Cúc Phương – Hương vị núi rừng không thể nhầm lẫn',
//             description:
//               'Làm từ củ dong riềng trồng theo hướng hữu cơ tại Cúc Phương, miến dong giữ trọn độ dai tự nhiên, không chất tẩy trắng, không pha tạp – đúng chuẩn “ngon lành sạch sẽ”.',
//             date: '21/05/2025',
//             image: '/images/mien-dong.jpg',
//           },
//           {
//             slug: 'phat-trien-thuong-hieu-htx',
//             title: 'HTX Hoàng Long – Xây dựng thương hiệu nông sản sạch Việt Nam',
//             description:
//               'Không chỉ sản xuất, HTX Hoàng Long còn chú trọng phát triển thương hiệu nông sản địa phương, đưa đặc sản quê nhà vươn tầm thị trường trong nước và quốc tế.',
//             date: '19/05/2025',
//             image: '/images/thuonghieu.jpg',
//           },
//         ].map((item, index) => (
//           <Flex
//             key={index}
//             boxShadow="base"
//             borderRadius={5}
//             overflow="hidden"
//             _hover={{ boxShadow: 'md' }}
//             transitionDuration="200ms"
//           >
//             <Link href={`/tin-tuc/${item.slug}`}>
//               <Flex>
//                 <AspectRatio ratio={16 / 9} overflow="hidden" w={{ xs: 28, md: 60, lg: 80 }}>
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     objectFit="cover"
//                     w="full"
//                   />
//                 </AspectRatio>

//                 <Flex direction="column" flex={1} px={{ xs: 3, md: 5 }} py={{ xs: 1, md: 3 }} justify="space-between">
//                   <Flex direction="column" gap={{ xs: 1, md: 3 }}>
//                     <Text fontSize={{ xs: 15, md: 17 }} fontWeight={700} noOfLines={2}>
//                       {item.title}
//                     </Text>
//                     <Text fontSize={{ xs: 13, md: 14 }} noOfLines={{ xs: 2, md: 3 }}>
//                       {item.description}
//                     </Text>
//                   </Flex>
//                   <Flex align="center" gap={2}>
//                     <Icon as={FaCalendarAlt} color="#828282" fontSize={14} />
//                     <Text as="span" fontWeight={500} mt={0.5}>
//                       {item.date}
//                     </Text>
//                   </Flex>
//                 </Flex>
//               </Flex>
//             </Link>
//           </Flex>
//         ))}
//       </Flex>

//       <Flex mt={14} justify="flex-end">
//         <Pagination />
//       </Flex>
//     </Box>
//   );
// };

// export default NewsComponent;
'use client';

import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';

const NewsComponent: React.FC = () => {
  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Tin tức', href: '/tin-tuc' }]} />
      <PageSection title="Tin tức" />

      <Flex mt={10} gap={8} direction="column">
        {[
          {
            slug: 'cau-chuyen-mien-khoai-lang',
            title: 'Câu chuyện sản phẩm miến khoai lang Hoàng Long',
            description:
              'Miến khoai lang Hoàng Long được chế biến 100% từ củ khoai lang tươi, không pha bột sắn, không sử dụng chất tẩy trắng. Sản phẩm giữ nguyên màu sắc tự nhiên, đảm bảo vệ sinh an toàn thực phẩm và tốt cho tiêu hóa.',
            date: '05/10/2025',
            image: '/images/mien1.jpg',
          },
          {
            slug: 'cau-chuyen-mien-dong',
            title: 'Câu chuyện sản phẩm miến dong Hoàng Long',
            description:
              'Miến dong Hoàng Long được chế biến 100% từ củ dong tươi, không pha bột sắn, không sử dụng chất tẩy trắng. Sản phẩm giữ nguyên màu sắc tự nhiên, đảm bảo vệ sinh an toàn thực phẩm và tốt cho tiêu hóa.',
            date: '05/10/2025',
            image: '/images/mien-dong.jpg',
          },
          {
            slug: 'mien-khoai-lang-dac-san-sach',
            title: 'Miến khoai lang – Đặc sản sạch từ vùng đất Hoàng Long',
            description:
              'Miến dong Hoàng Long được chế biến 100% từ củ dong tươi, không pha bột sắn, không sử dụng chất tẩy trắng. Sản phẩm giữ nguyên màu sắc tự nhiên, đảm bảo vệ sinh an toàn thực phẩm và tốt cho tiêu hóa.',
            date: '02/06/2025',
            image: '/images/mien1.jpg',
          },
          {
            slug: 'quy-trinh-san-xuat-mien',
            title: 'Bên trong quy trình sản xuất miến khoai lang sạch chuẩn VietGAP',
            description:
              'Từ khâu chọn củ khoai đến công nghệ sấy hiện đại, HTX Hoàng Long tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh và kỹ thuật. Miến được sấy trong nhà sấy không bụi, không côn trùng, đảm bảo chất lượng từng sợi.',
            date: '28/05/2025',
            image: '/images/quytrinh.jpg',
          },
          {
            slug: 'tac-dung-mien-khoai-lang',
            title: 'Lợi ích của miến khoai lang đối với sức khoẻ',
            description:
              'Miến khoai lang chứa nhiều chất xơ, hỗ trợ tiêu hoá, không gây nóng ruột như miến dong. Đây là sự lựa chọn lý tưởng cho người ăn kiêng, người lớn tuổi và trẻ nhỏ.',
            date: '25/05/2025',
            image: '/images/mien1.jpg',
          },
          {
            slug: 'dong-rieng-cuc-phuong',
            title: 'Miến dong Cúc Phương – Hương vị núi rừng không thể nhầm lẫn',
            description:
              'Làm từ củ dong riềng trồng theo hướng hữu cơ tại Cúc Phương, miến dong giữ trọn độ dai tự nhiên, không chất tẩy trắng, không pha tạp – đúng chuẩn “ngon lành sạch sẽ”.',
            date: '21/05/2025',
            image: '/images/mien-dong.jpg',
          },
          {
            slug: 'phat-trien-thuong-hieu-htx',
            title: 'HTX Hoàng Long – Xây dựng thương hiệu nông sản sạch Việt Nam',
            description:
              'Không chỉ sản xuất, HTX Hoàng Long còn chú trọng phát triển thương hiệu nông sản địa phương, đưa đặc sản quê nhà vươn tầm thị trường trong nước và quốc tế.',
            date: '19/05/2025',
            image: '/images/thuonghieu.jpg',
          },
        ].map((item, index) => (
          <Flex
            key={index}
            boxShadow="base"
            borderRadius={5}
            overflow="hidden"
            _hover={{ boxShadow: 'md' }}
            transitionDuration="200ms"
          >
            <Link href={`/tin-tuc/${item.slug}`}>
              <Flex>
                <AspectRatio ratio={16 / 9} overflow="hidden" w={{ xs: 28, md: 60, lg: 80 }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    objectFit="cover"
                    w="full"
                  />
                </AspectRatio>

                <Flex direction="column" flex={1} px={{ xs: 3, md: 5 }} py={{ xs: 1, md: 3 }} justify="space-between">
                  <Flex direction="column" gap={{ xs: 1, md: 3 }}>
                    <Text fontSize={{ xs: 15, md: 17 }} fontWeight={700} noOfLines={2}>
                      {item.title}
                    </Text>
                    <Text fontSize={{ xs: 13, md: 14 }} noOfLines={{ xs: 2, md: 3 }}>
                      {item.description}
                    </Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Icon as={FaCalendarAlt} color="#828282" fontSize={14} />
                    <Text as="span" fontWeight={500} mt={0.5}>
                      {item.date}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Link>
          </Flex>
        ))}
      </Flex>

      <Flex mt={14} justify="flex-end">
        <Pagination />
      </Flex>
    </Box>
  );
};

export default NewsComponent;

