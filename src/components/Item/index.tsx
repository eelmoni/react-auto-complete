import { useCallback, useMemo } from "react";

import { University } from "../../api";
import "./index.css";

type ItemListProps = {
  item: University;
  onItemPress?: Function;
  searchTerm: string;
};

const Item = ({ item, onItemPress, searchTerm }: ItemListProps) => {
  const handlItemPress = useCallback(() => {
    if (onItemPress) onItemPress(item);
  }, [onItemPress, item]);

  const itemName = useMemo(() => {
    const regex = new RegExp(searchTerm, "gi");

    return {
      __html: item.name.replace(regex, (match) => `<mark>${match}</mark>`),
    };
  }, [item, searchTerm]);

  return (
    <div
      className="item-container"
      onClick={handlItemPress}
      dangerouslySetInnerHTML={itemName}
    />
  );
};

export default Item;
