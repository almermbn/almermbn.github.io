webpackJsonp([1],{0:function(t,s){},"4jMj":function(t,s){},"7Otq":function(t,s,e){t.exports=e.p+"static/img/logo.3b30653.png"},BKIz:function(t,s){},HsPs:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={name:"App",data:function(){return{backDisabled:"",showBottomNavBar:"",showDeleteStatistics:"",credentials:""}},mounted:function(){this.backDisabled="/home"==this.$route.path||"/"==this.$route.path,this.showBottomNavBar="/"!=this.$route.path,"/statistics"==this.$route.path?this.showDeleteStatistics=!0:this.showDeleteStatistics=!1;var t=localStorage.getItem("userLogin");if(t){var s=JSON.parse(t);this.credentials=s}else this.$router.replace("/")},watch:{"$route.path":function(t){this.backDisabled="/home"==t||"/"==t,this.showBottomNavBar="/"!=t,"/statistics"==this.$route.path?this.showDeleteStatistics=!0:this.showDeleteStatistics=!1;var s=localStorage.getItem("userLogin");if(s||"/"==t){var e=JSON.parse(s);this.credentials=e}else this.danger("Houve um problema ao recuperar os dados do usuário. Efetue o login novamente."),this.$router.replace("/")}},methods:{danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},back:function(){"/home"!=this.$route.path&&"/"!=this.$route.path&&this.$router.go(-1)},leave:function(){localStorage.setItem("userLogin",""),this.$router.replace("/")},confirmDeleteData:function(){var t=this;this.$dialog.confirm({title:"Apagar estatísticas do jogador ?",message:"Deseja <b>apagar</b> as <b>estatísticas</b> ? Esta ação <b>não</b> poderá ser desfeita.",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fas",confirmText:"Apagar",cancelText:"Cancelar",onConfirm:function(){return t.$toast.open("Dados apagados com sucesso!")}})}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("nav",{directives:[{name:"show",rawName:"v-show",value:t.showBottomNavBar,expression:"showBottomNavBar"}],staticClass:"navbar is-dark is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item navbar-center"},[e("div",{staticClass:"buttons"},[e("a",{staticClass:"button is-danger"},[t._m(0),t._v(" "),e("span",[t._v(t._s(t.credentials.user))])])])])])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("router-view")],1),t._v(" "),e("nav",{directives:[{name:"show",rawName:"v-show",value:t.showBottomNavBar,expression:"showBottomNavBar"}],staticClass:"navbar is-dark is-fixed-bottom",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item navbar-center"},[e("div",{staticClass:"buttons"},[e("a",{staticClass:"button",attrs:{disabled:t.backDisabled},on:{click:t.back}},[t._m(1),t._v(" "),e("span",[t._v("Voltar")])]),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:t.showDeleteStatistics,expression:"showDeleteStatistics"}],staticClass:"button is-danger",on:{click:t.confirmDeleteData}},[t._m(2),t._v(" "),e("span",[t._v("Apagar Estatísticas")])]),t._v(" "),e("a",{staticClass:"button is-danger",on:{click:t.leave}},[t._m(3),t._v(" "),e("span",[t._v("Sair")])])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-arrow-left"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-trash-alt"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-power-off"})])}]};var r=e("VU/8")(i,o,!1,function(t){e("nk+1")},null,null).exports,n=e("/ocq"),l=e("mvHQ"),c=e.n(l),h={name:"Login",data:function(){return{login:"",pwd:"",isLogin:!0,userRegister:"",userPwd:"",loggedIn:!1,loading:!1,transitionLogin:"flipInY",transitionRegister:"flipOutY"}},mounted:function(){this.checkExistentUser()},methods:{toggleRegister:function(){var t=this;this.isLogin=!this.isLogin,this.isLogin?(this.transitionRegister="flipOutY",setTimeout(function(){t.transitionLogin="flipInY"},700)):(this.transitionLogin="flipOutY",setTimeout(function(){t.transitionRegister="flipInY"},700))},doLogin:function(){var t=this;if(this.isValidLogin()){this.loading=!1,this.loading=!0;var s={user:this.login,pwd:this.pwd};this.$http.post(this.$remoteUrl+"api/login",s).then(function(e){var a=e.data;a.saveOk?(localStorage.setItem("userLogin",c()(s)),t.loading=!1,t.success(a.message),t.loggedIn=!0,t.$router.push("/home")):(t.danger(a.message),t.loading=!1)},function(t){console.log(t.data.message),this.loading=!1})}},doRegister:function(){var t=this;if(this.isValidRegister()){var s={user:this.userRegister,pwd:this.userPwd};this.loading=!0,this.$http.post(this.$remoteUrl+"api/register",s).then(function(e){var a=e.data;a.saveOk?(t.toggleRegister(),t.login=s.user,t.pwd=s.pwd,localStorage.setItem("userLogin",c()(s)),t.loading=!1,t.success("Cadastro efetuado com sucesso!")):(t.danger(a.message),t.loading=!1)},function(t){console.log(t.data.message),this.loading=!1})}},isValidLogin:function(){return this.login?!!this.pwd||(this.$refs.pwd.focus(),this.danger("Insira uma senha"),!1):(this.$refs.login.focus(),this.danger("Insira um usuário"),!1)},isValidRegister:function(){if(!this.userRegister)return this.$refs.userRegister.focus(),this.danger("Insira um usuário"),!1;if(this.userRegister.length<4)return this.$refs.userRegister.focus(),this.danger("O nome do usuário deve conter pelo menos 4 caracteres"),!1;if(this.userRegister&&this.userRegister.length>=4){if(!this.userPwd)return this.$refs.userPwd.focus(),this.danger("Insira uma senha"),!1;if(this.userPwd.length<6)return this.$refs.userPwd.focus(),this.danger("A senha deve conter pelo menos 6 caracteres"),!1}return!0},danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(t){this.$toast.open({message:t,type:"is-success"})},checkExistentUser:function(){var t=localStorage.getItem("userLogin");if(t){var s=JSON.parse(t);this.login=s.user,this.pwd=s.pwd,this.doLogin()}}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"wrapper"}},[a("transition",{attrs:{name:t.transitionLogin}},[a("section",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"hero is-fullheight animated",class:t.transitionLogin},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("h3",{staticClass:"title has-text-grey"},[t._v("Login")]),t._v(" "),a("p",{staticClass:"subtitle has-text-grey"},[t._v("Efetue seu login e senha para continuar.")]),t._v(" "),a("div",{staticClass:"box"},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e("7Otq")}})]),t._v(" "),a("form",[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"login",attrs:{placeholder:"Usuário",type:"text","icon-pack":"fas",icon:"user",size:"is-large"},model:{value:t.login,callback:function(s){t.login=s},expression:"login"}})],1)]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"pwd",attrs:{placeholder:"Senha",type:"password","icon-pack":"fas",icon:"key",size:"is-large","password-reveal":""},model:{value:t.pwd,callback:function(s){t.pwd=s},expression:"pwd"}})],1)]),t._v(" "),a("button",{staticClass:"button is-block is-dark is-large is-fullwidth",on:{click:t.doLogin}},[a("b-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{pack:"fas",icon:"sync-alt","custom-class":"fa-spin"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("Login")])],1)])]),t._v(" "),a("p",{staticClass:"button is-text"},[a("a",{on:{click:t.toggleRegister}},[t._v("Cadastrar")])])])])])])]),t._v(" "),a("transition",{attrs:{name:t.transitionRegister}},[a("section",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"hero is-fullheight animated",class:t.transitionRegister},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("h3",{staticClass:"title has-text-grey"},[t._v("Cadastrar")]),t._v(" "),a("p",{staticClass:"subtitle has-text-grey"},[t._v("Informe seus dados para o cadastro.")]),t._v(" "),a("div",{staticClass:"box"},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e("7Otq")}})]),t._v(" "),a("form",[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"userRegister",attrs:{placeholder:"Usuário",type:"text","icon-pack":"fas",icon:"user",size:"is-large"},model:{value:t.userRegister,callback:function(s){t.userRegister=s},expression:"userRegister"}})],1)]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"userPwd",attrs:{placeholder:"Senha",type:"password","icon-pack":"fas",icon:"key",size:"is-large","password-reveal":""},model:{value:t.userPwd,callback:function(s){t.userPwd=s},expression:"userPwd"}})],1)]),t._v(" "),a("button",{staticClass:"button is-block is-dark is-large is-fullwidth",on:{click:t.doRegister}},[a("b-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{pack:"fas",icon:"sync-alt","custom-class":"fa-spin"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("Cadastrar")])],1)])]),t._v(" "),a("p",{staticClass:"button is-text"},[a("a",{on:{click:t.toggleRegister}},[t._v("Voltar")])])])])])])])],1)},staticRenderFns:[]};var u=e("VU/8")(h,d,!1,function(t){e("BKIz")},"data-v-6a94276f",null).exports,m={name:"Home",data:function(){return{credentials:""}},methods:{danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(){this.$toast.open({message:"Cadastro efetuado com sucesso!",type:"is-success"})},goTo:function(t){this.$router.push(t)},leave:function(){localStorage.setItem("userLogin",""),this.goTo("/")}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("section",{staticClass:"hero is-fullheight"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",{staticClass:"title has-text-grey"},[t._v("Menu")]),t._v(" "),e("div",{staticClass:"box"},[e("form",[e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/registerMatch")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-bowling-ball"})]),t._v(" "),e("span",[t._v("Registrar partida")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/statistics")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-chart-line"})]),t._v(" "),e("span",[t._v("Estatísticas")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/oils")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-oil-can"})]),t._v(" "),e("span",[t._v("Padrões de óleo")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/playingArea")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-calculator"})]),t._v(" "),e("span",[t._v("Estimar Lançamento")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:t.leave}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-power-off"})]),t._v(" "),e("span",[t._v("Sair")])])])],1)])])])])])])},staticRenderFns:[]};var p=e("VU/8")(m,f,!1,function(t){e("HsPs")},"data-v-6bead4ec",null).exports,g=e("jhCd"),v=e.n(g),b={components:{highcharts:g.Chart},name:"Home",data:function(){return{matchArgs:[],credentials:"",matchDay:"12/11/2018 12:00",chartMatchOptions:{title:{text:"Partida do dia 12/11/2018 12:00"},yAxis:{title:{text:""},plotLines:[{value:0,width:1,color:"#808080"}]},credits:{enabled:!1},series:[{name:"Pinos",marker:{symbol:"circle"},data:[9,10,7,10,9,10,10,7,10,10,8]},{name:"Strikes",marker:{symbol:"circle"},data:[0,1,0,0,0,1,0,0,1,1,0]},{name:"Spares",marker:{symbol:"circle"},data:[0,0,0,1,0,0,1,0,0,0,0]}]},chartGamesOptions:{title:{text:"Partida do dia 12/11/2018"},yAxis:{title:{text:""},plotLines:[{value:0,width:1,color:"#808080"}]},credits:{enabled:!1},series:[{name:"Pinos",marker:{symbol:"circle"},data:[9,10,7,10,9,10,10,7,10,10,8]},{name:"Strikes",marker:{symbol:"circle"},data:[0,1,0,0,0,1,0,0,1,1,0]},{name:"Spares",marker:{symbol:"circle"},data:[0,0,0,1,0,0,1,0,0,0,0]}]}}},watch:{matchDay:function(){this.updateMatchArgs()}},methods:{updateMatchArgs:function(){this.chartMatchOptions.title.text="Partida do dia "+this.matchDay},danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(){this.$toast.open({message:"Cadastro efetuado com sucesso!",type:"is-success"})}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("section",{staticClass:"hero is-fullheight"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",{staticClass:"title has-text-grey"},[t._v("Estatísticas")]),t._v(" "),e("div",{staticClass:"box"},[e("b-field",[e("b-select",{attrs:{placeholder:"Select a character",icon:"calendar","icon-pack":"fas",expanded:""},model:{value:t.matchDay,callback:function(s){t.matchDay=s},expression:"matchDay"}},[e("option",{attrs:{value:"12/11/2018 12:00"}},[t._v("12/11/2018 12:00")]),t._v(" "),e("option",{attrs:{value:"12/11/2018 10:30"}},[t._v("12/11/2018 10:30")]),t._v(" "),e("option",{attrs:{value:"11/11/2018 13:00"}},[t._v("11/11/2018 13:00")])])],1),t._v(" "),e("highcharts",{attrs:{options:t.chartMatchOptions,updateArgs:t.matchArgs}})],1),t._v(" "),e("div",{staticClass:"box"},[e("highcharts",{attrs:{options:t.chartGamesOptions}})],1)])])])])])},staticRenderFns:[]};var w=e("VU/8")(b,C,!1,function(t){e("p1E2")},"data-v-4e4483b1",null).exports,_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("section",{staticClass:"hero is-fullheight"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",{staticClass:"title has-text-grey"},[t._v("Estimar Lançamento")]),t._v(" "),e("div",{staticClass:"box list-item"},[e("b-field",{attrs:{label:"",type:""}},[e("b-input",{attrs:{placeholder:"Comprimento do óleo","icon-pack":"fas",icon:"calculator",type:"number",min:"32",max:"44"},on:{input:t.calculate},model:{value:t.oil,callback:function(s){t.oil=s},expression:"oil"}})],1)],1),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"p"}},t._l(4,function(s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],key:s,staticClass:"box"},[e("img",{attrs:{src:"https://via.placeholder.com/350x150"}})])})),t._v(" "),t._m(0)],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box"},[s("iframe",{attrs:{width:"100%",height:"260",src:"https://www.youtube.com/embed/lHIpf_09ZAc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}]};var x=e("VU/8")({name:"PlayingArea",data:function(){return{oil:"",showData:""}},methods:{calculate:function(t){t>=32&&t<=44?(this.showData=!0,this.success()):this.showData=!1},success:function(){this.$toast.open({message:"Lançamento calculado",type:"is-success"})}}},_,!1,function(t){e("xqIp")},"data-v-7ac3add0",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"wrapper"}},[s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("h3",{staticClass:"title has-text-grey"},[this._v("Padrões de óleo")]),this._v(" "),s("div",{staticClass:"box list-item"},[s("p",{staticClass:"is-danger"},[this._v(" Em construção")])])])])])])])}]};var y=e("VU/8")({name:"Oils",data:function(){return{}},methods:{}},k,!1,function(t){e("4jMj")},"data-v-62fd971a",null).exports,S={name:"RegisterMatch",data:function(){return{firstData:[],firstColumns:[{field:"name",label:"Nome",width:"40",numeric:!0},{field:"frame_1",label:"1"},{field:"frame_2",label:"2"},{field:"frame_3",label:"3"},{field:"frame_4",label:"4"},{field:"frame_5",label:"5"}],secondData:[],secondColumns:[{field:"name",label:"Nome",width:"40",numeric:!0},{field:"frame_6",label:"6"},{field:"frame_7",label:"7"},{field:"frame_8",label:"8"},{field:"frame_9",label:"9"},{field:"frame_10",label:"10"}],rolls:[],currentRoll:0,frameIndex:0,frameTable:1,scoreOne:"",scoreTwo:"",matchComplete:!1,tailedResults:!1,loading:!1,matchScore:0,tenSpare:!1,credentials:""}},mounted:function(){this.credentials=localStorage.getItem("userLogin")?JSON.parse(localStorage.getItem("userLogin")):null},methods:{registerMatch:function(){var t=this;if(this.credentials){var s={user:this.credentials.user,rolls:this.rolls,total:this.matchScore,date:new Date};this.loading=!0,this.$http.post($remoteUrl+"api/registerMatch",s).then(function(s){var e=s.data;e.saveOk?(t.success(e.message),t.loading=!1,t.resetGame()):(t.danger(e.message),t.loading=!1)},function(t){console.log(t.data.message),this.loading=!1})}},resetGame:function(){this.rolls=[],this.currentRoll=0,this.frameIndex=0,this.matchComplete=!1,this.tailedResults=!1,this.frameTable=1,this.scoreOne=0,this.scoreTwo=0,this.matchScore=0,this.firstData=[],this.secondData=[],this.tenSpare=!1},roll:function(t){this.rolls[this.currentRoll++]=t},rollMany:function(t,s){for(var e=0;e<t;e++)this.roll(s)},sumOfBallsInFrame:function(){return this.rolls[this.frameIndex]+this.rolls[this.frameIndex+1]},spareBonus:function(){return this.rolls[this.frameIndex+2]},strikeBonus:function(){return this.rolls[this.frameIndex+1]+this.rolls[this.frameIndex+2]},isStrike:function(){return 10===this.rolls[this.frameIndex]},isSpare:function(){return this.rolls[this.frameIndex]+this.rolls[this.frameIndex+1]===10},score:function(){for(var t=0,s=0;s<10;s++)this.isStrike()?(t+=10+this.strikeBonus(),this.frameIndex++):this.isSpare()?(t+=10+this.spareBonus(),this.frameIndex+=2):(t+=this.sumOfBallsInFrame(),this.frameIndex+=2);return t},confirmDialog:function(t){if(12==this.frameTable&&(this.scoreTwo=0),this.scoreOne&&this.scoreTwo&&parseInt(this.scoreOne)+parseInt(this.scoreTwo)>10)return this.danger("A soma dos campos não pode ser maior a 10."),!1;10==parseInt(this.scoreOne)&&0==parseInt(this.scoreTwo)?this.doConfirm(!0):this.scoreOne&&this.scoreTwo||t||12==this.frameTable?this.doConfirm(t):11==this.frameTable&&10!=this.rolls[this.rolls.length-1]?this.doConfirm(t):this.danger('Selecione "Srike" ou preencha os campos.')},doConfirm:function(t){var s=this;this.$dialog.confirm({message:t?"Confirmar frame <b>"+this.frameTable+"</b> com <b>STRIKE</b> ?":"Confirmar frame <b>"+this.frameTable+"</b>  ?",confirmText:"Sim",cancelText:"Cancelar",type:"is-dark",onConfirm:function(){if(t?s.confirmFrame([10]):s.confirmFrame([parseInt(s.scoreOne),parseInt(s.scoreTwo)]),s.$toast.open("Frame "+s.frameTable+" confirmado."),10!=s.frameTable&&11!=s.frameTable||10==s.rolls[s.rolls.length-1]||s.rolls[s.rolls.length-1]+s.rolls[s.rolls.length-2]==10||(s.matchComplete=!0),10==s.frameTable&&10!=s.rolls[s.rolls.length-1]&&(s.tenSpare=!0,s.scoreTwo=0),(12==s.frameTable&&10!=s.rolls[s.rolls.length-2]||12==s.frameTable&&10==s.rolls[s.rolls.length-2]&&10==s.rolls[s.rolls.length-1])&&(s.matchComplete=!0),s.matchComplete){s.tenSpare&&s.rolls.pop();for(var e=0;e<s.rolls.length;e++)s.roll(s.rolls[e]);s.matchScore=s.score(),s.tailResults()}else s.frameTable++}})},tailResults:function(){var t=1;if(this.credentials.user){for(var s={},e=0,a=0;a<this.rolls.length&&t<=5;a++)10==this.rolls[a]?s["frame_"+t]=this.rolls[a].toString():(s["frame_"+t]=this.rolls[a].toString()+" "+this.rolls[a+1].toString(),a++),t++,e=a+1;s.name=this.credentials.user,this.firstData.push(s),t=6;var i={};for(a=e;a<this.rolls.length&&t<=10;a++)10==t&&10==this.rolls[a]?i["frame_"+t]=this.rolls[a].toString()+" "+this.rolls[a+1].toString()+" "+this.rolls[a+2].toString():10==this.rolls[a]?i["frame_"+t]=this.rolls[a].toString():(i["frame_"+t]=10==t?this.rolls[a].toString()+" "+this.rolls[a+1].toString()+" "+this.rolls[a+2].toString():this.rolls[a].toString()+" "+this.rolls[a+1].toString(),a++),t++;i.name=this.credentials.user,this.secondData.push(i),this.tailedResults=!0}},confirmResetGame:function(){var t=this;this.$dialog.confirm({message:"Confirma reiniciar partida ?",confirmText:"Sim",cancelText:"Cancelar",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fas",onConfirm:function(){t.resetGame(),t.success("Partida reiniciada com sucesso")}})},danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(t){this.$toast.open({message:t,type:"is-success"})},confirmFrame:function(t){1==t.length?this.rolls.push(10):(this.rolls.push(t[0]),this.rolls.push(t[1])),this.scoreOne="",this.scoreTwo=""}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("section",{staticClass:"hero is-fullheight"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",{staticClass:"title has-text-grey"},[t._v("Registrar partida")]),t._v(" "),e("div",{staticClass:"box list-item"},[e("p",{staticClass:"is-danger"},[t._v("Frame atual da partida : "+t._s(t.frameTable))]),t._v(" "),e("b-field",[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-dark",on:{click:function(s){t.confirmDialog(!0)}}},[t._v("Strike")])]),t._v(" "),e("p",{staticClass:"control"},[e("b-input",{attrs:{type:"number",placeholder:"5"},model:{value:t.scoreOne,callback:function(s){t.scoreOne=s},expression:"scoreOne"}})],1),t._v(" "),e("p",{staticClass:"control"},[e("b-input",{attrs:{type:"number",placeholder:"5",disabled:12==t.frameTable||t.tenSpare},model:{value:t.scoreTwo,callback:function(s){t.scoreTwo=s},expression:"scoreTwo"}})],1),t._v(" "),e("p",{staticClass:"control"},[e("button",{staticClass:"button is-dark",on:{click:function(s){t.confirmDialog()}}},[t._v("Ok")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large is-dark is-fullwidth",on:{click:t.confirmResetGame}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-times-circle"})]),t._v(" "),e("span",[t._v("Resetar partida")])])]),t._v(" "),e("b-field",{directives:[{name:"show",rawName:"v-show",value:t.matchComplete&&t.tailedResults,expression:"matchComplete && tailedResults"}]},[e("b-table",{attrs:{data:t.firstData,columns:t.firstColumns}})],1),t._v(" "),e("b-field",{directives:[{name:"show",rawName:"v-show",value:t.matchComplete&&t.tailedResults,expression:"matchComplete && tailedResults"}]},[e("b-table",{attrs:{data:t.secondData,columns:t.secondColumns}})],1),t._v(" "),e("b-field",{directives:[{name:"show",rawName:"v-show",value:t.matchComplete&&t.tailedResults,expression:"matchComplete && tailedResults"}]},[e("h1",{staticClass:"title"},[e("h1",{staticClass:"title"},[e("a",{staticClass:"button is-success is-large is-inverted"},[t._v(t._s(t.matchScore))])])])]),t._v(" "),t.matchComplete&&t.tailedResults?e("b-field",[e("button",{staticClass:"button is-block is-dark is-large is-fullwidth",on:{click:t.registerMatch}},[e("b-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{pack:"fas",icon:"sync-alt","custom-class":"fa-spin"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("Salvar partida")])],1)]):t._e()],1)])])])])])},staticRenderFns:[]};var $=e("VU/8")(S,R,!1,function(t){e("hI5e")},"data-v-0d131d26",null).exports;a.default.use(n.a);var I=new n.a({routes:[{path:"/",name:"Login",component:u},{path:"/home",name:"Home",component:p,mode:"abstract"},{path:"/statistics",name:"Statistics",component:w,mode:"abstract"},{path:"/playingArea",name:"PlayingArea",component:x,mode:"abstract"},{path:"/oils",name:"Oils",component:y,mode:"abstract"},{path:"/registerMatch",name:"RegisterMatch",component:$,mode:"abstract"}]}),T=e("O3Oo"),D=e.n(T),O=e("8+8L");a.default.use(D.a),a.default.use(O.a),a.default.use(v.a),a.default.config.productionTip=!1,a.default.prototype.$remoteUrl="",new a.default({el:"#app",router:I,components:{App:r},template:"<App/>"})},hI5e:function(t,s){},"nk+1":function(t,s){},p1E2:function(t,s){},xqIp:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.09f2c1215956c5dc64a5.js.map