class CreateResults < ActiveRecord::Migration[7.0]
  def change
    create_table :results do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :buy_in_amount_cents
      t.integer :win_amount_cents

      t.timestamps
    end
  end
end
