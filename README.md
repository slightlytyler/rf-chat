# DoorDash Chat

Tyler Martinez <slightlytyler@gmail.com>

## Up and running

Quick start guide:

```sh
git clone git@gitlab.com:slightlytyler/doordash-chat.git

cd doordash-chat

yarn

yarn dev
```

and in a separate tab start the API server:

```sh
yarn api-server
```

_Navigate to http://localhost:3000 in your browser_

## Overview

I used React / Emotion / Webpack to build my version. I tried to keep it very simple with atomic components, isolated state + effect handling, and simple composition through context and render props.

I placed all the component in a single directory for simplicty. In my current production apps, they usually get broken up into `common`, `features`, and `scenes`. Even this small app resulted in about 30 different named components. Scaling the project additionally might require a more nuanced folder structure.

State is managed in-place by components. This makes for quick development but not great for cacheing, batching, de-duping, etc. If those features were key we could modify `Query` and `Mutation` to use methods provided by a `Cache` component or something similar that would hold all remote state, handle requests, and propogate updates via context.

I didn't implement any error handling so it's easy to break the app by typing in an invlaid URL. We can make the app more resilient by defining error handling in our data components as well as by using features like error boundaries from React.

Auth is all client side right now, too, but I don't think y'all care about that in the context of this exercise.

## Processes

#### Development

```sh
yarn dev
```

#### Building

This just builds the assets into `client/dist`. It doesn't mount them anywhere the server can find them. We can talk about what this would like in a more realistic env during the call.

```sh
yarn build
```

#### Testing

Didn't add any tests but the infra is there.

```sh
yarn test
```

#### Formatting (with Prettier)

```sh
yarn fmt
```
