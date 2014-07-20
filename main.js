function init() {
  addTestTasks();
  attachEvents();
}

function addTestTasks () {
  new Item({
    text : 'this is task 1'
  });

  new Item({
    text : 'this is task 2'
  });

  new Item({
    text : 'this is task 3'
  });

  new Item({
    text : 'this is task 4'
  });
}

function attachEvents() {

}


init();
