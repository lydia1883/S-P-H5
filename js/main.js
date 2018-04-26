$(function () {

    console.log($("#userName"),$("#form-all"), "userName");
    $('#form-all').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: { /*input状态样式图片*/
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        live: 'disabled', 
        fields: {
            //普通字段不为空校验
            userName: {
                message: '名称验证失败',
                validators: {
                    notEmpty: {
                        message: '名称不能为空'
                    },
                }
            },
            email: {
                message: '邮箱验证失败',
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                }
            },
            telephone: {
                message: '',
                validators: {
                    // notEmpty: {
                    //     message: '电话不能为空'
                    // },
                    regexp: {
                        regexp: /\d/,
                        message: '电话号码校验失败'
                    }
                },
                
            },
            company: {
                message: '公司验证失败',
                validators: {
                    notEmpty: {
                        message: '公司名称不能为空'
                    },
                },
                
            },
            companyType: {
                message: '',
                validators: {
                    notEmpty: {
                        message: '公司类别不能为空'
                    },
                },
                
            },
            city: {
                message: '',
                validators: {
                    notEmpty: {
                        message: '城市不能为空'
                    },
                },
            },
        },
        submitHandler: function (validator, form, submitButton) {
            alert("submit");
        }
    })
    .on('success.form.bv', function (e) { //点击提交之后
        console.log(e)
        // Prevent form submission
        e.preventDefault();
        // Get the form instance
        var $form = $(e.target);
        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');
        console.log(bv, $form.serialize(),$form.serializeArray())
        var arr = $form.serializeArray() && Array.isArray( $form.serializeArray() )  ? $form.serializeArray() : [];
        arr.forEach(function(item){
            console.log($.trim(item.value),item,"trims")
            item.value = $.trim(item.value);
        });

        var serializedForm = $.param(arr);
        console.log(bv,serializedForm);
        // Use Ajax to submit form data 提交至form标签中的action，result自定义
        // $("#form-all").bootstrapValidator('resetForm', true);
        $.post($form.attr('action'), serializedForm , function (result) {
            $("#form-all").bootstrapValidator('resetForm', true);
        });
    });


    $(".submitBtn").click(function(){
        $("#form-all").bootstrapValidator('validate');
        if ($("#form-all").data('bootstrapValidator').isValid()) {

            var userName = $('#userName').val();
            var Email = $('#Email').val();
            var telephone = $('#telephone').val();
            var company = $('#company').val();
            var companyType = $('#CompanyType').val();
            var city = $('#city').val();
            console.log(userName,Email,telephone,company,companyType,city)
            console.log(2)
        }else{
            alert("验证失败,请重新填写");
            return;
        }
        // console.log( $("#form-all").bootstrapValidator('validate'), 1 )
        console.log(1);
    });


});
