class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :body
      t.string :site_url
      t.references :client, index: true

      t.timestamps null: false
    end
    add_foreign_key :projects, :clients
  end
end
