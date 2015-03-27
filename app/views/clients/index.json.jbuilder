json.array!(@clients) do |client|
  json.extract! client, :id, :name, :company, :adress, :phone
  json.url client_url(client, format: :json)
end
