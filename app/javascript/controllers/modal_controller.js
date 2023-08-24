import { Controller } from '@hotwired/stimulus';
import { useClickOutside } from 'stimulus-use';

export default class extends Controller {
  static targets = ['modal', 'modalContent'];

  connect() {
    useClickOutside(this, {
      element: this.modalContentTarget,
    });
  }

  hideModal() {
    this.modalTarget.remove();
  }

  submitEnd(e) {
    if (e.detail.success) this.hideModal();
  }

  clickOutside() {
    this.hideModal();
  }
}
