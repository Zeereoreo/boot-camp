import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items, cartItems, setCartItems }) {
  const handleClick = (itemId) => {
    // 장바구니에 내가 추가하고 싶은 아이템이 있는지 없는지 체크
    if(cartItems.find(el => el.itemId === itemId) === undefined){
      // 없으면 장바구니에 추가하기!
        setCartItems([...cartItems], {
        "itemId": itemId,
        "quantity": 1
      });
    }
   }
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
