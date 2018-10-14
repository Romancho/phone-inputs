$(document).ready(function(){
 /* var phone_input = $('#id_phone'),
      phone_attr = $('#authForm [type="submit"]');


  phone_input.keydown(function(){
      var phone_val = $(this).val();

      if((phone_val === '7') || (phone_val === '8')) {
          console.log('78' + phone_val);
          maskInit(phone_input);
      } else {
          console.log('Un'+ phone_val);
      }
    var $val = phone_input.val(),
        $val = $val.replace(/[^0-9]/gi, ''),
        num = $val.match(/[\d\.]+/g);
        if (num != null) {
            var number = num.toString().length;
            if(number === 11) {
                phone_attr.attr('disabled', false);
            } else {
                phone_attr.attr('disabled', true);
            }
        } 
  });*/

    var maskList = $.masksSort($.masksLoad("/js/mask/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
    var maskOpts = {
        inputmask: {
            definitions: {
                '#': {
                    validator: "[0-9]",
                    cardinality: 1
                }
            },
            //clearIncomplete: true,
            showMaskOnHover: false,
            autoUnmask: true
        },
        match: /[0-9]/,
        replace: '#',
        list: maskList,
        listKey: "mask",
        onMaskChange: function(maskObj, completed) {
            if (completed) {
                var hint = maskObj.name_ru;
                if (maskObj.desc_ru && maskObj.desc_ru != "") {
                    hint += " (" + maskObj.desc_ru + ")";
                }
                $("#descr").html(hint);
            } else {
                $("#descr").html("Маска ввода");
            }
            $(this).attr("placeholder", $(this).inputmask("getemptymask"));
        }
    };

    $('#phone_mask').change(function() {
        if ($('#phone_mask').is(':checked')) {
            $('#customer_phone').inputmasks(maskOpts);
        } else {
            $('#customer_phone').inputmask("+[####################]", maskOpts.inputmask)
                .attr("placeholder", $('#customer_phone').inputmask("getemptymask"));
            $("#descr").html("Маска ввода");
        }
    });

    $('#phone_mask').change();
});
function maskInit(phone_input) {
    phone_input.mask("+9 (999) 999-9999");
    phone_input.on("blur", function() {
        var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );
        if( last.length == 5 ) {
            var move = $(this).val().substr( $(this).val().indexOf("-") + 1, 1 );
            var lastfour = last.substr(1,4);
            var first = $(this).val().substr( 0, 9 );
            $(this).val( first + move + '-' + lastfour );
        }
    });
}