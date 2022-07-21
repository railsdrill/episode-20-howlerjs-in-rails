json.extract! article, :id, :title, :created_at, :updated_at, :position
json.url article_url(article, format: :json)
