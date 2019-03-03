$('button#add_item_btn').on('click dblclick', function(event) {
    event.preventDefault();
    let shoppingEntry = $('input#shopping-list-entry').val();
    $('ul.shopping-list').first().append(`<li>
        <span class='shopping-item'>${shoppingEntry}</span>
        <div class='shopping-item-controls'>
        <button class='shopping-item-toggle'>
          <span class='button-label'>check</span>
        </button>
        <button class='shopping-item-delete'>
          <span class='button-label'>delete</span>
        </button>
      </div>  
      </li>`);
      $('input#shopping-list-entry').val('');
});


$('.shopping-list').on('click dblclick', 'button.shopping-item-delete', function() {
    $(this).parents('li').remove();
});


$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});
