'use strict';
const handleSubmit = function(){
  $('#number-chooser').submit(function(ev) {
    ev.preventDefault();
    let  results =[];
    const count = parseInt($(this).find('input[name = "number-choice"]').val());
    for(let i =1; i < count; i++){
      if( i %15 === 0){
        results.push($(`<div class="fizz-buzz-item fizzbuzz">
            <span>fizzbuzz</span>
          </div>`));
      }
      else if( i % 3 === 0){
        results.push($(`<div class="fizz-buzz-item fizz">
            <span>fizz</span>
             </div>`));
      }
      else if(i % 5  === 0){
        results.push($(`<div class="fizz-buzz-item fizz">
            <span>buzz</span>
             </div>`));
      }
      else{
        results.push($(` <div class="fizz-buzz-item">
              <span>${i}</span>
            </div>`));
      }

    }
    $('.js-results').append(results);
  });
};
$(handleSubmit);