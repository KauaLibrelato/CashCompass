export interface IHomeCard {
  amount: string | null;
  title: string;
  lastTransaction: Date | null;
  type: 'inputs' | 'exits' | 'total';
  id: number;
}
