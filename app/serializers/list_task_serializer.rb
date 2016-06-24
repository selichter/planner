class ListTaskSerializer < ActiveModel::Serializer
  attributes :id, :item, :due_date, :finished
end
