Example app for Mobile app class Spring 2019.

# Setup
```
expo init todoapp2 --template blank@sdk-32 --yarn
cd todoapp2
yarn add native-base --save
yarn add @expo/vector-icons --save
yarn start

```
# Step 1
Create a static list of todos. We will use the
[List component](http://docs.nativebase.io/Components.html#list-def-headref)
from native-base.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/bc21e7e8166aa675087e6cada171b6cc2b2d91e2)
for the solution.

# Step 2
Render an array of todo items by following this
[example](https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/src/screens/list/basic-list.js).

See this [diff](https://github.com/lubaochuan/todoapp2/commit/6fdeb37a1c9b1ed5195475374225dca6125a0863)
for the solution.

# Step 3
Add an input field for new todos by following this
[example](http://www.reactnativeexpress.com/data_component_state)

Play with the app, check the console output and try to identify some problems.
I shouldn't add the new todo item to the list yet.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/7c22705de17b8b25d5ebd0015f316a6cc55a3e87?diff=split) for the solution.

[controlled input](https://learn.freecodecamp.org/front-end-libraries/react/create-a-controlled-input)

# Step 4
Handle adding new todo with a reverse data flow.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/e89fbcb5cb1b4d3914797d887aa9a259a03e50ab) for the solution.

# Step 5
Delete a todo with a tap.

To use array index to identify items, we must understand the signature of
the [`renderRow` function](http://facebook.github.io/react-native/docs/listview.html#renderrow)

The `ListItem` in native-base implements react-native's [`touchablehighlight`](https://facebook.github.io/react-native/docs/touchablehighlight.html)
Therefore, a `ListItem` can respond to `press` events.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/19455ed1bf539a1c196514c455061cad258cebee) for the solution.

You app should look as follows:

![demo video](./images/add_delete.gif)

# Step 6
Add EditScreen and navigate to it. We will apply what we learned from
[this example app](https://github.com/lubaochuan/react-navigation).

First, install `react-navigation` package:
```
yarn add react-navigation --save
```

First, we will use a pop-up menu to let users select "edit", "delete", or cancel.
The menu is activated by a long-press on a todo item.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/00072ada9332ab11370534fa47ea2e671ead6f10) for the solution.

Next, we will use navigation parameters to pass an item and a callback function
to the EditScreen. The callback function takes the updated item and updates in
the list. We will need to pass the index of the item in the array/state so that
the item can be identified.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/550226ad451bd54f688c14ca4dca508c2c338771) for the solution.

# Step 7
Use redux to manage state.
```
yarn add redux react-redux
```

First, use redux to add a new todo.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/f8d54882918ce5ffb0b20cb1ee32b0b04125db94) for the solution.

Next, use redux to toggle todos.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/d5270dfb598efa66ebb78899c08a62ad946d62bd) for the solution.

Next, use redux to update todos.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/5a7162b8f328ade6f45e710f9be67e7929fc62ca) for the solution.

Lastly, use redux to delete todos.

See this [diff](https://github.com/lubaochuan/todoapp2/commit/163f1c602e14e30ddce2b845d1f28f0e82afe8a1) for the solution.

One more thing, add local persistence.
```
yarn add redux-persist
```
See this [diff](https://github.com/lubaochuan/todoapp2/commit/70283c67bbd866df165ee406eedc93cd24a2ac54) for the solution.

# Step 8
Sync redux managed state with firebase as described
[here](https://blog.bitsrc.io/building-a-todo-app-in-react-with-firebase-and-redux-ba3ab53a671b).

First, install `firebase` for firebase interactivity and `redux-thunk` for
handling synchronous actions in redux.
```
yarn add firebase redux-thunk --save
```

Next, create a new project on [firebase](https://console.firebase.google.com).

Next, copy firebase database configuration and put it in `src/keys.js`.
```
export default {
  config: {
    apiKey: "ENTER YOURS HERE",
    authDomain: "ENTER YOURS HERE",
    databaseURL: "ENTER YOURS HERE",
    projectId: "ENTER YOURS HERE",
    storageBucket: "ENTER YOURS HERE",
    messagingSenderId: "ENTER YOURS HERE"
  }
}
```
Make sure you won't accidentally check it in your project repo by adding the following line  to your `.gitignore` file:
```
src/keys.js
```

See this [diff](https://github.com/lubaochuan/todoapp2/commit/99366b1d874a7561d55c98550375348b3d66a796) for the solution.
