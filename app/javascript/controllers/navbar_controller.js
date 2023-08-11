import { Controller } from '@hotwired/stimulus';
import { useClickOutside, useTransition } from 'stimulus-use';

export default class extends Controller {
  static values = { userMenuOpen: Boolean };
  static targets = ['userMenuBtn', 'userMenu'];

  connect() {
    useClickOutside(this);
    useTransition(this, {
      element: this.userMenuTarget,
      transitioned: false,
    });
  }

  toggle() {
    this.userMenuOpenValue = !this.userMenuOpenValue;

    if (this.userMenuOpenValue) {
      this.enter();
    } else {
      this.leave();
    }
  }

  clickOutside(event) {
    if (this.userMenuOpenValue) {
      this.userMenuOpenValue = false;
      this.leave();
    }
  }
}
