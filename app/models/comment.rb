class Comment < ApplicationRecord
  belongs_to :school
  validates :content, presence: true
  validates :name, presence: true
end
