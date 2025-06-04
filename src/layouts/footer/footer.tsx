'use client';

import { PX_ALL } from '@/utils/const';
import { Box, Link as ChakraLink, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { FaFacebookSquare, FaTiktok } from 'react-icons/fa';
import { SiShopee } from 'react-icons/si';

const Footer: React.FC = () => {
  const SOCIAL = [
    {
      title: 'Facebook',
      icon: FaFacebookSquare,
      url: 'https://www.facebook.com/profile.php?id=61565732559531',
      size: 27
    },
    {
      title: 'Tiktok',
      icon: FaTiktok,
      url: 'https://tiktok.com',
      size: 27

    },
    {
      title: 'Shopee',
      icon: SiShopee,
      url: 'https://shopee.vn',
      size: 27
    }
  ];

  const ABOUT_US = [
    {
      title: 'Về chúng tôi',
      href: '/ve-chung-toi'

    },
    {
      title: 'Tin tức',
      href: '/tin-tuc'
    },
    {
      title: 'Điều khoản sử dụng',
      href: '/dieu-khoan-su-dung'
    }
  ];

  const SERVICES = [
    {
      title: 'Thanh toán',
      href: '/thanh-toan'
    },
    {
      title: 'Chính sách đổi trả',
      href: '/chinh-sach-doi-tra'
    },
    {
      title: 'Trở thành đại lý',
      href: '/tro-thanh-dai-ly'
    }
  ];

  const CONTACT = [
    {
      title: 'Địa chỉ: Xã Yên Quang, huyện Nho Quan, tỉnh Ninh Bình',
      href: 'https://www.google.com/maps/place/Y%C3%AAn+M%E1%BB%B9,+Y%C3%AAn+Quang,+Nho+Quan,+Ninh+B%C3%ACnh,+Vi%E1%BB%87t+Nam/@20.293209,105.7226211,1066m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3136812e385cc037:0x8f6c7e1c6894be8d!8m2!3d20.2926898!4d105.7255818!16s%2Fg%2F1thzr7yf!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'

    },
    {
      title: 'SĐT: 0911191558',
      href: 'tel:0911191558'
    },
    {
      title: 'Email: htxhoanglongnb@gmail.com',
      href: 'mailto:htxhoanglongnb@gmail.com'
    }
  ];

  return (
    <Box mt={{ xs: 10, lg: 20 }} px={PX_ALL} bgColor="#f2f2f2" pt={{ xs: 6, lg: 20 }}>
      <Grid templateColumns={{ xs: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}>
        <GridItem
          colSpan={{ xs: 4, md: 3, lg: 2 }}
          display={{ xs: 'flex', lg: 'grid' }}
          alignItems={{ xs: 'center', lg: 'flex-start' }}
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
          flexDirection="column"
          mb={{ xs: 8, lg: 0 }}
        >
          <Image priority src="/images/hoanglong2.jpg" alt="logo" width={200} height={200} />
          <Text fontWeight={800} fontSize={22} mt={3}>
            Hợp tác xã sản xuất và chế biến nông sản Hoàng Long
          </Text>
          <Text fontWeight={500} mt={1} color={'red'}>
            Mã số thuế: 2700963024
          </Text>
          <Text fontWeight={700} fontSize={18} mt={1} >
            Thực phẩm sạch và an toàn
          </Text>

          <Flex align="center" mt={4} gap={7}>
            {SOCIAL.map((item) => {
              const { title, icon, url, size = 15 } = item;
              return (
                <ChakraLink href={url} target="_blank" rel="noopener noreferrer" key={title} mt={size > 15 ? 0.5 : 0}>
                  <Icon as={icon} fontSize={size} color="#7C818B" />
                </ChakraLink>
              );
            })}
          </Flex>
        </GridItem>

        <GridItem colSpan={{ xs: 2, md: 1 }}>
          <Text fontWeight={700} fontSize={16}>
            Về chúng tôi
          </Text>
          <Flex direction="column" gap={3} mt={{ xs: 3, lg: 6 }}>
            {ABOUT_US.map((item) => {
              const { title, href } = item;
              return (
                <Link href={href} key={title}>
                  <Text fontWeight={600} color="#828282">
                    {title}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </GridItem>

        <GridItem colSpan={{ xs: 2, md: 1 }}>
          <Text fontWeight={700} fontSize={16}>
            Dịch vụ
          </Text>
          <Flex direction="column" gap={3} mt={{ xs: 3, lg: 6 }}>
            {SERVICES.map((item) => {
              const { title, href } = item;
              return (
                <Link href={href} key={title}>
                  <Text fontWeight={600} color="#828282">
                    {title}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </GridItem>

        <GridItem colSpan={{ xs: 4, md: 1 }} mt={{ xs: 6, md: 0 }}>
          <Text fontWeight={700} fontSize={16}>
            Liên hệ
          </Text>
          <Flex direction="column" gap={3} mt={{ xs: 3, lg: 6 }}>
            {CONTACT.map((item) => {
              const { title, href } = item;
              return (
                <Link href={href} key={title}>
                  <Text fontWeight={600} color="#828282">
                    {title}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </GridItem>
      </Grid>

      <Flex mt={{ xs: 8, lg: 16 }} justify="center" pb={5}>
        <Text fontWeight={600} textAlign="center">
          © Copyright 2024 - Bản quyền thuộc về Hợp tác xã sản xuất và chế biến nông sản Hoàng Long
        </Text>
      </Flex>
    </Box>
  );
};

export default memo(Footer);
