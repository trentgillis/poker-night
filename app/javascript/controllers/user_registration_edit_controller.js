import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static values = { isEditable: { type: Boolean } };
  static targets = ['saveBtn', 'editBtn', 'cancelBtn'];

  onConnect() {
    this.isEditableValue = false;
  }

  toggleIsEditable() {
    this.isEditableValue = !this.isEditableValue;

    if (this.isEditableValue) {
      this.showSaveBtn();
      this.showCancelBtn();
      this.hideEditBtn();
    } else {
      this.hideSaveBtn();
      this.hideCancelBtn();
      this.showEditBtn();
    }
  }

  hideSaveBtn() {
    this.saveBtnTarget.classList.add('hidden');
  }

  showSaveBtn() {
    this.saveBtnTarget.classList.remove('hidden');
  }

  hideEditBtn() {
    this.editBtnTarget.classList.add('hidden');
  }

  showEditBtn() {
    this.editBtnTarget.classList.remove('hidden');
  }

  hideCancelBtn() {
    this.cancelBtnTarget.classList.add('hidden');
  }

  showCancelBtn() {
    this.cancelBtnTarget.classList.remove('hidden');
  }
}
