import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import { HEADER_HEIGHT, PX_ALL } from '@/utils/const';
import { Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import 'react-photo-view/dist/react-photo-view.css';
import './globals.css';
import { Providers } from './providers';
import FloatingContactButtons from '@/components/common/floating-contact-buttons';
import { ReactNode } from 'react';

const font = Quicksand({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'Hợp tác xã sản xuất và chế biến nông sản Hoàng Long',
  description: 'Hợp tác xã sản xuất và chế biến nông sản Hoàng Long',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
    <body className={font.className}>
    <Providers>
      <Box minH="100vh">
        <Header />
        <Box
          mt={{ xs: `${HEADER_HEIGHT - 20}px`, md: `${HEADER_HEIGHT - 5}px`, lg: `${HEADER_HEIGHT}px` }}
          minH={{ xs: `calc(100vh - ${HEADER_HEIGHT * 6}px)`, lg: `calc(100vh - ${HEADER_HEIGHT * 4}px)` }}
        >
          <Box px={PX_ALL}>{children}</Box>
        </Box>
        <Footer />
      </Box>
      <FloatingContactButtons />
    </Providers>
    </body>
    </html>
  );
}

// import Footer from '@/layouts/footer';
// import Header from '@/layouts/header';
// import { HEADER_HEIGHT, PX_ALL } from '@/utils/const';
// import { Box } from '@chakra-ui/react';
// import type { Metadata } from 'next';
// import { Quicksand } from 'next/font/google';
// import 'react-photo-view/dist/react-photo-view.css';
// import './globals.css';
// import { Providers } from './providers';
// import FloatingContactButtons from '@/components/common/floating-contact-buttons';
// import { ReactNode } from 'react';
//
// const font = Quicksand({ subsets: ['latin', 'vietnamese'] });
//
// //them nut goi zalo
// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="vi">
//     <body>
//     {children}
//     <FloatingContactButtons />
//     </body>
//     </html>
//   );
// }
// export const metadata: Metadata = {
//   title: 'Hợp tác xã sản xuất và chế biến nông sản Hoàng Long',
//   description: 'Hợp tác xã sản xuất và chế biến nông sản Hoàng Long'
// };
//
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="vi">
//       <body className={font.className}>
//         <Providers>
//           <Box
//             // bgColor="#F2F2F2"
//             minH="100vh"
//           >
//             <Header />
//             <Box
//               mt={{ xs: `${HEADER_HEIGHT - 20}px`, md: `${HEADER_HEIGHT - 5}px`, lg: `${HEADER_HEIGHT}px` }}
//               minH={{ xs: `calc(100vh - ${HEADER_HEIGHT * 6}px)`, lg: `calc(100vh - ${HEADER_HEIGHT * 4}px)` }}
//             >
//               <Box px={PX_ALL}>{children}</Box>
//             </Box>
//             <Footer />
//           </Box>
//         </Providers>
//       </body>
//     </html>
//   );
// }
