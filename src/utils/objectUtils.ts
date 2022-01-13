const objectUtils = <DataType>(object: DataType) => {
  return {
    getValuesAsArray: () =>
      Object.keys(object).map((key) => object[key as keyof DataType]),
    getKeysAsArray: () =>
      Object.keys(object).map((key) => key as keyof DataType),
    parseToString: () => {
      if (typeof object === 'object') {
        if ('toString' in object) {
          // @ts-ignore
          return object.toString();
        }
        return JSON.stringify(object);
      }
      return object;
    },
  };
};

export default objectUtils;
