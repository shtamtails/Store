export const getUniqueProductId = (id: string, attributes: object): string => {
  return id + JSON.stringify(attributes);
};
