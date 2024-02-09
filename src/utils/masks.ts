export const formatCurrency = (value: string) => {
  let formattedValue = value.replace(/\D/g, '');
  formattedValue = formattedValue.replace(/(\d{2})$/, ',$1');
  formattedValue = formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  formattedValue = `${formattedValue}`;

  return formattedValue;
};
