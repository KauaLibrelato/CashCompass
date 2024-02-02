type ToggleButtonProps = {
  thumbActiveComponent: JSX.Element;
  thumbInActiveComponent: JSX.Element;
  containerStyle: {width: number; height: number};
  thumbButton: {width: number; height: number};
  thumbStyle: {
    width: number;
    height: number;
    alignItems?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'stretch'
      | 'baseline'
      | undefined;
    justifyContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | undefined;
    backgroundColor: string;
    borderRadius: number;
    elevation: number;
    shadowColor: string;
    shadowOffset: {width: number; height: number};
    shadowOpacity: number;
    shadowRadius: number;
  };
  trackBar: {
    activeBackgroundColor: string;
    inActiveBackgroundColor: string;
    borderActiveColor: string;
    borderInActiveColor: string;
    borderWidth: number;
    width: number;
    height: number;
  };
};

export type ToggleButtonContainerProps = ToggleButtonProps & {
  value: boolean;
  onPress: () => void;
};
