import { getCurrentInstance } from 'vue';
import mitt from 'mitt';

export function useGlobalConfig() {
  const instance = getCurrentInstance();
  if (!instance) {
    console.log('useGlobalConfig 必须得在setup里面整');
    return;
  }
  return instance.appContext.config.globalProperties.$AILEMENTE || {};
}

export const formDataKey = Symbol('form-data');

export const emitter = mitt();
