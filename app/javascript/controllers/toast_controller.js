import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['toast'];

  hideToast() {
    this.toastTarget.remove();
  }
}
