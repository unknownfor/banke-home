/**
 * Created by jimmy-jiang on 2017/2/8.
 */
//数据反转展示
define(['app'],function(app){
    app.filter('reverse',function(){
        return function(items) {
            if(items) {
                return items.slice().reverse();
            }
        }
    });

    //将unix时间戳转换成普通时间
    app.filter('mydate',function(){
        return function(item,formatStr) {
            if(item) {
                if(!formatStr){
                    formatStr='yyyy-MM-dd';
                }
                return new Date(item).format(formatStr);
            }else{
                return null;
            }
        }
    });
});