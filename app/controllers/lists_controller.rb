class ListsController < ApplicationController
  def index
    @lists = List.all
    render :json => @lists
  end

  def show
    @list = List.find(params[:id])
    render :json => @list
  end

  def create
    @list = List.find_or_create_by(name: params[:list])
    @list.save
    render :json => @list
  end



end
