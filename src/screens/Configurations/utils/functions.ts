import {storage} from '../../../utils';

export async function handleToggle(
  toggleValue: boolean,
  setToggleValue: (value: boolean) => void,
) {
  await storage.set('isDarkTheme', !toggleValue);
  setToggleValue(!toggleValue);
}
