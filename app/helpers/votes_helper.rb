module VotesHelper
  def plus_vote(vote, comment_number)
    vote.where('comment_id = ? and plus_or_minus= ?', comment_number, 1).count
  end

  def minus_vote(vote, comment_number)
    vote.where('comment_id = ? and plus_or_minus= ?', comment_number, -1).count
  end
end
