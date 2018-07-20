Express JQuery Request with Existing Cookie Demo
================================================

Check if the `fetch` call will send existing cookies to server automatically.

The answer is NO, we have to set config `credentials: 'include'` in `fetch`:

```
fetch(url, {
    credentials: 'include'
}).then(...)
```

Run
---

```
npm install
node server.js
```

Then visit <http://localhost:3000>

Check
-----

Open Chrome `developer console` -> `network`, find the `localhost` request, you will see the response has `Set-Cookie`:

```
Set-Cookie: token=mike%3A123456; Path=/
```

Then click on the button on page, check the request data, the cookie has the existing `token`:

```
Cookie: _ga=GA1.1.1940290804.1517624988; Idea-e65a76ea=55cfa0a1-ed31-4683-9aaf-46d8bf699e32; Idea-e65a7aa9=75822b7f-233d-4e27-86d4-9b1bd1023edc; token=mike%3A123456
```
