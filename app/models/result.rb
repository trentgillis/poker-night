class Result < ApplicationRecord
  belongs_to :user

  validates :buy_in_amount_cents, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10_000 }
  validates :win_amount_cents, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10_000 }

  monetize :buy_in_amount_cents, as: :buy_in_amount, allow_nil: true
  validates :buy_in_amount, presence: { message: "Buy in amount is required." }
  validates :buy_in_amount, numericality: { greater_than_or_equal_to: 0, message: 'Buy in amount must be a positive value.', allow_nil: true }
  validates :buy_in_amount, numericality: { less_than_or_equal_to: 100, message: 'Buy in amount must $100 or less.', allow_nil: true }

  monetize :win_amount_cents, as: :win_amount, allow_nil: true
  validates :win_amount, presence: { message: "Win amount is required." }
  validates :win_amount, numericality: { greater_than_or_equal_to: 0, message: 'Win amount must be a positive value.' }
  validates :win_amount, numericality: { less_than_or_equal_to: 100, message: 'Win amount must $100 or less.' }
end
