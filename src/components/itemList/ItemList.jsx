import React from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <FlexWrapper>
      {props.products.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          detail={item.detail}
          imgurl={item.imgurl}
        />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;
