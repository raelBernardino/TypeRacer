(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(9),s=a.n(r),c=a(7),i=a(2),l=a(3),h=a(5),d=a(4),u=a(6),p=a(0),m=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"completed-page"},o.a.createElement("span",{className:"completed-page_header"},"Completed"),o.a.createElement("button",{className:"completed-page_button",onClick:this.props.reset},"Play Again"))}}]),t}(n.Component),b=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={typeChallenges:[{text:"The quick brown fox jumps over the lazy dog.",completed:!1},{text:'"Remember it\'s a sin to kill a mockingbird." That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it.',completed:!1},{text:"I think we dream so we don\u2019t have to be apart for so long. If we\u2019re in each other\u2019s dreams, we can be together all the time.",completed:!1},{text:'Eddie pushed the money into Dominguez\'s palm. Then he walked out back to the storage area. A small "fishing hole" had been cut into the boardwalk planks years ago, and Eddie lifted the plastic cap. He tugged on a nylon line that dropped 80 feet to the sea. A piece of bologna was still attached.',completed:!1},{text:"\"You mean Dr. Carlisle Cullen's family?\" the tall, older boy asked before I could respond, much to Lauren's irritation. He was really closer to a man than a boy, and his voice was very deep.",completed:!1},{text:'Remember also your Creator in the days of your youth, before the evil days come and the years draw near of which you will say, "I have no pleasure in them"',completed:!1}],displayedChallenge:"",userType:"",challengeArr:[],correct:!0,completed:!1,background:{backgroundColor:""},timer:0,startTimer:!1},a._reset=a._reset.bind(Object(p.a)(Object(p.a)(a))),a._checkIfCompleted=a._checkIfCompleted.bind(Object(p.a)(Object(p.a)(a))),a._onChangeChecker=a._onChangeChecker.bind(Object(p.a)(Object(p.a)(a))),a._changeDisplayedWords=a._changeDisplayedWords.bind(Object(p.a)(Object(p.a)(a))),a._checkIfCorrect=a._checkIfCorrect.bind(Object(p.a)(Object(p.a)(a))),a._randomChallengePicker=a._randomChallengePicker.bind(Object(p.a)(Object(p.a)(a))),a._splitSentence=a._splitSentence.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._randomChallengePicker()}},{key:"_timer",value:function(){var e=this;setInterval(function(){e.setState({timer:e.state.timer+1}),console.log(e.state.timer)},1e3)}},{key:"_randomChallengePicker",value:function(){var e=this.state.typeChallenges,t=this.state.background,a=Math.floor(Math.random()*Math.floor(e.length));this.setState({displayedChallenge:e[a].text,userType:"",background:Object(c.a)({},t,{backgroundColor:"rgb(106, 250, 202)"})}),this._splitSentence(a)}},{key:"_splitSentence",value:function(e){var t=this.state.typeChallenges,a=t[e].text.split(""),n=t[e].text.split(" ").splice(0,6).join(" ");this.setState({challengeArr:a,displayedChallenge:n})}},{key:"_onChangeChecker",value:function(e){var t=this,a=e.target.value,n=a.split(""),o=a.split(" ");this.setState({userType:a},function(){return t._checkIfCompleted()}),this._checkIfCorrect(n),this._changeDisplayedWords(o)}},{key:"_changeDisplayedWords",value:function(e){for(var t=this.state.challengeArr.join("").split(" "),a=0;a<e.length;a++)e[a]===t[0]&&t.shift();this.setState({displayedChallenge:t.splice(0,6).join(" ")})}},{key:"_checkIfCorrect",value:function(e){for(var t=this.state.challengeArr,a=this.state.correct,n=this.state.background,o=0;o<e.length;o++)e.join("")===t.join("").slice(0,e.length)?this.setState({correct:a,background:Object(c.a)({},n,{backgroundColor:"rgb(106, 250, 202)"})}):this.setState({correct:!a,background:Object(c.a)({},n,{backgroundColor:"rgb(250, 106, 106)"})})}},{key:"_checkIfCompleted",value:function(){this.state.userType===this.state.challengeArr.join("")&&this.setState({completed:!this.state.completed,startTimer:!this.state.startTimer})}},{key:"_reset",value:function(){this.setState({completed:!this.state.completed}),this._randomChallengePicker()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"type-racer",style:this.state.background},this.state.completed?o.a.createElement(m,{reset:this._reset}):o.a.createElement("div",{className:"app"},o.a.createElement("span",{className:"app_text-header"},this.state.displayedChallenge),o.a.createElement("input",{className:"app_input",onChange:function(t){return e._onChangeChecker(t)},value:this.state.userType}),o.a.createElement("button",{className:"app_button",onClick:this._randomChallengePicker},"New")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4945def0.chunk.js.map