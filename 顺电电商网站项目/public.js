// 获取随机颜色
function randomColor(){
    var r = random(0,255).toString(16);
    var g = random(0,255).toString(16);
    var b = random(0,255).toString(16);

    return "#"+createZero(r)+createZero(g)+createZero(b);
}

// 补零
function createZero(n){
    if(n.length < 2 || n < 10){
        return "0"+n
    }else{
        return n;
    }
}

// 范围随机数
function random(a,b){
    return Math.round(Math.random()*(a-b)+b);
}

// 计算两个日期之间的差值
function dateDiff(t1,t2){
    var d1 = new Date(t1);
    var d2 = t2 ? new Date(t2) : new Date();
    var time = Math.abs(d1 - d2);
    var day = parseInt(time/1000/60/60/24);
    var h = parseInt((time - day*24*60*60*1000)/1000/60/60);
    var m = parseInt((time - day*24*60*60*1000 - h*60*60*1000)/1000/60)
    var s = (time - day*24*60*60*1000 - h*60*60*1000 - m*60*1000)/1000;
    return {
        day:day,
        h:h,
        m:m,
        s:s
    }
}

// 格式化日期
function createDate(){
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth()
    var date = d.getDate()
    var day = d.getDay()
    var h = d.getHours()
    var miu = d.getMinutes()
    var s = d.getSeconds()

    return {
        year:y,
        month:createZero(m+1),
        date:createZero(date),
        day:day,
        hours:createZero(h),
        minutes:createZero(miu),
        seconds:createZero(s)
    };
}

// 获取非行内样式
function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return getComputedStyle(ele,false)[attr];
    }
}

// 阻止事件冒泡
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}

// 阻止默认事件
function stopDefault(e){
    if(e.preventDefault){
        e.preventDefault()
    }else{
        e.returnValue = false;
    }
}

// 事件委托
function EveEnt(child,callback){
	return function(eve){
		var e = eve || window.event;
		var target = e.target || e.srcElement;
		for(var i=0;i<child.length;i++){
			if(target == child[i]){
				callback.bind(target)();
			}
		}
	}
}