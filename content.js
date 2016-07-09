// Create the chat area
var chatContainer = $("<ul></ul>");
chatContainer.attr("id", "chat-container");
$('body').append(chatContainer);

// List of existing tabs
friendTabs = [];

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'addChatTab') {
      friendTab = createFriendTab(request.friendInfo);
      $('#chat-container').append(friendTab);
    }
  }
);

function createFriendTab(friendInfo) {
  friendTab = $('<li class="friend-tab"></li');
  friendTab.html(friendInfo.name);
  return friendTab;
}
