class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable

  has_many :results

  def total_winnings
    results.map do |result|
      result.win_amount - result.buy_in_amount
    end.sum
  end
end
