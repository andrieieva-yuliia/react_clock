(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),o=n(2),a=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=n(0),d=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={time:new Date},t.timerId=0,t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({time:new Date}),console.info(t.state.time.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.time.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);n(13);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={clockVisibility:!0,clockName:"Clock-0"},t.timerId=0,t.handleContextMenu=function(e){e.preventDefault(),t.setState({clockVisibility:!1})},t.handleClick=function(){t.setState({clockVisibility:!0})},t.currentTime=function(t){return t.toUTCString().slice(-12,-4)},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleContextMenu),document.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleContextMenu),document.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.clockVisibility&&Object(m.jsx)(d,{name:this.state.clockName})]})}}]),n}(u.a.Component);i.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ce06a098.chunk.js.map