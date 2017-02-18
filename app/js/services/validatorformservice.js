/**
 * Created by jimmy on 16/9/11.
 */
//密码重置
define(['app'],function (app) {
    app.service('validatorFormService',[function () {
        this.validatorForm = function (index, val,tips) {
            var result={
                flag:true,
                tips:''
            };
            switch(index){
                case 0:
                    var reg = /^1\d{10}$/;
                    if (!reg.test(val)) {
                        if(!tips){
                            tips='请正确输入手机号';
                        }
                        result.tips=tips;
                        result.flag=false;
                    }
                    break;
                case 1:
                    if(!val){
                        result.flag=false;
                        if(!tips){
                            tips='请输入验证码';
                        }
                        result.tips=tips;
                    }
                    break;
                case 2:
                    if(!val) {
                        result.flag = false;
                        if(!tips){
                            tips='请输入密码';
                        }
                        result.tips=tips;
                    }
                    else{
                        if (val.length < 6 || val.length > 20) {
                            result.flag = false;
                            tips='密码长度为 6-20 位';
                            result.tips=tips;
                        }
                    }
                    break;
                case 3://中文
                    var reg=/^[\u4e00-\u9fa5]{2,5}$/;
                    if (!reg.test(val)) {
                        result.tips='请正确输入姓名或公司名称';
                        result.flag=false;
                    }
                    break;
                case 4://用户名
                    var reg = /^[0-9A-Za-z_]{4,10}$/;
                    if (!reg.test(val) || !val) {
                        result.tips='请正确输入用户名';
                        result.flag=false;
                    }
                    break;
                default:

                    break;
            }
            return result;
        };

        return {
            validatorForm: this.validatorForm
        }
    }]);
});