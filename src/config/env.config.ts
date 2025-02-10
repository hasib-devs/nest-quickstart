import { APP_PORT } from '@/common/constants';

export default () => ({
  port: parseInt(APP_PORT, 10),
});
