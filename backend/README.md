1. Prismaのセットアップ:
   Prismaのプロジェクトを初期化する際に使用します。

```bash
npx prisma init
```

上記コマンドを実行すると、データベースの接続情報やPrisma Clientの生成先などを設定できる対話式のセットアップが始まります。

2. データベースのマイグレーション:

データベースのスキーマ変更を適用するためのマイグレーションを作成し、データベースに適用します。

マイグレーションの作成:

```bash
npx prisma migrate dev --name
```

migration_name
マイグレーションの適用:

```bash
npx prisma migrate deploy
```

Prisma Clientの生成:

Prisma Clientは、データベースとの通信を行うためのクライアントコードです。データベーススキーマが変更された場合、Prisma Clientのコードも更新する必要があります。

```bash
npx prisma generate
```

上記コマンドを実行すると、Prisma Clientのコードが自動的に生成されます。

4. データベースのセーディング:

初期データをデータベースに挿入するために使用するコマンドです。prisma/seed.ts ファイルを作成してから実行します。

```bash
npx ts-node prisma/seed.ts
```

5. schema.prismaの変更の適用:

schema.prisma ファイル内の変更をデータベースに適用します。

```bash
npx prisma migrate dev --name
```

migration_name
マイグレーションの名前を指定して変更を適用します。

6. Prisma Studio

```bash
yarn prisma:studio
```
