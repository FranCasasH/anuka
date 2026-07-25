export const routes = [
    {
        path: '',
        title: 'Anukah | Terapia online',
        loadComponent: () => import('./pages/home/home').then((page) => page.Home),
    },
    {
        path: 'contacto',
        title: 'Contacto | Anukah',
        loadComponent: () => import('./pages/contact/contact').then((page) => page.Contact),
    },
    {
        path: 'login',
        title: 'Iniciar sesión | Anukah',
        loadComponent: () => import('./pages/login/login').then((page) => page.Login),
    },
    {
        path: '**',
        title: 'Página no encontrada | Anukah',
        loadComponent: () => import('./pages/error/error').then((page) => page.Error),
    },
];
