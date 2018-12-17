# RF Chat

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

State is managed in-place by components. This makes for quick development but not great for cacheing, batching, de-duping, etc. If those features were key we could modify `Query` and `Mutation` to use methods provided by a `Cache` component or something similar that would hold all remote state, handle requests, and propogate updates via context. However, my implementation does include client side cache updates on mutations so it minimizes round trips to some degree.

Routing is handled via React Router, I didn't bother writing my own routing implementation lol.

I didn't implement any error handling so it's easy to break the app by typing in an invlaid URL. We can make the app more resilient by defining error handling in our data components as well as by using features like error boundaries from React.

Auth is all client side right now, too, but I don't think y'all care about that in the context of this exercise.

There's also not a lot of comments so I hope it's easy to follow (I tried to make all the component semantic). I'm not a huge commentor but always leave enough meta information through types and comments for other devs to follow what I've done (I think).

#### Reviewing the code

It's probably best to start by looking at `client/components/App`. It's the "root" besides `Container` which just bootstraps some needed context. `App` lays out the top level routing structure for the app.

`ChatScene` defines the bulk of the functionality in the app. `Layout` defines the top level visual layout, separating content from the sidebar.

API interactions are handling through the component `Query` and `Mutation`.

`Query`, `RoomList`, and `Menu` are used to create the navigation in the sidebar.

`RoomDetailsScene` renders a header for the room, a `MessageList`, and `MessageCreator` which uses the `Mutation` component to update the remote state;

`MessageList` uses more atomic components like `ChatBubble` and `List` to compose its functionality.

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
