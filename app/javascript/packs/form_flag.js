$(document).on('turbolinks:load', function () {
  let counter = 1;
  $('.cocoon-field').on('cocoon:after-insert', function (e, insertedItem) {
    counter++;
    $(insertedItem).find('#parent-target').removeClass('select-parent1');
    $(insertedItem).find('#parent-target').addClass('select-parent' + counter);
    $(insertedItem).find('#children-target').removeClass('select-children1');
    $(insertedItem).find('#children-target').addClass('select-children' + counter);
    $(insertedItem).find('#hidden-target').val(counter);
    $(insertedItem).find('#label-target').text("M " + counter + " :");
    $(".remove_fields").eq(counter - 2).hide()
  });
  $('.cocoon-field').on('cocoon:after-remove', function () {
    counter--
    $(".remove_fields").eq(counter - 1).show()
  });
});
