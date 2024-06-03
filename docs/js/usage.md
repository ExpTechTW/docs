---
sidebar_position: 2
---

# 使用

API Wrapper 提供 `ExpTechApi` 和 `ExpTechWebsocket` 兩個主要類別。

## ExpTechApi

要發送一般 API 請求可以使用 `ExpTechApi` 類別。

```ts
import { ExpTechApi } from "@ExpTechTW/api-wrapper";

const api = new ExpTechApi(/* API 金鑰放這裡 */);
```

你也可以之後再用 `setApiKey(key)` 方法來變更 API 金鑰。

```ts
api.setApiKey(/* 新的 API 金鑰放這裡 */)
```

可以使用相對應的方法來執行 API 請求。

``` ts
api
  .getReportList(20)
  .then(console.log);

/*
回傳 PartialReport[]
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

使用 WebScoket 需要有訂閱 VIP 的 ExpTech 帳號才能使用。

:::

要使用 WebSocket 接收事件可以使用 `ExpTechWebsocket` 類別。

### 取得驗證權杖

首先先透過呼叫 `api.getAuthToken()` 取得驗證權杖。

```ts
import { ExpTechApi } from "@ExpTechTW/api-wrapper";

const api = new ExpTechApi();

// 驗證權杖資訊
const credentials = {
  email: "帳號電子信箱",
  password: "帳號密碼",
  name: `裝置名稱/軟體名稱/軟體版本/裝置版本`
}

api
  .getAuthToken(credentials)
  .then(console.log)
```

:::note

我們建議使用環境變數來將開發時需要的敏感變數與程式碼分離。  
你可以參考 `dotenv` 的[說明文件](https://www.npmjs.com/package/dotenv)來進一步了解如何將帳號密碼放在 `.env` 檔案中。

:::

### 建立連線

接著我們就可以用剛剛取得的驗證權杖來開啟一個新的 WebSocket 連線。

```ts
import { ExpTechWebsocket, SupportedService } from "@ExpTechTW/api-wrapper";

// WebSocket 客戶端設定
const config = {
  key: "上一步取得的驗證權杖";
  service: [
    SupportedService.RealtimeStation,
    SupportedService.Eew
  ];
}

// 建立 WebSocket 連線
const ws = new ExpTechWebsocket(config);
```

WebSocket 客戶端設定說明如下

<details>
  <summary>
    key: `string`
  </summary>
  
  驗證權杖字串，需要有訂閱 VIP 的 ExpTech 帳號才能使用。
</details>

<details>
  <summary>
    service: `SupportedService[]`
  </summary>
  
  WebSocket 要訂閱的服務項目，可以使用 `SupportedService` 列舉來填寫。

  目前支援的服務項目：
  - `trem.rts` - 即時地動資料
  - `trem.rtw` - 即時地動波形圖資料
  - `websocket.eew` - 地震速報資料
  - `trem.eew` - TREM 地震速報資料
  - `websocket.report` - 中央氣象署地震報告資料
  - `websocket.tsunami` - 中央氣象署海嘯資訊資料
  - `cwa.intensity` - 中央氣象署震度速報資料
  - `trem.intensity` - TREM 震度速報資料
</details>

<details>
  <summary>
    config: `Partial<{[SupportedService.RealtimeWave]: number[];}>`
  </summary>
  
  各服務的設定，目前只有即時地動波形圖資料有設定。

  <details>
    <summary>
      \[SupportedService.RealtimeWave\]: `number[]`
    </summary>
    
    要接收即時地動波形圖資料的測站 ID 列表。
  </details>

</details>