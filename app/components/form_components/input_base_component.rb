module FormComponents
  class InputBaseComponent < ApplicationViewComponent
    def initialize(form:, input_name:, errors: [], label_text: nil, input_data_attrs: {}, autofocus: false, autocomplete: '')
      @form = form
      @input_name = input_name
      @errors = errors
      @label_text = label_text
      @input_data_attrs = input_data_attrs
      @form = form
      @autofocus = autofocus
      @autocomplete = autocomplete
    end
  end
end