# homework

> A Vue.js project

#### 查看在线效果：[here](http://140.143.90.177:8060/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
这个作业我使用vue构建，包含了四个组件,其中1，2，3为公共组件：

1. Tabs // 用于页签切换的容器
2. Tab // 单个页签
3. Dialog // 对话框
4. Tag // （业务组件）单条信息的组件

使用场景：

```
 <Tabs :title="title"
            :activeIndex="activeIndex"
            :tabClickCallBack="changeTab"
            :labelClickCallBack="handleClickLabel"
            :info="info">
        <template slot="tab-body">
          <Tab :active="activeIndex === 0">
            <Dashboard></Dashboard>
          </Tab>
          <Tab :active="activeIndex === 1">
            <Cruise></Cruise>
          </Tab>
          <Tab :active="activeIndex === 2">
            <Agents></Agents>
          </Tab>
          <Tab :active="activeIndex === 3">
            <Help></Help>
          </Tab>
        </template>
 </Tabs>
```



