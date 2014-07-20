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
  var $addNewLink = $('.new a');
  var $writeInput = $('input.write');

  $addNewLink.on('click', function() {
    $writeInput.removeClass('hidden');
    $addNewLink.addClass('hidden');
  });

  $writeInput.on('keyup', function(e) {
    if (e.keyCode != 13) return; // If not 'Enter'
    var val = this.value;
    this.value = '';
    $writeInput.addClass('hidden');
    $addNewLink.removeClass('hidden');
    new Item({
      text : val
    });
  });
}


init();
