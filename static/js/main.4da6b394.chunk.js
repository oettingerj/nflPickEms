(this.webpackJsonpnfl_pickems=this.webpackJsonpnfl_pickems||[]).push([[0],{32:function(e,t,r){},51:function(e,t,r){},54:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),c=r.n(n),A=r(20),s=r.n(A),h=(r(32),r(23)),C=r(4),i=r.n(C),l=r(9),j=r(11),o=r(21),S=r(25),p=r(24),O=r(22),b=r.n(O),d="https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=",m=[401220360,401220167,401220321,401220272,401220318,401220198,401220150,401220185,401220214,401220238,401220191,401220305,401220227,401220335],E=[["SEA","PHI","NO","CIN","CAR","PIT","BAL","HOU","MIA","LAC","IND","MIN","KC","LAR"],["ARI","CLE","NO","CIN","DET","PIT","BAL","NE","MIA","LAC","IND","MIN","KC","TB"],["ARI","CLE","NO","CIN","CAR","PIT","TEN","NE","MIA","LAC","GB","MIN","KC","TB"],["ARI","CLE","NO","CIN","DET","PIT","TEN","HOU","MIA","LAC","GB","MIN","KC","TB"],["SEA","CLE","ATL","CIN","CAR","PIT","BAL","NE","MIA","LAC","IND","MIN","KC","TB"],["ARI","PHI","NO","CIN","CAR","PIT","TEN","NE","MIA","LAC","GB","MIN","KC","LAR"],["SEA","CLE","NO","CIN","CAR","PIT","BAL","NE","MIA","LAC","IND","MIN","KC","LAR"],["ARI","CLE","ATL","CIN","CAR","PIT","TEN","NE","MIA","LAC","GB","MIN","KC","TB"],["SEA","CLE","NO","CIN","DET","PIT","BAL","NE","MIA","LAC","GB","MIN","KC","TB"],["SEA","PHI","NO","CIN","DET","PIT","BAL","NE","MIA","LAC","GB","MIN","KC","TB"]],T=[[5,3,8,6,11,14,4,7,12,13,2,10,9,1],[2,8,11,3,4,14,5,7,6,13,1,9,10,12],[1,7,4,8,10,14,5,13,11,12,3,9,6,2],[7,6,10,3,9,14,1,4,5,11,8,12,13,2],[8,12,1,2,9,14,7,6,11,10,3,13,5,4],[6,1,9,3,5,14,4,10,8,13,7,12,11,2],[1,5,7,6,4,14,9,8,12,13,3,11,10,2],[11,9,4,5,2,14,1,10,3,13,8,6,7,12],[7,8,6,4,3,14,10,5,9,11,2,13,12,1],[10,3,5,2,1,14,6,11,7,9,8,12,13,4]],I=r(55),y=(r(51),function(e){Object(S.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(j.a)(this,r),(a=t.call(this,e)).generateTableData=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(m,E,T);case 2:t=e.sent,a.setState({tableData:t});case 4:case"end":return e.stop()}}),e)}))),a.state={tableData:null},a}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.generateTableData()}},{key:"render",value:function(){return Object(a.jsxs)(I.a,{hover:!0,bordered:!0,responsive:!0,size:"sm",className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Home Team"}),Object(a.jsx)("th",{children:"Away Team"}),Object(a.jsx)("th",{children:"Home Win %"}),Object(a.jsx)("th",{children:"Away Team %"}),Object(a.jsx)("th",{children:"Avi"}),Object(a.jsx)("th",{children:"Willie"}),Object(a.jsx)("th",{children:"Josh"}),Object(a.jsx)("th",{children:"Alex"}),Object(a.jsx)("th",{children:"Chuck"}),Object(a.jsx)("th",{children:"Mike"}),Object(a.jsx)("th",{children:"Zach"}),Object(a.jsx)("th",{children:"Jasper"}),Object(a.jsx)("th",{children:"Jacob"}),Object(a.jsx)("th",{children:"Gauresh"})]})}),Object(a.jsx)("tbody",{children:this.state.tableData})]})}}]),r}(c.a.Component)),x=function e(t,r,a,n){Object(j.a)(this,e),this.homeTeam=t,this.awayTeam=r,this.homeWinProb=a,this.awayWinProb=n};function u(e){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(i.a.mark((function e(t){var r,a,n,c,A,s,h,C,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(d+t);case 2:if(r=e.sent,a=r.data,n=a.boxscore.teams[1].team.abbreviation,c=a.boxscore.teams[0].team.abbreviation,a.winprobability){e.next=12;break}return A=parseFloat(a.predictor.homeTeam.gameProjection),s=parseFloat(a.predictor.awayTeam.gameProjection),e.abrupt("return",new x(n,c,A,s));case 12:return h=a.winprobability[a.winprobability.length-1],C=parseFloat(h.homeWinPercentage),l=parseFloat(1-h.homeWinPercentage),e.abrupt("return",new x(n,c,1===C?100:C,1===l?100:l,0));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,r){return Q.apply(this,arguments)}function Q(){return(Q=Object(l.a)(i.a.mark((function e(t,r,n){var c,A,s,C,l,j,o,S,p,O,b,d,m,E,T,I,y,x,L,N,Q,U,k,K,J,B,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=new Array(r.length).fill(0),A=[],s=[],C=[],l=[],o=0;case 6:if(!(o<t.length)){e.next=15;break}return e.next=9,u(t[o]);case 9:for(j=e.sent,l.push(j),S=0;S<r.length;S++)"H"===r[S][o]?r[S][o]=j.homeTeam:"A"===r[S][o]&&(r[S][o]=j.awayTeam);case 12:o++,e.next=6;break;case 15:for(p=[],O=0;O<l.length;O++){for(b=[],C.push(l[O].homeTeam),s.push(l[O].awayTeam),A.push(l[O].homeWinProb),b.push([Object(a.jsx)("td",{children:l[O].homeTeam}),Object(a.jsx)("td",{children:l[O].awayTeam}),Object(a.jsx)("td",{children:l[O].homeWinProb}),Object(a.jsx)("td",{children:l[O].awayWinProb})]),d=0;d<r.length;d++)r[d][O]===l[O].homeTeam&&100===l[O].homeWinProb||r[d][O]===l[O].awayTeam&&100===l[O].awayWinProb?(b.push(Object(a.jsx)("td",{className:"bg-success",children:r[d][O]+" ("+n[d][O]+")"})),c[d]+=n[d][O]):r[d][O]===l[O].awayTeam&&100===l[O].homeWinProb||r[d][O]===l[O].homeTeam&&100===l[O].awayWinProb?b.push(Object(a.jsx)("td",{className:"bg-danger",children:r[d][O]+" ("+n[d][O]+")"})):b.push(Object(a.jsx)("td",{children:r[d][O]+" ("+n[d][O]+")"}));p.push(Object(a.jsx)("tr",{children:b}))}for((m=[]).push([Object(a.jsx)("td",{children:Object(a.jsx)("b",{children:"Score:"})}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{})]),E=0;E<c.length;E++)m.push(Object(a.jsx)("td",{children:c[E]}));for(p.push(Object(a.jsx)("tr",{children:m})),(T=[]).push([Object(a.jsx)("td",{children:Object(a.jsx)("b",{children:"WIN%"})}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{})]),x=new Array(r.length).fill(0),5e3,N=0;N<5e3;N++){for(L=new Array(r.length).fill(0),Q=0;Q<C.length;Q++)for(I=100*Math.random(),y=I<A[Q]?C[Q]:s[Q],U=0;U<r.length;U++)r[U][Q]===y&&(L[U]+=n[U][Q]);for(k=Math.max.apply(Math,Object(h.a)(L)),K=[],J=0;J<L.length;J++)L[J]===k&&K.push(J);for(B=0;B<K.length;B++)x[K[B]]+=1/K.length}for(v=0;v<r.length;v++)T.push(Object(a.jsx)("td",{children:Math.round(100*x[v]/5e3)}));return p.push(Object(a.jsx)("tr",{children:T})),e.abrupt("return",p);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U="data:image/jpeg;base64,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",k=r.p+"static/media/Zach.aa3a1f29.jpg",K=r(56);var J=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(K.a,{src:U,alt:"football",className:"football"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:" NFL PickEms "}),Object(a.jsxs)("div",{className:"winnerDiv",children:[Object(a.jsx)(K.a,{roundedCircle:!0,src:k,alt:"Zach",className:"winnerImg"}),Object(a.jsx)("h5",{children:" Reigning Champ: Zach Frischer "})]})]}),Object(a.jsx)(K.a,{src:U,alt:"football",className:"football"})]}),Object(a.jsx)(y,{})]})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.4da6b394.chunk.js.map