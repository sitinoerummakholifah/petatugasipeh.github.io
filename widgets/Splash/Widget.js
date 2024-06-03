// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"jimu/dijit/EditorXssFilter":function(){define("dojo/_base/declare dojo/_base/array dijit/_WidgetBase dojo/_base/lang dojo/Evented libs/arcgis-html-sanitizer/arcgis-html-sanitizer".split(" "),function(t,h,c,l,m,u){var n=null,q=t([c,m],{baseClass:"jimu-editor-xss-filter",declaredClass:"jimu.dijit.EditorXssFilter",sanitizer:null,xss:null,whiteList:{},graphicsWhiteList:{},postCreate:function(){this.whiteList=this._getWhiteList();this.sanitizer=new u({whiteList:this.whiteList,safeAttrValue:l.hitch(this,
function(b,g,e,f){return"style"===g?this.xss.friendlyAttrValue(e).replace(/"/g,"'"):"img"===b&&"src"===g?this.xss.escapeAttrValue(e):this.xss.safeAttrValue(b,g,e,f)}),onTag:l.hitch(this,function(b,g,e){if(e.isWhite&&this._isInWhiteList(b,this.graphicsWhiteList))return g}),onIgnoreTagAttr:l.hitch(this,function(b,g,e,f){if("data-"===g.substr(0,5))return g+'\x3d"'+this.xss.escapeAttrValue(e)+'"'}),onIgnoreTag:l.hitch(this,function(b,g,e){if("o:"===b.substr(0,2)||"!--[if"===b||"!--[endif]--"===b)return g})},
!0);this.xss=this.sanitizer.xss},sanitize:function(b){return this.sanitizer.sanitize(b)},_getWhiteList:function(){var b="title height width class style font-family id align text-align".split(" "),g={div:b,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,span:b,p:b,s:b,strong:b,em:b,u:b,ol:b,ul:b,li:b,a:["href","target"].concat(b),img:["src","alt","border"].concat(b),blockquote:b,font:["face","size","color"].concat(b),pre:b,code:b,b:b,i:b,wbr:b,video:"autoplay controls loop muted poster preload".split(" ").concat(b),
audio:["autoplay","controls","loop","muted","preload"].concat(b),source:["media","src","type"].concat(b),table:["cellpadding","cellspacing","border"].concat(b),tbody:[].concat(b),tr:["valign"].concat(b),td:["valign","colspan","rowspan","nowrap"].concat(b),th:["valign","colspan","rowspan","nowrap"].concat(b),hr:b,html:b,title:b,link:["rel","href"],style:["type"].concat(b),body:b};this.graphicsWhiteList={animate:[],animateMotion:[],animateTransform:[],circle:[],clipPath:[],"color-profile":[],defs:[],
desc:[],discard:[],ellipse:[],feBlend:[],feColorMatrix:[],feComponentTransfer:[],feComposite:[],feConvolveMatrix:[],feDiffuseLighting:[],feDisplacementMap:[],feDistantLight:[],feDropShadow:[],feFlood:[],feFuncA:[],feFuncB:[],feFuncG:[],feFuncR:[],feGaussianBlur:[],feImage:[],feMerge:[],feMergeNode:[],feMorphology:[],feOffset:[],fePointLight:[],feSpecularLighting:[],feSpotLight:[],feTile:[],feTurbulence:[],filter:[],foreignObject:[],g:[],hatch:[],hatchpath:[],line:[],linearGradient:[],marker:[],mask:[],
mesh:[],meshgradient:[],meshpatch:[],meshrow:[],metadata:[],mpath:[],path:[],pattern:[],polygon:[],polyline:[],radialGradient:[],rect:[],set:[],solidcolor:[],stop:[],svg:[],switch:[],symbol:[],text:[],textPath:[],title:[],tspan:[],use:[],view:[],object:[],canvas:b};return this._extendObjectOfArrays([g,{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],
blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],table:["width","border","align",
"valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:"autoplay controls loop preload src height width".split(" ")},this.graphicsWhiteList])},_extendObjectOfArrays:function(b){var g={};h.forEach(b,function(e){var f=Object.keys(e);h.forEach(f,function(p){Array.isArray(e[p])&&Array.isArray(g[p])?g[p]=g[p].concat(e[p]):
g[p]=e[p]},this)},this);return g},_isInWhiteList:function(b,g){g=Object.keys(g);var e=!1;h.forEach(g,function(f){b===f&&(e=!0)},this);return e}});q.getInstance=function(){null===n&&(n=new q);return n};return q})},"jimu/dijit/EditorPreviewLinkMessager":function(){define("dojo/_base/declare dijit/_WidgetBase dojo/on dojo/_base/lang dojo/_base/html dojo/query dojo/Evented dijit/Tooltip".split(" "),function(t,h,c,l,m,u,n,q){var b=null,g=t([h,n],{baseClass:"jimu-editor-preview-link-messager",declaredClass:"jimu.dijit.EditorPreviewLinkMessager",
time:3E3,postMixInProperties:function(){this.nls=window.jimuNls.richTextEditor;this.tooltipPrefix=this.nls.previewLinkToolTipsPrefix;this.tooltipSuffix=this.nls.previewLinkToolTipsSuffix},isInBuilder:function(){return window&&window.parent&&window.parent.isBuilder},isHasContent:function(e,f){return e&&!f},filter:function(e){if(e.nodeType&&1===e.nodeType){e=u("a",e);for(var f=0,p=e.length;f<p;f++){var r=e[f];if("_self"===m.attr(r,"target")){m.removeAttr(r,"target");var x=m.attr(r,"href");m.attr(r,
"onclick",l.hitch(this,function(v){this._interceptLink(v);return!1}));this.own(c(r,"focus",l.hitch(this,function(v){this._interceptLink(v)})));m.setAttr(r,"aria-label",x)}}}},_interceptLink:function(e,f){e&&e.preventDefault();f=e.target.href;q.show(this.tooltipPrefix+f+"\x3cbr/\x3e"+this.tooltipSuffix,e.target);setTimeout(l.hitch(this,function(){q.hide(e.target)}),this.time);return!1}});g.getInstance=function(){null===b&&(b=new g);return b};return g})},"widgets/Splash/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Splash/Widget.html":'\x3cdiv class\x3d"jimu-widget-splash-desktop" data-dojo-attach-point\x3d"splashDesktop"\x3e\r\n  \x3cdiv class\x3d"overlay" data-dojo-attach-point\x3d"overlayNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"envelope buried" data-dojo-attach-point\x3d"envelopeNode"\x3e\r\n    \x3cdiv class\x3d"splash-container splash-bg" data-dojo-attach-point\x3d"splashContainerBackground"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"splash-container" data-dojo-attach-point\x3d"splashContainerNode"\x3e\r\n      \x3cdiv class\x3d"custom-content" data-dojo-attach-point\x3d"customContentNode" tabindex\x3d"0" role\x3d"document" style\x3d"font-family: \'Verdana\',\'Avenir Light\'"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"footer" data-dojo-attach-point\x3d"footerNode"\x3e\r\n        \x3cdiv class\x3d"confirmcheck-container" data-dojo-attach-point\x3d"confirmCheckContainer"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"confirmCheck"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cbutton class\x3d"jimu-btn jimu-float-trailing" data-dojo-attach-point\x3d"okNode" data-dojo-attach-event\x3d"onclick:onOkClick, onkeydown:onOkKeydown" tabindex\x3d"0"\x3e\x3c/button\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Splash/css/style.css":".jimu-widget-splash{position: absolute !important; top: 0 !important; bottom: 0 !important; left: 0 !important; right: 0 !important; margin: auto !important; z-index: 130 !important;}.jimu-widget-splash .jimu-loading-shelter{z-index: 131;}.jimu-widget-splash .buried{visibility: hidden;}.jimu-widget-splash .overlay{top: 0; left: 0; width: 100%; height: 100%; position: absolute; background-color:rgba(0,0,0,0.5);}.jimu-widget-splash-desktop .splash-container .jimu-checkbox,.jimu-widget-splash-mobile .splash-container .jimu-checkbox{font-size: 14px; color: #fff; overflow: auto; max-height: 50px; min-height: 25px; margin-top: 20px; margin-bottom: 10px; display: block;}.jimu-widget-splash-desktop .splash-container .jimu-checkbox .label,.jimu-widget-splash-mobile .splash-container .jimu-checkbox .label{white-space: normal; text-indent: 5px; margin-left: 5px; color: #fff; float: none !important; display: inline; vertical-align: middle;}.jimu-rtl .jimu-widget-splash-desktop .splash-container .jimu-checkbox .label,.jimu-rtl .jimu-widget-splash-mobile .splash-container .jimu-checkbox .label{margin-left: auto; margin-right: 5px;}.jimu-widget-splash-desktop .envelope{}.jimu-widget-splash-desktop .envelope,.jimu-widget-splash-mobile .envelope{position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;}.jimu-widget-splash-desktop .splash-container .jimu-btn,.jimu-widget-splash-mobile .splash-container .jimu-btn{height: 33px; padding: 0; width: 60px; line-height: 33px;}.jimu-rtl .jimu-widget-splash-desktop .splash-container .jimu-btn,.jimu-rtl .jimu-widget-splash-mobile .splash-container .jimu-btn{left: 0; right: auto;}.jimu-widget-splash-desktop .splash-container .enable-btn,.jimu-widget-splash-mobile .splash-container .enable-btn{background-color: #518dca;}.jimu-widget-splash-desktop .splash-container .disable-btn,.jimu-widget-splash-mobile .splash-container .disable-btn{background-color: #a0acbf !important; color: rgb(255, 255, 255) !important;}.jimu-widget-splash-desktop .splash-container .jimu-checkbox .checkbox,.jimu-widget-splash-mobile .splash-container .jimu-checkbox .checkbox{background-color: #fff;}.jimu-widget-splash-desktop .envelope{border: 1px solid rgba(255,255,255,0.3);}.jimu-widget-splash-desktop .splash-container,.jimu-widget-splash-desktop .splash-bg{position: absolute; display: inline-block; margin: auto; top: 0; left: 0; bottom: 0; right: 0; overflow:auto;}.jimu-widget-splash-desktop .splash-container{z-index: 1; overflow: hidden;}.jimu-widget-splash .norepeat{background: no-repeat;}.jimu-widget-splash .fill {background-size: cover !important;}.jimu-widget-splash .fit {background-size: contain !important;}.jimu-widget-splash .stretch {background-size: 100% 100% !important;}.jimu-widget-splash .center {background-size: initial !important;}.jimu-widget-splash .tile {background-size: initial !important;}.jimu-widget-splash-desktop .splash-bg{z-index: 0;}.jimu-widget-splash-desktop .custom-content{margin: 20px; color: #fff; overflow-x: hidden; overflow-y: auto;}.jimu-widget-splash-desktop .splash-container .footer{position: absolute; bottom: 10px; width: 100%;}.jimu-widget-splash .footer .confirmcheck-container{margin: 0 20px;}.jimu-widget-splash .footer .confirmcheck-container .jimu-checkbox .checkbox{margin: 2px;}.jimu-widget-splash .footer .confirmcheck-container .jimu-checkbox .dijitCheckBoxFocused{box-shadow: 0 0 0px 2px rgba(136, 176, 245, 1);}.jimu-widget-splash .footer .jimu-btn {margin: 0 20px 2px 20px;}.jimu-widget-splash .footer .jimu-btn:focus {box-shadow: 0 0 0px 2px rgba(136, 176, 245, 1);}",
"*now":function(t){t(['dojo/i18n!*preload*widgets/Splash/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/keys dojo/query dojo/cookie dijit/_WidgetsInTemplateMixin jimu/BaseWidget dojo/topic jimu/dijit/CheckBox jimu/utils esri/lang jimu/dijit/LoadingShelter dojo/Deferred jimu/dijit/EditorXssFilter jimu/dijit/EditorPreviewLinkMessager".split(" "),function(t,h,c,l,m,u,n,q,b,g,e,f,p,r,x,v,z){return t([b,q],{baseClass:"jimu-widget-splash",_hasContent:null,_requireConfirm:null,_isClosed:!1,postCreate:function(){this.inherited(arguments);
this.isFirstFoucs=!0;c.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);this.shelter=new r({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();this.config.splash.splashContent=v.getInstance().sanitize(this.config.splash.splashContent);this._hasContent=this.config.splash&&this.config.splash.splashContent;this._requireConfirm=this.config.splash&&this.config.splash.requireConfirm;this._showOption=this.config.splash&&this.config.splash.showOption;this._confirmEverytime=this.config.splash&&
this.config.splash.confirmEverytime;this._hasContent&&(this.customContentNode.innerHTML=this.config.splash.splashContent);if(this._requireConfirm||this._showOption){var a="";this._requireConfirm?(a=this.config.splash.confirm.text,c.addClass(this.okNode,"disable-btn")):(a=this.nls.notShowAgain,c.addClass(this.okNode,"enable-btn"));this.confirmCheck=new e({label:f.stripHTML(a),checked:!1},this.confirmCheck);this.own(l(this.confirmCheck,"change",h.hitch(this,this.onCheckBoxClick)));this.confirmCheck.startup()}else c.setStyle(this.confirmCheck,
"display","none"),c.addClass(this.okNode,"enable-btn")},onOpen:function(){if(!f.isInConfigOrPreviewWindow()){var a=this._getCookieKey();a=n(a);p.isDefined(a)&&"false"===a.toString()&&this.close()}"true"!==window.queryObject.disableSplashFocus&&f.focusFirstFocusNode(this.domNode);this._eventShow()},startup:function(){this.inherited(arguments);this.shelter.show();this._normalizeDomNodePosition();this._setConfig();this.own(l(this.domNode,"keydown",h.hitch(this,function(d){c.hasClass(d.target,this.baseClass)&&
d.keyCode===m.ESCAPE&&!this._requireConfirm&&(this.close(),f.focusOnFirstSkipLink())})));this.own(l(this.splashDesktop,"keydown",h.hitch(this,function(d){c.hasClass(d.target,"jimu-widget-splash-desktop")&&(d.keyCode===m.TAB&&d.preventDefault(),(d.keyCode===m.ENTER||!d.shiftKey&&d.keyCode===m.TAB)&&f.focusFirstFocusNode(this.domNode))})));var a=f.getFocusNodesInDom(this.domNode);f.initFirstFocusNode(this.domNode,a[0]);f.initLastFocusNode(this.domNode,this.okNode);this._onlyFocus=!0;this.own(l(this.customContentNode,
"focus",h.hitch(this,function(){this._onlyFocus?this._onlyFocus=!1:(this.customContentNode.scrollTop=0,c.setStyle(this.customContentNode,"display","none"),this.customContentNode.blur(),c.setStyle(this.customContentNode,"display","block"),setTimeout(h.hitch(this,function(){this._onlyFocus=!0;this.customContentNode.focus()}),30))})));f.setWABLogoDefaultAlt(this.customContentNode);this.own(l(this.splashDesktop,"focus",h.hitch(this,function(){this.isFirstFoucs&&(this.isFirstFoucs=!1,setTimeout(function(){a[0].focus()},
0))})))},_setOkNodeAriaLabel:function(){var a=this._requireConfirm&&!this.confirmCheck.getValue()?"true":"false";c.attr(this.okNode,"aria-disabled",a)},_setConfig:function(){this._setWidthForOldVersion().then(h.hitch(this,function(){this._setSizeFromConfig();var a=this.config.splash.button;"undefined"!==typeof a&&("undefined"!==typeof a.color&&(c.setStyle(this.okNode,"backgroundColor",a.color),c.setStyle(this.okNode,"color",f.invertColor(a.color))),"undefined"!==typeof a.transparency&&c.setStyle(this.okNode,
"opacity",1-a.transparency));this.okNode.innerHTML=this.config.splash.button.text||this.nls.ok;c.attr(this.okNode,"title",this.config.splash.button.text||this.nls.ok);this._setOkNodeAriaLabel();var d=this.config.splash.background;if("undefined"!==typeof d)if("image"===d.mode&&"undefined"!==typeof d.image){var k=a="";a="url("+f.processUrlInWidgetConfig(d.image,this.folderUrl)+") center center ";k="no-repeat";d=d.type;"undefined"!==typeof d&&(c.addClass(this.splashContainerNode,d),"tile"===d&&(k="repeat"));
c.setStyle(this.splashContainerNode,"background",a+k)}else"color"===d.mode&&"undefined"!==typeof d.color&&("undefined"!==typeof d.color&&c.setStyle(this.splashContainerBackground,"backgroundColor",d.color),"undefined"!==typeof d.transparency&&c.setStyle(this.splashContainerBackground,"opacity",1-d.transparency));a=this.config.splash.confirm;"undefined"!==typeof a&&this.domNode&&(k=u(".label",this.domNode)[0],"undefined"!==typeof a.color&&k&&c.setStyle(k,"color",a.color),"undefined"!==typeof a.transparency&&
k&&c.setStyle(k,"opacity",1-a.transparency));this.contentVertical="undefined"!==typeof this.config.splash.contentVertical?this.config.splash.contentVertical:"top";f.isInConfigOrPreviewWindow()||(a=this._getCookieKey(),a=n(a),p.isDefined(a)&&"false"===a.toString()&&this.close());this.resize();this.own(l(window,"resize",h.hitch(this,function(){this.resize()})));this._resizeContentImg();c.removeClass(this.envelopeNode,"buried");a=z.getInstance();try{var w=a.isInBuilder()}catch(y){w=!1}w&&a.isHasContent(this._hasContent,
this._isClosed)&&a.filter(this.customContentNode);this.shelter.hide()}))},_normalizeDomNodePosition:function(){c.setStyle(this.domNode,"top",0);c.setStyle(this.domNode,"left",0);c.setStyle(this.domNode,"right",0);c.setStyle(this.domNode,"bottom",0)},setPosition:function(a){this.position=a;c.place(this.domNode,window.jimuConfig.layoutId);this._normalizeDomNodePosition();this.started&&this.resize()},resize:function(){this._changeStatus()},_resizeContentImg:function(){if(this._hasContent&&!this._isClosed){var a=
c.getContentBox(this.envelopeNode);c.empty(this.customContentNode);var d=c.toDom(this.config.splash.splashContent);c.place(d,this.customContentNode);this.customContentNode.nodeType&&1===this.customContentNode.nodeType&&(d=u("img",this.customContentNode))&&d.length&&d.style({maxWidth:a.w-40-20+"px",maxHeight:a.h-40+"px"})}},_changeStatus:function(){window.appInfo.isRunInMobile?(c.setStyle(this.envelopeNode,"height","100%"),c.setStyle(this.envelopeNode,"width","100%")):this._setSizeFromConfig();this._resizeCustomContent();
this._resizeContentImg()},_getNodeStylePx:function(a,d){return a&&d?parseInt(c.getStyle(a,d),10):0},_resizeCustomContent:function(){var a=c.getContentBox(this.splashContainerNode),d=this.customContentNode.scrollHeight,k=c.getMarginBox(this.footerNode),w=this._getNodeStylePx(this.customContentNode,"margin-bottom"),y=this._getNodeStylePx(this.footerNode,"bottom");a=a.h-(k.h+y);!0===d>=a||window.appInfo.isRunInMobile?c.setStyle(this.customContentNode,"height",a-w+"px"):(c.setStyle(this.customContentNode,
"height","auto"),this._moveContentToMiddle({contentSpace:a,customContentScrollheight:d}))},_moveContentToMiddle:function(a){var d=(a.contentSpace-10)/2;"middle"===this.contentVertical&&(a=a.customContentScrollheight/2-d,0>a?c.setStyle(this.customContentNode,"marginTop",Math.abs(a)+10+"px"):c.setStyle(this.customContentNode,"marginTop","10px"))},onCheckBoxClick:function(){this._requireConfirm&&(this.confirmCheck.getValue()?(c.addClass(this.okNode,"enable-btn"),c.removeClass(this.okNode,"disable-btn")):
(c.addClass(this.okNode,"disable-btn"),c.removeClass(this.okNode,"enable-btn")),this._setOkNodeAriaLabel())},_getCookieKey:function(){return"isfirst_"+encodeURIComponent(f.getAppIdFromUrl())},onOkClick:function(){var a=this._getCookieKey();this._requireConfirm?this.confirmCheck.getValue()&&(f.isInConfigOrPreviewWindow()||this._confirmEverytime?n(a,null,{expires:-1}):n(a,!1,{expires:1E3,path:"/"}),this.close()):(this._showOption?!f.isInConfigOrPreviewWindow()&&this.confirmCheck.getValue()&&n(a,!1,
{expires:1E3,path:"/"}):n(a,null,{expires:-1}),this.close())},onOkKeydown:function(a){if(a.keyCode===m.ENTER||a.keyCode===m.SPACE)this.onOkClick(),!this._requireConfirm||this._requireConfirm&&this.confirmCheck.getValue()?f.focusOnFirstSkipLink():a.preventDefault()},close:function(){this._isClosed=!0;this._eventHide();this.widgetManager.closeWidget(this)},_setSizeFromConfig:function(){var a=this.config.splash.size;if("undefined"!==typeof a&&"object"===typeof a){var d=a.percent,k=a.wh;"percent"===a.mode&&
"undefined"!==typeof d?(c.setStyle(this.envelopeNode,"width",d),c.setStyle(this.envelopeNode,"height",d)):"wh"===a.mode&&"undefined"!==typeof k&&(this._setWidthInCurrentScreen(k),this._setHeightInCurrentScreen(k))}},_setWidthInCurrentScreen:function(a){var d=window.innerWidth;!window.appInfo.isRunInMobile&&a.w<=d?c.setStyle(this.envelopeNode,"width",a.w+"px"):c.setStyle(this.envelopeNode,"width","100%")},_setHeightInCurrentScreen:function(a){var d=window.innerHeight;!window.appInfo.isRunInMobile&&
a.h<=d?c.setStyle(this.envelopeNode,"height",a.h+"px"):c.setStyle(this.envelopeNode,"height","100%")},_setWidthForOldVersion:function(){var a=new x,d=this.config.splash.size;if(!0===("wh"===d.mode&&"undefined"!==typeof d.wh&&null===d.wh.h))return f.getEditorContentHeight(this.config.splash.splashContent,this.domNode,{contentWidth:560,contentMarginTop:20,footerHeight:98}).then(h.hitch(this,function(k){return d.wh.h=k}));a.resolve();return a},_eventShow:function(){setTimeout(h.hitch(this,function(){g.publish("splashPopupShow")}),
800)},_eventHide:function(){g.publish("splashPopupHide")}})});