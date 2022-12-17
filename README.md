# 通过一个todoList小案例来学习vue3 CompositionAPI

项目预览：[点我]("https://roaring-cendol-e67036.netlify.app/")


## 目录
- [通过一个todoList小案例来学习vue3 CompositionAPI](#通过一个todolist小案例来学习vue3-compositionapi)
  - [目录](#目录)
  - [写在前面](#写在前面)
  - [依赖和src目录](#依赖和src目录)
    - [依赖](#依赖)
    - [目录结构](#目录结构)
  - [下载运行](#下载运行)


## 写在前面

麻雀虽小，五脏俱全，小小的一个todoList，只需要一页，具备增删查改，交互也相对简单，不依赖视觉设计，想必各位前端er在学习各种框架的过程中写了无数次todoList，这次学习compositionAPI第一个想到的也是做一个todoList，就顺势给摸了出来。

完成todoList的方式五花八门，可以很简单，也可以很复杂，从入门学习某个框架来说，用尽可能原始、不掺和其他依赖库（像什么vuex、axios、pinia 等等，在还没学习到框架本身的同时还增加了学习依赖库的成本)、同时代码还精简的方式就好了。

本项目你只需喝个茶的时间，就能掌握compositionAPI(setup语法糖)的入门、父传子（props)、子传父(emit)的使用,以及comoposables的抽离:smiley_cat:

## 依赖和src目录

### 依赖

```
 "dependencies": {
    "vue": "^3.2.45"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.0",
    "typescript": "^4.9.3",
    "vite": "^4.0.0",
    "vue-tsc": "^1.0.11"
  }
```

vite是当下很火热的前端开发与构建工具，意在提供开箱即用的配置，同时它的插件API和JavaScript API 带来了高度的可扩展性，并有完整的类型支持。如果你还在使用webpack，不如尝试一下vite吧！


由于Typescript的趋势不可阻挡，笔者也使用了vue3-typescript，对于学过java这种强类型语言的我来说，上手并不难，如果你在这之前还未看过Typescript,可以先预览一下[文档]("https://typescript.bootcss.com/")


### 目录结构

```
   src
   ├─App.vue
   ├─global.d.ts    全局interface
   ├─main.ts
   ├─composables    组合式函数
   |      ├─useFilteredTodos.ts
   |      ├─useTodos.ts
   |      └userEmitAddTodo.ts
   ├─components     组件文件
   |     ├─TodoAdd.vue
   |     ├─TodoFilter.vue
   |     ├─TodoList.vue
   |     └TodoListItem.vue
   |
   index.html
```

组合式函数（composables function)是vue3新出的概念的，功能是用compositionAPI来封装可复用有状态逻辑的函数，当它不是用compositionAPI封装时，和我们正常封装utils也就是一样的了

**需要说明的是，这里提到了可复用，你在我的项目里可以看到这几个comoposables就只用到一次，这里我忽略掉了可复用的点，你也稍微修改一下放进对应的文件里也没问题，为了更好的学习vue3 CompositionAPI，初识了vue3的另一个概念composables，让我们对vue3 CompositionAPI有个更加完整的认识**:muscle:


## 下载运行

可以手动[下载]("https://github.com/ooooshino/TodoList.git)，或者通过git clone到本地

```bash
git clone https://github.com/ooooshino/TodoList.git
``` 

成功之后再通过下面的命令下载依赖包

```bash
# 进入项目根目录
cd TodoList

# 安装依赖
npm install

# 或者你也可以使用pnpm
pnpm install

# 使用 npm 或者 pnpm 取决于你，用两条命令执行其中一条就好了，需要注意的是，如果你使用pnpm，你需要提前安装好pnpm
```

让你的项目跑起来

```bash
#npm
npm run dev

#pnpm
pnpm dev
```

当上面的指令你都执行完了，即可通过 http://localhost:3000访问了

:exclamation:当端口被占用时请通过修改vite.config.ts下的port字段来修改端口:exclamation:

```typescript
  server: {
    port: 3000,
  }
```