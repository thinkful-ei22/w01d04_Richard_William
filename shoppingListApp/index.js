//traverse DOM add and remove elements and apply styles
//
'use strict';
const handleAdd = function(){
  $('#js-shopping-list-form').submit(function(event){
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
};
$(handleAdd());
const handleRemove = function(){

};


      