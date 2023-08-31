class Result < ApplicationRecord
  belongs_to :user

  monetize :buy_in_amount_cents, as: :buy_in_amount
  monetize :win_amount_cents, as: :win_amount
end
