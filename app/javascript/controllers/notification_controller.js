import { Controller } from '@hotwired/stimulus';
import { enter, leave } from 'el-transition';

export default class extends Controller {
  static targets = ['notification'];

  connect() {
    setTimeout(() => {
      leave(this.notificationTarget);
    }, 10000);

    enter(this.notificationTarget);
  }

  hideToast() {
    leave(this.notificationTarget);
  }
}
