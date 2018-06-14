//traverse DOM add and remove elements and apply styles
//
'use strict';
const main = function () {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const newItem = $(this).find('input[name="shopping-list-entry"]').val();
    $('.shopping-list').append(`
    <li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
   `);
  });
  $('.shopping-item-toggle').click(function (event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });


  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    //.click(function(event) {
    $(this).closest('li').remove();
  });
};

$(main());

