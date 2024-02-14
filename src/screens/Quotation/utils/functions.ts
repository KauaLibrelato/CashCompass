import axios from 'axios';

export async function getQuotation(of: string, to: string) {
  const response = await axios.get(
    `http://economia.awesomeapi.com.br/json/last/${of}-${to}`,
  );
  return response;
}

export const fetchCalculation = async (
  value: string,
  of: string,
  to: string,
  setLoading: (loading: boolean) => void,
): Promise<number | null> => {
  try {
    setLoading(true);
    const formattedValue = parseFloat(value.replace(',', '.'));
    const {data} = await getQuotation(of, to);
    const rate = data?.[`${of.toUpperCase()}${to.toUpperCase()}`]?.ask;
    if (rate) {
      const result = formattedValue * parseFloat(rate);
      return parseFloat(result.toFixed(2));
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching calculation:', error);
    return null;
  } finally {
    setLoading(false);
  }
};
