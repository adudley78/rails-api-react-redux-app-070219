Rails.application.routes.draw do
  
  root 'static#index'

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end

end
