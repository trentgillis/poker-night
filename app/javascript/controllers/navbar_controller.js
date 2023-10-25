import { Controller } from '@hotwired/stimulus';
import { useClickOutside } from 'stimulus-use';
import { leave, toggle } from 'el-transition';

export default class extends Controller {
  static targets = ['userMenuBtn', 'userMenu'];

  connect() {
    useClickOutside(this);
  }

  toggle() {
    toggle(this.userMenuTarget);
  }

  clickOutside(event) {
    leave(this.userMenuTarget);
  }
}
