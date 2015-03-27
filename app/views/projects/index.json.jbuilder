json.array!(@projects) do |project|
  json.extract! project, :id, :name, :body, :site_url, :client_id
  json.url project_url(project, format: :json)
end
