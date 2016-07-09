listOfFriends = [
  {"name": "Leonard Mok", "id": 1},
  {"name": "Felix Yau", "id": 2},
  {"name": "Adrian Ng", "id": 3},
  {"name": "Henry Cheung", "id": 4},
  {"name": "Richard Tsui", "id": 5},
  {"name": "William Hi", "id": 6},
  {"name": "Jim Ng", "id": 7},
  {"name": "Sunny Ku", "id": 8},
]

function clickListName(e) {
  console.log($(e.target).data("friendId"));
  window.close();
}

function filterFriends(e) {
  searchField = $(e.target).get(0);
  searchValue = searchField.value.toLowerCase() ;
  if(searchValue && searchValue.length > 0) {
    newList = listOfFriends.filter(function(a){
      return (a["name"].toLowerCase().indexOf(searchValue) > -1)
    });
    renderFriendList(newList);
  } else {
    renderFriendList(listOfFriends);
  }
}

function renderFriendList(list){
  listContainer = $('.list-container');
  listContainer.empty();
  list.forEach(function(friend, index){
    var friendLi = $("<li></li>");
    var aDom = $("<a></a>", {"data-friend-id": friend["id"]});
    aDom.addClass('list-name');
    aDom.text(friend["name"]);
    friendLi.append(aDom);
    listContainer.append(friendLi);
  });
}
renderFriendList(listOfFriends);
$('.search-field').on('input', filterFriends);
$('.list-name').click(clickListName);
