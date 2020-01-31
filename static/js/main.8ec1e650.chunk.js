(this["webpackJsonpgame-library-react"]=this["webpackJsonpgame-library-react"]||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);a(25);var n=a(1),r=a.n(n),l=a(7),s=a.n(l),c=a(21),m=a(23),i=a(8),o=a(9),u=a(12),d=a(10),p=a(13),h=a(22),g=a.n(h),b=function(e){var t=e.onNewGameClick;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand h1"},"Game Library"),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("button",{onClick:t,type:"button",className:"modal-toggle btn btn-outline-success"},"New Game"))))},E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={minutes:0},a.onMinutesChange=function(e){a.setState({minutes:e.target.value})},a.onDelete=function(){a.props.onDelete(a.props.game.id)},a.onAddTime=function(){a.props.onAddTime(a.props.game.id,a.state.minutes)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4"},r.a.createElement("article",{className:"card"},r.a.createElement("section",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.game.title),r.a.createElement("h6",{className:"card-subtitle mb-2"},"Genre: ",this.props.game.genre),r.a.createElement("h6",{className:"card-subtitle mb-2"},"Price: \u20ac",this.props.game.price),r.a.createElement("h6",{className:"card-subtitle mb-3"},"Hours Played: ",this.props.game.hoursPlayed.toFixed(2)),r.a.createElement("p",{className:"card-text"},this.props.game.description),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"mr-2"},r.a.createElement("button",{onClick:this.onDelete,className:"btn btn-outline-danger remove-game"},"Remove")),r.a.createElement("div",{className:"mr-1"},r.a.createElement("button",{onClick:this.onAddTime,className:"btn btn-outline-primary add-time"},"Add Time")),r.a.createElement("div",{className:"w-25"},r.a.createElement("label",{htmlFor:"minutes",className:"sr-only"},"Minutes Played"),r.a.createElement("input",{onChange:this.onMinutesChange,value:this.state.minutes,type:"number",name:"minutes",className:"form-control",placeholder:"Mins"}))))))}}]),t}(r.a.Component),v=function(e){var t=e.games,a=e.onDelete,n=e.onAddTime,l=t.map((function(e,t){return r.a.createElement(E,{onDelete:a,onAddTime:n,key:t,game:e})})).reduce((function(e,t,a){var n;return a%3===0?(n=[],e.push(n),n.push(t)):n.push(t),e}),[]).map((function(e,t){return r.a.createElement("div",{key:t,className:"row mt-3"},e)}));return r.a.createElement("div",null,r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("header",{className:"col"},r.a.createElement("h2",{className:"h2"},"Games"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("section",{className:"games"},l)))))},f=a(46),N=a(42),y=a(43),C=a(44),k=a(45),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state)},a.state={title:"",genre:"",price:"",description:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f.a,{isOpen:this.props.modal,toggle:this.props.toggle},r.a.createElement(N.a,{toggle:this.props.toggle},"Modal title"),r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement(y.a,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title,type:"text",name:"title",id:"title",className:"form-control",placeholder:"Enter Title",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"genre"},"Genre"),r.a.createElement("input",{onChange:function(t){return e.setState({genre:t.target.value})},value:this.state.genre,type:"text",name:"genre",id:"genre",className:"form-control",placeholder:"Enter Genre",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{onChange:function(t){return e.setState({price:t.target.value})},value:this.state.price,type:"number",name:"price",id:"price",className:"form-control",placeholder:"In \u20ac",step:"0.01",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description,name:"description",id:"sescription",rows:"3",className:"form-control",placeholder:"Enter Description",required:!0}))),r.a.createElement(C.a,null,r.a.createElement(k.a,{color:"primary",type:"submit",onClick:this.props.toggle},"Add Game")," ",r.a.createElement(k.a,{color:"secondary",onClick:this.props.toggle},"Cancel")))))}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,games:[]},a.onNewGameClick=function(){a.setState({modal:!a.state.modal})},a.onAddGame=function(e){var t=Object(m.a)(a.state.games);t.push(Object(c.a)({},e,{id:g()(),hoursPlayed:0})),a.setState({games:t})},a.onDeleteGame=function(e){var t=a.state.games.filter((function(t){return t.id!==e}));a.setState({games:t})},a.onAddTime=function(e,t){var n=+t/60;a.setState({games:a.state.games.map((function(t){return t.id===e?Object.assign({},t,{hoursPlayed:t.hoursPlayed+n}):t}))})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{onNewGameClick:this.onNewGameClick}),r.a.createElement(v,{onDelete:this.onDeleteGame,onAddTime:this.onAddTime,games:this.state.games}),r.a.createElement(O,{onSubmit:this.onAddGame,modal:this.state.modal,toggle:this.onNewGameClick}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(j,null),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8ec1e650.chunk.js.map