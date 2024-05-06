import { micro_fe_path_prefix } from '../../public/manifest.json';
import { prefixFieldValues } from '@src/utils/micro-frontend/prefix-field-values';

type IConfigInstance = {
  remoteFile: string;
  file: string;
  module: string;
  scope: string;
};
type IConfig = {
  [key in 'route' | 'quickFilter' | 'sideBar']: IConfigInstance;
};

const internalConfig: IConfig = {
  route: {
    remoteFile: '',
    file: 'remoteEntry.js',
    scope: 'ToolsMicroFrontendTemplate',
    module: '/internal-routes'
  },
  quickFilter: {
    remoteFile: '',
    file: '',
    scope: 'ToolsMicroFrontendTemplate',
    module: '/quick-filters'
  },
  sideBar: {
    remoteFile: '',
    file: '',
    scope: 'ToolsMicroFrontendTemplate',
    module: '/side-bar'
  }
};

const config: IConfig = {} as IConfig;

for (const key in internalConfig) {
  config[key] = prefixFieldValues(internalConfig[key], { remoteFile: '/', module: './' }, micro_fe_path_prefix);
}

export { config };
