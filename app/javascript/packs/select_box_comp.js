$(function () {
  return (function () {
    //選択された親カテゴリのオプションから、data - children - pathの値を読み取る
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
      //子カテゴリのセレクトボックスを取得する
      let $selectChildren, childrenPath;
      childrenPath = $(this).find('option:selected').data().childrenPath;
      $selectChildren = $(this).closest('form').find('.select-children');
      if (childrenPath != null) {
        // childrenPathが存在する = 親カテゴリが選択されている場合、
        // ajaxでサーバーに子カテゴリの一覧を問い合わせる
        return $.ajax({
          url: childrenPath,
          dataType: "json",
          success: function (results) {
            //サーバーから受け取った子カテゴリの一覧でセレクトボックスを置き換える
            return replaceSelectOptions($selectChildren, results);
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            // 何らかのエラーが発生した場合
            console.error("Error occurred in replaceChildrenOptions");
            console.log(`XMLHttpRequest: ${XMLHttpRequest.status}`);
            console.log(`textStatus: ${textStatus}`);
            return console.log(`errorThrown: ${errorThrown}`);
          }
        });
      } else {
        // 親カテゴリが未選択だったので、子カテゴリの選択肢をクリアする
        return replaceSelectOptions($selectChildren, []);
      }
    };
    return $('.select-parent').on({
      'change': replaceChildrenOptions
    });
  })();
});
