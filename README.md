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
│       ├── _fonts.scss ........ 独自フォントを設定する場合はここに書く。  
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
