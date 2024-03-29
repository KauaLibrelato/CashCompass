export interface StorageService {
  getStringItem: <T>(key: string) => Promise<T>;
  getBooleanItem: <T>(key: string) => Promise<Boolean | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

//Injeção de dependência
export let storageService: StorageService;

//Injeção de dependência
export function initializeStorage(storage: StorageService) {
  storageService = storage;
}
