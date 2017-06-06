/**
 * Created by Administrator on 2017/2/26 0026.
 */
function getStyle(obj,sName){
    return (obj.currentStyle || getComputedStyle(obj,false))[sName]
}
function move(obj,json,options){
    var options=options || {};
    var time=options.duration || 1000;//总时间
    var start={};  //开始位置
    var dis={};   //总距离

    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        dis[name]=json[name]-start[name];
    }

    var count=Math.ceil(time/30);  //总次数
    var n=0;     //统计次数

    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        n++;

        for(var name in json){
            if(name=='opacity'){
                obj.style[name]=start[name]+n*dis[name]/count;
            }else{
                obj.style[name]=start[name]+n*dis[name]/count+'px';
            }
        }

        if(n==count){
            clearInterval(obj.timer);
            options.complete && options.complete();
        }
    },30);
}
