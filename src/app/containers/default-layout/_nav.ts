import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de Bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Article',
    url: '/item',
    iconComponent: { name: 'cilNotes' }
  },
  {
    name: 'Page',
    url: '/page',
    iconComponent: { name: 'cilMenu' }
  },
  {
    name: 'Modèle',
    url: '/template',
    iconComponent: { name: 'cil-drop' }
  },

];
