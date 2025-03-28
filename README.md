# VueMiShop
基于Vue的前后端分离仿小米商城，MySql+Vue+Vue-Router+Vuex+Element-ui+axios

演示视频链接：https://www.bilibili.com/video/BV1t3411e7pH/

详询 微信1：egvh56ufy7hh ，微信2：dabocode 。承接商业项目、课设、毕设和论文，包括但不限于Web、APP、小程序等，课设、毕设提供远程部署和不限次数代码解答！

项目简介

本项目前后端分离，前端基于Vue+Vue-router+Vuex+Element-ui+Axios，参考小米商城实现。后端基于Node.js(Koa框架)+Mysql实现。

前端包含了11个页面：首页、登录、注册、全部商品、商品详情页、关于我们、我的收藏、购物车、订单结算页面、我的订单以及错误处理页面。

实现了商品的展示、商品分类查询、关键字搜索商品、商品详细信息展示、登录、注册、用户购物车、订单结算、用户订单、用户收藏列表以及错误处理功能。

后端采取了MVC模式，根据前端需要的数据分模块设计了相应的接口、控制层、数据持久层。
技术栈

    前端：Vue+Vue-router+Vuex+Element-ui+Axios

    后端：Node.js、Koa框架

    数据库：Mysql

功能模块
登录

页面使用了element-ui的Dialog实现弹出蒙版对话框的效果，登录按钮设置在App.vue根组件，通过vuex中的showLogin状态控制登录框是否显示。

这样设计是为了既可以通过点击页面中的按钮登录，也可以是用户访问需要登录验证的页面或后端返回需要验证登录的提示后自动弹出登录框，减少了页面的跳转，简化用户操作。

用户输入的数据往往是不可靠的，所以本项目前后端都对登录信息进行了校验，前端基于element-ui的表单校验方式，自定义了校验规则进行校验。
注册

页面同样使用了element-ui的Dialog实现弹出蒙版对话框的效果，注册按钮设置在App.vue根组件，通过父子组件传值控制注册框是否显示。

用户输入的数据往往是不可靠的，所以本项目前后端同样都对注册信息进行了校验，前端基于element-ui的表单校验方式，自定义了校验规则进行校验。
首页

首页主要是对商品的展示，有轮播图展示推荐的商品，分类别对热门商品进行展示。
全部商品

全部商品页面集成了全部商品展示、商品分类查询，以及根据关键字搜索商品结果展示。
商品详情页

商品详情页主要是对某个商品的详细信息进行展示，用户可以在这里把喜欢的商品加入购物车或收藏列表。
我的购物车

购物车采用vuex实现，页面效果参考了小米商城的购物车。

详细实现过程请看：基于Vuex实现小米商城购物车
订单结算

用户在购物车选择了准备购买的商品后，点击“去结算”按钮，会来到该页面。 用户在这里选择收货地址，确认订单的相关信息，然后确认购买。
我的收藏

用户在商品的详情页，可以通过点击加入 喜欢 按钮，把喜欢的商品加入到收藏列表。
我的订单

对用户的所有订单进行展示。
