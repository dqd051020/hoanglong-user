'use client';

import { useCreateOrder, useQueryProductInCart } from '@/queries/product.query';
import { cartAtom, userInfoAtom } from '@/states/recoil';
import { formatCurrency, showToast } from '@/utils/helper';
import { useScrollTop } from '@/utils/hooks';
import {
  Box,
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Textarea,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';
import CartItem from '../cart/cart-item';
import Breadcrumb from '../common/breadcrumb';
import LoadingScreen from '../common/loading-screen';
import PageSection from '../common/page-section';
import ModalConfirm from './modal-confirm';

const ProductsInfo = () => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const { data: productList = [] } = useQueryProductInCart();

  const cartFromApi = cart.map((i) => {
    const currentProduct = productList.find((p: any) => p.id === i.id);
    return { ...currentProduct, ...i };
  });

  const totalPrice = useMemo(() => {
    return cartFromApi.reduce((prev, curr) => {
      const { quantity, price } = curr;
      return prev + quantity * price;
    }, 0);
  }, [cartFromApi]);

  return (
    <Flex direction="column" id="product-info">
      <Text fontWeight={600} fontSize={16}>
        • Thông tin sản phẩm:
      </Text>

      <Box mt={10}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="main.1">Sản phẩm</Th>
                <Th color="main.1">Đơn giá</Th>
                <Th color="main.1">Số lượng</Th>
                <Th color="main.1">Thành tiền</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartFromApi.map((item) => (
                <CartItem key={item.id} item={item} isConfirm />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex direction="column" align="flex-end" gap={10} mt={8}>
          <Flex gap={3} align="center">
            <Text color="main.1" fontWeight={600} fontSize={18}>
              Tổng cộng:
            </Text>
            <Text color="#1c78ce" fontWeight={700} fontSize={20} mt={0.5}>
              {formatCurrency(totalPrice)}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

const PaymentComponent: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [paymentMethod, setPaymentMethod] = useState<'BANK' | 'COD'>('BANK');
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const router = useRouter();
  const userInfo = useRecoilValue(userInfoAtom);
  const { address, fullName, phone, email, id: userId } = userInfo || {};
  const { data: productList = [], isLoading } = useQueryProductInCart();
  const { mutateAsync: createOrderMutate, isPending } = useCreateOrder();

  const [addressOrder, setAddressOrder] = useState(() => address);
  const [fullNameOrder, setFullNameOrder] = useState('');
  const [phoneOrder, setPhoneOrder] = useState('');
  const [emailOrder, setEmailOrder] = useState('');
  const [noteOrder, setNoteOrder] = useState('');

  const cartFromApi = cart.map((i) => {
    const currentProduct = productList.find((p: any) => p.id === i.id);
    return { ...currentProduct, ...i };
  });

  const totalPrice = useMemo(() => {
    return cartFromApi.reduce((prev, curr) => {
      const { quantity, price } = curr;
      return prev + quantity * price;
    }, 0);
  }, [cartFromApi]);

  const onConfirm = useCallback(() => {
    const productsInfoElement = document.getElementById('product-info');

    createOrderMutate({
      htmlContent: productsInfoElement?.innerHTML,
      addressDetail: addressOrder,
      email: emailOrder,
      note: noteOrder,
      phoneNumber: phoneOrder,
      products: cart.map((i) => ({
        productId: i.id,
        quantity: i.quantity
      })),
      receiverFullName: fullNameOrder,
      userId
    }).then(() => {
      setCart([]);
      showToast({
        content: 'Đặt hàng thành công!',
        status: 'warning'
      });
      router.push(isEmpty(userInfo) ? '/don-hang-cua-toi' : '/');//neu rong thi vao/donhangcuatoi con ko rong thì vao/
    });
  }, [
    addressOrder,
    cart,
    createOrderMutate,
    emailOrder,
    fullNameOrder,
    noteOrder,
    phoneOrder,
    router,
    setCart,
    userId,
    userInfo
  ]);

  useEffect(() => {
    if (phone) {
      setPhoneOrder(phone);
    }
    if (address) {
      setAddressOrder(address);
    }
    if (email) {
      setEmailOrder(email);
    }
    if (fullName) {
      setFullNameOrder(fullName);
    }
  }, [address, email, fullName, phone]);

  useScrollTop();

  if (isLoading) {
    return (
      <Box pt={20}>
        <LoadingScreen />
      </Box>
    );
  }

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Thanh toán', href: '/thanh-toan' }]} />
      <PageSection title="Thanh toán đơn hàng" />

      <Box mt={{ xs: 6, lg: 10 }}>
        <Flex direction="column" gap={{ xs: 2, lg: 14 }} pl={{ xs: 2, lg: 10 }}>
          <Flex direction="column">
            <Text fontWeight={600} fontSize={16}>
              • Thông tin khách hàng
            </Text>
            <Flex direction="column" mt={8} gap={7} pl={14}>
              <Flex direction="column" gap={1}>
                <Text fontWeight={600}>
                  Họ và tên{' '}
                  <Text as="span" color="red">
                    *
                  </Text>
                </Text>
                <Input value={fullNameOrder} onChange={(e) => setFullNameOrder(e.target.value)} />
              </Flex>

              <Flex direction="column" gap={1}>
                <Text fontWeight={600}>
                  Email{' '}
                  <Text as="span" color="red">
                    *
                  </Text>
                </Text>
                <Input
                  placeholder="Ví dụ: abc@gmail.com"
                  value={emailOrder}
                  onChange={(e) => setEmailOrder(e.target.value)}
                />
              </Flex>

              <Flex direction="column" gap={1}>
                <Text fontWeight={600}>
                  Số điện thoại{' '}
                  <Text as="span" color="red">
                    *
                  </Text>
                </Text>
                <Input
                  placeholder="Ví dụ: 0987654321"
                  value={phoneOrder}
                  onChange={(e) => setPhoneOrder(e.target.value)}
                />
              </Flex>

              <Flex direction="column" gap={1}>
                <Text fontWeight={600}>
                  Địa chỉ{' '}
                  <Text as="span" color="red">
                    *
                  </Text>
                </Text>
                <Textarea
                  value={addressOrder}
                  onChange={(e) => setAddressOrder(e.target.value)}
                  placeholder="Vui lòng nhập địa chỉ cụ thể"
                />
              </Flex>

              <Flex direction="column" gap={1}>
                <Text fontWeight={600}>Ghi chú</Text>
                <Textarea value={noteOrder} onChange={(e) => setNoteOrder(e.target.value)} />
              </Flex>
            </Flex>
          </Flex>

          <ProductsInfo />

          <Flex gap={5} direction="column">
            <Text fontWeight={600} fontSize={16}>
              • Hình thức thanh toán:
            </Text>

            <Box pl={{ xs: 3, md: 10 }}>
              <RadioGroup defaultValue="BANK" onChange={(data: 'BANK' | 'COD') => setPaymentMethod(data)}>
                <Stack spacing={10} direction="row">
                  <Radio colorScheme="green" value="BANK">
                    Chuyển khoản
                  </Radio>
                  <Radio colorScheme="green" value="COD">
                    Tiền mặt (COD)
                  </Radio>
                </Stack>
              </RadioGroup>

              {paymentMethod === 'BANK' && (
                <Flex
                  direction="column"
                  gap={2}
                  mt={5}
                  border="1px solid #e6e6e6"
                  borderRadius={5}
                  p={{ xs: 3, md: 5 }}
                >
                  <Text fontWeight={500}>Bạn vui lòng chuyển khoản ngân hàng để thanh toán đơn hàng này!</Text>
                  <Text fontWeight={500}>Thông tin chuyển khoản:</Text>
                  <Text pl={{ xs: 2, md: 4 }} fontWeight={500}>
                    • Ngân hàng:{' '}
                    <Text as="span" fontWeight={700} color="sub.2">
                      NGÂN HÀNG QUÂN ĐỘI (MB Bank)
                    </Text>
                  </Text>
                  <Text pl={{ xs: 2, md: 4 }} fontWeight={500}>
                    • Chủ tài khoản:{' '}
                    <Text as="span" fontWeight={600} color="sub.2">
                      QUÁCH HẠ LONG
                    </Text>
                  </Text>
                  <Text pl={{ xs: 2, md: 4 }} fontWeight={500}>
                    • Số tài khoản:{' '}
                    <Text as="span" fontWeight={600} color="sub.2">
                      1986696666666
                    </Text>
                  </Text>
                  <Text pl={{ xs: 2, md: 4 }} fontWeight={500}>
                    • Số tiền:{' '}
                    <Text as="span" fontWeight={700} color="sub.2">
                      {formatCurrency(totalPrice)}
                    </Text>
                  </Text>
                  <Text pl={{ xs: 2, md: 4 }} fontWeight={500}>
                    • Nội dung chuyển khoản:{' '}
                    <Text as="span" fontWeight={700} color="sub.2">
                      Họ và tên + Số điện thoại của bạn
                    </Text>
                  </Text>

                  <Text as="span" fontWeight={900} color="sub.2">
                      LƯU Ý: NỘI DUNG CHUYỂN KHOẢN BẮT BUỘC PHẢI CÓ HỌ TÊN VÀ SỐ ĐIỆN THOẠI
                  </Text>

                </Flex>
              )}

              {paymentMethod === 'COD' && (
                <Flex
                  direction="column"
                  gap={2}
                  mt={5}
                  border="1px solid #e6e6e6"
                  borderRadius={5}
                  p={{ xs: 3, md: 5 }}
                >
                  <Text fontWeight={500}>Bạn đã chọn hình thức thanh toán tiền mặt (COD).</Text>
                  <Text fontWeight={500}>
                    Vui lòng thanh toán tiền mặt cho nhân viên giao hàng khi bạn nhận được hàng.
                  </Text>
                  <Text pl={{ xs: 2, md: 4 }} fontWeight={500}>
                    • Số tiền:{' '}
                    <Text as="span" fontWeight={700} color="sub.2">
                      {formatCurrency(totalPrice)}
                    </Text>
                  </Text>
                </Flex>
              )}
            </Box>
          </Flex>
        </Flex>

        <Flex justify="center" mt={{ xs: 8, md: 14 }}>
          <Button colorScheme="green" onClick={() => setShowConfirm(true)} leftIcon={<FaCheckCircle />}>
            Xác nhận đặt hàng
          </Button>
        </Flex>
      </Box>

      <ModalConfirm
        show={showConfirm}
        onConfirm={onConfirm}
        onClose={() => setShowConfirm(false)}
        isLoadingConfirm={isPending}
      />
    </Box>
  );
};

export default PaymentComponent;
