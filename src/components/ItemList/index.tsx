import { University } from "../../api";
import Item from "../Item";

type ItemListProps = {
  items: any[] | undefined;
  onItemPress?: Function;
  searchTerm?: string;
};

const ItemList = ({ items, onItemPress, searchTerm }: ItemListProps) => {
  if (!items || !searchTerm) return null;

  return (
    <div>
      {items.map((item: University) => (
        <Item
          key={item.name}
          item={item}
          onItemPress={onItemPress}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
};

export default ItemList;
