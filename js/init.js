$(document).ready(function(){
    var s = {};
    let $phoneField = $('#customer_phone');
    let $labelInput = $('#descr');
    let button = $('#go');
    let maskList = $.masksSort($.masksLoad("/js/libs/mask/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
    let maskOpts = {
        inputmask: {
            definitions: {
                '#': {
                    validator: "[0-9]",
                    cardinality: 1
                }
            },
            showMaskOnHover: false,
            autoUnmask: true,
            clearMaskOnLostFocus: false
        },
        match: /[0-9]/,
        replace: '#',
        list: maskList,
        listKey: "mask",
        onMaskChange: function(maskObj, determined) {
            if (determined) {
                let hint = maskObj.name_ru;
                if (maskObj.desc_ru && maskObj.desc_ru != "") {
                    hint += " (" + maskObj.desc_en + ")";
                }
                $labelInput.html(hint);
                s = maskObj;
                setHandler(s);

            } else {
                $labelInput.html("Mask of input");
            }

        }
    };
    function setHandler (s) {
        $phoneField.on('keyup', function () {
            var $phoneField_total = $phoneField.val().length;
            //console.log($phoneField_total);

            var mask_result = s.mask.replace(/[^0-9#]/g,'').length;
            //console.log(mask_result);
            if ($phoneField_total === mask_result) {
                button.attr('disabled', false)
            } else {
                button.attr('disabled', true)
            }

        });
    }
    $phoneField.on('focus', function() {
        $phoneField.inputmasks(maskOpts);
        $('#phone_mask').change();
    });
    $phoneField.on('keyup', function() {

        console.log($phoneField.inputmasks());


    });
});
