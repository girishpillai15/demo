//user_token
var user_token_data={
  user_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjEwMDI4NTA0fQ.nkPRVhOuCF1DGHP1O80umC15LB7EAPoBDiq6n-TLW3g"
}

//create_playlist
var create_playlist_data = {
  name: 'new tracks',
  tracks:JSON.stringify([
    {
      "Title":"1re Gymnopdie, 1886",
      "Artist":"Daniel Varsano",
      "Album":"Satie - Piano Works",
      "Year":1971,
      "Genre":"Classical",
      "Track ID":"0d5f20f5-51d2-4624-96fb-302b87a98602",
      "Duration":2.1848816326530613e2,
      "RTP ID":434,
      "Album Art Image":"Missing",
      "Music Publisher ID":"cbad7d17-a49a-4749-b5ed-da2c03f6a216",
      "File Location":"List A - 141 Songs\\01 1re Gymnopdie, 1886.mp3"
    },
    {
      "Title":"Music Is Math",
      "Artist":"Boards of Canada",
      "Album":"Geogaddi",
      "Year":2002,
      "Genre":"Electronic",
      "Track ID":"626a7a0b-0d8a-499a-9ff7-d7052f894d98",
      "Duration":3.220897959183674e2,
      "RTP ID":215,
      "Album Art Image":"Missing",
      "Music Publisher ID":"f71af2d9-bc26-41d9-b0f1-5f52f92c7bc1",
      "File Location":"List A - 141 Songs\\02 Music Is Math.mp3"
    }
  ])
}

//update_playlist
var update_playlist_data = {
  playlist_id:'5ff84ed344e77b15249b040b',
  name: 'new',
  active:true,
  tracks:JSON.stringify([
    {
      "Title":"Alpha Beta Gaga (Mark Ronson Dub)",
      "Artist":"Missing",
      "Album":"Missing",
      "Year":"Missing",
      "Genre":"Missing",
      "Track ID":"fe4c17bd-a65d-41b2-9cb4-02a4776fcd9a",
      "Duration":3.1119673469387754e2,
      "RTP ID":672,
      "Album Art Image":"Missing",
      "Music Publisher ID":"9752e282-9201-475b-a05b-e218666ebb1d",
      "File Location":"List A - 141 Songs\\0089d9e72bb07cd3774fb5208145ea1e.mp3"
    },
    {
      "Title":"1re Gymnopdie, 1886",
      "Artist":"Daniel Varsano",
      "Album":"Satie - Piano Works",
      "Year":1971,
      "Genre":"Classical",
      "Track ID":"0d5f20f5-51d2-4624-96fb-302b87a98602",
      "Duration":2.1848816326530613e2,
      "RTP ID":434,
      "Album Art Image":"Missing",
      "Music Publisher ID":"cbad7d17-a49a-4749-b5ed-da2c03f6a216",
      "File Location":"List A - 141 Songs\\01 1re Gymnopdie, 1886.mp3"
    },
  ])
}

//delete_playlist
var delete_playlist_data = {
  playlist_id:JSON.stringify(["5ff84ed344e77b15249b040b"])
}

module.exports = {user_token_data,create_playlist_data,update_playlist_data,delete_playlist_data}