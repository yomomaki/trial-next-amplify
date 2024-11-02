# trial-next-amplify
 
### こちらの動画で扱ったソースになります
[動画リンク](https://youtu.be/WdHO9UiuSKY)

## バージョン
主なもの
- Next.Js:　v14
- Amplify:　Gen2
- node:　v22.3.0

## ディレクトリ構成
```
  rootディレクトリ　   Next.jsのプロジェクトディレクトリ 以下手順の1.で構築
  └ amplify　         バックエンドの構築をするディレクトリ 以下手順の2.で構築
    └ auth
      └ resource.ts　 バックエンドの認証周りを構築するファイル
    └ data
      └ resource.ts   バックエンドのデータベース周りを構築するファイル
  └ src               フロントエンドを構築するディレクトリ
    └ app             フロントエンドの各種ページを構築するディレクトリ
    └ components      共通コンポーネントディレクトリ
    └ features        特定の機能や処理をまとめるディレクトリ　今回はミドルウェアを配置 以下手順の6.で構築
    └ lib             外部ライブラリディレクトリ　今回は認証画面日本語表示用のl10を配置 
    └ utils           ユーティリティーディレクトリ 以下手順の6.で構築
```

## 注意点
クローンして動かす場合は色々抜いていますのでそのままでは動きません。  
よって作成方法を以下に記載しています。


## 作成と解説
1～4まではAmplify動画の前編で解説しています[こちら](https://youtu.be/DLXkkLmTCZA)
1. next.jsプロジェクト作成  
アプリを作りたいディレクトリ配下で以下のコマンドを実行  
```npx create-next-app@latest```

2. プロジェクトにAmplify導入  
1で作成されたアプリのrootディレクトリで以下のコマンドを実行  
```npm create amplify@latest```

3. クライアント起動  
疎通確認のためクライアント起動。起動確認後作業続けるのであれば一旦STOP（Ctrl+C）  
```npm run dev```

4. AWS Amplify のパッケージをインストール  
Next.jsのアプリでAmplidyを使えるようにパッケージをインストール  
```npm add --save-dev @aws-amplify/backend@latest @aws-amplify/backend-cli@latest typescript```


ここからはAmplify動画での作業範囲です。

5. 一通りのソースを実装する

6. サーバーコンポーネントでデータ操作の準備をする  
next.jsアダプターを導入  
```yarn add aws-amplify @aws-amplify/adapter-nextjs  ```   
→ [公式](https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/)ではnpm でやってますが、自身の環境に合わせて実行する

7. サンドボックス(開発環境)作成  
rootディレクトリで以下のコマンドを実行  
```npx ampx sandbox --profile ```  
→ 初回の場合は、コマンドをたたく前にブートストラップ（最初の環境構築）が必要なので
[こちら](https://docs.amplify.aws/nextjs/start/account-setup/)を参考に実施


