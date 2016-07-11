listOfFriends = [
  {"name": "Leonard Mok", "id": 1},
  {"name": "Felix Yau", "id": 2},
  {"name": "Adrian Ng", "id": 3},
  {"name": "Henry Cheung", "id": 4},
  {"name": "Richard Tsui", "id": 5},
  {"name": "William Hi", "id": 6},
  {"name": "Jim Ng", "id": 7},
  {"name": "Sunny Ku", "id": 8},
];

function clickListName(e) {
  friendId = $(e.target).data("friendId");
  console.log("Open chat tab for", friendId);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    friendInfo = getFriendById(friendId);
    if (friendInfo){
      chrome.tabs.sendMessage(activeTab.id, {action: 'addChatTab', friendInfo: friendInfo});
      // window.close();
    }
  });
}

function getFriendById(id){
  candidate = listOfFriends.filter(function(a){return a.id==id});
  if (candidate.length == 1) {
    return candidate[0];
  } else {
    return null;
  }
}

function filterFriends(e) {
  var searchField = $(e.target).get(0);
  var searchValue = searchField.value.toLowerCase() ;
  if(searchValue && searchValue.length > 0) {
    newList = listOfFriends.filter(function(a){
      return (a.name.toLowerCase().indexOf(searchValue) > -1)
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
    var aDom = $("<a></a>", {"data-friend-id": friend.id});
    aDom.addClass('list-name');
    aDom.text(friend.name);
    friendLi.append(aDom);
    listContainer.append(friendLi);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  renderFriendList(listOfFriends);
  $('.search-field').on('input', filterFriends);
  $('.list-name').click(clickListName);
});
