$(document).ready(function(){
    let $phoneField = $('#customer_phone');
    let $labelInput = $('#descr');
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
            console.log($phoneField.length);
            if (determined) {
                let hint = maskObj.name_en;
                if (maskObj.desc_ru && maskObj.desc_ru != "") {
                    hint += " (" + maskObj.desc_en + ")";
                }
                $labelInput.html(hint);

            } else {
                $labelInput.html("Mask of input");
            }
        }
    };
    $phoneField.on('focus', function() {
        $phoneField.inputmasks(maskOpts);
        console.log($phoneField.inputmasks(maskOpts));
        $('#phone_mask').change();
    });
    $phoneField.on('keyup', function() {

        console.log($phoneField.inputmasks());

    });
});
