# frozen_string_literal: true

module FormComponents
  class EmailField::Component < ApplicationViewComponent
    def initialize(form:, input_name:, input_data: {}, errors: [], disabled: false)
      @form = form
      @input_name = input_name
      @input_data = input_data
      @errors = errors
      @disabled = disabled
    end
  end
end