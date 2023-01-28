import React from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <FlexWrapper>
      {props.products.map((item) => (
        <Item
          key={item.id}
          item={item}
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;
