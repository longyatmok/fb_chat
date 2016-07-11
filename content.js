var fullFriendList = [
  {"name": "Leonard Mok", "id": 1},
  {"name": "Felix Yau", "id": 2},
  {"name": "Adrian Ng", "id": 3},
  {"name": "Henry Cheung", "id": 4},
  {"name": "Richard Tsui", "id": 5},
  {"name": "William Hi", "id": 6},
  {"name": "Jim Ng", "id": 7},
  {"name": "Sunny Ku", "id": 8}
];

var activeTab = [];

function createFriendTab(friendInfo) {
  friendTab = $("<li class='friend-tab'></li");
  friendTab.html(friendInfo.name);
  return friendTab;
}

function createListDom() {
  var listContainer = $("<div id='list-container'></div>");
  var list = $("<ul id='friend-list'></ul>");
  var listHeaderBtn = $("<div id='list-title-bar'>Friends Chat...</div>");
  listHeaderBtn.click(function(){
    listContainer.css('display', 'none')
  });
  listContainer.append(listHeaderBtn);
  listContainer.append(list);
  return listContainer;
}
function createListBtn() {
  var listButton = $("<li class='friend-button'><a>Friends Chat...</a></li>");
  listButton.click(function(){
    $('#list-container').css('display', 'block');
  });
  return listButton;
}
function createFooterDom(){
  var footerContainer = $("<div id='fb-chat-footer-container'></div>");
  var chatContainer = $("<ul id='chat-container'></ul>");
  var listButton = createListBtn();
  var listContainer = createListDom();
  chatContainer.append(listButton);
  footerContainer.append(listContainer);
  footerContainer.append(chatContainer);
  return footerContainer;
}

function createListName(friend) {
  var friendLi = $("<li></li>");
  var aDom = $("<a class='list-name'></a>", {"data-friend-id": friend.id});
  aDom.text(friend.name);
  aDom.click(addFriendChatTab(friend));
  friendLi.append(aDom);
  return friendLi;
}

function renderList(){
  fullFriendList.forEach(function(friend){
    var friendLi = createListName(friend);
    $("#friend-list").append(friendLi);
  });
}

function addFriendChatTab(friend) {
  return function() {
    var friendTab = $("<li class='friend-tab'></li>");
    var aDom = $("<a></a>");
    var nameSpan = $("<span></span>");
    var closeButton = $("<span class='close-button'>&nbsp;&nbsp;&times;</span>");
    closeButton.click(function () {
      $(this).parent().parent().remove();
    });
    nameSpan.text(friend.name);
    aDom.append(nameSpan);
    aDom.append(closeButton);
    friendTab.append(aDom);
    $('#chat-container').append(friendTab);
  }
}

// Create the chat area
var footerContainer = createFooterDom();
$('body').append(footerContainer);
renderList();



