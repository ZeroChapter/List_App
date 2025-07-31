import React, { useState } from "react";
import type { ItemData } from "src/model/types";
import { DropDown, Container } from "src/styles/styles";
import { Item } from "./Item";
import { LoadLine } from "../atoms/LoadLine";

interface containerProps {
  items: ItemData[];
}

export const ItemContainer: React.FC<containerProps> = ({ items }) => {
  const tagColor: string = items[0].tag;
  console.log(items[0].tag);
  const [activ, setActiv] = useState<boolean>(false);
  const doneItemsCount: number = items.filter((item) => item.done).length;

  return (
    <>
      <Container color={tagColor} $margin="10px">
        <div
          onClick={() => {
            setActiv(!activ);
          }}
        >
          <LoadLine activPoints={doneItemsCount} allPoints={items.length} />
        </div>

        <DropDown color={tagColor} $activ={activ}>
          {items.map((el) => (
            <Item item={el} key={el.id} />
          ))}
        </DropDown>
      </Container>
    </>
  );
};
