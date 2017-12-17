class Comment < ApplicationRecord
  belongs_to :school
  has_many :vote
  validates :content, presence: true
  validates :name, presence: true
end
