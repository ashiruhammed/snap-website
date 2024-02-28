export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_CDSR3f-p.mjs').then(n => n.g);

export { page };
