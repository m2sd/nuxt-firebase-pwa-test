# firebase-pwa-test

> Minimal test case for @nuxtjs/firebase + @nuxtjs/pwa conflict

## Steps to reproduce

### Firebase ssr auth disables workbox caching

1. Build with `yarn build:firebase`

2. Start with `yarn start`
3. Open `localhost:3000` in google chrome
4. Press `F12` to open the developer console
5. (optional) If you do not see a message confirming service worker installation:
   1. Click the `Clear site data` button in the `Application > Clear storage` tab
   2. Reload the page with `Ctrl + F5`
6. Click the `Start test` button on the page and read the messages in the console
7. The page will reload after 5 seconds

8. Verify that firebase ssr auth did augment the request to the page with the authorization header in the network tab
9. Note that there are no messages for workbox regarding cached routes

### Workbox caching disables firebase ssr auth

1. Build with `yarn build:workbox`

2. Start with `yarn start`
3. Open `localhost:3000` in google chrome
4. Press `F12` to open the developer console
5. (optional) If you do not see a message confirming service worker installation:
   1. Click the `Clear site data` button in the `Application > Clear storage` tab
   2. Reload the page with `Ctrl + F5`
6. Click the `Start test` button on the page and read the messages in the console
7. The page will reload after 5 seconds

8. Verify that workbox did cache some asset routes by checking for corresponding messages in the console
9. Note that the page request has not been augmented with the authorization header in the network tag
