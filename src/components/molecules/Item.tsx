import React, { useContext, useEffect, useState } from "react";
import { Checkbox } from "../atoms/Checkbox";
import { Flex, HiddenDiv, ItemContainer } from "src/styles/styles";
import { useItem } from "src/model/store/useItem";
import { ItemData } from "src/model/types";
import { ControlPanel } from "./ControlPanel";
import { useSettings } from "src/model/store/useSettings";

interface ItemProps {
  item: ItemData;
}

export const Item: React.FC<ItemProps> = ({ item }) => {
  const [checked, setChecked] = useState(item.done);
  const { items, itemHandler } = useItem();
  const { visibleEditing } = useSettings();

  function handleChange(checked: boolean) {
    setChecked(checked);
    itemHandler(item.id, checked);
  }

  return (
    <>
      <Flex dir="row" $gap="5px" $whidth="370px">
        <ItemContainer $mark={checked}>
          <p>{item.text}</p>
          <div>
            <Checkbox onChange={handleChange} cheked={checked}></Checkbox>
          </div>
        </ItemContainer>
        <HiddenDiv $active={visibleEditing}>
          <ControlPanel id={item.id} />
        </HiddenDiv>
      </Flex>
    </>
  );
};
