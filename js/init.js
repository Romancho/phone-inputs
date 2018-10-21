$(document).ready(function(){
    var maskList = $.masksSort($.masksLoad("/js/libs/mask/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
    var maskOpts = {
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
                var hint = maskObj.name_en;
                if (maskObj.desc_en && maskObj.desc_en != "") {
                    hint += " (" + maskObj.desc_en + ")";
                }
                $("#descr").html(hint);
            } else {
                $("#descr").html("Mask of input");
            }
        }
    };

    $('#phone_mask').change(function() {
        if ($('#phone_mask').is(':checked')) {
            $('#customer_phone').inputmask("remove");
            $('#customer_phone').inputmasks(maskOpts);
        } else {
            $('#customer_phone').inputmasks("remove");
            $('#customer_phone').inputmask("+#{*}", maskOpts.inputmask);
            $("#descr").html("Mask of input");
        }
    });

    $('#phone_mask').change();
});
