class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable

  has_many :results

  def total_winnings
    results.map { |result| result.win_amount_cents - result.buy_in_amount_cents }.sum
  end
end
