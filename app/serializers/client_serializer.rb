class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :adress, :phone
end
