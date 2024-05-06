import { micro_fe_path_prefix } from '../../public/manifest.json';
import { prefixFieldValues } from '@src/utils/micro-frontend/prefix-field-values';

interface IQuickFilters {
  remoteFile: string;
  module: string;
  scope: string;
  key: string;
  name: string;
}

export const quickFilters: IQuickFilters[] = [
  {
    remoteFile: '/remoteEntry.js',
    module: '/template',
    scope: 'ToolsMicroFrontendTemplate',
    key: 'template',
    name: 'Template'
  }
].map((quickFilter) => prefixFieldValues(quickFilter, { remoteFile: '/', module: './' }, micro_fe_path_prefix));
