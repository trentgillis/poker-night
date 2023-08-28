import { Controller } from '@hotwired/stimulus';
import { useTransition } from 'stimulus-use';

export default class extends Controller {
  static targets = ['toast'];

  connect() {
    useTransition(this, {
      element: this.toastTarget,
    });

    setTimeout(() => {
      this.hideToast();
    }, 5000);

    // Runs the enter transition
    this.enter();
  }

  hideToast() {
    this.leave();
  }
}
