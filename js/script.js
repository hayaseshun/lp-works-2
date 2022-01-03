$(function() {
  //drawer-js
  $(document).ready(function() {
      $('.drawer').drawer()
  })
    // #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position - $( '#js-header' ).outerHeight()
  },
    speed
  );
  return false;
});
  //wow
  new WOW().init()

    //contact-form
    let $form = $( '#js-form' )  //ここは独自に指定
    $form.submit(function(e) { 
      $.ajax({ 
        url: $form.attr('action'), 
        data: $form.serialize(), 
        type: "POST", 
        dataType: "xml", 
        statusCode: { 
          0: function() { 
            //送信に成功したときの処理 
            //ここは独自に指定
            $form.slideUp()                 
            $('#js-success').slideDown()
          }, 
          200: function() { 
            //送信に失敗したときの処理 
            //ここは独自に指定
            $form.slideUp()
            $('#js-error').slideDown()
          }
        } 
      });
      return false; 
    }); 


    let $submit = $('#js-submit')
    $('#js-form input,#js-form textarea' ).on('change', function(){
      if(
        $( '#js-form input[type="text"]').val() !=="" &&
        $( '#js-form input[type="email"]').val() !=="" &&
        $( '#js-form input[name="entry.928094072"]').prop('checked') === true
      ) {
        $submit.prop('disable',false)
        $submit.addClass( '-active')
      }  else {
        $submit.prop('disable',true)
        $submit.removeClass( '-active')
      }
    });});