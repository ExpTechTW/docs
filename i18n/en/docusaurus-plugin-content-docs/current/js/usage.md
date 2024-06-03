---
sidebar_position: 2
---

# Usage

ExpTech API Wrapper provides `ExpTechApi` and `ExpTechWebsocket` two entry classes.

## ExpTechApi

When sending normal API requests you can use the `ExpTechApi` class.

```ts
import { ExpTechApi } from "@ExpTechTW/api-wrapper";

const api = new ExpTechApi(/* API key here */);
```

You can also change the api key later by using `setApiKey(key)`.

```ts
api.setApiKey(/* new API key here */)
```

API requests can be called by invoking request methods.

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

Using WebScoket feature requiring you to have an VIP ExpTech Account.

:::

You can listen to events by establishing a WebSocket connection to our server with the `ExpTechWebsocket` class.

### Obtaining Auth Token

First we'll need to get an Auth Token before starting a WebSocket connection with `api.getAuthToken()` method in the `ExpTechApi` class.

```ts
import { ExpTechApi } from "@ExpTechTW/api-wrapper";

const api = new ExpTechApi();

// Credentials
const credentials = {
  email: "Email",
  password: "Password",
  name: `Device Name/Software Name/Software Version/Device Version`
}

api
  .getAuthToken(credentials)
  .then(console.log)
```

:::note

We strongly recommend you to store credentials inside a separated `.env` file.  
You can refer to the [Documentation](https://www.npmjs.com/package/dotenv) of `dotenv` to learn more about how to separate credentials into the `.env` file.

:::

### Establishing Connection

We can then use the Auth Token to estbalish a WebSocket connection.

```ts
import { ExpTechWebsocket, SupportedService } from "@ExpTechTW/api-wrapper";

// WebSocket client config
const config = {
  key: "Auth Token you obtained in the previous step";
  service: [
    SupportedService.RealtimeStation,
    SupportedService.Eew
  ];
}

// Establish a WebSocket connection
const ws = new ExpTechWebsocket(config);
```

WebSocket client config is described below:

<details>
  <summary>
    key: `string`
  </summary>
  
  The Auth Token string, requires a VIP ExpTech Account when using.
</details>

<details>
  <summary>
    service: `SupportedService[]`
  </summary>
  
  A list of services to subscribe to, you can take a look inside `SupportedService` enum and use it without having to remember service names.

  Currently supported services:
  - `trem.rts` - Real-time Seismic data
  - `trem.rtw` - Real-time Seismograph wave data
  - `websocket.eew` - Earthquake Early Warning events
  - `trem.eew` - TREM Earthquake Early Warning events
  - `websocket.report` - Earthquake reports from CWA
  - `websocket.tsunami` - Tsunami information from CWA
  - `cwa.intensity` - Intensity reports from CWA
  - `trem.intensity` - TREM Intensity reports
</details>

<details>
  <summary>
    config: `Partial<{[SupportedService.RealtimeWave]: number[];}>`
  </summary>
  
  Config for each services, the only config currently supports is `trem.rtw`.

  <details>
    <summary>
      \[SupportedService.RealtimeWave\]: `number[]`
    </summary>
    
    List of Seismograph IDs to recevie wave data.
  </details>

</details>