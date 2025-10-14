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
          Yên Quang (nay là xã Nho Quan) một vùng đất được thiên nhiên ban tặng nhiều lợi thế để tạo nên các sản vật thơm ngon. Từ bao đời nay cánh đồng xã Yên Quang được thừa hưởng nguồn nước từ cánh rừng Cúc Phương tươi mát, giàu khoáng chất, không khí trong lành, ánh nắng chan hòa tạo nên chất lượng khoai lang mang hương vị đặc biệt, đó là sự giao thoa, kết tinh hài hòa của đất trời dưới bàn tay cần cù, chịu khó của người nông dân. Nguồn nguyên liệu đó được kết hợp với nguồn nước ngầm tinh khiết tạo nên sợi miến khoai lang Hoàng Long mềm mại, dai ngon tròn vị, mang hương vị ngọt lành của đất mẹ.

Miến khoai lang Hoàng Long được chế biến hoàn toàn từ tinh bột khoai lang, theo quy trình hiện đại, đảm bảo an toàn thực phẩm, từ khâu lựa chọn khoai, rửa sạch, nghiền bột, lọc rửa, ép sợi, sấy khô đến đóng gói. Mỗi công đoạn đều được kiểm soát nghiêm ngặt, không sử dụng chất tẩy trắng, chất bảo quản. Nhờ đó, miến giữ được màu sắc tự nhiên, sợi miến dai mềm, mùi thơm đặc trưng của khoai lang, không nát khi nấu. Với thành phần từ tinh bột khoai lang nguyên chất, miến khoai lang Hoàng Long không chỉ thơm ngon mà còn giàu dinh dưỡng, nhiều chất xơ giúp nhuận tràng, dễ tiêu hoá, dễ dàng chế biến thành nhiều món ăn: miến xào, miến nấu, miến trộn, lẩu, phù hợp với sở thích của nhiều người.

Hiện nay, miến khoai lang Hoàng Long đã có mặt tại nhiều tỉnh thành trong nước, đặc biệt là tại các chuỗi cửa hàng nông sản sạch, siêu thị đặc sản vùng miền và các sàn thương mại điện tử. Trong thời gian tới Miến Hoàng Long tiếp tục mở rộng thị trường để đưa miến khoai lang đến với nhiều người tiêu dùng hơn.

Miến khoai lang Hoàng Long mang hương vị đậm đà, thanh mát, đem đến cho người dùng cảm nhận được tinh hoa của mảnh đất Nho Quan hiền hoà. Mỗi sợi miến chứa đựng tình cảm, tâm huyết của người làm miến, mong muốn mang đến cho người tiêu dùng sản phẩm sạch, chất lượng. Miến Hoàng Long chính là lựa chọn tin cậy cho những ai quan tâm đến sức khỏe và giá trị bền vững.
Nằm dưới chân rừng quốc gia Cúc Phương - lá phổi xanh của miền Bắc, xã Cúc Phương (tỉnh Ninh Bình) là một miền quê tươi đẹp, nơi đất trời giao hòa, khí hậu mát lành quanh năm, đất đai màu mỡ và nguồn nước ngầm tinh khiết chảy ra từ lòng núi đá. Chính mảnh đất ấy đã tạo nên những củ dong riềng tươi ngon, giàu dưỡng chất, là nguồn nguyên liệu quý để tạo nên miến dong Hoàng Long thơm ngon, thuần khiết.

Miến dong Hoàng Long được chế biến từ 100% tinh bột dong riềng nguyên chất, không chất tẩy trắng, không chất bảo quản. Từ nguồn nguyên liệu sạch, kết hợp với nguồn nước ngầm mát lành chảy ra từ rừng Cúc Phương, tạo ra sợi miến mang hương vị đặc biệt: dẻo dai, trong tự nhiên và hương thơm đặc trưng, mang lại trải nghiệm trọn vẹn cho vị giác.

Quy trình sản xuất miến dong Hoàng Long được thực hiện nghiêm ngặt từ khâu chọn lọc củ dong, rửa sạch, xay nghiền, lắng lọc, ép sợi, sấy khô bằng nhiệt sạch đến đóng gói. Mỗi công đoạn đều chứa đựng sự tỉ mỉ và tận tâm của người làm miến. Đó không chỉ là quá trình làm miến mà là hành trình chắt lọc tinh túy từ thiên nhiên tạo nên từng sợi miến óng mềm.

Miến dong Hoàng Long là lựa chọn hoàn hảo cho những bữa ăn bổ dưỡng: từ miến trộn thanh mát, miến xào đậm đà, đến nồi lẩu thơm ngọt hay tô miến nóng hổi phù hợp mọi người đặc biệt người ăn chay, người theo chế độ ăn lành mạnh và quan tâm đến sức khỏe.

Hiện nay, miến dong Hoàng Long đã có mặt tại nhiều tỉnh, thành trong cả nước, được người tiêu dùng ưa chuộng thông qua các chuỗi cửa hàng thực phẩm sạch, siêu thị đặc sản vùng miền và sàn thương mại điện tử. Trong hành trình sắp tới, Hoàng Long không ngừng mở rộng thị trường, hướng tới xuất khẩu, mang hương vị của rừng Cúc Phương vươn xa hơn trên bản đồ ẩm thực Việt và Quốc tế.

Miến dong Hoàng Long tinh khiết từ thiên nhiên, đậm đà hương vị của núi rừng, chứa đựng tâm huyết, tình yêu quê hương và khát vọng gìn giữ những giá trị truyền thống.       
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
