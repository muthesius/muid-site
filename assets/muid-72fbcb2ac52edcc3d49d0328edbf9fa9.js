"use strict"
define("muid/adapters/project",["exports","ember-data","ember-get-config"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=a.default.MOIN,i=t.default.JSONAPIAdapter.extend({host:n.host,pathForType:function(){return"doc"}})
e.default=i}),define("muid/app",["exports","muid/resolver","ember-load-initializers","muid/config/environment"],function(e,t,a,n){var i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,Ember.MODEL_FACTORY_INJECTIONS=!0,i=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default}),(0,a.default)(i,n.default.modulePrefix)
var r=i
e.default=r}),define("muid/components/featured-projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({})
e.default=t}),define("muid/components/home-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({classNames:["home-button"]})
e.default=t}),define("muid/components/muid-logo",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({version:"small",type:"flat",border:!1,linkTo:"index",classNames:["muid logo"],classNameBindings:["border:framed"]})
e.default=t}),define("muid/components/project-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember,a=t.inject.service,n=t.on,i=t.observer,r=t.isNone,s=Ember.Component.extend({classNames:["project","card"],store:a(),initialLoad:n("didReceiveAttrs",function(){this.query()}),query:i("from",function(){var e=this,t=this.get("from.ref")
r(t)?this.set("empty",!0):this.get("store").findRecord("project",t,{include:"title,authors,abstract,poster"}).then(function(t){e.set("content",t)})})})
e.default=s}),define("muid/components/project-stream",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=console.debug.bind(console),a=Ember.Component.extend({search:Ember.inject.service(),classNames:["project-stream"],searchResults:[],classNameBindings:["noResults"],updateOffset:Ember.observer("results.length",function(){this.onsearch&&"function"==typeof this.onsearch&&this.onsearch(this.topic,this.getWithDefault("results.length",0))}),offset:Ember.computed("offsets",{get:function(){var e=this.getWithDefault("offsets",{})[this.get("topic")]||0
try{this.element.style.paddingTop="".concat(e,"px")}catch(e){}return e}}),noResults:Ember.computed.empty("results"),load:Ember.on("didInsertElement",function(){var e=this,t=this.get("topic")
this.get("search").runQuery(t,!0).then(function(t){return e.set("results",t)})}),doSearch:function(){var e=this,t=this.get("topic")
this.get("search").runQuery(t).then(function(t){return e.set("results",t)})},order:["score","year:desc","term:desc","kind:desc"],content:Ember.computed.sort("results","order"),topicTitle:Ember.computed("topic",function(){return this.get("topic").match(/^\w+:\s*(\w+).*(and|or)?/i)[1]}),onSearchTermChanged:Ember.observer("search.term",function(){var e=this.get("search.term")
e&&""!==e?(t("Searching for",e),Ember.run.debounce(this,this.doSearch,100)):(t("No search, load projects"),Ember.run.debounce(this,this.load,100))}),resultIDs:Ember.computed("content",function(){var e=this.get("content")
return e?e.reduce(function(e,t){return e+(t.year+" - ")+t.ref+"\n"},""):""})})
e.default=a}),define("muid/components/project-streams-container",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:"section",classNames:["streams"],topicStats:{},init:function(){this._super.apply(this,arguments),this.topicStats={}},registerWindowResize:Ember.on("didInsertElement",function(){window.addEventListener("resize",this.computeOffsets.bind(this),!1)}),removeWindowResize:Ember.on("willDestroy",function(){window.removeEventListener("resize",this.computeOffsets.bind(this))}),actions:{updateOffsets:function(e,t){this.topicStats[e]=t,this.computeOffsets()}},useScale:!0,offsets:Ember.computed("_offsets","useScale",{get:function(){var e=this.get("_offsets")
if(this.get("useScale"))return e
var t=Ember.assign({},e),a=this.element?this.element.getBoundingClientRect().height:1
for(var n in t)t.hasOwnProperty(n)&&(t[n]=.8*a)
return t}}),computeOffsets:function(){var e,t,a,n=this.element?this.element.getBoundingClientRect().height:1,i=Object.values(this.topicStats).sort(function(e,t){return e-t}),r=i.shift()||0,s=0===i.length?r:i.pop()||0,o={}
for(var l in this.topicStats){var u=1-(e=r,t=s,a=this.topicStats[l],((a=function(e,t,a){return a<=e?e:a>=t?t:a}(e,t,a))-e)/(t-1*e))
o[l]=Math.floor(2*n/8+3*n/8*u)}this.set("_offsets",o)}})
e.default=t}),define("muid/components/search-bar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.inject.service,a=Ember.Component.extend({classNames:["muid","search-bar"],search:t(),updateSearch:function(e){var t=e.target.value,a=t&&t.length>2?t:""
this.set("search.term",a)}})
e.default=a}),define("muid/components/slide-show",["exports","ember-cli-swiper/components/swiper-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.extend({classNames:["slides"],tagName:"section",pagination:!0,loop:!1,navigation:!0,keyboardControl:!0,willDestroyElement:function(){this._super.apply(this,arguments),this.get("swiper")&&(this.get("swiper").destroy(),this.set("swiper",null))}})
e.default=a}),define("muid/components/sticky-header",["exports","stickybits"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Component.extend({tagName:"header",initStickyHeader:Ember.on("didRender",function(){this.stickyHeader&&this.stickyHeader.cleanup(),this.set("stickyHeader",(0,t.default)(this.element,{stickyBitStickyOffset:-1*this.get("offset")}))})})
e.default=a}),define("muid/components/swiper-container",["exports","ember-cli-swiper/components/swiper-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("muid/components/swiper-slide",["exports","ember-cli-swiper/components/swiper-slide"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("muid/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({isMobile:Ember.inject.service(),search:Ember.inject.service(),isHome:Ember.computed.equal("currentRouteName","index"),isProject:Ember.computed.equal("currentRouteName","project.detail"),classNameBindings:["mobile"],mobile:Ember.computed.alias("isMobile.any")})
e.default=t}),define("muid/controllers/project/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({})
e.default=t}),define("muid/helpers/app-version",["exports","muid/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,r=n.versionOnly||n.hideSha,s=n.shaOnly||n.hideVersion,o=null
return r&&(n.showExtended&&(o=i.match(a.versionExtendedRegExp)),o||(o=i.match(a.versionRegExp))),s&&(o=i.match(a.shaRegExp)),o?o[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var i=Ember.Helper.helper(n)
e.default=i}),define("muid/helpers/attachment-url",["exports","ember-get-config"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.attachmentUrl=n,e.default=void 0
var a=t.default.MOIN
function n(e){try{var t=e[0]
if(Ember.isEmpty(t))throw new Error("Attchment URL must get a project id")
var n=Ember.Object.create(e[1]),i=n.versions.filter(function(t){return t.indexOf(e[2]||"thumb-small")>=0})[0],r=n.destination.replace(/attachment(s)?\/?/,"")
return"".concat(a.host,"/doc/").concat(t,"/").concat(r,"?version=").concat(i)}catch(e){return""}}var i=Ember.Helper.helper(n)
e.default=i}),define("muid/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("muid/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("muid/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","muid/config/environment"],function(e,t,a){var n,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(n=a.default.APP.name,i=a.default.APP.version)
var r={name:"App Version",initialize:(0,t.default)(n,i)}
e.default=r}),define("muid/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("muid/initializers/ember-cli-mirage",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-cli-mirage",initialize:function(){}}}),define("muid/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("muid/initializers/ember-hammertime",["exports","ember-hammertime/components/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-hammertime",initialize:function(){}}}),define("muid/initializers/export-application-global",["exports","muid/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var n,i=t.default.exportApplicationGlobal
n="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var n={name:"export-application-global",initialize:a}
e.default=n}),define("muid/initializers/is-mobile-service-injector",["exports","ismobilejs/initializers/is-mobile-service-injector"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("muid/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("muid/models/project",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.computed,n=t.default.Model.extend({title:t.default.attr(),abstract:t.default.attr(),description:t.default.attr(),authors:t.default.attr(),tutors:t.default.attr(),term:t.default.attr(),degree:t.default.attr(),course:t.default.attr(),affiliation:t.default.attr(),department:t.default.attr(),kind:t.default.attr(),keywords:t.default.attr(),links:t.default.attr("attachment"),poster:t.default.attr(),media:a("links","links.[]",function(){var e=[],t=this.get("links")
for(var a in t)if(t.hasOwnProperty(a)){var n=t[a]
"image"!==n.get("type")&&"video"!==n.get("type")||e.push(n)}return e}),images:a.filterBy("media","type","image"),posterLink:a("links.poster","poster",{get:function(){return Ember.Object.create(this.get("links.poster")||this.get("poster"))}})})
e.default=n}),define("muid/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("muid/router",["exports","muid/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){this.route("project",{path:"p"},function(){this.route("detail",{path:":id"})}),this.route("imprint"),this.route("apply"),this.route("news"),this.route("about"),this.route("contact")})
var n=a
e.default=n})
define("muid/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({isMobile:Ember.inject.service(),model:function(){return this.get("isMobile.any")?{topics:["degree:Bachelor","degree:Master"]}:{topics:["degree:Bachelor","course:Interface","course:Medical"]}}})
e.default=t}),define("muid/routes/project/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(e){return this.store.findRecord("project",e.id,{reload:!0})},setupController:function(e){e.set("showSlides",!1),Ember.run.scheduleOnce("afterRender",this,function(){return e.set("showSlides",!0)}),this._super.apply(this,arguments)}})
e.default=t}),define("muid/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("muid/services/is-mobile",["exports","ismobilejs/services/is-mobile"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("muid/services/search",["exports","ember-get-config","npm:search-parser"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.MOIN,i=Ember,r=i.computed,s=i.inject,o=i.$,l=i.RSVP.Promise,u=Ember.Service.extend({url:n.host,ajax:s.service(),term:"",query:r("term",function(){return this.parseQuery()}),parseQuery:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"":this.getWithDefault("term","")
return a.default.parse(e||"").getWithDefault("firstObject",[]).reduce(function(e,t){for(var a in t)t.hasOwnProperty(a)&&("freetext"===a?e.q+=" "+t.freetext.include:(e.fields=e.fields||{},e.fields[a]=t[a].include))
return e},{q:t})},runQuery:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.parseQuery(e,a)
if(!n)return l.reject()
var i=o.param(n)
return this.set("loading",!0),this.get("ajax").request("".concat(this.get("url"),"?").concat(i)).finally(function(){return t.set("loading",!1)})}})
e.default=u}),define("muid/templates/about",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Y8sPpRJo",block:'{"symbols":[],"statements":[[7,"section"],[11,"role","info"],[9],[0,"\\n \\t"],[7,"p"],[9],[0,"\\n \\t\\tThe main goal of the Muthesius University in Kiel is to promote art, design and spatial strategies via research and development projects as a focal point for work and intellectual debates. As the only art university in the State of Schleswig-Holstein, the Muthesius is not only a place to develop culturally relevant biographies but with its project studies also a place of particular experimentation and realisation. To a certain extent, the profile of the Master’s programme represents study courses and development possibilities for students unique in the Federal Republic of Germany.\\n \\t"],[10],[0,"\\n \\t"],[7,"a"],[11,"href","https://www.muthesius.de"],[11,"target","blank"],[11,"class","back-to-mu"],[11,"style","touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;"],[9],[0,"\\n\\t\\tRead more at the Muthesius Website.\\n\\t"],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"muid/templates/about.hbs"}})
e.default=t}),define("muid/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"rYIoKji8",block:'{"symbols":["topic","offsets","updateOffset","result"],"statements":[[0," "],[7,"header"],[9],[0,"\\n\\t"],[7,"nav"],[9],[0,"\\n\\t\\t"],[4,"link-to",["about"],null,{"statements":[[0,"About MUiD °"]],"parameters":[]},null],[0,"\\n"],[0,"\\t\\t"],[4,"link-to",["apply"],null,{"statements":[[0,"Apply °"]],"parameters":[]},null],[0,"\\n\\t"],[10],[0,"\\n\\t"],[1,[21,"muid-logo"],false],[0,"\\n"],[4,"if",[[23,["isHome"]]],null,{"statements":[[0,"\\t\\t"],[1,[27,"search-bar",null,[["placeholder","buttonText"],["search...","?"]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"\\t\\t"],[1,[21,"home-button"],false],[0,"\\n"]],"parameters":[]}],[10],[0,"\\n"],[7,"section"],[11,"role","main"],[12,"class",[28,[[27,"if",[[23,["isHome"]],"home","detail"],null]]]],[9],[0,"\\n"],[0,"\\t"],[7,"article"],[9],[1,[21,"outlet"],false],[10],[0,"\\n"],[4,"project-streams-container",null,[["topics","useScale"],[[23,["model","topics"]],[23,["isHome"]]]],{"statements":[[4,"project-stream",null,[["topic","onsearch","offsets"],[[22,1,[]],[27,"action",[[22,0,[]],[22,3,[]]],null],[22,2,[]]]],{"statements":[[0,"      "],[1,[27,"project-card",null,[["from"],[[22,4,[]]]]],false],[0,"\\n"]],"parameters":[4]},{"statements":[[0,"      Sorry, nothing found for your search on "],[7,"i"],[9],[0,"\'"],[1,[23,["search","term"]],false],[0,"\'"],[10],[0,".\\n"]],"parameters":[]}]],"parameters":[1,2,3]},null],[10],[0,"\\n\\n"],[7,"footer"],[9],[0,"\\n"],[0,"\\t"],[7,"a"],[11,"href","https://www.muthesius.de"],[11,"target","blank"],[11,"class","back-to-mu"],[11,"style","touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;"],[9],[0,"\\n\\t\\t"],[7,"img"],[11,"src","/images/muthesius-logo.svg"],[11,"alt","Muthesius Academy of Fine Arts & Design"],[9],[10],[0,"\\n\\t"],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"muid/templates/application.hbs"}})
e.default=t}),define("muid/templates/apply",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"7o47PMHS",block:'{"symbols":[],"statements":[[7,"section"],[11,"role","info"],[9],[0,"\\n\\t"],[7,"h1"],[9],[0,"Send us your portfolio!"],[10],[0,"\\n\\t"],[7,"a"],[11,"href","mailto:martin.postler@postlerferguson.com?subject=hello!"],[11,"style","touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;"],[9],[0,"postler@muthesius.de"],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"muid/templates/apply.hbs"}})
e.default=t}),define("muid/templates/components/featured-projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"t3CHMuO9",block:'{"symbols":["project","&default"],"statements":[[4,"each",[[23,["content"]]],null,{"statements":[[0,"\\t"],[14,2,[[22,1,[]]]],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/featured-projects.hbs"}})
e.default=t}),define("muid/templates/components/home-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"ab5FHbjo",block:'{"symbols":[],"statements":[[4,"link-to",["index"],null,{"statements":[[0,""]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/home-button.hbs"}})
e.default=t}),define("muid/templates/components/muid-logo",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Zt4RTwR6",block:'{"symbols":[],"statements":[[4,"link-to",[[23,["linkTo"]]],null,{"statements":[[0,"\\t"],[7,"img"],[11,"src","/images/logo/muid-square-flat.png"],[9],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/muid-logo.hbs"}})
e.default=t}),define("muid/templates/components/project-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"rUTp5ek7",block:'{"symbols":[],"statements":[[4,"if",[[23,["content","isLoaded"]]],null,{"statements":[[4,"link-to",["project.detail",[23,["content","id"]]],[["tagName"],["figure"]],{"statements":[[0,"\\t\\t"],[7,"img"],[12,"src",[28,[[27,"attachment-url",[[23,["content","id"]],[23,["content","poster"]],"large"],null]]]],[11,"alt",""],[9],[10],[0,"\\n\\t\\t"],[7,"caption"],[9],[0,"\\n\\t\\t\\t"],[1,[23,["content","title"]],false],[7,"br"],[9],[10],[1,[23,["content","authors","firstObject"]],false],[0,"\\n\\t\\t"],[10],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},{"statements":[[4,"if",[[23,["empty"]]],null,{"statements":[[0,"\\tCould not load Project\\n"]],"parameters":[]},{"statements":[[0,"\\tLoading project "],[1,[23,["from","ref"]],false],[0,"\\n"]],"parameters":[]}]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"muid/templates/components/project-card.hbs"}})
e.default=t}),define("muid/templates/components/project-stream",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"llzlgBCJ",block:'{"symbols":["project","&inverse","&default"],"statements":[[4,"sticky-header",null,[["offset"],[[23,["offset"]]]],{"statements":[[0,"  "],[7,"h3"],[9],[0,"\\n    "],[1,[21,"topicTitle"],false],[0," "],[4,"if",[[23,["search","loading"]]],null,{"statements":[[7,"small"],[9],[0,"(searching)"],[10]],"parameters":[]},null],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"each",[[23,["content"]]],null,{"statements":[[0,"  "],[14,3,[[22,1,[]]]],[0,"\\n"]],"parameters":[1]},{"statements":[[0,"  "],[7,"p"],[11,"class","none"],[9],[14,2],[10],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"muid/templates/components/project-stream.hbs"}})
e.default=t}),define("muid/templates/components/project-streams-container",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"JzhiKysd",block:'{"symbols":["topic","&default"],"statements":[[4,"each",[[23,["topics"]]],null,{"statements":[[0,"  "],[14,2,[[22,1,[]],[23,["offsets"]],[27,"action",[[22,0,[]],"updateOffsets"],null]]],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/project-streams-container.hbs"}})
e.default=t}),define("muid/templates/components/search-bar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"HOEBlFn1",block:'{"symbols":[],"statements":[[1,[27,"input",null,[["type","placeholder","input"],["search",[23,["placeholder"]],[27,"action",[[22,0,[]],[23,["updateSearch"]]],null]]]],false],[0,"\\n"],[7,"button"],[11,"style","touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;"],[9],[1,[21,"buttonText"],false],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"muid/templates/components/search-bar.hbs"}})
e.default=t}),define("muid/templates/components/slide-show",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"4MCrwYB9",block:'{"symbols":["slide","&default"],"statements":[[7,"div"],[11,"class","swiper-wrapper"],[9],[0,"\\n"],[4,"each",[[23,["slides"]]],null,{"statements":[[4,"swiper-slide",null,[["tagName"],["picture"]],{"statements":[[0,"\\t\\t\\t"],[14,2,[[22,1,[]]]],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null],[10],[0,"\\n\\n"],[4,"if",[[23,["pagination"]]],null,{"statements":[[0,"  "],[7,"div"],[11,"class","swiper-pagination"],[9],[10],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,["navigation"]]],null,{"statements":[[0,"  "],[7,"div"],[11,"class","swiper-button-next"],[9],[10],[0,"\\n  "],[7,"div"],[11,"class","swiper-button-prev"],[9],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"muid/templates/components/slide-show.hbs"}})
e.default=t}),define("muid/templates/components/sticky-header",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"3hvrVX2V",block:'{"symbols":["&default"],"statements":[[14,1]],"hasEval":false}',meta:{moduleName:"muid/templates/components/sticky-header.hbs"}})
e.default=t}),define("muid/templates/contact",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"xV5lMUs/",block:'{"symbols":[],"statements":[[0,"Get in touch!"]],"hasEval":false}',meta:{moduleName:"muid/templates/contact.hbs"}})
e.default=t}),define("muid/templates/imprint",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"qKIsbbDC",block:'{"symbols":[],"statements":[[7,"section"],[11,"role","info"],[9],[0,"\\n\\t"],[7,"h1"],[9],[0,"Imprint"],[10],[0,"\\n\\t"],[7,"p"],[9],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"muid/templates/imprint.hbs"}})
e.default=t}),define("muid/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"XutoQCg9",block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"muid/templates/index.hbs"}})
e.default=t}),define("muid/templates/news",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"G3RkUMfN",block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"muid/templates/news.hbs"}})
e.default=t}),define("muid/templates/project/detail",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"cdMXUggw",block:'{"symbols":["slide"],"statements":[[4,"if",[[23,["showSlides"]]],null,{"statements":[[4,"slide-show",null,[["slides"],[[23,["model","images"]]]],{"statements":[[0,"    "],[7,"img"],[12,"src",[27,"attachment-url",[[23,["model","id"]],[22,1,[]],"thumb-large"],null]],[9],[10],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]},null],[7,"section"],[11,"class","info"],[9],[0,"\\n\\t"],[7,"h1"],[9],[1,[23,["model","title"]],false],[10],[0,"\\n\\t"],[7,"p"],[9],[7,"strong"],[9],[1,[23,["model","authors"]],false],[10],[10],[0,"\\n"],[4,"if",[[23,["model","abstract"]]],null,{"statements":[[0,"\\t  "],[7,"p"],[11,"class","abstract"],[9],[1,[23,["model","abstract"]],false],[10],[0,"\\n"]],"parameters":[]},null],[4,"if",[[23,["model","description"]]],null,{"statements":[[0,"\\t\\t"],[7,"p"],[11,"class","description"],[9],[1,[23,["model","description"]],false],[10],[0,"\\n"]],"parameters":[]},null],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"muid/templates/project/detail.hbs"}})
e.default=t}),define("muid/transforms/attachment",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.Transform.extend({deserialize:function(e){for(var t in e){var a=e[t]
a.type=a.mime.match(/(\w+)\//)[1],a.isVideo="video"===a.type,e[t]=Ember.Object.create(a)}return e},serialize:function(e){return e}})
e.default=a}),define("muid/config/environment",[],function(){try{var e="muid/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(unescape(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("muid/app").default.create({name:"muid",version:"0.0.2+75641447"})