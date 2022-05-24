// Validates if string is valid by checking is not empty.
export const isValidString = (string: string): boolean => {
  return !!string.trim().length;
};

type UniqueCollectionParams = {
  property: string;
  collection: Array<any>;
};

// Creates an array of unique objects based on a property value.
export const uniqueCollection = ({ property, collection }: UniqueCollectionParams): Array<any> => {
  return collection.filter(
    (item, index, array) => array.findIndex(element => element[property] === item[property]) === index
  );
};
