import { LocalCartItem } from '@/types/cart.type';
import { atom } from 'recoil';

const LS_CART = 'ls_shop_cart';

export const cartAtom = atom<LocalCartItem[]>({
  key: 'CART_ATOM',
  default: [],
  effects: [
    ({ onSet, setSelf }) => {
      if (typeof window !== 'undefined') { //Kiểm tra xem code đang chạy trong môi trường trình duyệt hay không, vì localStorage chỉ tồn tại trong môi trường này
        const localCart = localStorage.getItem(LS_CART);
        try {
          if (typeof localCart === 'string') {
            setSelf(JSON.parse(localCart) || []);//cap nhat gia tri ban dau
          }
        } catch (error) {}

        onSet((newData) => {//xử ly khi cartitem thay doi gia tri
          if (newData) {
            localStorage.setItem(LS_CART, JSON.stringify(newData));
          } else {
            localStorage.removeItem(LS_CART);
          }
        });
      }
    }
  ]
});

export const userInfoAtom = atom<any>({
  key: 'USER_INFO_ATOM',
  default: undefined
});
