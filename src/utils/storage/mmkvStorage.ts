import { storage } from '../constants';
import {StorageService} from './storageService';

//Abstração
export const mmkvStorage: StorageService = {
  getStringItem: async key => {
    const item = storage.getString(key);
    if (item != null) {
      return JSON.parse(item);
    }
    return null;
  },
  getBooleanItem: async key => {
    const item = storage.getBoolean(key);
    if (item != null) {
      return item
    }
    return null;
  },
  setItem: async (key, value) => {
    storage.set(key, JSON.stringify(value));
  },
  removeItem: async key => {
    storage.delete(key);
  },
};