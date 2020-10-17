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
r021 coding IMG MES DRW
r022 coding BGM SE

```

```

```

### 構文
```
EXP({debug:console.log})

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


