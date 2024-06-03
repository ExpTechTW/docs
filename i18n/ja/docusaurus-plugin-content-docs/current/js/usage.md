---
sidebar_position: 2
---

# 使用方法

ExpTech API Wrapperは`ExpTechApi`と`ExpTechWebsocket`の2つのエントリー・クラスを提供します

## ExpTechApi

通常のAPIリクエストを送信する際には、`ExpTechApi`クラスを使用することができる

```ts
import { ExpTechApi } from "@ExpTechTW/api-wrapper";

const api = new ExpTechApi(/* APIキーはこちら */);
```

`setApiKey(key)`を使えば、後でapiキーを変更することもできる

```ts
api.setApiKey(/* 新しいAPIキーはこちら */)
```

APIリクエストは、リクエスト・メソッドを呼び出すことで呼び出すことができる

``` ts
api
  .getReportList(20)
  .then(console.log);

/*
Returns PartialReport[]
[
  {
    id: "113000-2024-0425-084819",
    lat: 23.71,
    lon: 121.59,
    depth: 7.2,
    loc: "花蓮縣政府南方  31.3  公里 (位於花蓮縣近海)",
    mag: 3.9,
    time: 1714006099000,
    trem: 1714006105548,
    int: 3,
    md5: "56098CD9C543017FEFC5FDE27391E7AF"
  },
  ...
]
*/
```

## ExpTechWebsocket

:::note

WebScoket機能を使用するには、VIP ExpTechアカウントが必要です

:::

`ExpTechWebsocket`クラスを使用してサーバーにWebSocket接続を確立することで、イベントをリッスンすることができます

### 認証トークンの取得

まず、WebSocket 接続を開始する前に、`ExpTechApi`クラスの`api.getAuthToken()`メソッドで認証トークンを取得する必要がある

```ts
import { ExpTechApi } from "@ExpTechTW/api-wrapper";

const api = new ExpTechApi();

// 認証セプター情報
const credentials = {
  email: "電子メール",
  password: "パスワード",
  name: `デバイス名/ソフトウェア名/ソフトウェアバージョン/デバイスバージョン`
}

api
  .getAuthToken(credentials)
  .then(console.log)
```

:::note

認証情報は`.env`ファイルに分割して保存することを強く推奨する  
`.env`ファイルにクレデンシャルを分ける方法については、`dotenv`の[ドキュメント](https://www.npmjs.com/package/dotenv)を参照してください

:::

### コネクションの確立

そして、Auth Tokenを使ってWebSocket接続を確立することができる

```ts
import { ExpTechWebsocket, SupportedService } from "@ExpTechTW/api-wrapper";

// WebSocketクライアント設定
const config = {
  key: "前のステップで取得した認証トークン";
  service: [
    SupportedService.RealtimeStation,
    SupportedService.Eew
  ];
}

// WebSocket接続を確立する
const ws = new ExpTechWebsocket(config);
```

WebSocketクライアント・コンフィグを以下に説明する：

<details>
  <summary>
    key: `string`
  </summary>
  
  認証トークン文字列を使用するには、VIP ExpTechアカウントが必要です
</details>

<details>
  <summary>
    service: `SupportedService[]`
  </summary>
  
  以下は購読するサービスのリストで、`SupportedService` 列挙の中を見て、サービス名を覚えることなく使用することができます

  現在サポートされているサービス：
  - `trem.rts` - リアルタイム地震データ
  - `trem.rtw` - リアルタイム地震波データ
  - `websocket.eew` - 緊急地震速報
  - `trem.eew` - TREM緊急地震速報
  - `websocket.report` - CWA（中央氣象署）からの地震レポート
  - `websocket.tsunami` - CWA（中央氣象署）からの津波情報
  - `cwa.intensity` - CWA（中央氣象署）からの震度レポート
  - `trem.intensity` - TREM震度レポート
</details>

<details>
  <summary>
    config: `Partial<{[SupportedService.RealtimeWave]: number[];}>`
  </summary>
  
  各サービスの設定は、現在`trem.rtw`のみをサポートしている

  <details>
    <summary>
      \[SupportedService.RealtimeWave\]: `number[]`
    </summary>
    
    波浪データを受信する地震計IDのリスト。
  </details>

</details>