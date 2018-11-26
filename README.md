# Vue Template

## Index
1. [Overview](#overview)
1. [Features](#features)
1. [Installation](#installation)
1. [Required](#required)
1. [Procedure](#procedure)
    1. [Windows](#windows)
    1. [Others (MacOS, Linux, etc.)](#others-macos-linux-etc)
1. [Directory Structure](#directory-structure)
    1. [src](#src)
1. [Coding Style Guide](#coding-style-guide)
    1. [Overview](#overview)
    1. [eslintrc.js](#eslintrc.js)
    1. [Rules](#rules)


## Overview
&ensp;ここにシステムの概要を記述します。

## Features
&ensp;ここにシステムの機能一覧を記述します。

## Installation

### Required
&ensp;ここにこのシステムを動かすのに必要なモジュール一覧を記述します。
- Node.js >= 11.1.0
- npm >= 6.4.1

### Procedure
&ensp;ここにインストール手順を記述します。

#### Windows
1. hoge
1. fuga
1. hogehoge
1. fugafuga

#### Others (MacOS, Linux, etc.)
1. hoge
1. fuga
1. hogehoge
1. fugafuga

## Directory Structure

### src

```
├── App.vue .................... 全 Vue ファイルのまとめ役。  
├── main.js .................... アプリを実行するためのメインの JS ファイル。  
├── routes.js .................. ルーティング設定ファイル。  
├── assets ..................... アプリで使用する静的ファイル一覧。  
│  ├── fonts ................... フォントファイル一覧。  
│  │    └── TestFont.ttf  ...... テスト用フォントファイル。  
│  ├── images .................. 画像ファイル一覧。  
│  │    └── logo.png ........... テスト用ロゴファイル。  
│  └── styles .................. スタイルシート一覧。  
│       ├── _base.scss ......... class, id 関係なく、タグに直接スタイルを記述する場合はここに書く。  
│       ├── _mixin.scss ........ Sass の mixin を作成する場合はここに書く。  
│       ├── _fonts.scss ........ 独自フォントを設定する場合はここに書く。  
│       ├── _vendors.scss ...... ベンダー CSS をインポートする場合ここに書く。  
│       ├── style.scss ......... メインの SCSS ファイル。他の SCSS ファイルがまとめてインポートされている。  
│       └── variables .......... Sass の変数を作成する場合はここに書く。  
│           ├── _colors.scss ... 色の変数を作成する場合はここに書く。  
│           ├── _fonts.scss .... フォントの変数を作成する場合はここに書く。  
│           └── index.scss ..... 全ての変数用パーシャルファイルをインポートされている。  
├── components ................. コンポーネントファイル一覧。更に Header 用のディレクトリとしてフォルダを分けても構いません。  
│    ├── CommonHeader.vue ...... 共通ヘッダーコンポーネントファイル。  
│    └── CommonFooter.vue ...... 共通フッターコンポーネントファイル。  
├── pages ...................... ページファイル一覧。  
│    └── HelloWorld.vue ........ テスト用ページファイル。  
├── store ...................... Vuex の Store 用ファイル一覧。  
│    ├── index.js .............. Store 用ファイルをまとめたファイル。  
│    ├── mods .................. Store 用モジュールファイル一覧。例えばカート処理をまとめた cart.js などと分ける。  
│    │    └── default.js ....... テスト用モジュールファイル。  
│    └── mutation-types.js ..... ミューテーションタイプを定数としてまとめたファイル。  
├── consts ..................... 定数ファイル一覧。  
│    └── index.js .............. アプリで使用する定数を作成する場合はここに書く。更に API で使用する定数用に api.js などと分けても構いません。  
├── utils ...................... いくつかのファイルで使用する関数をまとめたファイル一覧。  
│    └── apis.js ............... API に関する関数を作成する場合はここに書く。他にも成功アラート表示や失敗アラート表示をまとめた alerts.js などと分けても構いません。  
└── vendors .................... ベンダーファイル一覧。  
```

## Coding Style Guide

### Overview
&ensp;ベースは [ESLint]eslies(https://eslint.org/docs/rules/) に準ずるものとし、ここにはカスタマイズしたルールを記載するものとする。

### eslintrc.js
- [ここ](./.eslintrc.js) からダウンロード

### Rules

#### 行末にセミコロンを付ける
&ensp;行末にはセミコロンを付けてください。

*OK*
```JS
console.log('Hello World');
```

*NG*
```JS
console.log('Hello World')
```
##### Ref to [semi](https://eslint.org/docs/rules/semi)

#### セミコロンの後には半角スペースを入れる
&ensp;セミコロンの後には半角スペースを入れてください。

*OK*
```JS
var foo;
var foo; var bar;
throw new Error("error");
while (a) { break; }
for (i = 0; i < 10; i++) {}
for (;;) {}
if (true) {;}
;foo();
```

*NG*
```JS
var foo ;
var foo;var bar;
throw new Error("error") ;
while (a) { break ; }
for (i = 0 ; i < 10 ; i++) {}
for (i = 0;i < 10;i++) {}
```
##### Ref to [semi-spacing](https://eslint.org/docs/rules/semi-spacing)

---

#### セミコロンは必ず行末に付ける
&ensp;セミコロンは行頭につけずに、行末に付けてください。

*OK*
```JS
foo();
[1, 2, 3].forEach(bar)

for (
    var i = 0;
    i < 10;
    ++i
) {
    foo()
}
```

*NG*
```JS
foo()
;[1, 2, 3].forEach(bar)

for (
    var i = 0
    ; i < 10
    ; ++i
) {
    foo()
}
```
##### Ref to [semi-style](https://eslint.org/docs/rules/semi-style)

---

#### 関数のパーレンの前は半角スペースを入れない
&ensp;関数のパーレンの前に半角スペースを入れないでください。

*OK*
```JS
function foo() {
    // ...
}

var bar = function() {
    // ...
};

var bar = function foo() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};

var foo = async() => 1
```

*NG*
```JS
function foo () {
    // ...
}

var bar = function () {
    // ...
};

var bar = function foo () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};

var foo = async () => 1
```
##### Ref to [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)

---

#### 不要なセミコロンは付けない
&ensp;二重セミコロンなど書かないでください。

*OK*
```JS
var x = 5;

var foo = function() {
    // code
};
```

*NG*
```JS
var x = 5;;

function foo() {
    // code
};
```
##### Ref to [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)

---

#### 想定しない複数行のコードを書かない
&ensp;セミコロンのつけ忘れなどで構文エラーになるものは書かないでください。

*OK*
```JS
var foo = bar;
(1 || 2).baz();

var foo = bar
;(1 || 2).baz()

var hello = 'world';
[1, 2, 3].forEach(addNumber);

var hello = 'world'
void [1, 2, 3].forEach(addNumber);

let x = function() {};
`hello`

let tag = function() {}
tag `hello`
```

*NG*
```JS
var foo = bar
(1 || 2).baz();

var hello = 'world'
[1, 2, 3].forEach(addNumber);

let x = function() {}
`hello`

let x = function() {}
x
`hello`

let x = foo
/regex/g.test(bar)
```
##### Ref to [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)

---

#### 実行されないコードを書かない
&ensp;実行されないコードを書かないでください。ただし、 `function` などは問題ありません。

*OK*
```JS
function foo() {
    return bar();
    function bar() {
        return 1;
    }
}

function bar() {
    return x;
    var x;
}

switch (foo) {
    case 1:
        break;
        var x;
}
```

*NG*
```JS
function foo() {
    return true;
    console.log("done");
}

function bar() {
    throw new Error("Oops!");
    console.log("done");
}

while(value) {
    break;
    console.log("done");
}

throw new Error("Oops!");
console.log("done");

function baz() {
    if (Math.random() < 0.5) {
        return;
    } else {
        throw new Error();
    }
    console.log("done");
}

for (;;) {}
console.log("done");
```
##### Ref to [no-unreachable](https://eslint.org/docs/rules/no-unreachable)

---

#### var を使わない
&ensp;`var` を使わずに `const` か `let` を使ってください。

*OK*
```JS
let x = "y";
const CONFIG = {};
```

*NG*
```JS
var x = "y";
var CONFIG = {};
```
##### Ref to [no-var](https://eslint.org/docs/rules/no-var)

---

#### ${variable} はバッククォート内に書く
&ensp;`${variable}` はバッククォート内に書いてください。

*OK*
```JS
`Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;

templateFunction`Hello ${name}`;
```

*NG*
```JS
"Hello ${name}!";
'Hello ${name}!';
"Time: ${12 * 60 * 60 * 1000}";
```
##### Ref to [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)

---

#### JSDoc を必ず書く
&ensp;関数、メソッド、クラスを作成した場合は必ず JSDoc を書いてください。

*OK*
```JS
/**
 * It returns 10
 */
function foo() {
    return 10;
}

/**
 * It returns test + 10
 * @params {int} test - some number
 * @returns {int} sum of test and 10
 */
var foo = (test) => {
    return test + 10;
}

/**
 * It returns 10
 */
var foo = () => {
    return 10;
}

/**
 * It returns 10
 */
var foo = function() {
    return 10;
}

var array = [1,2,3];
array.filter(function(item) {
    return item > 2;
});

/**
 * A class that can return the number 10
 */
class Foo {
    /**
    * It returns 10
    */
    bar() {
        return 10;
    }
}

/**
 * It returns 10
 */
var foo = function() {
    return 10;
};

var foo = {
    /**
    * It returns 10
    */
    bar: function() {
        return 10;
    },

    /**
    * It returns 10
    */
    baz() {
        return 10;
    }
};

setTimeout(() => {}, 10); // since it's an anonymous arrow function
```

*NG*
```JS
function foo() {
    return 10;
}

var foo = () => {
    return 10;
};

class Foo {
    bar() {
        return 10;
    }
}

var foo = function() {
    return 10;
};

var foo = {
    bar: function() {
        return 10;
    },

    baz() {
        return 10;
    }
};
```
##### Ref to [require-jsdoc](https://eslint.org/docs/rules/require-jsdoc)

---

#### JSDoc の書き方を統一する
&ensp;JSDoc は下記の通りに書いてください。

*OK*
```JS
/**
 * Sample function
 * @param {String} str サンプル文字列
 * @param {Number} num サンプル数値
 * @param {Object} obj サンプルオブジェクト
 * @return {Boolean} XXX だった場合、 true を返す。
 */
function sample(str, num, obj) {
  return true;
}

/**
 * Sample function v2
 */
function sample2() {
  console.log('Sample function returnless');
}

/**
 * Sample class
 */
class Sample {
  /**
   * @constructor
   * @param {String} str サンプル文字列
   * @param {Number} num サンプル数値
   */
  constructor(str, num) {
    this.str = str;
    this.num = num;
  }

  /**
   * Sample method
   * @param {String} str サンプル文字列
   */
  sampleMethod(str) {
    console.log(str);
  }
}

/**
 * Sample abstract class
 * @abstract
 */
class AbstractSample {
  /**
   * Sample abstract method
   * @abstract
   * @param {String} サンプル文字列
   */
  abstractMethod(str) {
    console.log('Hello World');
  }
}

/**
 * Sample class
 */
class ExtendsSample extends Sample {
  /**
   * @override
   */
  sampleMethod(str) {
    console.log(`str: ${str}`);
  }
}
```

*NG*
```JS
/**
 * Sample function
 * // パラメータの説明文を書く
 * @param {string} str
 * // パラメータの型を書く（アッパーキャメルケースで書く）
 * @param num サンプル数値
 * // パラメータ名を書く
 * @param {object} サンプルオブジェクト
 * // 返り値の説明文を書く
 * @return {boolean}
 */
function sample(str, num, obj) {
  return true;
}

/**
 * Sample function v2
 * // 存在しないリターンの説明を書かない
 * @return {*} 存在しない return
 */
function sample2() {
  console.log('Sample function returnless');
}

// クラスの説明を書く
class Sample {
  /**
   * // コンストラクタの場合は @constractor を記述する
   * @param {String} str サンプル文字列
   * @param {Number} num サンプル数値
   */
  constructor(str, num) {
    this.str = str;
    this.num = num;
  }

  // メソッドの説明を書く
  sampleMethod(str) {
    console.log(str);
  }
}

/**
 * // 抽象クラスの場合は @abstract を書く
 * Sample abstract class
 */
class AbstractSample {
  /**
   * Sample abstract method
   * // 抽象メソッドの場合は @abstract を書く
   * @param {String} サンプル文字列
   */
  abstractMethod(str) {
    console.log('Hello World');
  }
}

/**
 * Sample class
 */
class ExtendsSample extends Sample {
  // オーバーライドメソッドの場合は @override を書く
  sampleMethod(str) {
    console.log(`str: ${str}`);
  }
}
```

##### Ref to [valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)

---

#### 変数名や関数名はロウワーキャメルケースで書く
&ensp;変数名、関数名、オブジェクトのキー名などはアッパーキャメルケースで書いてください。

*OK*
```JS
import { no_camelcased as camelCased } from "external-module";

var myFavoriteColor   = "#112C85";
var _myFavoriteColor  = "#112C85";
var myFavoriteColor_  = "#112C85";
var MY_FAVORITE_COLOR = "#112C85";
var foo = bar.baz_boom;
var foo = { qux: bar.baz_boom };

obj.do_something();
do_something();
new do_something();

var { category_id: category } = query;

function foo({ isCamelCased }) {
    // ...
};

function foo({ isCamelCased: isAlsoCamelCased }) {
    // ...
}

function foo({ isCamelCased = 'default value' }) {
    // ...
};

var { categoryId = 1 } = query;

var { foo: isCamelCased } = bar;

var { foo: isCamelCased = 1 } = quz;
```

*NG*
```JS
import { no_camelcased } from "external-module"

var my_favorite_color = "#112C85";

function do_something() {
    // ...
}

obj.do_something = function() {
    // ...
};

function foo({ no_camelcased }) {
    // ...
};

function foo({ isCamelcased: no_camelcased }) {
    // ...
}

function foo({ no_camelcased = 'default value' }) {
    // ...
};

var obj = {
    my_pref: 1
};

var { category_id = 1 } = query;

var { foo: no_camelcased } = bar;

var { foo: bar_baz = 1 } = quz;
```
##### Ref to [camelcase](https://eslint.org/docs/rules/camelcase)

---

#### TAB を使わない
&ensp;コードには半角スペースを使ってください。

*OK*
```JS
var a = 2;

/**
* it's a test function
*/
function test(){}

var x = 1; // test
```

*NG*
```JS
var a \t= 2;

/**
* \t\t it's a test function
*/
function test(){}

var x = 1; // \t test
```
##### Ref to [no-tabs](https://eslint.org/docs/rules/no-tabs)

---

#### 行末にスペースを書かない
&ensp;行末にスペースを書かないでください。

*OK*
```JS
var foo = 0;
var baz = 5;
```

*NG*
```JS
var foo = 0;//•••••
var baz = 5;//••
//•••••
```
##### Ref to [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)

---

#### シングルクォートを使う
&ensp;クォートは必ずシングルクォートかバッククォートを使ってください。

*OK*
```JS
var single = 'single';
var backtick = `back${x}tick`; // backticks are allowed due to substitution
```

*NG*
```JS
var double = "double";
var unescaped = "a string containing 'single' quotes";
```
##### Ref to [quotes](https://eslint.org/docs/rules/quotes)

---

#### リテラル文字列の後に半角スペースを入れる
&ensp;リテラル文字列の後には半角スペースを入れてください。

*OK*
```JS
func 'Hello World';
```

*NG*
```JS
func'Hello World';
```
##### Ref to [template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)

---

#### 関数を表す矢印の前後にスペースを入れる
&ensp;関数を表す矢印の前後にはスペースを入れてください。

*OK*
```JS
() => {};
(a) => {};
a => a;
() => {'\n'};
```

*NG*
```JS
()=> {};
() =>{};
(a)=> {};
(a) =>{};
a =>a;
a=> a;
()=> {'\n'};
() =>{'\n'};
```
##### Ref to [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)

---

#### オブジェクトの内側には前後にスペースを入れる
&ensp;オブジェクトの内側には前後にスペースを入れてください。

*OK*
```JS
var obj = {};
var obj = { 'foo': 'bar' };
var obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' };
var obj = {
  'foo': 'bar'
};
var { x } = y;
import { foo } from 'bar';
```

*NG*
```JS
var obj = {'foo': 'bar'};
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux' }, bar};
var obj = {'foo': 'bar'
};
var obj = {
  'foo':'bar'};
var {x} = y;
import {foo } from 'bar';
```
##### Ref to [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)
