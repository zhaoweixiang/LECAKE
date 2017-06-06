/**
 * Created by Administrator on 2017/2/26 0026.
 */
window.onload=function(){
    var oBox=document.getElementById('box');
    var oUl=oBox.getElementsByTagName('ul')[0];
    var oOl=oBox.getElementsByTagName('ol')[0];
    var aBtn=oOl.getElementsByTagName('li');
    var aDiv=oUl.getElementsByTagName('li');
    var n=0;
    var timer=null;
    for(var i=0; i<aBtn.length; i++){
        aBtn[i].index=i;
        aBtn[i].onmouseover=function(){
            n=this.index;
            tab();
        }
    }
    function toR(){
        n++;
        if(n==aBtn.length){
            n=0;
        }
        tab();
    }
    clearInterval(timer);
    timer=setInterval(toR,3000);
    function tab(){
        for(var i=0; i<aBtn.length; i++){
            aBtn[i].className='';
            aDiv[i].className='';
        }
        aBtn[n].className='on';
        aDiv[n].className='on';
    }
    oBox.onmouseover=function(){
        clearInterval(timer);
    };
    oBox.onmouseout=function(){
        clearInterval(timer);
        timer=setInterval(toR,3000);
    };

};