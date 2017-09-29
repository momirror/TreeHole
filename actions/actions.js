import {INCREASE,DECREASE,RESET,REFRESH_SECRETS,NO_REFRESH_SECRETS} from './actionType';

const increase = () => ({type:INCREASE});
const decrease = () => ({type:DECREASE});
const reset = () => ({type:RESET});
const refreshSecrets = () => ({type:REFRESH_SECRETS});
const noRefreshSecrets = () => ({type:NO_REFRESH_SECRETS});

export {
  increase,
  decrease,
  reset,
  refreshSecrets,
  noRefreshSecrets,
};