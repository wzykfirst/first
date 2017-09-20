/*
* @Author: Administrator
* @Date:   2017-09-18 18:30:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 16:34:13
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
	let left=document.getElementsByClassName('banner-left')[0];
	let lis=left.getElementsByTagName('li');
	let item=document.getElementsByClassName('aaa');
	let banner=document.getElementsByClassName('banner-img')[0];
	let bannerda=$('.banner')[0];
	let img=banner.getElementsByTagName('li');
	let yuan=document.getElementsByClassName('yuan')[0];
	let yuan1=yuan.getElementsByClassName('yuan1');
	let b=document.getElementsByClassName('banner')[0];
	let num=0;
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
	function move(){
		num++;
		if(num==img.length){
			num=0;
		}
		for(let i=0;i<img.length;i++){
			animate(img[i],{opacity:0});
			// img[i].style.display='none';
			yuan1[i].style.background='#A2A2A2';
		}
		animate(img[num],{opacity:1});
		// img[num].style.display='block';
		yuan1[num].style.background='#f1f1f1';
	}
	///////////////////////////////////////////
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}
	////////////////////////////////////////////
	for(let i=0;i<yuan1.length;i++){
		yuan1[i].onmouseover=function(){
			for(let i=0;i<img.length;i++){
				animate(img[i],{opacity:0});
				// img[i].style.display='none';
				yuan1[i].style.background='#A2A2A2';
			}
			animate(img[i],{opacity:1});
			// img[i].style.display='block';
			yuan1[i].style.background='#f1f1f1';
			num=i;
		}
	}
	// let now=0;
	// for(var i=0;i<yuan1.length;i++){
	// 	yuan1[i].index=i;
	// 	yuan1[i].onmouseover=function(){
	// 		img[now].style.display='none';
	// 		img[this.index].style.display='block';
	// 		now=this.index;
	// 	}
	// }
	// 闭包函数
	// let now=0;
	// for(var i=0;i<yuan1.length;i++){
	// 	yuan1[i].index=i;
	// 	yuan1[i].onmouseover=(function(i){
	// 		return function(){
	// 			img[now].style.display='none';
	// 			img[i].style.display='block';
	// 			now=i;
	// 		}
	// 	})(i);
	// }
}