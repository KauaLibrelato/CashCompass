export const switchOptions = [
  {label: 'Entradas', value: 0},
  {label: 'Saídas', value: 1},
];

interface SwitchSelectorProps {
  switchValue: number;
  setSwitchValue: (value: number) => void;
}

export const setSwitchProps = ({
  switchValue,
  setSwitchValue,
}: SwitchSelectorProps) => ({
  options: switchOptions,
  initial: 0,
  value: switchValue,
  hasPadding: true,
  valuePadding: 2,
  borderWidth: 0,
  bold: true,
  style: {width: '80%', alignSelf: 'center'},
  textStyle: {textAlign: 'center'},
  activeOpacity: 0.7,
  onPress: (value: number) => {
    setSwitchValue(value);
  },
});
