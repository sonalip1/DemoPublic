// Handler function to sort the shuffled list items
function onSort() {
  var list = document.getElementById("shuffleAndSort");
  var items = list.children;
  var sortedArray = [];
  for (var i in items) {
    if (items[i].nodeType == 1) {
      sortedArray.push(items[i]);
    }
  }

  sortedArray.sort(function (a, b) {
    return a.innerHTML == b.innerHTML ? 0 : a.innerHTML > b.innerHTML ? 1 : -1;
  });

  for (i = 0; i < sortedArray.length; ++i) {
    list.appendChild(sortedArray[i]);
  }
}

// Function which shuffle the node elements
function shuffle(items) {
  var shuffledList = items.slice(0);
  var temp;
  var randomIndex;
  for (i = shuffledList.length - 1; i >= 0; --i) {
    randomIndex = Math.floor(i * Math.random());
    temp = shuffledList[randomIndex];
    shuffledList[randomIndex] = shuffledList[i];
    shuffledList[i] = temp;
  }
  return shuffledList;
}

// Handler function which shuffles the list items
function onShuffle() {
  var list = document.getElementById("shuffleAndSort");
  var items = Array.prototype.slice.call(list.children);
  var itemsArray = shuffle(items);

  for (i = 0; i < itemsArray.length; i++) {
    list.appendChild(itemsArray[i]);
  }
}
