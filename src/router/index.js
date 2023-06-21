import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import DocumentView from '../views/DocumentView.vue';
import NotFoundView from '../views/NotFoundView.vue';

export default [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/AboutView',
    component: AboutView,
  },
  {
    path: '/DocumentView',
    component: DocumentView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
];
