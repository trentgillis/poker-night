# frozen_string_literal: true

module FormComponents
  class CurrencyField::Component < ApplicationViewComponent
    def initialize(form:, input_name:, errors:)
      @form = form
      @input_name = input_name
      @errors = errors
    end
  end
end