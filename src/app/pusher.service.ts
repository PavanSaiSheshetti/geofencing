import { Injectable } from '@angular/core';
declare const Pusher: any;
@Injectable()
export class PusherService {
  constructor() {
    const pusher = new Pusher("3dfb05b4f312a8ca99a9", {
      cluster: 'ap2',
    });
    this.channel = pusher.subscribe('location');
  }
  channel;
  public init() {
    return this.channel;
  }
}