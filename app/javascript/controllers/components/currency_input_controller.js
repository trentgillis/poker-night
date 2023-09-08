import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['input'];

  connect() {
    this.inputTarget.addEventListener('blur', (e) => {
      this.inputTarget.value = e.target.value ? parseFloat(e.target.value).toFixed(2) : null;
    });
  }
}
