webpackJsonp([2,4],{0:function(e,t,n){"use strict";var l=n(30);n(29),n(28),n(137);var r=n(3),a=n(8),o=r.createClass({displayName:"App",render:function(){return r.createElement("div",null,r.createElement("h1",null,"App"),r.createElement("ul",null,r.createElement("li",null,r.createElement(l.Link,{to:"/about"},"About")),r.createElement("li",null,r.createElement(l.Link,{to:"/inbox"},"Inbox")),r.createElement("li",null,r.createElement(l.Link,{to:"/inbox1"},"Inbox111111111111"))),this.props.children)}}),c=r.createClass({displayName:"About",render:function(){return r.createElement("h3",null,"About")}}),u=r.createClass({displayName:"Inbox",render:function(){return r.createElement("div",null,r.createElement("h2",null,"Inbox"),r.createElement("ul",null,r.createElement("li",null,r.createElement(l.Link,{to:"/inbox/messages/2"},"2")),r.createElement("li",null,r.createElement(l.Link,{to:"/inbox/messages/3"},"3"))),this.props.children||"Welcome to your Inbox")}}),i=r.createClass({displayName:"Dashboard",render:function(){return r.createElement("div",null,"Welcome to the app!")}}),m=r.createClass({displayName:"Message",componentDidMount:function(){setTimeout(function(){l.browserHistory.push("/about")},5e3)},render:function(){return r.createElement("h3",null,"Message ",this.props.params.id)}}),s=r.createClass({displayName:"NoMatch",render:function(){return r.createElement("h3",null,"没有匹配的路径")}});a.render(r.createElement("div",null,r.createElement(l.Router,{history:l.hashHistory},r.createElement(l.Route,{path:"/",component:o},r.createElement(l.IndexRoute,{component:i}),r.createElement(l.Route,{path:"about",component:c,onLeave:function(){},onEnter:function(){}}),r.createElement(l.Route,{path:"inbox",component:u},r.createElement(l.Route,{path:"messages/:id",component:m}))),r.createElement(l.Route,{path:"*",component:s}))),document.getElementById("app"))},28:function(e,t){},29:function(e,t){},137:function(e,t){}});