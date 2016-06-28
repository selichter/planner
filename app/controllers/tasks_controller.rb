class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render :json => @tasks
  end

  def show
    @task = Task.find(params[:id])
    render :json => @task
  end

  def create
    # need to set list somewhere in here too
    @task = Task.find_or_create_by(item: params[:item])
    @task.save
    render :json => @task
  end


end
