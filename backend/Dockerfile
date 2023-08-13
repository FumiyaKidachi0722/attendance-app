# backend/Dockerfile

# ベースイメージの選択
FROM node:16

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# 依存関係ファイルのコピー
COPY package*.json ./

# 依存関係のインストール
RUN yarn install

# ソースコードのコピー
COPY . .

# ビルド
RUN yarn build

# ポートの公開
EXPOSE 3000

# アプリケーションの起動
CMD ["yarn", "start"]
