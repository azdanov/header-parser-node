# Header Parser Node

Header parser microservice made in node

[Live version](https://header-parser-node-turcchtxkg.now.sh/api/whoami)

Based on [Micro](https://github.com/zeit/micro) http microservice
server and deployed on [Now](https://zeit.co/now).

Uses a [custom function](https://github.com/azdanov/header-parser-node/blob/0266bbaad2b02394232e4d43656aca387ec89553/lib/index.js#L4), [useragent](https://github.com/3rd-Eden/useragent)
and [navigator](https://github.com/coolaj86/node-navigator) to determine
information from incoming connection. A 404 is sent if path url differs
from `/api/whoami`.

---

**Example Usages:**

[https://header-parser-node-turcchtxkg.now.sh/api/whoami](https://header-parser-node-turcchtxkg.now.sh/api/whoami)

**Example Output:**

```js
{
    "ip": "85.253.238.199",
    "languages": [
        "en",
        "ru"
    ],
    "os": "Mac OS X 10.13.3"
}
```

## Usage

Yarn or Npm can be used to run the commands.

`yarn dev` to start micro-dev for development.

`yarn start` to serve public directory via micro.

`yarn lint` to lint code using eslint and format with prettier.

## Development

Latest Node.js LTS is required.

Husky and lint-staged are used to keep code consistent by running tests
and linting.

## License

[MIT](LICENSE)
