class AddPositionToArticle < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :position, :float
  end
end
