import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['buyInAmountInput', 'winAmountInput'];

  connect() {
    this.buyInAmountInputTarget.addEventListener('blur', (e) => {
      this.buyInAmountInputTarget.value = e.target.value ? parseFloat(e.target.value || '0').toFixed(2) : null;
    });

    this.winAmountInputTarget.addEventListener('blur', (e) => {
      this.winAmountInputTarget.value = e.target.value ? parseFloat(e.target.value).toFixed(2) : null;
    });
  }
}
