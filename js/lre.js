function fetchFriends (choice) {
  const ul = document.getElementById('friends');
  var filename =  choice ? 'friends.json' : 'none.json';

  fetch(filename)
    .then(response => response.json())
    .then(friends => {
      friends.forEach(friend => {
        document.getElementById('success').innerText = '';
        const li = document.createElement('li');
        li.innerText = `${friend.first} ${friend.last}`;
        ul.appendChild(li);
      });
    })
    .catch(function(error) {
      document.getElementById('failure').innerText = '';
      const h4 = document.createElement('h4');
      h4.innerText = `I\'m sorry. You have no friends. ` + error.message + ` is to blame. :(`;
      ul.appendChild(h4);
    });
}
