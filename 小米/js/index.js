/*
* @Author: Administrator
* @Date:   2017-09-18 17:38:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 17:07:51
*/
function getClass(classname,ranger){      //ranger   对象
	ranger = ranger ? ranger : document;
	if(document.getElementsByClassName){
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all = ranger.getElementsByTagName('*');
		console.log(all);
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function checkClass(className,classname){
	var arr=className.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}
function $(select){
	var first = select.charAt(0);
	if(first == '.'){
		return getClass(select.substring(1));
	}else if(first == '#'){
		return document.getElementById(select.substring(1));
	}else if (/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return document.getElementsByTagName(select);
	}
}
window.onload=function(){
	let aside=document.getElementsByTagName('aside')[0];
	let left=document.getElementsByClassName('banner-left')[0];
	let right=document.getElementsByClassName('banner-right')[0];
	let lis=aside.getElementsByTagName('li');
	let item=document.getElementsByClassName('aaa');
	let bannerda=$('.banner')[0];
	let banner=$('.banner-img')[0];
	let li=banner.getElementsByTagName('li');
	let dian=$('.dian')[0];
	let dians=dian.getElementsByTagName('a');
	let liw=parseInt(window.getComputedStyle(banner,null).width);
	let num=0;
	let now=0;
	let next=0;
	////////////////////////////////////////
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}
	/////////////////////////////////////////
	let t;
	t=setInterval(move,3000);
	////////////////////////////////////////
	bannerda.onmouseover=function(){
		clearInterval(t);
	}
	bannerda.onmouseout=function(){
		t=setInterval(move,3000);
	}
	////////////////////////////////////////
	let flag=true;
	left.onclick=function(){
		if(!flag){
			return;
		}
		movel();
		flag=false;
	}
	right.onclick=function(){
		if(!flag){
			return;
		}
		move();
		flag=false;
	}
	/////////////////////////////////////////
	// function move(){
	// 	num++;
	// 	if(num==li.length){
	// 		num=0;
	// 	}
	// 	for(let i=0;i<li.length;i++){
	// 		animate(li[i],{opacity:0});
	// 		// li[i].style.display='none';
	// 		dians[i].style.background='#dddddd';
	// 	}
	// 	animate(li[num],{opacity:1});
	// 	// li[num].style.display='block';
	// 	dians[num].style.background='#a10000';
	// }
	// function movel(){
	// 	num--;
	// 	if(num<0){
	// 		num=li.length-1;
	// 	}
	// 	for(let i=li.length-1;i>=0;i--){
	// 		animate(li[i],{opacity:0});
	// 		// li[i].style.display='none';
	// 		dians[i].style.background='#dddddd';
	// 	}
	// 	animate(li[num],{opacity:1});
	// 	// li[num].style.display='block';
	// 	dians[num].style.background='#a10000';
	// }
	///////////////////////////////////////////
	function move(){
		next++;
		if(next==li.length){
			next=0;
		}
		dians[next].style.background='#a10000';
		dians[now].style.background='#dddddd';
		li[next].style.left=`${liw}px`;
		animate(li[now],{left:-liw});
		animate(li[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
		function movel(){
		next--;
		if(next<0){
			next=li.length-1;
		}
		dians[next].style.background='#a10000';
		dians[now].style.background='#dddddd';
		li[next].style.left=`${-liw}px`;
		animate(li[now],{left:liw});
		animate(li[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
	//////////////////////////////////////////
	// for(let i=0;i<dians.length;i++){
	// 	dians[i].onmouseover=function(){
	// 		for(let i=0;i<li.length;i++){
	// 			animate(li[i],{opacity:0});
	// 			// li[i].style.display='none';
	// 			dians[i].style.background='#dddddd';
	// 		}
	// 		animate(li[i],{opacity:1});
	// 		// li[i].style.display='block';
	// 		dians[i].style.background='#a10000';
	// 		num=i;
	// 	}
	// }
	for(let i=0;i<dians.length;i++){
		dians[i].onmouseover=function(){
			if(now==i){return;}
		dians[i].style.background='#a10000';
		dians[now].style.background='#dddddd';
		li[i].style.left=`${liw}px`;
		animate(li[now],{left:-liw});
		animate(li[i],{left:0});
		now=next=i;
		}
	}
}