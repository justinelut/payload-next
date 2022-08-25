import create from 'zustand';
import { persist } from 'zustand/middleware';
const useHomepage = create(
//   persist(
    (set, get) => ({
      total: 0,
      totalqty: 0,
      cartContent: [],
      menuContent: "",
      addToMenu: (params) => {
        set((state) => ({
          menuContent: params,
        }));
      },
      updatecart: ({ params, mycart }) => {
        set((state) => ({
          totalqty: state.totalqty + 1,
          total: state.total + parseFloat(params.price),
          cartContent: mycart,
        }));
      },
     
    }),
    { name: 'cart' }
  //)
);
export default useHomepage;