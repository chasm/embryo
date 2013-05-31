Embryo::Application.routes.draw do
  get "users" => "home#index"
  get "users/new" => "home#index"
  get "users/:id" => "home#index"
  get "users/:id/edit" => "home#index"
  
  root :to => 'home#index'
end
