import english from '@src/locales/en.json';

const t = (key: string, values?: { [key: string]: string }): string => {
  let keys = key.split('.');
  let value = english;
  if (keys.length === 1) {
    value = value[key];
  } else {
    for (let index = 0; index < keys.length; index++) {
      if (value[keys[index]]) {
        value = value[keys[index]];
      } else {
        return key;
      }
    }
  }
  let output = typeof value === 'string' ? value : key;
  if (values) {
    Object.keys(values).forEach((key) => {
      output = output.replace(`{{${key}}}`, values[key]);
    });
  }
  return output;
};

export default t;
