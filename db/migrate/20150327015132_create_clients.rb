class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :company
      t.string :adress
      t.string :phone

      t.timestamps null: false
    end
  end
end
