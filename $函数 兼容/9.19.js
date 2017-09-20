/*
* @Author: Administrator
* @Date:   2017-09-19 12:54:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 16:56:26
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

//$函数
/*
	获取指定元素
	$(select)
	$('.one')  $('#box')   $('div')

	参数说明
	    select  字符串  选择器
	1、.  classname
	2、#   id
	3、   Tagname      以字符开头[a-z]  
		正则规则    /^[a-z][a-z1-6]{0,7}$/.test
		             第一位 第二位  第二位出现的次数最少0次最多7次
*/
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