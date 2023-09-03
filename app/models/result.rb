class Result < ApplicationRecord
  belongs_to :user

  validates :buy_in_amount_cents, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10_000 }
  validates :win_amount_cents, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10_000 }

  monetize :buy_in_amount_cents, as: :buy_in_amount, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  monetize :win_amount_cents, as: :win_amount, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
end
