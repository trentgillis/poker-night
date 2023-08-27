import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['toast'];

  connect() {
    setTimeout(() => {
      this.hideToast();
    }, 5000);
  }

  hideToast() {
    this.toastTarget.remove();
  }
}
