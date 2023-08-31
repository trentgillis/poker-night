class Result < ApplicationRecord
  belongs_to :user

  validates :buy_in_amount_cents, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :win_amount_cents, presence: true, numericality: { greater_than_or_equal_to: 0 }

  monetize :buy_in_amount_cents, as: :buy_in_amount
  monetize :win_amount_cents, as: :win_amount
end
