import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static values = { isEditable: { type: Boolean } };
  static targets = ['saveBtn', 'editBtn', 'cancelBtn', 'emailInput', 'firstNameInput', 'lastNameInput'];

  onConnect() {
    this.isEditableValue = false;
  }

  toggleIsEditable() {
    this.isEditableValue = !this.isEditableValue;

    if (this.isEditableValue) {
      this.enabledFormFields();
      this.showSaveBtn();
      this.showCancelBtn();
      this.hideEditBtn();
    } else {
      this.disableFormFields();
      this.hideSaveBtn();
      this.hideCancelBtn();
      this.showEditBtn();
    }
  }

  enabledFormFields() {
    this.emailInputTarget.classList.remove('input-text-disabled');
    this.emailInputTarget.disabled = false;
    this.firstNameInputTarget.classList.remove('input-text-disabled');
    this.firstNameInputTarget.disabled = false;
    this.lastNameInputTarget.classList.remove('input-text-disabled');
    this.lastNameInputTarget.disabled = false;
  }

  disableFormFields() {
    this.emailInputTarget.classList.add('input-text-disabled');
    this.emailInputTarget.disabled = true;
    this.firstNameInputTarget.classList.add('input-text-disabled');
    this.firstNameInputTarget.disabled = true;
    this.lastNameInputTarget.classList.add('input-text-disabled');
    this.lastNameInputTarget.disabled = true;
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
