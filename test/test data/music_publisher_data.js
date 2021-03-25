//add_music_publisher
var add_music_publisher_data = {
  email: 'girish.info@gmail.com',
  mp_email: 'info.spotify@gmail.com',
  start_date: '2021-12-01T10:55:07.067+00:00',
  end_date: '2021-12-01T10:55:07.067+00:00',
}

//get_music_publishers
var get_music_publishers_data = {
  limit: 5,
  start_after: 0,
}

//create_collection
var create_collection_data = {
  music_publisher_id: '5ff82432c866d529ccccc004',
  tracks: '[1,2,3,4,5]',
  name: 'test'
}

//update_collection
var update_collection_data = {
  collection_id: '5ff82d7c03ecf041b42bba5a',
  tracks: '[1,2,3,4,5,6]',
  name: 'test',
  active: true
}

//delete_collection
var delete_collection_data = {
  collection_id: JSON.stringify(["5ff830cc4a6f6a15fcb6b3f6"])
}

//get_collection
var get_collection_data = {
  music_publisher_id: "5ff82432c866d529ccccc004",
  playlist_id: JSON.stringify(["5ff830cc4a6f6a15fcb6b3f6"])
}


//delete_music_publisher
var delete_music_publisher_data = {
  mp_id: '5ff82432c866d529ccccc004'
}



//get_tracks_music_publisher
var get_tracks_music_publisher_data = {
  mp_id: '5fe2dffdb2a446087dae1fce'
}

module.exports = { add_music_publisher_data, 
                  get_music_publishers_data, 
                  create_collection_data,
                   update_collection_data,
                   get_tracks_music_publisher_data, 
                  delete_music_publisher_data, 
                  delete_collection_data, 
                  get_collection_data }