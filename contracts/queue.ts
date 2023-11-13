import type { SendPushPayload } from '../app/Jobs/SendPush';
declare module '@ioc:Rlanz/Queue' {
  interface JobsList {
    'app/Jobs/SendPush': SendPushPayload
  }
}
