/**
 *
 * Asynchronously loads the component for Quizboard
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
