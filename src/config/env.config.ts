import { APP_PORT } from '@/common/utils/constants';

export default () => ({
  port: parseInt(APP_PORT, 10),
});
