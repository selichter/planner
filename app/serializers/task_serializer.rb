class TaskSerializer < ActiveModel::Serializer
  attributes :id, :item, :due_date, :finished
end
