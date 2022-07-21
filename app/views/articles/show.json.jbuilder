json.partial! "articles/article", article: @article
json.audio_url rails_blob_url(@article.audio)
