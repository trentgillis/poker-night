import { Controller } from '@hotwired/stimulus';
import { enter, leave } from 'el-transition';

export default class extends Controller {
  static targets = ['toast'];

  connect() {
    setTimeout(() => {
      leave(this.toastTarget);
    }, 5000);

    enter(this.toastTarget);
  }

  hideToast() {
    leave(this.toastTarget);
  }
}
