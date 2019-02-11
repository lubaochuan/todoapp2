Example app for Mobile app class Spring 2019.

# Setup
```
expo init todoapp2 --template blank@sdk-32 --yarn
yarn add native-base --save
yarn add @expo/vector-icons --save

cd todoapp2
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
