(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),s=(n(0),n(89)),i={slug:"/motivations",title:"Motivations",sidebar_label:"Motivations"},r={unversionedId:"motivations",id:"motivations",isDocsHomePage:!1,title:"Motivations",description:"Large, distributed systems are often implemented in a modular fashion by different teams using a variety of technologies and programming languages. The pieces need to communicate reliably and support rapid, independent evolution. Effective and scalable communication between modules is a crucial concern in distributed systems. It significantly affects how much latency users experience and the amount of resources required to build and run the system.",source:"@site/content-docs/motivations.md",slug:"/motivations",permalink:"/docs/motivations",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/motivations.md",version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1616894004,sidebar_label:"Motivations",sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/docs/"},next:{title:"Protocol",permalink:"/docs/protocol"}},l=[{value:"Message Driven",id:"message-driven",children:[]},{value:"Interaction Models",id:"interaction-models",children:[{value:"Fire-and-Forget",id:"fire-and-forget",children:[]},{value:"Request/Response (single-response)",id:"requestresponse-single-response",children:[]},{value:"Request/Stream (multi-response, finite)",id:"requeststream-multi-response-finite",children:[]},{value:"Channel",id:"channel",children:[]}]},{value:"Behaviors",id:"behaviors",children:[{value:"Single-Response vs. Multi-Response",id:"single-response-vs-multi-response",children:[]},{value:"Bi-Directional",id:"bi-directional",children:[]}]},{value:"Cancellation",id:"cancellation",children:[]},{value:"Resumability",id:"resumability",children:[]},{value:"Application Flow Control",id:"application-flow-control",children:[{value:"\u201cReactive Streams\u201d <code>request(n)</code> Async Pull",id:"reactive-streams-requestn-async-pull",children:[]},{value:"Leasing",id:"leasing",children:[]}]},{value:"Polyglot Support",id:"polyglot-support",children:[]},{value:"Transport Layer Flexibility",id:"transport-layer-flexibility",children:[]},{value:"Efficiency &amp; Performance",id:"efficiency--performance",children:[]},{value:"Comparisons",id:"comparisons",children:[{value:"TCP &amp; QUIC",id:"tcp--quic",children:[]},{value:"WebSockets",id:"websockets",children:[]},{value:"HTTP/1.1 &amp; HTTP/2",id:"http11--http2",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Large, distributed systems are often implemented in a modular fashion by different teams using a variety of technologies and programming languages. The pieces need to communicate reliably and support rapid, independent evolution. Effective and scalable communication between modules is a crucial concern in distributed systems. It significantly affects how much latency users experience and the amount of resources required to build and run the system."),Object(s.b)("p",null,"Architectural patterns documented in the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.reactivemanifesto.org",title:"We want systems that are Responsive, Resilient, Elastic, and Message Driven. We call these Reactive Systems."}),"Reactive Manifesto")," and implemented in libraries such as ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.reactive-streams.org",title:"Reactive Streams is an initiative to provide a standard for asynchronous stream processing with non-blocking back pressure."}),"Reactive Streams")," and ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.reactivex.io",title:"ReactiveX is an API for asynchronous programming with observable streams."}),"Reactive Extensions")," favor asynchronous messaging and embrace communication patterns beyond request/response. This \u201cRSocket\u201d protocol is a formal communication protocol that embraces the \u201creactive\u201d principles."),Object(s.b)("p",null,"Following are our motivations for defining a new protocol:"),Object(s.b)("h2",{id:"message-driven"},"Message Driven"),Object(s.b)("p",null,"Network communication is asynchronous. The RSocket protocol embraces this and models all communication as multiplexed streams of messages over a single network connection, and never synchronously blocks while waiting for a response."),Object(s.b)("p",null,"The ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.reactivemanifesto.org",title:"We want systems that are Responsive, Resilient, Elastic, and Message Driven. We call these Reactive Systems."}),"Reactive Manifesto")," states:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Reactive Systems rely on asynchronous message-passing to establish a boundary between components that ensures loose coupling, isolation, location transparency, and provides the means to delegate errors as messages. Employing explicit message-passing enables load management, elasticity, and flow control by shaping and monitoring the message queues in the system and applying back-pressure when necessary. \u2026 Non-blocking communication allows recipients to only consume resources while active, leading to less system overhead.")),Object(s.b)("p",null,"Additionally, the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://http2.github.io/faq/#why-is-http2-multiplexed"}),"HTTP/2 FAQ")," does a good job of explaining the motivations for adopting a message-oriented protocol in the form of multiplexing over persistent connections:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"HTTP/1.x has a problem called \u201chead-of-line blocking,\u201d where effectively only one request can be outstanding on a connection at a time.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"HTTP/1.1 tried to fix this with pipelining, but it didn\u2019t completely address the problem (a large or slow response can still block others behind it). Additionally, pipelining has been found very difficult to deploy, because many intermediaries and servers don\u2019t process it correctly.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This forces clients to use a number of heuristics (often guessing) to determine what requests to put on which connection to the origin when; since it\u2019s common for a page to load 10 times (or more) the number of available connections, this can severely impact performance, often resulting in a \u201cwaterfall\u201d of blocked requests.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Multiplexing addresses these problems by allowing multiple request and response messages to be in flight at the same time; it\u2019s even possible to intermingle parts of one message with another on the wire.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This, in turn, allows a client to use just one connection per origin to load a page.")),Object(s.b)("p",null,"The FAQ continues, discussing persistent connections:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"With HTTP/1, browsers open between four and eight connections per origin. Since many sites use multiple origins, this could mean that a single page load opens more than thirty connections.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"One application opening so many connections simultaneously breaks a lot of the assumptions that TCP was built upon; since each connection will start a flood of data in the response, there\u2019s a real risk that buffers in the intervening network will overflow, causing a congestion event and retransmits.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Additionally, using so many connections unfairly monopolizes network resources, \u201cstealing\u201d them from other, better-behaved applications (e.g., VoIP).")),Object(s.b)("h2",{id:"interaction-models"},"Interaction Models"),Object(s.b)("p",null,"An inappropriate protocol increases the costs of developing a system. It can be a mismatched abstraction that forces the design of the system into the mold it allows. This forces developers to spend extra time working around its shortcomings to handle errors and achieve acceptable performance. In a polyglot environment this problem is amplified as different languages will use different approaches to solve this problem, which requires extra coordination among teams. To date the de facto standard is HTTP and everything is a request/response. In some cases this might not be the ideal communication model for a given feature."),Object(s.b)("p",null,"One such example is push notifications. Using request/response forces an application to do polling, where the client consistently sends requests to check the server for data. One does not need to look far to find examples of applications doing high volumes of requests/second just to poll and be told there is nothing for them. This is wasteful for clients, servers, and networks; costs money; and increases infrastructure size, operational complexity, and thus availability. It also generally adds latency to the user experience in receiving a notification, as polling is scaled back to longer intervals in an attempt to reduce costs."),Object(s.b)("p",null,"For this and other reasons, RSocket is not limited to just one interaction model. The various supported interaction models described below open up powerful new possibilities for system design:"),Object(s.b)("h3",{id:"fire-and-forget"},"Fire-and-Forget"),Object(s.b)("p",null,"Fire-and-forget is an optimization of request/response that is useful when a response is not needed. It allows for significant performance optimizations, not just in saved network usage by skipping the response, but also in client and server processing time as no bookkeeping is needed to wait for and associate a response or cancellation request."),Object(s.b)("p",null,"This interaction model is useful for use cases that support lossiness, such as non-critical event logging."),Object(s.b)("p",null,"Usage can be thought of like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"Future<Void> completionSignalOfSend = socketClient.fireAndForget(message);\n")),Object(s.b)("h3",{id:"requestresponse-single-response"},"Request/Response (single-response)"),Object(s.b)("p",null,"Standard request/response semantics are still supported, and still expected to represent the majority of requests over a RSocket connection. These request/response interactions can be considered optimized \u201cstreams of only 1 response\u201d, and are asynchronous messages multiplexed over a single connection."),Object(s.b)("p",null,"The consumer \u201cwaits\u201d for the response message, so it looks like a typical request/response, but underneath it never synchronously blocks."),Object(s.b)("p",null,"Usage can be thought of like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"Future<Payload> response = socketClient.requestResponse(requestPayload);\n")),Object(s.b)("h3",{id:"requeststream-multi-response-finite"},"Request/Stream (multi-response, finite)"),Object(s.b)("p",null,"Extending from request/response is request/stream, which allows multiple messages to be streamed back. Think of this as a \u201ccollection\u201d or \u201clist\u201d response, but instead of getting back all the data as a single response, each element is streamed back in order."),Object(s.b)("p",null,"Use cases could include things like:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"fetching a list of videos"),Object(s.b)("li",{parentName:"ul"},"fetching products in a catalog"),Object(s.b)("li",{parentName:"ul"},"retrieving a file line-by-line")),Object(s.b)("p",null,"Usage can be thought of like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"Publisher<Payload> response = socketClient.requestStream(requestPayload);\n")),Object(s.b)("h3",{id:"channel"},"Channel"),Object(s.b)("p",null,"A channel is bi-directional, with a stream of messages in both directions."),Object(s.b)("p",null,"An example use case that benefits from this interaction model is:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"client requests a stream of data that initially bursts the current view of the world"),Object(s.b)("li",{parentName:"ul"},"deltas/diffs are emitted from server to client as changes occur"),Object(s.b)("li",{parentName:"ul"},"client updates the subscription over time to add/remove criteria/topics/etc.")),Object(s.b)("p",null,"Without a bi-directional channel, the client would have to cancel the initial request, re-request, and receive all data from scratch, rather than just updating the subscription and efficiently getting just the difference."),Object(s.b)("p",null,"Usage can be thought of like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"Publisher<Payload> output = socketClient.requestChannel(Publisher<Payload> input);\n")),Object(s.b)("h2",{id:"behaviors"},"Behaviors"),Object(s.b)("p",null,"Beyond the interaction models above, there are other behaviors that can benefit applications and system efficiency."),Object(s.b)("h3",{id:"single-response-vs-multi-response"},"Single-Response vs. Multi-Response"),Object(s.b)("p",null,"One key difference between single-response and multi-response is how the RSocket stack delivers data to the application: A single-response might be carried across multiple frames, and be part of a larger RSocket connection that is streaming multiple messages multiplexed. But single-response means the application only gets its data when the entire response is received. While multi-response delivers it piecemeal. This could allow the user to design its service with multi-response in mind, and then the client can start processing the data as soon as it receives the first chunk."),Object(s.b)("h3",{id:"bi-directional"},"Bi-Directional"),Object(s.b)("p",null,"RSocket supports bi-directional requests where both client and server can act as requester or responder. This allows a client (such as a user device) to act as a responder to requests from the server."),Object(s.b)("p",null,"For example, a server could query clients for trace debug information, state, etc. This can be used to reduce infrastructure scaling requirements by allowing server-side to query when needed instead of having millions/billions of clients constantly submitting data that may only occasionally be needed. This also opens up future interaction models currently not envisioned between client and server."),Object(s.b)("h2",{id:"cancellation"},"Cancellation"),Object(s.b)("p",null,"All streams (including request/response) support cancellation to allow efficient cleanup of server (responder) resources. This means that when a client cancels, or walks away, servers are given the chance to terminate work early. This is essential with interaction models such as streams and subscriptions, but is even useful with request/response to allow efficient adoption of approaches such as \u201cbackup requests\u201d to tame tail latency (more information ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://highscalability.com/blog/2012/3/12/google-taming-the-long-latency-tail-when-more-machines-equal.html"}),"here"),", ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://highscalability.com/blog/2012/6/18/google-on-latency-tolerant-systems-making-a-predictable-whol.html"}),"here"),", ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.bailis.org/blog/doing-redundant-work-to-speed-up-distributed-queries/"}),"here"),", and ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/people/jeff/Stanford-DL-Nov-2010.pdf"}),"here"),")."),Object(s.b)("h2",{id:"resumability"},"Resumability"),Object(s.b)("p",null,"With long-lived streams, particularly those serving subscriptions from mobile clients, network disconnects can significantly impact cost and performance if all subscriptions must be re-established. This is particularly egregious when the network is immediately reconnected, or when switched between Wifi and cell networks."),Object(s.b)("p",null,"RSocket supports session resumption, allowing a simple handshake to resume a client/server session over a new transport connection."),Object(s.b)("h2",{id:"application-flow-control"},"Application Flow Control"),Object(s.b)("p",null,"RSocket supports two forms of application-level flow control to help protect both client and server resources from being overwhelmed: \u201cReactive Streams\u201d ",Object(s.b)("inlineCode",{parentName:"p"},"request(n)")," async pull, and leasing."),Object(s.b)("p",null,"This protocol is designed for use both in datacenter, server-to-server use cases, as well as server-to-device use cases over the internet, such as to mobile devices or browsers."),Object(s.b)("h3",{id:"reactive-streams-requestn-async-pull"},"\u201cReactive Streams\u201d ",Object(s.b)("inlineCode",{parentName:"h3"},"request(n)")," Async Pull"),Object(s.b)("p",null,"This first form of flow control is suited to both server-to-server and server-to-device use cases. It is inspired by the Reactive Streams ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/reactive-streams/reactive-streams-jvm/blob/v1.0.0/README.md#3-subscription-code"}),"Subscription.request(n)")," behavior. ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ReactiveX/RxJava",title:"RxJava is a library for composing asynchronous and event-based programs using observable sequences for the Java VM."}),"RxJava"),", ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/reactor/reactor",title:"Reactive foundations for apps and frameworks and reactive extensions, with Mono (1 element) and Flux (n elements) types."}),"Reactor"),", and ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://doc.akka.io/docs/akka/2.4/scala/stream/index.html",title:"An intuitive and safe way to formulate stream processing setups such that we can then execute them efficiently and with bounded resource usage."}),"Akka Streams")," are examples of implementations using this form of \u201casync pull-push\u201d flow control."),Object(s.b)("p",null,"RSocket allows for the ",Object(s.b)("inlineCode",{parentName:"p"},"request(n)")," signal to be composed over network boundaries from requester to responder (typically client to server). This controls the flow of emission from responder to requester using Reactive Streams semantics at the application level and enables the use of bounded buffers so rate-of-flow adjusts to application consumption and does not rely solely on transport and network buffering."),Object(s.b)("p",null,"This same data type and approach has been adopted into Java 9 in ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/9/docs/api/java/util/concurrent/Flow.Subscription.html"}),"the ",Object(s.b)("inlineCode",{parentName:"a"},"java.util.concurrent.Flow")," suite of types"),"."),Object(s.b)("h3",{id:"leasing"},"Leasing"),Object(s.b)("p",null,"The second form of flow control is primarily focused on server-to-server use cases in a data center. When enabled, a responder (typically a server) can issue leases to the requester based upon its knowledge of its capacity in order to control requests rates. On the requester side, this enables application-level load balancing for sending messages only to responders (servers) that have signalled capacity. This signal from server to client allows for more intelligent routing and load-balancing algorithms in data centers with clusters of machines."),Object(s.b)("h2",{id:"polyglot-support"},"Polyglot Support"),Object(s.b)("p",null,"Many of the motivations above can be achieved by leveraging existing protocols, libraries, and techniques. However, this often ends up being tightly coupled with specific implementations that must be agreed upon across languages, platforms, and tech stacks."),Object(s.b)("p",null,"In contrast, formalizing the interaction models and flow control behaviors into a protocol provides a contract between implementations in different languages. This in turn improves polyglot interactions in a broader set of behaviors than the ubiquitous HTTP/1.1 request/response, while also enabling Reactive Streams application-level flow control across languages (rather than just in Java, for example, where Reactive Streams was originally defined)."),Object(s.b)("h2",{id:"transport-layer-flexibility"},"Transport Layer Flexibility"),Object(s.b)("p",null,"Just as HTTP request/response is not the only way applications can or should communicate, TCP is not the only transport layer available, and not the best for all use cases. Thus, RSocket allows you to swap the underlying transport layer based on environment, device capabilities, and performance needs. RSocket (the application protocol) targets WebSockets, TCP, and ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/real-logic/Aeron",title:"Efficient reliable UDP unicast, UDP multicast, and IPC message transport."}),"Aeron"),", and is expected to be usable over any transport layer with TCP-like characteristics, such as ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.chromium.org/quic",title:"QUIC is a new transport which reduces latency compared to that of TCP."}),"QUIC"),"."),Object(s.b)("p",null,"Perhaps more importantly though, it makes TCP, WebSockets, and Aeron usable without significant effort. For example, use of WebSockets is often appealing, but all it exposes is framing semantics, so using it requires the definition of an application protocol. This is generally overwhelming and requires a lot of effort. TCP doesn\u2019t even provide framing. Thus, most applications end up using HTTP/1.1 and sticking to request/response and missing out on the benefits of interaction models beyond synchronous request/response."),Object(s.b)("p",null,"For this reason, RSocket defines application-layer semantics over these network transports to allow choosing them when they are appropriate. Later in this document is a brief comparison with other protocols that were explored while trying to leverage WebSockets and Aeron before determining that a new application protocol was wanted."),Object(s.b)("h2",{id:"efficiency--performance"},"Efficiency & Performance"),Object(s.b)("p",null,"A protocol that uses network resources inefficiently (repeated handshakes and connection setup and tear down overhead, bloated message format, etc.) can greatly increase the perceived latency of a system. Also, without flow control semantics, a single poorly-written module can overrun the rest of the system when dependent services slow down, potentially causing retry storms that put further pressure on the system. ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Netflix/Hystrix/wiki#problem"}),"Hystrix")," is an example solution trying to address the problems of synchronous request/response. It comes ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Netflix/Hystrix/wiki/FAQ#what-is-the-processing-overhead-of-using-hystrix"}),"at a cost")," however in overhead and complexity."),Object(s.b)("p",null,"Additionally, a poorly chosen communication protocol wastes server resources (CPU, memory, and network bandwidth). While that may be acceptable for smaller deployments, large systems with hundreds or thousands of nodes multiply small inefficiencies into noticeable excess. Running with a huge footprint leaves less room for expansion, as server resources are relatively cheap but not infinite. Managing giant clusters is much more expensive and less nimble even with good tools. And an often forgotten point is that the larger a cluster is, the more operationally complex it is, which becomes an availability concern."),Object(s.b)("p",null,"RSocket seeks to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Reduce perceived latency and increase system efficiency by supporting non-blocking, duplex, async application communication with flow control over multiple transports from any language.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Reduce hardware footprint (and thus cost and operational complexity) by:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"increasing CPU and memory efficiency through use of binary encoding"),Object(s.b)("li",{parentName:"ul"},"avoiding redundant work by allowing persistent connections"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Reduce perceived user latency by:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"avoiding handshakes and the associated round-trip network overhead"),Object(s.b)("li",{parentName:"ul"},"reducing computation time by using binary encoding"),Object(s.b)("li",{parentName:"ul"},"allocating less memory and reducing garbage collection cost")))),Object(s.b)("h2",{id:"comparisons"},"Comparisons"),Object(s.b)("p",null,"Following is a brief review of some protocols we reviewed before we decided to create RSocket. It does not attempt to be exhaustive or detailed. It also does not seek to criticize the various protocols, as they all are good at what they are built for. This section is meant solely to express that existing protocols did not sufficiently meet the requirements that motivated the creation of RSocket."),Object(s.b)("p",null,"For context:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"RSocket is an OSI Layer 5/6, or TCP/IP \u201cApplication Layer\u201d protocol."),Object(s.b)("li",{parentName:"ul"},"It is intended for use over duplex, binary transport protocols that are TCP-like in behavior (described further ",Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"http://rsocket.io/docs/Protocol#transport-protocol"}),"here"),").")),Object(s.b)("h3",{id:"tcp--quic"},"TCP & QUIC"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"No framing or application semantics"),Object(s.b)("li",{parentName:"ul"},"Must provide an application protocol")),Object(s.b)("h3",{id:"websockets"},"WebSockets"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"No application semantics, just framing"),Object(s.b)("li",{parentName:"ul"},"Must provide an application protocol")),Object(s.b)("h3",{id:"http11--http2"},"HTTP/1.1 & HTTP/2"),Object(s.b)("p",null,"HTTP provides barely-sufficient raw capabilities for application protocols to be built with, but an application protocol still needs to be defined on top of it. It is insufficient in defining application semantics. (",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md"}),"gRPC from Google")," is an example of a protocol being built on top of HTTP/2 to add these type of semantics)."),Object(s.b)("p",null,"These limited application semantics generally require an application protocol to define things such as:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Use of GET, POST, or PUT for request"),Object(s.b)("li",{parentName:"ul"},"Use of Normal, Chunked, or SSE for response"),Object(s.b)("li",{parentName:"ul"},"MimeType of payload"),Object(s.b)("li",{parentName:"ul"},"Error messaging along with standard status codes"),Object(s.b)("li",{parentName:"ul"},"How the client should behave with status codes"),Object(s.b)("li",{parentName:"ul"},"Use of SSE as persistent channel from server to client to allow server to make requests to client")),Object(s.b)("p",null,"There is no defined mechanism for flow control from responder (typically server) to requester (typically client). HTTP/2 does flow control at the byte level, not the application level. The mechanisms for communicating requester (typically server) availability (such as failing a request) are inefficient and painful. It does not support interaction models such as fire-and-forget, and streaming models are inefficient (chunked encoding or SSE, which is ",Object(s.b)("span",{style:{fontSize:"90%"}},"ASCII"),"-based)."),Object(s.b)("p",null,"Despite its ubiquity, ",Object(s.b)("span",{style:{fontSize:"90%"}},"REST")," alone is insufficient and inappropriate for defining application semantics."),Object(s.b)("p",null,"What about HTTP/2 though? Doesn\u2019t it resolve the HTTP/1 issues and address the motivations of RSocket?"),Object(s.b)("p",null,"Unfortunately, no. HTTP/2 is ",Object(s.b)("em",{parentName:"p"},"much")," better for browsers and request/response document transfer, but does not expose the desired behaviors and interaction models for applications as described earlier in this document."),Object(s.b)("p",null,"Here are some quotes from the HTTP/2 ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://http2.github.io/http2-spec/"}),"spec")," and ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://http2.github.io/faq/"}),"FAQ")," that are useful to provide context on what HTTP/2 was targeting:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u201cHTTP\u2019s existing semantics remain unchanged.\u201d")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u201c\u2026","\xa0","from the application perspective, the features of the protocol are largely unchanged","\xa0","\u2026\u201d")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u201cThis effort was chartered to work on a revision of the wire protocol\u2009\u2014\u2009i.e., how HTTP headers, methods, etc. are put \u2018onto the wire\u2019, not change HTTP\u2019s semantics.\u201d")),Object(s.b)("p",null,"Additionally, \u201cpush promises\u201d are focused on filling browser caches for standard web browsing behavior:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u201cPushed responses are always associated with an explicit request from the client.\u201d")),Object(s.b)("p",null,"This means we still need SSE or WebSockets (and SSE is a text protocol so requires Base64 encoding to UTF-8) for push."),Object(s.b)("p",null,"HTTP/2 was meant as a better HTTP/1.1, primarily for document retrieval in browsers for websites. We can do better than HTTP/2 for applications."))}p.isMDXComponent=!0}}]);