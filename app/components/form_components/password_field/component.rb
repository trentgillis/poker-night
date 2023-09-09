# frozen_string_literal: true

module FormComponents
  class PasswordField::Component < ApplicationViewComponent
    def initialize(form:, input_name:, label_text: nil)
      @form = form
      @input_name = input_name
      @label_text = label_text
    end
  end
end
