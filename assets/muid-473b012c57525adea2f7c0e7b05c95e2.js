"use strict"
define("muid/adapters/project",["exports","ember-data","ember-get-config","ember-fetch/mixins/adapter-fetch"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var i=n.default.MOIN
e.default=t.default.JSONAPIAdapter.extend(r.default,{host:i.host,pathForType:function(){return"doc"}})}),define("muid/app",["exports","muid/resolver","ember-load-initializers","muid/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,n.default)(i,r.default.modulePrefix),e.default=i}),define("muid/components/featured-projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({})}),define("muid/components/home-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({classNames:["home-button"]})}),define("muid/components/markdown-to-html",["exports","ember-cli-showdown/components/markdown-to-html"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("muid/components/muid-logo",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({version:"small",type:"flat",border:!1,linkTo:"index",classNames:["muid logo"],classNameBindings:["border:framed"]})}),define("muid/components/project-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({classNames:["project","card"],store:Ember.inject.service(),didReceiveAttrs:function(){this._super.apply(this,arguments),this.query()},query:Ember.observer("from",function(){var e=this,t=this.get("from.ref")
Ember.isNone(t)?this.set("empty",!0):this.get("store").findRecord("project",t,{include:"title,authors,abstract,poster"}).then(function(t){e.set("content",t)})})})}),define("muid/components/project-stream",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
e.default=Ember.Component.extend({search:Ember.inject.service(),classNames:["project-stream"],classNameBindings:["noResults"],content:Ember.computed.sort("results","order"),init:function(){this._super.apply(this,arguments),this.searchResults=new Array,this.order=["score","year:desc","term:desc","kind:desc"]},updateOffset:Ember.observer("results.length",function(){this.onsearch&&"function"==typeof this.onsearch&&this.onsearch(this.topic,this.getWithDefault("results.length",0))}),offset:Ember.computed("offsets",{get:function(){var e=this.getWithDefault("offsets",{})[this.get("topic")]||0
try{this.element.style.paddingTop=e+"px"}catch(e){}return e}}),noResults:Ember.computed.empty("results"),didInsertElement:function(){this._super.apply(this,arguments),this.load()},load:function(){var e=this,t=this.get("topic")
this.get("search").runQuery(t,!0).then(function(t){return e.set("results",t)})},doSearch:function(){var e=this,t=this.get("topic")
this.get("search").runQuery(t).then(function(t){return e.set("results",t)})},topicTitle:Ember.computed("topic",function(){return Ember.isEmpty(this.get("topic"))?"":this.get("topic").match(/^\w+:\s*(\w+).*(and|or)?/i)[1]}),onSearchTermChanged:Ember.observer("search.term",function(){var e=this.get("search.term")
Ember.isEmpty(e)?Ember.run.debounce(this,this.load,100):Ember.run.debounce(this,this.doSearch,100)}),resultIDs:Ember.computed("content",function(){var e=this.get("content")
return e?e.reduce(function(e,t){return e+(t.year+" - ")+t.ref+"\n"},""):""})})}),define("muid/components/project-streams-container",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
e.default=Ember.Component.extend({tagName:"section",classNames:["streams"],init:function(){this._super.apply(this,arguments),this.topicStats={}},didInsertElement:function(){this._super.apply(this,arguments),window.addEventListener("resize",this.computeOffsets.bind(this),!1)},willDestroy:function(){this._super.apply(this,arguments),window.removeEventListener("resize",this.computeOffsets.bind(this))},actions:{updateOffsets:function(e,t){this.topicStats[e]=t,this.computeOffsets()}},useScale:!0,offsets:Ember.computed("_offsets","useScale",{get:function(){var e=this.get("_offsets")
if(this.get("useScale"))return e
var t=Ember.assign({},e),n=this.element?this.element.getBoundingClientRect().height:1
for(var r in t)t.hasOwnProperty(r)&&(t[r]=.8*n)
return t}}),computeOffsets:function(){var e,t,n,r=this.element?this.element.getBoundingClientRect().height:1,i=Object.values(this.topicStats).sort(function(e,t){return e-t}),s=i.shift()||0,o=0===i.length?s:i.pop()||0,a={}
for(var l in this.topicStats){var u=1-(e=s,t=o,n=this.topicStats[l],((n=function(e,t,n){return n<=e?e:n>=t?t:n}(e,t,n))-e)/(t-1*e))
a[l]=Math.floor(2*r/8+3*r/8*u)}this.set("_offsets",a)}})}),define("muid/components/search-bar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({classNames:["muid","search-bar"],search:Ember.inject.service(),updateSearch:function(e){var t=e.target.value,n=t&&t.length>2?t:""
this.set("search.term",n)}})}),define("muid/components/slide-show",["exports","ember-cli-swiper/components/swiper-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({classNames:["slides"],tagName:"section",pagination:!0,speed:100,keyboard:!0,grabCursor:!0})}),define("muid/components/sticky-header",["exports","stickybits"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"header",didRender:function(){this._super.apply(this,arguments),this.stickyHeader&&this.stickyHeader.cleanup(),this.set("stickyHeader",(0,t.default)(this.element,{stickyBitStickyOffset:-1*this.get("offset")}))}})}),define("muid/components/swiper-container",["exports","ember-cli-swiper/components/swiper-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("muid/components/swiper-slide",["exports","ember-cli-swiper/components/swiper-slide"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("muid/components/video-js",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"video",classNames:["video-js","vjs-default-skin","vjs-big-play-centered"],attributeBindings:["preload","controls"],controls:"controls",preload:"metadata",init:function(){this._super.apply(this,arguments),this.onmove=this.pointerMove.bind(this),this.onpointerdown=this.pointerDown.bind(this),this.onpointerup=this.mouseUp.bind(this)},pauseWhenNotActiveSlide:Ember.observer("index","position",function(){var e=this.getProperties("index","position")
e.index!==e.position&&this.player&&this.player.pause()}),didInsertElement:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,n
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,emberAutoImportDynamic("video.js")
case 2:t=e.sent,n=t.default,this.player=n(this.element,{fluid:!0}),this.element.addEventListener("pointerdown",this.onpointerdown),this.element.addEventListener("pointerup",this.onpointerup)
case 7:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments)
return new Promise(function(e,n){return function r(i,s){try{var o=t[i](s),a=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})
e(a)}("next")})})
return function(){return t.apply(this,arguments)}}(),willDestroyElement:function(){this.player&&this.player.dispose(),this.element.removeEventListener("pointerdown",this.onpointerdown),this.element.removeEventListener("pointerup",this.onpointerup)},pointerDown:function(e){return this.lastX=e.clientX,this.lastPointerDownEvent=e,this.element.addEventListener("pointermove",this.onmove),this.canPlay=!0,e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),!1},pointerMove:function(e){var t=Math.abs(e.clientX-(this.lastX||e.clientX))
if(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),t>10){this.element.removeEventListener("pointermove",this.onmove),this.canPlay=!1
var n=new PointerEvent("pointerdown",e)
return this.element.parentElement.dispatchEvent(n),!0}},mouseUp:function(e){this.element.removeEventListener("pointermove",this.onmove)
var t=Math.abs(e.clientX-(this.lastX||e.clientX))
if(t>=this.element.clientWidth/2)return this.player.pause(),void(this.canPlay=!1)
!this.canPlay||t>10||(this.canPlay=!1,this.player.paused()?this.player.play():this.player.pause())}})}),define("muid/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({isMobile:Ember.inject.service(),search:Ember.inject.service(),isHome:Ember.computed.equal("currentRouteName","index"),isProject:Ember.computed.equal("currentRouteName","project.detail"),classNameBindings:["mobile"],mobile:Ember.computed.alias("isMobile.any")})}),define("muid/controllers/project/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({})}),define("muid/helpers/app-version",["exports","muid/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,s=r.versionOnly||r.hideSha,o=r.shaOnly||r.hideVersion,a=null
return s&&(r.showExtended&&(a=i.match(n.versionExtendedRegExp)),a||(a=i.match(n.versionRegExp))),o&&(a=i.match(n.shaRegExp)),a?a[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=Ember.Helper.helper(r)}),define("muid/helpers/attachment-url",["exports","ember-get-config"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.attachmentUrl=r
var n=t.default.MOIN
function r(e){try{var t=e[0]
if(Ember.isEmpty(t))throw new Error("Attchment URL must get a project id")
var r=Ember.Object.create(e[1]),i=r.versions.filter(function(t){return t.indexOf(e[2]||"thumb")>=0})[0],s=r.destination.replace(/attachment(s)?\/?/,"")
return n.host+"/doc/"+t+"/"+s+(i?"?version="+i:"")}catch(e){return""}}e.default=Ember.Helper.helper(r)}),define("muid/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("muid/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("muid/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","muid/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=void 0,i=void 0
n.default.APP&&(r=n.default.APP.name,i=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(r,i)}}),define("muid/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("muid/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("muid/initializers/ember-hammertime",["exports","ember-hammertime/components/component"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-hammertime",initialize:function(){}}}),define("muid/initializers/export-application-global",["exports","muid/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,i=t.default.exportApplicationGlobal
r="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("muid/initializers/is-mobile-service-injector",["exports","ismobilejs/initializers/is-mobile-service-injector"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("muid/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("muid/models/project",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Model.extend({title:t.default.attr(),subtitle:t.default.attr("string"),abstract:t.default.attr(),description:t.default.attr(),authors:t.default.attr(),tutors:t.default.attr(),term:t.default.attr(),degree:t.default.attr(),course:t.default.attr(),affiliation:t.default.attr(),department:t.default.attr(),kind:t.default.attr(),keywords:t.default.attr(),links:t.default.attr("attachment"),poster:t.default.attr(),media:Ember.computed("links","links.[]",function(){var e=[],t=this.get("links")
for(var n in t)if(t.hasOwnProperty(n)){var r=t[n]
"image"!==r.get("type")&&"video"!==r.get("type")||e.push(r)}return e}),images:Ember.computed.filterBy("media","type","image"),posterLink:Ember.computed("links.poster","poster",{get:function(){return Ember.Object.create(this.get("links.poster")||this.get("poster"))}})})}),define("muid/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default})
define("muid/router",["exports","muid/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("project",{path:"p"},function(){this.route("detail",{path:":id"})}),this.route("imprint"),this.route("apply"),this.route("news"),this.route("about"),this.route("contact")}),e.default=n}),define("muid/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({isMobile:Ember.inject.service(),model:function(){return this.get("isMobile.any")?{topics:["degree:BA","degree:MA"]}:{topics:["degree:BA","course:Interface and degree:MA","course:Medical and degree:MA"]}}})}),define("muid/routes/project/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(e){return this.store.findRecord("project",e.id,{reload:!0})},setupController:function(e){e.set("currentSlide",0),e.set("showSlides",!1),Ember.run.scheduleOnce("afterRender",this,function(){return e.set("showSlides",!0)}),this._super.apply(this,arguments)}})}),define("muid/services/is-mobile",["exports","ismobilejs/services/is-mobile"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("muid/services/search",["exports","ember-get-config","fetch"],function(e,t,n){function r(e){return function(){var t=e.apply(this,arguments)
return new Promise(function(e,n){return function r(i,s){try{var o=t[i](s),a=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})
e(a)}("next")})}}Object.defineProperty(e,"__esModule",{value:!0})
var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=t.default.MOIN,o=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return Object.keys(t).reduce(function(r,s,o){var a=t[s]
switch(void 0===a?"undefined":i(a)){case"object":a=a instanceof Array?a.map(encodeURIComponent).join(","):e(a,s)
break
case"string":case"number":a=s+"="+encodeURIComponent(a)}return r+(0!==o?"&":"")+(n?""+n+a.replace(s,"["+s+"]"):a)},"")}
e.default=Ember.Service.extend({url:s.host,term:"",_parseQuery:function(){var e=r(regeneratorRuntime.mark(function e(t){var n,r,i,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s?"":this.getWithDefault("term",""),e.next=3,emberAutoImportDynamic("search-parser")
case 3:return r=e.sent,i=r.parse(t||""),e.abrupt("return",i.getWithDefault("firstObject",[]).reduce(function(e,t){for(var n in t)t.hasOwnProperty(n)&&("freetext"===n?e.q+=" "+t.freetext.include:(e.fields=e.fields||{},e.fields[n]=t[n].include))
return e},{q:n}))
case 6:case"end":return e.stop()}},e,this)}))
return function(t){return e.apply(this,arguments)}}(),runQuery:function(){var e=r(regeneratorRuntime.mark(function e(t){var r,i,s,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._parseQuery(t,a)
case 2:if(r=e.sent){e.next=5
break}return e.abrupt("return")
case 5:return i=o(r),this.set("loading",!0),s=void 0,e.prev=8,e.next=11,(0,n.default)(this.get("url")+"?"+i)
case 11:s=(s=e.sent).json(),e.next=18
break
case 15:throw e.prev=15,e.t0=e.catch(8),new Error("Search did not return a result for "+i)
case 18:return e.prev=18,this.set("loading",!1),e.finish(18)
case 21:return e.abrupt("return",s)
case 22:case"end":return e.stop()}},e,this,[[8,15,18,21]])}))
return function(t){return e.apply(this,arguments)}}()})}),define("muid/templates/about",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"coEl088F",block:'{"symbols":[],"statements":[[7,"section"],[11,"role","info"],[9],[0,"\\n \\t"],[7,"p"],[9],[0,"The main goal of the Muthesius University in Kiel is to promote art, design and spatial strategies via research and development projects as a focal point for work and intellectual debates. As the only art university in the State of Schleswig-Holstein, the Muthesius is not only a place to develop culturally relevant biographies but with its project studies also a place of particular experimentation and realisation. To a certain extent, the profile of the Master’s programme represents study courses and development possibilities for students unique in the Federal Republic of Germany."],[10],[0,"\\n \\t"],[7,"a"],[11,"href","https://www.muthesius.de"],[11,"target","blank"],[11,"class","back-to-mu"],[11,"style","touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;"],[9],[0,"Read more at the Muthesius Website."],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"muid/templates/about.hbs"}})}),define("muid/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"0r54bXt9",block:'{"symbols":["topic","offsets","updateOffset","result"],"statements":[[7,"header"],[9],[0,"\\n  "],[7,"nav"],[9],[0,"\\n    "],[4,"link-to",["about"],null,{"statements":[[0,"About MUiD °"]],"parameters":[]},null],[0,"\\n"],[0,"    "],[4,"link-to",["apply"],null,{"statements":[[0,"Apply °"]],"parameters":[]},null],[0,"\\n  "],[10],[0,"\\n  "],[1,[21,"muid-logo"],false],[0,"\\n"],[4,"if",[[23,["isHome"]]],null,{"statements":[[0,"    "],[1,[27,"search-bar",null,[["placeholder","buttonText"],["search...","?"]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[1,[21,"home-button"],false],[0,"\\n"]],"parameters":[]}],[10],[0,"\\n"],[7,"section"],[11,"role","main"],[12,"class",[27,"if",[[23,["isHome"]],"home","detail"],null]],[9],[0,"\\n"],[0,"  "],[7,"article"],[9],[1,[21,"outlet"],false],[10],[0,"\\n"],[4,"project-streams-container",null,[["topics","useScale"],[[23,["model","topics"]],[23,["isHome"]]]],{"statements":[[4,"project-stream",null,[["topic","onsearch","offsets"],[[22,1,[]],[27,"action",[[22,0,[]],[22,3,[]]],null],[22,2,[]]]],{"statements":[[0,"      "],[1,[27,"project-card",null,[["from"],[[22,4,[]]]]],false],[0,"\\n"]],"parameters":[4]},{"statements":[[0,"      Sorry, nothing found for your search on "],[7,"i"],[9],[0,"\'"],[1,[23,["search","term"]],false],[0,"\'"],[10],[0,".\\n"]],"parameters":[]}]],"parameters":[1,2,3]},null],[10],[0,"\\n\\n"],[7,"footer"],[9],[0,"\\n"],[0,"  "],[7,"a"],[11,"href","https://www.muthesius.de"],[11,"target","blank"],[11,"class","back-to-mu"],[11,"style","touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;"],[9],[0,"\\n    "],[7,"img"],[11,"src","/images/muthesius-logo.svg"],[11,"alt","Muthesius Academy of Fine Arts & Design"],[9],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"muid/templates/application.hbs"}})}),define("muid/templates/apply",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"yrIPL9kz",block:'{"symbols":[],"statements":[[7,"section"],[11,"role","info"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Send us your portfolio!"],[10],[0,"\\n  "],[7,"a"],[11,"href","mailto:martin.postler@postlerferguson.com?subject=hello!"],[11,"style","touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;"],[9],[0,"postler@muthesius.de"],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"muid/templates/apply.hbs"}})}),define("muid/templates/components/featured-projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"+QHNKJ3Q",block:'{"symbols":["project","&default"],"statements":[[4,"each",[[23,["content"]]],null,{"statements":[[0,"  "],[14,2,[[22,1,[]]]],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/featured-projects.hbs"}})}),define("muid/templates/components/home-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"ab5FHbjo",block:'{"symbols":[],"statements":[[4,"link-to",["index"],null,{"statements":[[0,""]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/home-button.hbs"}})}),define("muid/templates/components/muid-logo",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Hz8hdkYo",block:'{"symbols":[],"statements":[[4,"link-to",[[23,["linkTo"]]],null,{"statements":[[0,"  "],[7,"img"],[11,"src","/images/logo/muid-square-flat.png"],[11,"alt",""],[9],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/muid-logo.hbs"}})}),define("muid/templates/components/project-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"zttsmwKK",block:'{"symbols":[],"statements":[[4,"if",[[23,["content","isLoaded"]]],null,{"statements":[[4,"link-to",["project.detail",[23,["content","id"]]],[["tagName"],["figure"]],{"statements":[[0,"    "],[7,"img"],[12,"src",[27,"attachment-url",[[23,["content","id"]],[23,["content","poster"]],"medium"],null]],[11,"alt",""],[9],[10],[0,"\\n    "],[7,"caption"],[9],[0,"\\n      "],[1,[23,["content","title"]],false],[0,"\\n      "],[7,"br"],[9],[10],[0,"\\n      "],[1,[23,["content","authors","firstObject"]],false],[0,"\\n    "],[10],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},{"statements":[[4,"if",[[23,["empty"]]],null,{"statements":[[0,"  Could not load Project\\n"]],"parameters":[]},{"statements":[[0,"  Loading project "],[1,[23,["from","ref"]],false],[0,"\\n"]],"parameters":[]}]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"muid/templates/components/project-card.hbs"}})}),define("muid/templates/components/project-stream",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"llzlgBCJ",block:'{"symbols":["project","&inverse","&default"],"statements":[[4,"sticky-header",null,[["offset"],[[23,["offset"]]]],{"statements":[[0,"  "],[7,"h3"],[9],[0,"\\n    "],[1,[21,"topicTitle"],false],[0," "],[4,"if",[[23,["search","loading"]]],null,{"statements":[[7,"small"],[9],[0,"(searching)"],[10]],"parameters":[]},null],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"each",[[23,["content"]]],null,{"statements":[[0,"  "],[14,3,[[22,1,[]]]],[0,"\\n"]],"parameters":[1]},{"statements":[[0,"  "],[7,"p"],[11,"class","none"],[9],[14,2],[10],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"muid/templates/components/project-stream.hbs"}})}),define("muid/templates/components/project-streams-container",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"JzhiKysd",block:'{"symbols":["topic","&default"],"statements":[[4,"each",[[23,["topics"]]],null,{"statements":[[0,"  "],[14,2,[[22,1,[]],[23,["offsets"]],[27,"action",[[22,0,[]],"updateOffsets"],null]]],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/project-streams-container.hbs"}})}),define("muid/templates/components/search-bar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"HOEBlFn1",block:'{"symbols":[],"statements":[[1,[27,"input",null,[["type","placeholder","input"],["search",[23,["placeholder"]],[27,"action",[[22,0,[]],[23,["updateSearch"]]],null]]]],false],[0,"\\n"],[7,"button"],[11,"style","touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;"],[9],[1,[21,"buttonText"],false],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"muid/templates/components/search-bar.hbs"}})}),define("muid/templates/components/slide-show",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"9rQmwxDO",block:'{"symbols":["slide","&default"],"statements":[[7,"div"],[11,"class","swiper-wrapper"],[9],[0,"\\n"],[4,"each",[[23,["slides"]]],null,{"statements":[[4,"swiper-slide",null,[["_tagName"],["picture"]],{"statements":[[0,"      "],[14,2,[[22,1,[]]]],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null],[10],[0,"\\n\\n"],[4,"if",[[23,["hasPagination"]]],null,{"statements":[[0,"  "],[7,"div"],[11,"class","swiper-pagination"],[9],[10],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,["hasNavigation"]]],null,{"statements":[[0,"  "],[7,"div"],[12,"class",[21,"nextElClass"]],[9],[10],[0,"\\n  "],[7,"div"],[12,"class",[21,"prevElClass"]],[9],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/slide-show.hbs"}})}),define("muid/templates/components/sticky-header",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"3hvrVX2V",block:'{"symbols":["&default"],"statements":[[14,1]],"hasEval":false}',meta:{moduleName:"muid/templates/components/sticky-header.hbs"}})}),define("muid/templates/components/video-js",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"s5EEitSw",block:'{"symbols":["@video","@model"],"statements":[[7,"source"],[12,"src",[27,"attachment-url",[[22,2,["id"]],[22,1,[]]],null]],[12,"type",[22,1,["mime"]]],[9],[10]],"hasEval":false}',meta:{moduleName:"muid/templates/components/video-js.hbs"}})}),define("muid/templates/contact",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"xV5lMUs/",block:'{"symbols":[],"statements":[[0,"Get in touch!"]],"hasEval":false}',meta:{moduleName:"muid/templates/contact.hbs"}})}),define("muid/templates/imprint",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"rUpF5rPj",block:'{"symbols":[],"statements":[[7,"section"],[11,"role","info"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Imprint"],[10],[0,"\\n  "],[7,"p"],[9],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"muid/templates/imprint.hbs"}})}),define("muid/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"XutoQCg9",block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"muid/templates/index.hbs"}})}),define("muid/templates/news",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"G3RkUMfN",block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"muid/templates/news.hbs"}})}),define("muid/templates/project/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"c8LZ8VGW",block:'{"symbols":["slide","index"],"statements":[[4,"if",[[23,["showSlides"]]],null,{"statements":[[4,"swiper-container",null,[["currentSlide","grabCursor","pagination","navigation","classNames"],[[27,"mut",[[23,["currentSlide"]]],null],true,false,true,"slides"]],{"statements":[[4,"each",[[23,["model","media"]]],null,{"statements":[[4,"swiper-slide",null,null,{"statements":[[4,"if",[[22,1,["isVideo"]]],null,{"statements":[[0,"          "],[1,[27,"video-js",null,[["video","model","index","position"],[[22,1,[]],[23,["model"]],[22,2,[]],[23,["currentSlide"]]]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"          "],[7,"img"],[12,"src",[27,"attachment-url",[[23,["model","id"]],[22,1,[]],"medium"],null]],[11,"alt",""],[9],[10],[0,"\\n"]],"parameters":[]}]],"parameters":[]},null]],"parameters":[1,2]},null]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n"],[7,"section"],[11,"class","info"],[9],[0,"\\n  "],[7,"h1"],[9],[1,[27,"markdown-to-html",[[23,["model","title"]]],null],false],[10],[0,"\\n  "],[7,"p"],[11,"class","subtitle"],[9],[1,[23,["model","subtitle"]],false],[10],[0,"\\n  "],[7,"p"],[9],[7,"strong"],[9],[1,[23,["model","authors"]],false],[10],[10],[0,"\\n"],[4,"if",[[23,["model","abstract"]]],null,{"statements":[[0,"    "],[7,"p"],[11,"class","abstract"],[9],[1,[27,"markdown-to-html",[[23,["model","abstract"]]],null],false],[10],[0,"\\n"]],"parameters":[]},null],[4,"if",[[23,["model","description"]]],null,{"statements":[[0,"    "],[7,"p"],[11,"class","description"],[9],[1,[27,"markdown-to-html",[[23,["model","description"]]],null],false],[10],[0,"\\n"]],"parameters":[]},null],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"muid/templates/project/detail.hbs"}})}),define("muid/transforms/attachment",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Transform.extend({deserialize:function(e){for(var t in e){var n=e[t]
n.type=n.mime.match(/(\w+)\//)[1],n.isVideo="video"===n.type,e[t]=Ember.Object.create(n)}return e},serialize:function(e){return e}})}),define("muid/config/environment",[],function(){try{var e="muid/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("muid/app").default.create({name:"muid",version:"0.1.3+58bc9437"})
