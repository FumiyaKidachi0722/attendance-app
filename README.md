# 勤怠管理アプリ仕様書

## 目次
1. [概要](#1-概要)
   1. [目的](#11-目的)
   2. [技術スタック](#12-技術スタック)
2. [機能](#2-機能)
3. [詳細設計](#3-詳細設計)
4. [セキュリティ](#4-セキュリティ)
5. [テスト](#5-テスト)
6. [その他](#6-その他)

## 1. 概要

### 1.1 目的
- 勤怠時間の自動記録
- Slackへの勤怠情報通知

### 1.2 技術スタック
- フロントエンド: Next.js
- バックエンド: Nest.js
- 言語: TypeScript
- その他: Google Sheets API, Slack API

## 2. 機能

### 2.1 勤怠時間記録
- Googleスプレッドシートの所定の箇所（当日の日付）に勤怠した時間を記録する。

### 2.2 Slack通知
- 勤怠情報をSlackに通知する。

## 3. 詳細設計

### 3.1 勤怠時間記録
- Google Sheets APIを使用してスプレッドシートにアクセスする。
- 当日の日付に対応するセルに勤怠時間を記入する。

#### 3.1.1 依存パッケージのインストール

```bash
yarn add googleapis
```

#### 3.2 Slack通知

Slack APIを使用して勤怠情報を通知する。

#### 3.2.1 依存パッケージのインストール

```bash
yarn add @slack/web-api
```
### 4. セキュリティ

- Google Sheets APIとSlack APIの認証情報は、環境変数など安全な方法で管理する。

### 5. テスト

1. 環境変数の設定
- frontend/.env.localに以下を追加する
  ```bash
  NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
  ```
- backend/.envに以下を追加する
  ```bash
  ALLOWED_ORIGIN=http://localhost:3000
  PORT=4000
  SLACK_TOKEN=
  CHANNEL_ID=
  SHEET_ID=
  GOOGLE_PROJECT_ID=
  GOOGLE_PRIVATE_KEY=
  GOOGLE_CLIENT_EMAIL=
  # その他の変数も同様に設定

  # This was inserted by `prisma init`:
  # Environment variables declared in this file are automatically made available to Prisma.
  # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

  # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
  # See the documentation for all the connection string options: https://pris.ly/d/connection-strings
  DATABASE_URL="postgresql://admin:qwert5432!@localhost:5432/mydb?schema=public"
  ```

2. frontendで`yarn dev`をし、backendで`yarn start`する
3. DBを起動させる

### 6. その他

- 必要に応じて、フロントエンドのUI/UXデザイン、エラーハンドリングなどの詳細を追加する。
