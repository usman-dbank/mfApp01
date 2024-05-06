import { RouteUrls } from '@src/utils/routes.constants';

interface Route {
  key: string;
  icon: string;
  label: string;
  order?: number;
  showInNavBar?: boolean;
  children?: Route[];
}

export const sideBar: Route[] = [
  {
    key: RouteUrls.template,
    icon: 'attribute-metadata-side-bar',
    label: 'Template',
    order: 99
  }
];
