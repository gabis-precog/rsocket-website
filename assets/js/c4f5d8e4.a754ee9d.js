/*! For license information please see c4f5d8e4.a754ee9d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[195],{8035:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var a=n(7294),r=n(4184),l=n.n(r),o=n(308),c=n(9443);const s=function(){var e=(0,a.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(6010);const u="tabItem_1uMI",m="tabItemActive_2DSg";const d=function(e){var t,n=e.lazy,r=e.block,l=e.defaultValue,o=e.values,c=e.groupId,d=e.className,p=a.Children.toArray(e.children),v=null!=o?o:p.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=l?l:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,h=s(),b=h.tabGroupChoices,E=h.setTabGroupChoices,f=(0,a.useState)(g),k=f[0],S=f[1],y=[];if(null!=c){var N=b[c];null!=N&&N!==k&&v.some((function(e){return e.value===N}))&&S(N)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),a=v[n].value;S(a),null!=c&&(E(c,a),setTimeout((function(){var e,n,a,r,l,o,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,o=window,c=o.innerHeight,s=o.innerWidth,n>=0&&l<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(p.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))};const p=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};var v=n(6213),g=n(6742),h=n(2263),b=n(4996);const E={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX"};function f(){return a.createElement(a.Fragment,null,a.createElement(d,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"},{label:"C++",value:"cpp"}]},a.createElement(p,{value:"java"},a.createElement("div",{style:{marginBottom:10}},a.createElement("h3",null,"Server Example"),a.createElement(v.Z,{className:"language-java"},"\nRSocketServer.create(new PingHandler())\n    .payloadDecoder(PayloadDecoder.ZERO_COPY)\n    .bind(TcpServerTransport.create(7878))\n    .block()\n    .onClose();\n                    ")),a.createElement("div",null,a.createElement("h3",null,"Client Example"),a.createElement(v.Z,{className:"language-java"},'\nMono<RSocket> client =\n    RSocketConnector.create()\n        .payloadDecoder(PayloadDecoder.ZERO_COPY)\n        .connect(TcpClientTransport.create(7878));\n\nPingClient pingClient = new PingClient(client);\n\nRecorder recorder = pingClient.startTracker(Duration.ofSeconds(1));\n\nint count = 1_000;\n\npingClient\n    .requestResponsePingPong(count, recorder)\n    .doOnTerminate(() -> System.out.println("Sent " + count + " messages."))\n    .blockLast();\n                    '))),a.createElement(p,{value:"kotlin"},a.createElement("div",{style:{marginBottom:10}},a.createElement("h3",null,"Server Example"),a.createElement(v.Z,{className:"language-kotlin"},'embeddedServer(CIO, port = 9000) { // create and configure ktor server and start it on localhost:9000\n    install(WebSockets)\n    install(RSocketSupport)\n    routing {\n        rSocket("rsocket") { // configure route \'localhost:9000/rsocket\'\n            RSocketRequestHandler { // create simple request handler\n                requestStream { request: Payload -> // register request/stream handler\n                    println("Received request: \'${request.data.readText()}\'")\n                    flow {\n                        repeat(10) { i -> emit(buildPayload { data("data: $i") }) }\n                    }\n                }\n            }\n        }\n    }\n}.start(wait = true)')),a.createElement("div",null,a.createElement("h3",null,"Client Example"),a.createElement(v.Z,{className:"language-kotlin"},'val client = HttpClient { //create and configure ktor client\n    install(WebSockets)\n    install(RSocketSupport)\n}\n// connect to \'localhost:9000/rsocket\'\nval rSocket: RSocket = client.rSocket(path = "rsocket", port = 9000)\n// request stream\nval stream: Flow<Payload> = rSocket.requestStream(buildPayload { data("Hello") })\n// collect stream\nstream.collect { payload: Payload ->\n    println("Received payload: \'${payload.data.readText()}\'")\n}'))),a.createElement(p,{value:"cpp"},a.createElement("div",{style:{marginBottom:10}},a.createElement("h3",null,"Server Example"),a.createElement(v.Z,{className:"language-cpp"},"\n  // RSocket server accepting on TCP\n  auto rs = RSocket::createServer(TcpConnectionAcceptor::create(FLAGS_port));\n  // global request handler\n  auto handler = std::make_shared<HelloStreamRequestHandler>();\n  // start accepting connections\n  rs->startAndPark([handler](auto r) { return handler; });\n                    ")),a.createElement("div",null,a.createElement("h3",null,"Client Example"),a.createElement(v.Z,{className:"language-cpp"},'\nauto rsf = RSocket::createClient(TcpConnectionFactory::create(host, port));\nauto s = std::make_shared<ExampleSubscriber>(5, 6);\nauto rs = rsf->connect().get();\nrs->requestStream(Payload("Jane"), s);\n                    ')))))}const k=function(){var e=(0,b.C)().withBaseUrl,t=(0,h.Z)().siteConfig,n=void 0===t?{}:t,r=a.createElement(g.Z,{to:e("about/implementations")},"implementation libraries"),c=a.createElement(g.Z,{to:e("about/protocol")},"Protocol document"),s=[{title:"Java",url:"https://github.com/rsocket/rsocket-java"},{title:"Kotlin",url:"https://github.com/rsocket/rsocket-kotlin"},{title:"JavaScript",url:"https://github.com/rsocket/rsocket-js"},{title:"Go",url:"https://github.com/rsocket/rsocket-go"},{title:".Net",url:"https://github.com/rsocket/rsocket-net"},{title:"C++",url:"https://github.com/rsocket/rsocket-cpp"},{title:"Swift",url:"https://github.com/rsocket/rsocket-swift"}],i=[{title:a.createElement(a.Fragment,null,"Why RSocket?"),imageUrl:"img/undraw_server_cluster_jwwq_dark.svg",description:a.createElement(a.Fragment,null,"RSocket provides a protocol for Reactive Streams semantics between client-server, and server-server communication."),button:a.createElement(g.Z,{className:l()("button button--secondary button--md",E.getStarted),to:e("about/motivations")},"Motivations")},{title:a.createElement(a.Fragment,null,"What is RSocket?"),imageUrl:"img/undraw_Faq_re_31cw.svg",description:a.createElement(a.Fragment,null,"RSocket is a binary protocol for use on byte stream transports such as TCP, WebSockets, and Aeron."),button:a.createElement(g.Z,{className:l()("button button--secondary button--md",E.getStarted),to:e("about/protocol")},"Protocol Spec")},{title:a.createElement(a.Fragment,null,"How do I use RSocket?"),imageUrl:"img/undraw_building_blocks_n0nc_dark.svg",description:a.createElement(a.Fragment,null,"RSocket is intended to be consumed via one of the various ",r," which implement the RSocket Protocol."),button:a.createElement(g.Z,{className:l()("button button--secondary button--md",E.getStarted),to:e("about/implementations")},"Browse Libraries")}];return a.createElement(o.Z,{title:n.title,description:n.tagline},a.createElement("header",{className:l()("hero hero--primary",E.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},a.createElement("img",{alt:"RSocket Logo",className:"header__logo",src:e("img/r-socket-horizontal-pink.svg")})),a.createElement("p",{className:"hero__subtitle"},n.tagline),a.createElement("div",{className:E.buttons},a.createElement(g.Z,{className:l()("button button--secondary button--lg",E.getStarted),to:e("about/faq")},"Read the FAQ")))),a.createElement("main",null,i&&i.length&&a.createElement("section",{className:E.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},i.map((function(t,n){var r=t.imageUrl,o=t.title,c=t.description,s=t.button;return a.createElement("div",{key:n,className:l()("col","col--"+12/i.length,E.feature)},r&&a.createElement("div",{className:"text--center"},a.createElement("img",{className:E.featureImage,src:e(r),alt:o})),a.createElement("h3",null,o),a.createElement("p",null,c),s)}))))),s&&s.length&&a.createElement("section",{className:E.features},a.createElement("div",{className:"container"},a.createElement("div",null,a.createElement("h2",null,"Implementations"),a.createElement("p",null,"Drivers are assumed to implement all core features defined in the ",c,".")),a.createElement("div",{style:{marginBottom:20}},s.map((function(e,t){var n=e.title,r=e.url;return a.createElement(g.Z,{key:t,style:{marginRight:4,marginBottom:4},className:l()("button button--secondary button--md",E.getStarted),to:r},n)}))),a.createElement("div",null,a.createElement("h3",null,"Basic Examples"),a.createElement(f,null)))),a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3 padding-vert--lg"},a.createElement("h2",null,"Introduction Video"),a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/KapSjhUYSz4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),a.createElement("div",{className:"text--center padding-vert--lg"},a.createElement(g.Z,{className:"button button--primary button--lg",to:e("about/faq")},"Learn more about RSocket!")))))))}},4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);