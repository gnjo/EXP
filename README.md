# EXP
例外が少なくコアの小さなエンジン。

```
r001 coded lex lexjump lexsize
r002 coded run stop next isend
r003 coded callfunc
r005 coded EXP entry function
r010 coded IFJ MRK KEY WAI POL KEC EVL
r011 coded test hard jump loop
r012 coded MIM
r013 coded CAS CLR CAP
r014 coded valuable
r020 coded ctx offctx 
r021 coded IMG
r022 coded BGM SE
r023 coded COR FON roleColor
r024 coded copyImage IMG
r025 coded DRW setAnimCount setTimeCount
r026 coded BGM SE bugfix
r027 coded MES makepen
r028 coded QUE
r029 coded DRW issue DRW //no param, ctx.clearRect
//
r030 coding EXP on three.js
//
r031 coded issue makepen lineh default 1.0
r040 coding much over QUE
issue font loaded check
r041 coding LST TBL

```

```
LST.
タイトル左文字幅を指す｜タイトル中央｜タイトル右
,
酒場｜酒場です
宿屋｜宿屋です。
街外れ｜街外れ。
,
1 //cursor
,0,0  //ox,oy//基本は中央表示
END
//基本色の0.5がオフカラー。
TBL.
//同じ構文だが、上下左右に｜｜を移動する。


```

### 構文
```
EXP({debug:console.log})
//EXP({canvas:canvas}) //先にcanvasを指定するとそのcanvasに描く。
EXP`640x320
MIM >>>,IFJ
MIM <<<,MRK
MIM ***,WAI
/////
<<< #xyz //mark
<<< #bbbb
KEY //keywait ^v<>AB
//keyjump
>>> #aaa,{$KEY==='^'} //return value -> $CMD
>>> #aaa,{$KEY==='v'}
>>> #aaa,{$KEY==='<'}
>>> #aaa,{$KEY==='>'}
>>> #xyz,{$KEY==='A'}
>>> #xyz,{$KEY==='B'}
*** 100 //wait 100ms
MES. //multiline
aaaaaa
bbbbbb
cc
...
dddddd
eee
END //multiline end
>>> #xyz,1 //loop
>>> #xyz //same
`
```

```
EXP`640x320
MIM >>>,IFJ
MIM <<<,MRK
MIM ***,WAI
/////

DUN.

END
/////
<<< #dung

KEY
MOV {$KEY}
>>> #camp,{$KEY==='B'}
>>> {'#'+$MOV.g} //#ア
>>> {'#'+$MOV.addr} //#F00X00Y00.N
>>> #dung
/////

<<< #camp


>>> #dung,{#KEY==='B'}
>>> #camp
`

```

### note
```
//できることを最小にした三次元ダンジョン

async function caller(ev){
 //ev.type ev.addr ev.info ev.ctx ev.order ev.obj
 if(ev.type==='init')return await init(ev)
 if(ev.type==='before')return await before(ev) //walk before
 if(ev.type==='after')return await after(ev) //walk after
}

dung
.set({canvas:document.querySelector('canvas'),keycall:keycall })
.add(fr1)
.add(fr2)
.add(fr3)
.add(fr4)
.run(caller)

```


```
//cashのデータ仕様

abcd.csv
//aaa, ... not read
//aaa
key,name,desc,other1,other2,other3
key1,na1,de1,ot1,ot2,ot3
...
...


CAS.
abcd.csv
END

var o=EXP()
let obj=o.cash['abcd.csv'];

let r=obj['key1']
r.key,r.name,r.desc,r.other1,r.other2,r.other3

```





