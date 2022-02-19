$(document).on('turbolinks:load', function () {
  return (function () {
        let replaceChildrenOptions, replaceSelectOptions;
        replaceSelectOptions = function ($select, results) {
          $select.html($('<option>'));
          return $.each(results, function () {
            let option;
            option = $('<option>').val(this.id).text(this.name);
            return $select.append(option);
          });
        };
        replaceChildrenOptions = function () {
          let $selectChildren, childrenPath;
          childrenPath = $(this).find('option:selected').data().childrenPath;
          $selectChildren = $(this).closest('form').find('.select-children1');
          if (childrenPath != null) {
            return $.ajax({
              url: childrenPath,
              dataType: "json",
              success: function (results) {
                return replaceSelectOptions($selectChildren, results);
              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.error("Error occurred in replaceChildrenOptions");
                console.log(`XMLHttpRequest: ${XMLHttpRequest.status}`);
                console.log(`textStatus: ${textStatus}`);
                return console.log(`errorThrown: ${errorThrown}`);
              }
            });
          } else {
            return replaceSelectOptions($selectChildren, []);
          }
        };
        return $('.select-parent1').on({
          'change': replaceChildrenOptions
        });
      })();
});

$(document).on('turbolinks:load', function () {
  let i = 1;
  $('.card').on('cocoon:after-insert', function () {
    i++;
    return (function () {
        let replaceChildrenOptions, replaceSelectOptions;
        replaceSelectOptions = function ($select, results) {
          $select.html($('<option>'));
          return $.each(results, function () {
            let option;
            option = $('<option>').val(this.id).text(this.name);
            return $select.append(option);
          });
        };
        replaceChildrenOptions = function () {
          let $selectChildren, childrenPath;
          childrenPath = $(this).find('option:selected').data().childrenPath;
          $selectChildren = $(this).closest('form').find('.select-children' + i);
          if (childrenPath != null) {
            return $.ajax({
              url: childrenPath,
              dataType: "json",
              success: function (results) {
                return replaceSelectOptions($selectChildren, results);
              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.error("Error occurred in replaceChildrenOptions");
                console.log(`XMLHttpRequest: ${XMLHttpRequest.status}`);
                console.log(`textStatus: ${textStatus}`);
                return console.log(`errorThrown: ${errorThrown}`);
              }
            });
          } else {
            return replaceSelectOptions($selectChildren, []);
          }
        };
        return $('.select-parent' + i).on({
          'change': replaceChildrenOptions
        });
      })();
  });
  $('.card').on('cocoon:after-remove', function () {
    i--
  });
});
