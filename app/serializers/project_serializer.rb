class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :site_url
  has_one :client
end
