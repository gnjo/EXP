
var cashloading=1,cash={}

$KEC=KEC()
function KEY(map){return new Promise(sol=>{
let dom=document.documentElement,del=()=>dom.onkeydown=void 0;
let map=inverseObject($KEC)
dom.onkeydown=function(ev){ 
 if(map[ev.which]) del(),sol(map[ev.which])
}
function inverseObject (obj, keyIsNumber) {
 return Object.keys(obj).reduceRight(function (ret, k) {
  return (ret[obj[k]] = keyIsNumber ? parseInt(k, 10) : k, ret);
 }, {});
}
})}

//$KEC=KEC(38,40,37,39,13,32)
function KEC(...ary){
//var o=EXP()
ary=ary||[87,83,65,68,69,81]
let map={}
map['^']=ary[0]||87 //w
map['v']=ary[1]||83 //s
map['<']=ary[2]||65 //a
map['>']=ary[3]||68 //d
map['A']=ary[4]||69 //e
map['B']=ary[5]||81 //q
//o.debug('keyconfig',ary,map)//,map,inverseObject(map))
return map
/*
ArrowUp:38
ArrowDown:40
ArrowLeft:37
ArrowRight:39
KeyX:88
KeyZ:90
KeyW:87
KeyA:65
KeyS:83
KeyD:68
KeyJ:74
KeyK:75
KeyE:69
KeyQ:81
KeyI:73
KeyU:85
KeyO:79
Space:32
Enter:13
*/
}
//<<<r012


function CAS(str){
//ZAP_CASH={}
//var o=EXP(),cash=o.cash,
var time=performance.now()
let ma_v =/\.amr$|\.awb$|\.m4a$|\.mp4$|\.mp3$|\.wma$|\.aac$|\.mid$|\.midi$|\.ogg$|\.oga$|\.wav$|\.flac$/i
let ma_i =/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/i
let ma_f =/\.woff$|\.otf$|\.ttf$|\.eot$/i //fontload
return Promise.all(str.split('\n').map(d=>get(d) ))
 .then(d=>{ /*o.debug('cash time:'+(performance.now()-time) ) ;*/ cashloading=0   ;return d})
;
function get(url){return new Promise((sol)=>{
 //fontload
 if(ma_f.test(url))return sol(fontload(url))
 //fontload
 let obj,f=()=>{cash[url]=cash[url.split('/').pop()]=obj,sol(url)}
 if(ma_v.test(url)){
  obj=document.createElement('video')
  obj.onloadedmetadata=f/////////
 }else{
  obj=new Image()
  obj.onload =f
 }
 if(!obj)return /*o.debug('NG> '+url),*/sol(url)
 obj.onerror=()=>{/*o.debug('NG> '+url);*/sol(url) }
 obj.crossOrigin='anonymous'////
 obj.src=url ////
})}
;
function fontload(url){return new Promise(sol=>{
 let head=document.querySelector('head')
 let linktype=url.split('.').pop().toLowerCase() //
 let map={
  'otf':'opentype'
  ,'ttf':'truetype'
  ,'woff':'woff'
  ,'eot':'eot'  
 }
 let type=map[linktype]||'truetype'
 
 let fn={}
 fn.i3=(d)=>{
  if(typeof d !=='string') return d
  var el=document.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 }
 
let link=`<link rel="preload" href="${url}" as="font" type="font/${linktype}" crossorigin="anonymous">`
let style=`<style>@font-face {font-family:exp; src: url('${url}') format('${type}');}</style>`
let ell=fn.i3(link)
let els=fn.i3(style)
ell.onload=()=>{ 
 return sol(url)
}
ell.onerror=()=>{sol(url) }
 document.head.appendChild(ell) //
 document.head.appendChild(els)
 
})} 
 
}


function copyImage(img,color,operation,alpha) {
 let is={}
 is.string = function(obj){return toString.call(obj) === '[object String]'}

 const canvas = document.createElement('canvas')
 const ctx = canvas.getContext('2d');
 canvas.width = img.width
 canvas.height = img.height;
 if(color){
   alpha=alpha||1
   operation=operation||'saturation'
   ctx.globalAlpha=alpha
  if(is.string(color)){
   //color
   ctx.fillStyle = color //makecolor(color,ctx);///r030
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   ctx.globalCompositeOperation = operation
  }else{
   //image
   ctx.drawImage(color,0,0,canvas.width,canvas.height)
   ctx.globalCompositeOperation = operation
  }
  ctx.globalAlpha=1
 }
 ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
 return canvas;
}


CAS(`
https://gnjo.github.io/mock3d/bg/blur1.jpg
https://gnjo.github.io/mock3d/bg/metal1.jpg
https://gnjo.github.io/mock3d/bg/film1.jpg
https://gnjo.github.io/mock3d/bg/vintage1.jpg
https://gnjo.github.io/mock3d/bg/laby2.jpg

https://gnjo.github.io/mock3d/bg/bar.jpg
https://gnjo.github.io/mock3d/bg/castle.jpg
https://gnjo.github.io/mock3d/bg/city1.jpg
https://gnjo.github.io/mock3d/bg/city2.jpg
https://gnjo.github.io/mock3d/bg/inn.jpg
https://gnjo.github.io/mock3d/bg/insp1.jpg
https://gnjo.github.io/mock3d/bg/insp2.jpg
https://gnjo.github.io/mock3d/bg/insp3.jpg
https://gnjo.github.io/mock3d/bg/insp4.jpg
https://gnjo.github.io/mock3d/bg/insp5.jpg
https://gnjo.github.io/mock3d/bg/queen.jpg
https://gnjo.github.io/mock3d/bg/shop.jpg
https://gnjo.github.io/mock3d/bg/temple.jpg
https://gnjo.github.io/mock3d/bg/treasure.jpg
https://gnjo.github.io/mock3d/se/crystal1.ogg
https://gnjo.github.io/mock3d/se/crystal2.ogg
https://gnjo.github.io/mock3d/se/damage1.ogg
https://gnjo.github.io/mock3d/se/open1.ogg
https://gnjo.github.io/mock3d/se/slash1.ogg
https://gnjo.github.io/mock3d/mons/ajin1-min.png
https://gnjo.github.io/mock3d/mons/ajin1-min.png
https://gnjo.github.io/mock3d/mons/ajin2-min.png
https://gnjo.github.io/mock3d/mons/ajin3-min.png
https://gnjo.github.io/mock3d/mons/ajin4-min.png
https://gnjo.github.io/mock3d/mons/ajin5-min.png
https://gnjo.github.io/mock3d/mons/ajin6-min.png
https://gnjo.github.io/mock3d/mons/ajin7-min.png
https://gnjo.github.io/mock3d/mons/ajin8-min.png
https://gnjo.github.io/mock3d/mons/ajin9-min.png
https://gnjo.github.io/mock3d/mons/ajin10-min.png
https://gnjo.github.io/mock3d/mons/ajin11-min.png
https://gnjo.github.io/mock3d/mons/ajin12-min.png
https://gnjo.github.io/mock3d/mons/ajin13-min.png
https://gnjo.github.io/mock3d/mons/ajin14-min.png
https://gnjo.github.io/mock3d/mons/ajin15-min.png
https://gnjo.github.io/mock3d/mons/ajin16-min.png
https://gnjo.github.io/mock3d/mons/ajin17-min.png
https://gnjo.github.io/mock3d/mons/boss1-min.png
https://gnjo.github.io/mock3d/mons/boss2-min.png
https://gnjo.github.io/mock3d/mons/boss3-min.png
https://gnjo.github.io/mock3d/mons/boss4-min.png
https://gnjo.github.io/mock3d/mons/boss5-min.png
https://gnjo.github.io/mock3d/mons/boss6-min.png
https://gnjo.github.io/mock3d/mons/man1-min.png
https://gnjo.github.io/mock3d/mons/man2-min.png
https://gnjo.github.io/mock3d/mons/man3-min.png
https://gnjo.github.io/mock3d/mons/man4-min.png
https://gnjo.github.io/mock3d/mons/man5-min.png
https://gnjo.github.io/mock3d/mons/man6-min.png
https://gnjo.github.io/mock3d/mons/man7-min.png
https://gnjo.github.io/mock3d/mons/man8-min.png
https://gnjo.github.io/mock3d/mons/man9-min.png
https://gnjo.github.io/mock3d/mons/man10-min.png
https://gnjo.github.io/mock3d/mons/mob1-min.png
https://gnjo.github.io/mock3d/mons/mob2-min.png
https://gnjo.github.io/mock3d/mons/mob3-min.png
https://gnjo.github.io/mock3d/mons/mob4-min.png
https://gnjo.github.io/mock3d/mons/mob5-min.png
https://gnjo.github.io/mock3d/mons/mob6-min.png
https://gnjo.github.io/mock3d/mons/mob7-min.png
https://gnjo.github.io/mock3d/mons/mob8-min.png
https://gnjo.github.io/mock3d/mons/mob9-min.png
https://gnjo.github.io/mock3d/mons/mob10-min.png
https://gnjo.github.io/mock3d/mons/mob11-min.png
https://gnjo.github.io/mock3d/mons/mob12-min.png
https://gnjo.github.io/mock3d/mons/mob13-min.png
https://gnjo.github.io/mock3d/mons/mob14-min.png
https://gnjo.github.io/mock3d/mons/mob15-min.png
https://gnjo.github.io/mock3d/mons/mob16-min.png
https://gnjo.github.io/mock3d/mons/mob17-min.png
https://gnjo.github.io/mock3d/mons/mob18-min.png
https://gnjo.github.io/mock3d/mons/mob19-min.png
https://gnjo.github.io/mock3d/mons/woman1-min.png
https://gnjo.github.io/mock3d/mons/woman2-min.png
https://gnjo.github.io/mock3d/mons/woman3-min.png
https://gnjo.github.io/mock3d/mons/woman4-min.png
https://gnjo.github.io/mock3d/mons/woman5-min.png

`)
;
