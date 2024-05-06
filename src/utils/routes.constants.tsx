import { micro_fe_path_prefix } from '../../public/manifest.json';

import { prefixFieldValues } from './micro-frontend/prefix-field-values';

const internalRouteUrls = {
  dashboard: '',
  template: '/template'
};

export const RouteUrls = prefixFieldValues(
  internalRouteUrls,
  Object.keys(internalRouteUrls).reduce(
    (keyPrefixes, key) => {
      keyPrefixes[key] = '/';
      return keyPrefixes;
    },
    {} as Record<string, string>
  ),
  micro_fe_path_prefix
);
