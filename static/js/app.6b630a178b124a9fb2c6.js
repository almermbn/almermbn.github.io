webpackJsonp([1],{0:function(t,s){},"3JOW":function(t,s){},"7Otq":function(t,s,e){t.exports=e.p+"static/img/logo.3b30653.png"},AuKK:function(t,s){},BOGz:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i=e("mvHQ"),o=e.n(i),n={name:"App",data:function(){return{backDisabled:"",showBottomNavBar:"",showDeleteStatistics:"",credentials:"",reportActive:!1,isLoading:!1,problemData:""}},mounted:function(){this.backDisabled="/home"==this.$route.path||"/"==this.$route.path,this.showBottomNavBar="/"!=this.$route.path,"/statistics"==this.$route.path?this.showDeleteStatistics=!0:this.showDeleteStatistics=!1;var t=localStorage.getItem("userLogin");if(t){var s=JSON.parse(t);this.credentials=s}else this.$router.replace("/")},watch:{"$route.path":function(t){this.backDisabled="/home"==t||"/"==t,this.showBottomNavBar="/"!=t,"/statistics"==this.$route.path?this.showDeleteStatistics=!0:this.showDeleteStatistics=!1;var s=localStorage.getItem("userLogin");if(s||"/"==t){if(s){var e=JSON.parse(s);this.credentials=e}}else this.danger("Houve um problema ao recuperar os dados do usuário. Efetue o login novamente."),this.$router.replace("/")}},methods:{danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-success"})},back:function(){"/home"!=this.$route.path&&"/"!=this.$route.path&&this.$router.go(-1)},leave:function(){localStorage.setItem("userLogin",""),this.$router.replace("/")},reportProblem:function(){var t=this;this.isLoading=!0;var s={message:this.problemData,user:this.credentials.user};this.$http.post(this.$remoteUrl+"api/reportProblem",s).then(function(s){var e=s.data;e.saveOk&&(localStorage.setItem("userLogin",o()(s.data.object)),t.isLoading=!1,t.reportActive=!1,t.problemData="",t.success(e.message))},function(t){console.log(t.data.message),this.loading=!1})},loading:function(){this.loadingComponent=this.$loading.open()},stopLoading:function(){this.loadingComponent.close()},confirmDeleteData:function(){var t=this;this.$dialog.confirm({title:"Exlusão de estatísticas ?",message:"Deseja <b>apagar</b> as <b>estatísticas</b> ? Esta ação <b>não</b> poderá ser desfeita.",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fas",confirmText:"Apagar",cancelText:"Cancelar",onConfirm:function(){var s=localStorage.getItem("userLogin");if(s){t.loading();var e=JSON.parse(s);t.$http.post(t.$remoteUrl+"api/deleteMatches",e).then(function(s){t.stopLoading(),t.back(),t.success("Dados apagados com sucesso!")},function(t){this.danger("Falha ao apagar dados."),this.stopLoading()})}}})}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("b-modal",{attrs:{active:t.reportActive,scroll:"keep"},on:{"update:active":function(s){t.reportActive=s}}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("b-field",{attrs:{label:"Por favor, descreva o que aconteceu."}},[e("b-input",{attrs:{type:"textarea",minlength:"10",maxlength:"200",placeholder:"Meu problema foi ..."},model:{value:t.problemData,callback:function(s){t.problemData=s},expression:"problemData"}})],1),t._v(" "),e("button",{staticClass:"button is-block is-danger is-large is-fullwidth",attrs:{disabled:t.isLoading||!t.problemData.trim().length},on:{click:t.reportProblem}},[e("b-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{pack:"fas",icon:"sync-alt","custom-class":"fa-spin"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[t._v("Reportar")])],1)],1)])])]),t._v(" "),e("nav",{directives:[{name:"show",rawName:"v-show",value:t.showBottomNavBar,expression:"showBottomNavBar"}],staticClass:"navbar is-dark is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item navbar-center"},[e("div",{staticClass:"buttons",staticStyle:{"justify-content":"space-between"}},[e("button",{staticClass:"button is-danger",on:{click:function(s){t.reportActive=!0}}},[e("b-icon",{attrs:{pack:"fas",icon:"exclamation"}}),t._v(" "),e("span",[t._v("Problema?")])],1),t._v(" "),e("button",{staticClass:"button is-danger"},[e("b-icon",{attrs:{pack:"fas",icon:"user"}}),t._v(" "),e("span",[t._v(t._s(t.credentials.name?t.credentials.name:t.credentials.user))])],1)])])])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("router-view")],1),t._v(" "),e("nav",{directives:[{name:"show",rawName:"v-show",value:t.showBottomNavBar,expression:"showBottomNavBar"}],staticClass:"navbar is-dark is-fixed-bottom",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item navbar-center"},[e("div",{staticClass:"buttons",staticStyle:{"justify-content":"space-between"}},[e("button",{staticClass:"button",attrs:{disabled:t.backDisabled},on:{click:t.back}},[e("b-icon",{attrs:{pack:"fas",icon:"arrow-left"}}),t._v(" "),e("span",[t._v("Voltar")])],1),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.showDeleteStatistics,expression:"showDeleteStatistics"}],staticClass:"button is-danger",on:{click:t.confirmDeleteData}},[e("b-icon",{attrs:{pack:"fas",icon:"trash-alt"}}),t._v(" "),e("span",[t._v("Apagar")])],1),t._v(" "),e("button",{staticClass:"button is-danger",on:{click:t.leave}},[e("b-icon",{attrs:{pack:"fas",icon:"power-off"}}),t._v(" "),e("span",[t._v("Sair")])],1)])])])])],1)},staticRenderFns:[]};var l=e("VU/8")(n,r,!1,function(t){e("BOGz")},null,null).exports,c=e("/ocq"),d={name:"Login",data:function(){return{googleSignInParams:{client_id:"1053328724849-brrrvs33linuvotf20rc2bkvkikj2npq.apps.googleusercontent.com"},login:"",pwd:"",isLogin:!0,userRegister:"",userPwd:"",loggedIn:!1,loading:!1,transitionLogin:"flipInY",transitionRegister:"flipOutY",userName:"",userEmail:"",userLastName:"",googleProfile:""}},mounted:function(){this.checkExistentUser()},methods:{onSignInSuccess:function(t){this.googleProfile=t.getBasicProfile(),this.doGoogleRegister()},onSignInError:function(t){this.danger("Falha na autenticação com a google.")},clearRegisterData:function(){this.userName="",this.userLastName="",this.userEmail="",this.userRegister="",this.userPwd=""},toggleRegister:function(){var t=this;this.isLogin=!this.isLogin,this.isLogin?(this.transitionRegister="flipOutY",setTimeout(function(){t.transitionLogin="flipInY"},700)):(this.transitionLogin="flipOutY",setTimeout(function(){t.transitionRegister="flipInY"},700))},doLogin:function(){var t=this;if(this.isValidLogin()){this.loading=!0;var s={user:this.login.toLowerCase(),pwd:this.pwd};this.$http.post(this.$remoteUrl+"api/login",s).then(function(s){var e=s.data;e.saveOk?(localStorage.setItem("userLogin",o()(s.data.object)),t.loading=!1,t.success(e.message),t.loggedIn=!0,t.$router.push("/home")):(t.danger(e.message),t.loading=!1)},function(t){console.log(t.data.message),this.loading=!1})}},doRegister:function(){var t=this;if(this.isValidRegister()){var s={user:this.userRegister,pwd:this.userPwd,name:this.userName,lastName:this.userLastName,email:this.userEmail};this.loading=!0,this.$http.post(this.$remoteUrl+"api/register",s).then(function(e){var a=e.data;a.saveOk?(t.toggleRegister(),t.login=s.user,t.pwd=s.pwd,localStorage.setItem("userLogin",o()(s)),t.loading=!1,t.clearRegisterData(),t.success("Cadastro efetuado com sucesso!")):(t.danger(a.message),t.loading=!1)},function(t){console.log(t.data.message),this.loading=!1})}},doGoogleLogin:function(t){var s=this;this.$http.post(this.$remoteUrl+"api/login",t).then(function(t){var e=t.data;e.saveOk?(localStorage.setItem("userLogin",o()(t.data.object)),s.loading=!1,s.success(e.message),s.loggedIn=!0,s.$router.push("/home")):(s.danger(e.message),s.loading=!1)},function(t){console.log(t.data.message),this.loading=!1})},doGoogleRegister:function(){var t=this,s={user:this.googleProfile.getEmail(),pwd:this.googleProfile.getGivenName().toLowerCase()+"123",name:this.googleProfile.getGivenName(),lastName:this.googleProfile.getFamilyName(),email:this.googleProfile.getEmail()};this.$http.post(this.$remoteUrl+"api/register",s).then(function(e){e.data;t.loading=!1,t.doGoogleLogin(s)},function(t){this.loading=!1})},isValidLogin:function(){return this.login?!!this.pwd||(this.$refs.pwd.focus(),this.danger("Insira uma senha"),!1):(this.$refs.login.focus(),this.danger("Insira um usuário"),!1)},isValidRegister:function(){if(!this.userRegister)return this.$refs.userRegister.focus(),this.danger("Insira um usuário"),!1;if(this.userRegister.length<4)return this.$refs.userRegister.focus(),this.danger("O nome do usuário deve conter pelo menos 4 caracteres"),!1;if(this.userRegister&&this.userRegister.length>=4){if(!this.userPwd)return this.$refs.userPwd.focus(),this.danger("Insira uma senha"),!1;if(this.userPwd.length<6)return this.$refs.userPwd.focus(),this.danger("A senha deve conter pelo menos 6 caracteres"),!1}return!0},danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(t){this.$toast.open({message:t,type:"is-success"})},checkExistentUser:function(){var t=localStorage.getItem("userLogin");if(t){var s=JSON.parse(t);this.login=s.user,this.pwd=s.pwd,this.doLogin()}}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"wrapper"}},[a("transition",{attrs:{name:t.transitionLogin}},[a("section",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"hero is-fullheight animated",class:t.transitionLogin},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("h3",{staticClass:"title has-text-grey old-sports-text"},[t._v("Login")]),t._v(" "),a("p",{staticClass:"subtitle has-text-grey old-sports-text"},[a("small",[t._v("Efetue seu login continuar.")])]),t._v(" "),a("div",{staticClass:"box"},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e("7Otq")}})]),t._v(" "),a("form",[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"login",attrs:{placeholder:"Usuário",type:"text","icon-pack":"fas",icon:"user",size:"is-large"},model:{value:t.login,callback:function(s){t.login=s},expression:"login"}})],1)]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"pwd",attrs:{placeholder:"Senha",type:"password","icon-pack":"fas",icon:"key",size:"is-large","password-reveal":""},model:{value:t.pwd,callback:function(s){t.pwd=s},expression:"pwd"}})],1)]),t._v(" "),a("button",{staticClass:"button is-block is-dark is-large is-fullwidth",attrs:{disabled:t.loading},on:{click:t.doLogin}},[a("b-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{pack:"fas",icon:"sync-alt","custom-class":"fa-spin"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"old-sports-text"},[t._v("Login")])],1)])]),t._v(" "),a("div",{staticClass:"field"},[a("g-signin-button",{attrs:{params:t.googleSignInParams},on:{success:t.onSignInSuccess,error:t.onSignInError}},[a("i",{staticClass:"fab fa-google-plus-square"}),t._v("  Login com o Google\r\n                            ")])],1),t._v(" "),a("p",{staticClass:"button is-text"},[a("a",{staticClass:"old-sports-text",on:{click:t.toggleRegister}},[t._v("Cadastrar")])])])])])])]),t._v(" "),a("transition",{attrs:{name:t.transitionRegister}},[a("section",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"hero is-fullheight animated",class:t.transitionRegister},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("h3",{staticClass:"title has-text-grey old-sports-text"},[t._v("Cadastrar")]),t._v(" "),a("p",{staticClass:"subtitle has-text-grey old-sports-text"},[a("small",[t._v("Informe seus dados para o cadastro.")])]),t._v(" "),a("div",{staticClass:"box"},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e("7Otq")}})]),t._v(" "),a("form",[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"userName",attrs:{placeholder:"Nome",type:"text","icon-pack":"fas",size:"is-large",icon:"user"},model:{value:t.userName,callback:function(s){t.userName=s},expression:"userName"}})],1)]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"userLastName",attrs:{placeholder:"Sobrenome",type:"text","icon-pack":"fas",icon:"user",size:"is-large"},model:{value:t.userLastName,callback:function(s){t.userLastName=s},expression:"userLastName"}})],1)]),t._v(" "),a("b-field",[a("b-input",{ref:"userEmail",attrs:{placeholder:"Email",type:"email","icon-pack":"fas",icon:"envelope",size:"is-large"},model:{value:t.userEmail,callback:function(s){t.userEmail=s},expression:"userEmail"}})],1),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"userRegister",attrs:{placeholder:"Usuário *",type:"text","icon-pack":"fas",icon:"user",size:"is-large"},model:{value:t.userRegister,callback:function(s){t.userRegister=s},expression:"userRegister"}})],1)]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("b-input",{ref:"userPwd",attrs:{placeholder:"Senha *",type:"password","icon-pack":"fas",icon:"key",size:"is-large","password-reveal":""},model:{value:t.userPwd,callback:function(s){t.userPwd=s},expression:"userPwd"}})],1)]),t._v(" "),a("div",{staticClass:"field"},[a("small",[t._v("* Campos obrigatórios")])]),t._v(" "),a("button",{staticClass:"button is-block is-dark is-large is-fullwidth",attrs:{disabled:t.loading},on:{click:t.doRegister}},[a("b-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{pack:"fas",icon:"sync-alt","custom-class":"fa-spin"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"old-sports-text"},[t._v("Cadastrar")])],1)],1)]),t._v(" "),a("p",{staticClass:"button is-text"},[a("a",{staticClass:"old-sports-text",on:{click:t.toggleRegister}},[t._v("Voltar")])])])])])])])],1)},staticRenderFns:[]};var h=e("VU/8")(d,u,!1,function(t){e("AuKK")},"data-v-0531bbe9",null).exports,m={name:"Home",data:function(){return{credentials:""}},methods:{danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(){this.$toast.open({message:"Cadastro efetuado com sucesso!",type:"is-success"})},goTo:function(t){this.$router.push(t)},leave:function(){localStorage.setItem("userLogin",""),this.goTo("/")}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("section",{staticClass:"hero is-fullheight"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",{staticClass:"title has-text-grey old-sports-text"},[t._v("Menu")]),t._v(" "),e("div",{staticClass:"box list-item"},[e("form",[e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/registerMatch")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-bowling-ball"})]),t._v(" "),e("span",{staticClass:"old-sports-text menu-sized"},[t._v("Registrar partida")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/statistics")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-chart-line"})]),t._v(" "),e("span",{staticClass:"old-sports-text menu-sized"},[t._v("Estatísticas")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/oils")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-oil-can"})]),t._v(" "),e("span",{staticClass:"old-sports-text menu-sized"},[t._v("Padrões de óleo")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/playingArea")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-calculator"})]),t._v(" "),e("span",{staticClass:"old-sports-text menu-sized"},[t._v("Lançamento")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:function(s){t.goTo("/ranking")}}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-trophy"})]),t._v(" "),e("span",{staticClass:"old-sports-text menu-sized"},[t._v("Ranking")])])]),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large  is-fullwidth",on:{click:t.leave}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-power-off"})]),t._v(" "),e("span",{staticClass:"old-sports-text menu-sized"},[t._v("Sair")])])])],1)])])])])])])},staticRenderFns:[]};var p=e("VU/8")(m,f,!1,function(t){e("Swa+")},"data-v-6b7b843f",null).exports,g=e("Xxa5"),v=e.n(g),b=e("exGp"),C=e.n(b),w=e("jhCd"),_=e.n(w),x=e("CqLJ"),k={components:{highcharts:w.Chart,dateFormat:x},name:"Home",data:function(){return{loadingComponent:"",matchArgs:[],credentials:"",strikes:0,spares:0,gutters:0,generalTableData:[],chartMatchOptions:{title:{text:"Pinos por partida",style:{"font-family":"OldSports"}},yAxis:{title:{text:""}},credits:{enabled:!1},series:[]},chartGamesOptions:{title:{text:"Placar final",style:{"font-family":"OldSports"}},yAxis:{title:{text:"Porcentagem"}},credits:{enabled:!1},series:[]}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return C()(v.a.mark(function s(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.getMatches();case 2:t.userMatches=s.sent,t.mountMatchesGraphs(t.userMatches);case 4:case"end":return s.stop()}},s,t)}))()},mountMatchesGraphs:function(t){var s=this;return C()(v.a.mark(function e(){var a,i,o,n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=s,x.masks.matchTime="d/m/yy HH:MM",t.length&&(i=t.map(function(t,s){return{name:x(t.date,"matchTime"),marker:{symbol:"circle"},data:t.rolls}}),s.chartMatchOptions.series=i,o=function(t,s){return t+s},t.forEach(function(t){a.tailScoreData(t)}),(n=t.map(function(t){return t.total})).length&&(r=[{name:"Total",marker:{symbol:"circle"},data:n}],s.chartGamesOptions.series=r,s.generalTableData.push({strikes:a.strikes,spares:a.spares,average:(n.reduce(o,0)/t.length).toFixed(0),gutter:a.gutters})));case 3:case"end":return e.stop()}},e,s)}))()},tailScoreData:function(t){for(var s=0,e=0;e<10;e++)this.isStrike(t,s)?(9==e&&10==t.rolls[s]&&(10==t.rolls[s+1]&&this.strikes++,10==t.rolls[s+2]&&this.strikes++),s++,this.strikes++):this.isSpare(t,s)?(this.spares++,s+=2):(0!=t.rolls[s]&&0!=t.rolls[s+1]||this.gutters++,s+=2)},strikeBonus:function(t,s){return t.rolls[s+1]+t.rolls[s+2]},isStrike:function(t,s){return 10===t.rolls[s]},isSpare:function(t,s){return 0!=t.rolls[s]&&0!=t.rolls[s+1]||this.gutters++,t.rolls[s]+t.rolls[s+1]===10},loading:function(){this.loadingComponent=this.$loading.open()},stopLoading:function(){this.loadingComponent.close()},getMatches:function(){var t=this;return C()(v.a.mark(function s(){var e,a;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(e=t,!(a=localStorage.getItem("userLogin"))){s.next=6;break}return t.loading(),t.credentials=JSON.parse(a),s.abrupt("return",t.$http.post(t.$remoteUrl+"api/getMatches",t.credentials).then(function(t){return e.stopLoading(),t.data.object},function(t){e.stopLoading()}));case 6:case"end":return s.stop()}},s,t)}))()},danger:function(t){this.$toast.open({duration:3e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(){this.$toast.open({message:"Cadastro efetuado com sucesso!",type:"is-success"})}}},S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("section",{staticClass:"hero is-fullheight"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",{staticClass:"title has-text-grey old-sports-text"},[t._v("Estatísticas")]),t._v(" "),t.chartMatchOptions.series.length?e("div",{staticClass:"box"},[e("highcharts",{attrs:{options:t.chartMatchOptions,updateArgs:t.matchArgs}})],1):t._e(),t._v(" "),t.chartGamesOptions.series.length?e("div",{staticClass:"box"},[e("highcharts",{attrs:{options:t.chartGamesOptions}})],1):t._e(),t._v(" "),t.generalTableData.length?e("div",{staticClass:"box"},[e("b-table",{staticClass:"old-sports-text",attrs:{data:t.generalTableData,striped:!0,hoverable:!0,"mobile-cards":!0},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-table-column",{attrs:{field:"strikes",label:"Strikes",centered:""}},[t._v("\r\n                                        "+t._s(s.row.strikes)+"\r\n                                    ")]),t._v(" "),e("b-table-column",{attrs:{field:"spares",label:"Spares",centered:""}},[t._v("\r\n                                        "+t._s(s.row.spares)+"\r\n                                    ")]),t._v(" "),e("b-table-column",{attrs:{field:"gutter",label:"Canaletas",centered:""}},[e("span",{staticClass:"tag is-danger"},[t._v("\r\n                                            "+t._s(s.row.gutter)+"\r\n                                        ")])]),t._v(" "),e("b-table-column",{attrs:{field:"average",label:"Média",centered:""}},[e("span",{staticClass:"tag is-success"},[t._v("\r\n                                            "+t._s(s.row.average)+"\r\n                                        ")])])]}}])})],1):t._e(),t._v(" "),t.chartGamesOptions.series.length||t.chartMatchOptions.series.length?t._e():e("p",{staticClass:"heading"},[t._v("Você ainda não possui partidas registradas, comece a marcar :) !")])])])])])])},staticRenderFns:[]};var y=e("VU/8")(k,S,!1,function(t){e("wkBW")},"data-v-a2fbf200",null).exports,L={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("section",{staticClass:"hero is-fullheight"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",{staticClass:"title has-text-grey old-sports-text"},[t._v("Estimar Lançamento")]),t._v(" "),e("div",{staticClass:"box list-item"},[e("b-field",{attrs:{label:"",type:""}},[e("b-input",{attrs:{placeholder:"Comprimento do óleo","icon-pack":"fas",icon:"calculator",type:"number",min:"32",max:"44"},on:{input:t.calculate},model:{value:t.oil,callback:function(s){t.oil=s},expression:"oil"}})],1)],1),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"p"}},t._l(4,function(s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],key:s,staticClass:"box"},[e("img",{attrs:{src:"https://via.placeholder.com/350x150"}})])})),t._v(" "),t._m(0)],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box"},[s("iframe",{attrs:{width:"100%",height:"260",src:"https://www.youtube.com/embed/lHIpf_09ZAc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}]};var $=e("VU/8")({name:"PlayingArea",data:function(){return{oil:"",showData:""}},methods:{calculate:function(t){t>=32&&t<=44?(this.showData=!0,this.success()):this.showData=!1},success:function(){this.$toast.open({message:"Lançamento calculado",type:"is-success"})}}},L,!1,function(t){e("ZFmP")},"data-v-05036e45",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"wrapper"}},[s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("h3",{staticClass:"title has-text-grey old-sports-text"},[this._v("Padrões de óleo")]),this._v(" "),s("div",{staticClass:"box list-item"},[s("p",{staticClass:"is-danger old-sports-text"},[this._v(" Em construção")])])])])])])])}]};var I=e("VU/8")({name:"Oils",data:function(){return{}},methods:{}},R,!1,function(t){e("Rj1f")},"data-v-15289cb0",null).exports,O={name:"RegisterMatch",data:function(){return{firstData:[],firstColumns:[{field:"name",label:"Nome",width:"40"},{field:"frame_1",label:"1"},{field:"frame_2",label:"2"},{field:"frame_3",label:"3"},{field:"frame_4",label:"4"},{field:"frame_5",label:"5"}],secondData:[],secondColumns:[{field:"name",label:"Nome",width:"40",numeric:!0},{field:"frame_6",label:"6"},{field:"frame_7",label:"7"},{field:"frame_8",label:"8"},{field:"frame_9",label:"9"},{field:"frame_10",label:"10"}],loadingComponent:"",askConfirmation:"initial",rolls:[],rollIndex:0,currentRoll:0,frameIndex:0,frameTable:1,scoreOne:"",scoreTwo:"",matchComplete:!1,tailedResults:!1,loading:!1,matchScore:0,tenSpare:!1,credentials:"",actualScore:0}},watch:{scoreOne:function(t){t&&10==parseInt(t)&&(this.scoreTwo="0")}},beforeMount:function(){this.credentials=localStorage.getItem("userLogin")?JSON.parse(localStorage.getItem("userLogin")):null,this.credentials&&this.credentials.preferences&&(this.askConfirmation=this.credentials.preferences.askConfirmation)},methods:{showLoading:function(){this.loadingComponent=this.$loading.open()},stopLoading:function(){this.loadingComponent.close()},saveUserConfirmOption:function(t){var s=this;this.showLoading(),this.$http.post(this.$remoteUrl+"api/saveConfirmPreference",{user:this.credentials.user,askConfirmation:this.askConfirmation}).then(function(t){localStorage.setItem("userLogin",o()(t.data.object)),s.stopLoading()},function(t){this.stopLoading()})},registerMatch:function(){var t=this;if(this.credentials){var s={user:this.credentials.user,rolls:this.rolls,total:this.matchScore,date:new Date};this.loading=!0,this.$http.post(this.$remoteUrl+"api/registerMatch",s).then(function(s){var e=s.data;e.saveOk?(t.success(e.message),t.loading=!1,t.resetGame()):(t.danger(e.message),t.loading=!1)},function(t){console.log(t.data.message),this.loading=!1})}},resetGame:function(){this.rolls=[],this.currentRoll=0,this.matchComplete=!1,this.tailedResults=!1,this.frameTable=1,this.scoreOne=0,this.scoreTwo=0,this.matchScore=0,this.firstData=[],this.secondData=[],this.tenSpare=!1,this.rollIndex=0},roll:function(t){this.rolls[this.currentRoll++]=t},sumOfBallsInFrame:function(t){return this.rolls[t]+this.rolls[t+1]},spareBonus:function(t){return this.rolls[t+2]},strikeBonus:function(t){return this.rolls[t+1]+this.rolls[t+2]},isStrike:function(t){return 10===this.rolls[t]},isSpare:function(t){return this.rolls[t]+this.rolls[t+1]===10},score:function(){for(var t=0,s=0,e=0;e<10;e++)this.isStrike(s)?(t+=10+this.strikeBonus(s),s++):this.isSpare(s)?(t+=10+this.spareBonus(s),s+=2):(t+=this.sumOfBallsInFrame(s),s+=2);return t},confirmDialog:function(t){if(12!=this.frameTable){if(this.scoreOne&&this.scoreTwo&&parseInt(this.scoreOne)+parseInt(this.scoreTwo)>10)return this.danger("A soma dos campos não pode ser maior a 10."),!1;if(!(this.scoreOne&&this.scoreTwo||t||this.tenSpare))return this.verifyFieldsMessage(),!1;if(this.tenSpare&&!this.scoreOne)return this.verifyFieldsMessage(),!1}else if(!this.scoreOne&&!t)return this.verifyFieldsMessage(),!1;10==parseInt(this.scoreOne)&&0==parseInt(this.scoreTwo)?this.doConfirm(!0):this.doConfirm(t)},doConfirm:function(t){var s=this,e=this;this.askConfirmation?this.$dialog.confirm({message:t?"Confirmar frame <b>"+this.frameTable+"</b> com <b>STRIKE</b> ?":"Confirmar frame <b>"+this.frameTable+"</b>  ?",confirmText:"Sim",cancelText:"Cancelar",type:"is-dark",onConfirm:function(){t?e.confirmFrame([10]):e.confirmFrame([parseInt(e.scoreOne),parseInt(e.scoreTwo)]),e.$toast.open({message:"Frame "+e.frameTable+" confirmado.",duration:800,type:"is-success"}),s.verifyGameComplete(t)}}):(t?e.confirmFrame([10]):e.confirmFrame([parseInt(e.scoreOne),parseInt(e.scoreTwo)]),e.$toast.open({message:"Frame "+e.frameTable+" confirmado.",duration:800,type:"is-success"}),this.verifyGameComplete(t))},tailResults:function(){var t=1;if(this.credentials.user){for(var s={},e=0,a=0;a<this.rolls.length&&t<=5;a++){var i=this.rolls[a].toString(),o=void 0!=this.rolls[a+1]?this.rolls[a+1].toString():"",n=void 0!=this.rolls[a+2]?this.rolls[a+2].toString():"";10==this.rolls[a]?s["frame_"+t]=i:(s["frame_"+t]=i+" "+o,a++),t++,e=a+1}s.name=this.credentials.user,this.firstData.push(s),t=6;var r={};for(a=e;a<this.rolls.length&&t<=10;a++){i=this.rolls[a].toString(),o=void 0!=this.rolls[a+1]?this.rolls[a+1].toString():"",n=void 0!=this.rolls[a+2]?this.rolls[a+2].toString():"";10==t&&10==this.rolls[a]?r["frame_"+t]=i+" "+o+" "+n:10==this.rolls[a]?r["frame_"+t]=i:(r["frame_"+t]=10==t?i+" "+o+" "+n:i+" "+o,a++),t++}r.name=this.credentials.user,this.secondData.push(r),this.tailedResults=!0}},verifyFieldsMessage:function(){this.danger('Selecione "Srike" ou preencha os campos.')},verifyGameComplete:function(t){if(10==this.frameTable&&this.isSpare(this.rollIndex)&&(this.tenSpare=!0),10!=this.frameTable||this.isSpare(this.rollIndex)||this.isStrike(this.rollIndex)||(this.matchComplete=!0),11!=this.frameTable||this.isStrike(this.rollIndex)||(this.matchComplete=!0),12==this.frameTable&&(this.matchComplete=!0),this.isStrike(this.rollIndex)?this.rollIndex++:this.rollIndex+=2,this.matchComplete){for(var s=0;s<this.rolls.length;s++)this.roll(this.rolls[s]);this.matchScore=this.score(),this.tailResults()}else this.frameTable++},confirmResetGame:function(){var t=this;this.$dialog.confirm({message:"Confirma reiniciar partida ?",confirmText:"Sim",cancelText:"Cancelar",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fas",onConfirm:function(){t.resetGame(),t.success("Partida reiniciada")}})},danger:function(t){this.$toast.open({duration:1e3,message:t,position:"is-bottom",type:"is-danger"})},success:function(t){this.$toast.open({message:t,type:"is-success"})},confirmFrame:function(t){1==t.length?this.rolls.push(10):(this.rolls.push(t[0]),null!=t[1]&&this.rolls.push(t[1])),this.scoreOne="",this.scoreTwo=""}}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("section",{staticClass:"hero is-fullheight"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",{staticClass:"title has-text-grey old-sports-text"},[t._v("Registrar partida")]),t._v(" "),e("div",{staticClass:"box list-item"},[e("b-field",[e("transition",{attrs:{name:"fadeInDown",mode:"out-in"}},[e("p",{key:t.frameTable,staticClass:"old-sports-text",staticStyle:{"font-size":"40px"}},[t._v(t._s(t.frameTable))])])],1),t._v(" "),e("b-field",[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-dark old-sports-text",attrs:{disabled:t.matchComplete},on:{click:function(s){t.confirmDialog(!0)}}},[t._v("Strike")])]),t._v(" "),e("p",{staticClass:"control"},[e("b-input",{attrs:{type:"number",placeholder:"5",disabled:t.matchComplete},model:{value:t.scoreOne,callback:function(s){t.scoreOne=s},expression:"scoreOne"}})],1),t._v(" "),e("p",{staticClass:"control"},[e("b-input",{attrs:{type:"number",placeholder:"5",disabled:12==t.frameTable||t.tenSpare||t.matchComplete},model:{value:t.scoreTwo,callback:function(s){t.scoreTwo=s},expression:"scoreTwo"}})],1),t._v(" "),e("p",{staticClass:"control"},[e("button",{staticClass:"button is-dark old-sports-text",attrs:{disabled:t.matchComplete},on:{click:function(s){t.confirmDialog()}}},[t._v("Ok")])])]),t._v(" "),e("b-field",[e("b-switch",{attrs:{type:"is-dark"},on:{input:t.saveUserConfirmOption},model:{value:t.askConfirmation,callback:function(s){t.askConfirmation=s},expression:"askConfirmation"}},[t._v("\r\n                                Solicitar confirmação ?\r\n                            ")])],1),t._v(" "),e("b-field",[e("a",{staticClass:"button is-large is-dark is-fullwidth",on:{click:t.confirmResetGame}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-times-circle"})]),t._v(" "),e("span",{staticClass:"old-sports-text"},[t._v("Resetar")])])]),t._v(" "),e("transition",{attrs:{name:"slideInLeft",mode:"out-in"}},[t.matchComplete&&t.tailedResults?e("b-field",[e("h1",{staticClass:"title"},[e("h1",{staticClass:"title"},[e("a",{staticClass:"button is-success is-large is-inverted old-sports-text"},[e("animate-number",{attrs:{from:"0",to:t.matchScore,duration:"2000"}})],1)])])]):t._e()],1),t._v(" "),e("transition",{attrs:{name:"slideInLeft",mode:"out-in"}},[e("b-field",{directives:[{name:"show",rawName:"v-show",value:t.matchComplete&&t.tailedResults,expression:"matchComplete && tailedResults"}]},[e("b-table",{attrs:{data:t.firstData,columns:t.firstColumns}})],1)],1),t._v(" "),e("transition",{attrs:{name:"slideInLeft",mode:"out-in"}},[e("b-field",{directives:[{name:"show",rawName:"v-show",value:t.matchComplete&&t.tailedResults,expression:"matchComplete && tailedResults"}]},[e("b-table",{attrs:{data:t.secondData,columns:t.secondColumns}})],1)],1),t._v(" "),e("transition",{attrs:{name:"slideInLeft",mode:"out-in"}},[t.matchComplete&&t.tailedResults?e("b-field",[e("button",{staticClass:"button is-block is-dark is-large is-fullwidth",attrs:{disabled:t.loading},on:{click:t.registerMatch}},[e("b-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{pack:"fas",icon:"sync-alt","custom-class":"fa-spin"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"old-sports-text"},[t._v("Salvar")])],1)]):t._e()],1)],1)])])])])])},staticRenderFns:[]};var D=e("VU/8")(O,N,!1,function(t){e("mOSR")},"data-v-b9f05464",null).exports,T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"wrapper"}},[s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("h3",{staticClass:"title has-text-grey old-sports-text"},[this._v("Ranking")]),this._v(" "),s("div",{staticClass:"box list-item"},[s("p",{staticClass:"is-danger old-sports-text"},[this._v(" Em construção")])])])])])])])}]};var P=e("VU/8")({name:"Ranking",data:function(){return{}},methods:{}},T,!1,function(t){e("3JOW")},"data-v-9f9300cc",null).exports;a.default.use(c.a);var E=new c.a({routes:[{path:"/",name:"Login",component:h},{path:"/home",name:"Home",component:p,mode:"abstract"},{path:"/statistics",name:"Statistics",component:y,mode:"abstract"},{path:"/playingArea",name:"PlayingArea",component:$,mode:"abstract"},{path:"/oils",name:"Oils",component:I,mode:"abstract"},{path:"/registerMatch",name:"RegisterMatch",component:D,mode:"abstract"},{path:"/ranking",name:"Ranking",component:P,mode:"abstract"}]}),M=e("O3Oo"),F=e.n(M),B=e("8+8L"),G=e("J/MC"),A=e.n(G),U=e("fSYm"),z=e.n(U);a.default.use(F.a),a.default.use(B.a),a.default.use(z.a),a.default.use(_.a),a.default.use(A.a),a.default.config.productionTip=!1,a.default.prototype.$remoteUrl="https://drbowling.herokuapp.com/",new a.default({el:"#app",router:E,components:{App:l},template:"<App/>"})},Rj1f:function(t,s){},"Swa+":function(t,s){},ZFmP:function(t,s){},mOSR:function(t,s){},wkBW:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.6b630a178b124a9fb2c6.js.map