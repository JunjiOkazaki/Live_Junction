<img src="/app/javascript/images/Live_Junction-default-logos.jpeg" width="320px">

# このwebアプリについて

LiveJunctionはメディアミックス作品「BanG Dream!」プロジェクトの
リアルバンド「RAISE A SUILEN」のセットリスト作成webアプリです。

## セットリストとは？
バンドがライブで演奏した曲の一覧を順番に記したものです。  
どの曲がどのタイミングで演奏されるかはライブ愛好者にとって大きな関心事の一つであるため  
ライブ直後にはセットリストと感想を記した投稿がSNS上で多く見られます。

## このwebアプリで何ができる？

投稿画面のセレクトボックスで収録アルバムから曲名を順番に選んでいくだけでセットリストの作成ができます。  
手打ちによるスペル間違い防止や入力時間の短縮ができます。  
また写真の投稿も可能となっています。  
API未実装のため、他SNSで利用する際はスクリーンショットやコピー＆ペーストを利用します。

## このアプリの実装について

RailsのCRUD機能とdeviseによるユーザー登録機能をベースに作成しております。  
投稿画面におけるjQueryを利用した非同期型の動的セレクトボックスが本webアプリの最も重要な機能となっています。  
非同期で収録アルバム名に応じた曲名を動的にセレクトボックスに反映させ、  
セレクトボックスの入力フォームもライブの曲数に合わせて非同期で増減できるようにしています。  
シンプルな挙動ながら、思いのほか複雑な実装が必要となりましたが非常に勉強になりました。

## ER図

![image 2](/Live_Junction.drawio.svg)

## 今後の機能追加について

このWebアプリについて、機能追加を検討しているのは以下の点です。  
・自由入力欄の追加（感想の入力等）  
・演奏曲欄を任意で自由入力に切り替え  
（新曲やカバー等アルバム未収録の曲への対応）  
・対応アーティストの拡大  
（アーティスト名により収録アルバムのセレクトボックスを動的に変更）  
・主要SNSのAPI実装  
・セットリスト画像化機能（Twitter等の文字数制限を念頭に）  
・相互フォロー機能  
・他ユーザーの投稿閲覧機能
