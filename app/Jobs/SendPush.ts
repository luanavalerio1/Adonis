import type { JobHandlerContract, Job } from '@ioc:Rlanz/Queue'

export type SendPushPayload = {}

export default class implements JobHandlerContract {
	constructor(public job: Job) {
    this.job = job
  }

  /**
   * Base Entry point
   */
  public async handle(payload: SendPushPayload) {}

  /**
   * This is an optional method that gets called if it exists when the retries has exceeded and is marked failed.
   */
  public async failed() {}
}
