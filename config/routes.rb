Rails.application.routes.draw do
  get '/', to: "pages#home"
  get '/more', to: "pages#bounce"
end
