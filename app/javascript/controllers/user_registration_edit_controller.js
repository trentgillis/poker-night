import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static values = { isEditable: { type: Boolean } };
  static targets = [
    'editBtn',
    'actionBtnContainer',
    'editBtnContainer',
    'emailInput',
    'firstNameInput',
    'lastNameInput',
  ];

  onConnect() {
    this.isEditableValue = false;
  }

  toggleIsEditable() {
    this.isEditableValue = !this.isEditableValue;

    if (this.isEditableValue) {
      this.enabledFormFields();
      this.hideActionBtnContainer();
      this.hideEditBtn();
      this.showEditBtnContainer();
    } else {
      this.disableFormFields();
      this.hideEditBtnContainer();
      this.showActionBtnContainer();
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

  hideActionBtnContainer() {
    this.actionBtnContainerTarget.classList.add('hidden');
  }

  showActionBtnContainer() {
    this.actionBtnContainerTarget.classList.remove('hidden');
  }

  hideEditBtnContainer() {
    this.editBtnContainerTarget.classList.add('hidden');
  }

  showEditBtnContainer() {
    this.editBtnContainerTarget.classList.remove('hidden');
  }

  hideEditBtn() {
    this.editBtnTarget.classList.add('hidden');
  }

  showEditBtn() {
    this.editBtnTarget.classList.remove('hidden');
  }
}
