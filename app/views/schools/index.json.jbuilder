json.array!(@schools) do |school|
  json.id     school.id.to_s
  json.text   school.name
  json.parent school.parent_id ? category.parent_id.to_s : '#'
  json.state do
    json.opened true
  end
end
