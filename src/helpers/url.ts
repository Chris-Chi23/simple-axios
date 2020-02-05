import {
  isDate,
  isObject
} from './util';

const buildUrl = (url: string, params?: {[index: string]: any}) => {
  if(!params){
    return url;
  }
  const parameters: string[] = [];
  for(const k of Object.keys(params)){
    const val = params[k];
    if(val === null || typeof val === 'undefined'){
      continue;
    }


  }
}
