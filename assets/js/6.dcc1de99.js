(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(t,r,v){t.exports=v.p+"assets/img/flow.71f429bb.png"},353:function(t,r,v){t.exports=v.p+"assets/img/1034798-20190714230027166-1979915654.2c3807fd.png"},378:function(t,r,v){"use strict";v.r(r);var _=v(42),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器的高层结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的高层结构"}},[t._v("#")]),t._v(" 浏览器的高层结构")]),t._v(" "),_("p",[t._v("浏览器的主要组件为")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("用户界面")]),t._v(" - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面。")]),t._v(" "),_("li",[_("strong",[t._v("浏览器引擎")]),t._v(" - 在用户界面和渲染引擎之间传送指令。")]),t._v(" "),_("li",[_("strong",[t._v("渲染引擎")]),t._v(" - 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。")]),t._v(" "),_("li",[_("strong",[t._v("网络")]),t._v(" - 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。")]),t._v(" "),_("li",[_("strong",[t._v("用户界面后端")]),t._v(" - 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。")]),t._v(" "),_("li",[_("strong",[t._v("JavaScript 解释器/JavaScript 引擎")]),t._v(" - 用于解析和执行 JavaScript 代码。")]),t._v(" "),_("li",[_("strong",[t._v("数据存储")]),t._v(" - 这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库。")])]),t._v(" "),_("p",[t._v("核心主要为渲染引擎跟JavaScript 引擎")]),t._v(" "),_("h1",{attrs:{id:"浏览器中的进程与线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的进程与线程"}},[t._v("#")]),t._v(" 浏览器中的进程与线程")]),t._v(" "),_("p",[t._v("Chrome浏览器使用多个进程来隔离不同的网页，在Chrome中打开一个网页相当于起了一个进程，每个tab网页都有由其独立的渲染引擎实例。因为如果不是多进程的话，如果浏览器中的一个tab网页崩溃，将会导致其他被打开的网页应用。另外相对于线程，进程之间是不共享资源和地址空间的，所以不会存在太多的安全问题，而由于多个线程共享着相同的地址空间和资源，所以会存在线程之间有可能会恶意修改或者获取非授权数据等复杂的安全问题。")]),t._v(" "),_("p",[t._v("在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("GUI 渲染线程\nGUI渲染线程负责渲染浏览器界面HTML元素,当界面需要重绘(Repaint)或由于某种操作引发回流(reflow)时，该线程就会执行。"),_("strong",[t._v("在Javascript引擎运行脚本期间,GUI渲染线程都是处于挂起状态的，也就是说被冻结了，GUI渲染线程与JS引擎线程互斥的。")])])]),t._v(" "),_("li",[_("p",[t._v("JavaScript引擎线程\nJS为处理页面中用户的交互，以及操作DOM树、CSS样式树来给用户呈现一份动态而丰富的交互体验和服务器逻辑的交互处理。如果JS是多线程的方式来操作这些UI DOM，则可能出现UI操作的冲突；如果JS是多线程的话，在多线程的交互下，处于UI中的DOM节点就可能成为一个临界资源，"),_("strong",[t._v("假设存在两个线程同时操作一个DOM，一个负责修改一个负责删除，那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果，当然我们可以通过锁来解决上面的问题。但为了避免因为引入了锁而带来更大的复杂性，JS在最初就选择了单线程执行")]),t._v("。"),_("br"),t._v("\nGUI渲染线程与JS引擎线程互斥的，是由于JavaScript是可操纵DOM的，如果在修改这些元素属性同时渲染界面（即JavaScript线程和UI线程同时运行），那么渲染线程前后获得的元素数据就可能不一致。当JavaScript引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到引擎线程空闲时立即被执行。由于GUI渲染线程与JS执行线程是互斥的关系，当浏览器在执行JS程序的时候，GUI渲染线程会被保存在一个队列中，直到JS程序执行完成，才会接着执行。因此如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。")])]),t._v(" "),_("li",[_("p",[t._v("定时触发器线程\n浏览器定时计数器并不是由JS引擎计数的, 因为JS引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确, 因此通过单独线程来计时并触发定时是更为合理的方案。")])]),t._v(" "),_("li",[_("p",[t._v("事件触发线程\n当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。这些事件可以是当前执行的代码块如定时任务、也可来自浏览器内核的其他线程如鼠标点击、AJAX异步请求等，但由于JS的单线程关系所有这些事件都得排队等待JS引擎处理。")])]),t._v(" "),_("li",[_("p",[t._v("异步http请求线程\n在XMLHttpRequest在连接后是通过浏览器新开一个线程请求，将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件放到JS引擎的处理队列中等待处理。")])])]),t._v(" "),_("h2",{attrs:{id:"渲染引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎"}},[t._v("#")]),t._v(" 渲染引擎")]),t._v(" "),_("p",[t._v("Firefox 使用的是 Gecko，这是 Mozilla 公司“自制”的渲染引擎。而 Safari 和 Chrome 浏览器使用的都是 WebKit。\nWebKit 是一种开放源代码渲染引擎，起初用于 Linux 平台，随后由 Apple 公司进行修改，从而支持苹果机和 Windows。")]),t._v(" "),_("p",[t._v("Firefox： Gecko引擎")]),t._v(" "),_("p",[t._v("Safari：   WebKit引擎")]),t._v(" "),_("p",[t._v("Chrome：WebKit引擎")]),t._v(" "),_("h3",{attrs:{id:"主流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主流程"}},[t._v("#")]),t._v(" 主流程")]),t._v(" "),_("p",[t._v("渲染引擎通常分为四个阶段")]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("解析代码")]),t._v("   解析HTML代码构建DOM tree，同时也会解析外部 CSS 文件以及样式元素中的样式数据，构建CSS tree")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("构建渲染树")]),t._v(" DOM tree跟CSS tree一起构建渲染树，render tree")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("布局页面")]),t._v("   布局（layOut）render tree，计算每个节点分配一个应出现在屏幕上的确切坐标")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("绘制页面")]),t._v("   渲染引擎会遍历渲染树，将每个节点绘制出来")])])]),t._v(" "),_("p",[t._v("以上四步并非严格按顺序执行，往往第一步还没完成，第二步和第三步就已经开始了。为达到更好的用户体验，渲染引擎会力求尽快将内容显示在屏幕上。它不必等到整个 HTML 文档解析完毕之后，才开始构建渲染树和设置布局。在不断接收和处理来自网络的其余内容的同时，渲染引擎会将部分内容解析并先呈现出来")]),t._v(" "),_("p",[_("img",{attrs:{src:v(352),alt:"",title:"渲染引擎的基本流程"}})]),t._v(" "),_("h3",{attrs:{id:"浏览器解析处理js脚本和css样式表的顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析处理js脚本和css样式表的顺序"}},[t._v("#")]),t._v(" 浏览器解析处理JS脚本和CSS样式表的顺序")]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("脚本")]),t._v(" 当遇到 javascript 脚本，JavaScript 引擎会立即解析并执行脚本。渲染引擎被挂起，文档的解析将停止，直到脚本执行完毕。如果脚本是外部的，那么解析过程会停止，直到从网络同步抓取资源完成后再继续。可以将脚本标注为“defer”，这样它就不会停止文档解析，而是等到解析结束才执行。HTML5 增加了一个选项“async”，可将脚本标记为异步，不会影响文档解析，会交给其他线程解析和执行。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("预解析")]),t._v(" 现代浏览器渲染引擎 WebKit 和 Firefox 都进行了这项优化。在执行脚本时，其他线程会解析文档的其余部分，找出并加载需要通过网络加载的其他资源。通过这种方式，资源可以在并行连接上加载，从而提高总体速度。请注意，预解析器不会修改 DOM 树，而是将这项工作交由主解析器处理；预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("样式表")]),t._v(" 样式表不会更改 DOM 树，因此没有必要等待样式表并停止文档解析。但这涉及到一个问题，就是javascript脚本在文档解析阶段会请求样式信息。如果当时还没有加载和解析样式，脚本就会获得错误的回复，这样显然会产生很多问题。现代渲染引擎对此有不同的处理方式，Firefox 在样式表加载和解析的过程中，会禁止所有脚本。而对于 WebKit 而言，仅当脚本尝试访问的样式属性可能受尚未加载的样式表影响时，它才会禁止该脚本。")])])]),t._v(" "),_("h3",{attrs:{id:"渲染树-render-tree-的构建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染树-render-tree-的构建"}},[t._v("#")]),t._v(" 渲染树（render tree）的构建")]),t._v(" "),_("p",[t._v("在 DOM 树构建的同时，浏览器还会构建另一个树结构：渲染树，渲染器（renderer）构成渲染树")]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("渲染树和 DOM 树的关系")]),t._v(" 渲染器是和 DOM 元素相对应的，但并非一一对应。非可视化的 DOM 元素不会插入渲染树中，例如“head”元素。如果元素的 display 属性值为“none”，那么也不会显示在渲染树中（但是 visibility 属性值为“hidden”的元素仍会显示）。"),_("br"),t._v("\n有一些 DOM 元素对应多个可视化对象。它们往往是具有复杂结构的元素，无法用单一的矩形来描述。例如，“select”元素有 3 个渲染器：一个用于显示区域，一个用于下拉列表框，还有一个用于按钮。如果由于宽度不够，文本无法在一行中显示而分为多行，那么新的文本会作为新的渲染器而添加。"),_("br"),t._v("\n根据 CSS 规范，inline 元素只能包含 block 元素或 inline 元素中的一种。如果出现了混合内容，则应创建匿名的 block 渲染器，以包裹 inline 元素。\n有一些呈现对象对应于 DOM 节点，但在树中所在的位置与 DOM 节点不同。浮动定位和绝对定位的元素就是这样，它们处于正常的流程之外，放置在树中的其他地方，并映射到真正的框架，而放在原位的是占位框架。\n"),_("img",{attrs:{src:v(353),alt:"",title:"渲染引擎的基本流程"}})])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("构建渲染树的流程")]),t._v(' 解析样式和创建渲染器的过程称为"attachment"。在构建 DOM 树的同时，"attachment"是同步进行的 。')])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("样式计算")]),t._v(" 构建渲染树时，需要计算每一个渲染对象的可视化属性。这是通过计算每个元素的样式属性来完成的。样式包括来自各种来源的样式表、inline 样式元素和 HTML 中的可视化属性（例如“bgcolor”属性）。其中后者将经过转化以匹配 CSS 样式属性。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("布局")]),t._v(" 渲染器在创建完成并添加到渲染树时，并不包含位置和大小信息。计算这些值的过程称为布局或重排（layout or reflow）。"),_("br"),t._v("\nHTML 采用基于流的布局模型，这意味着大多数情况下只要一次遍历就能计算出几何信息。处于流中靠后位置元素通常不会影响靠前位置元素的几何特征，因此布局可以按从左至右、从上至下的顺序遍历文档。但是也有例外情况，比如 HTML 表格的计算就需要不止一次的遍历 。"),_("br"),t._v("\n坐标系是相对于根框架而建立的，使用的是上坐标和左坐标。"),_("br"),t._v("\n布局是一个递归的过程。它从根渲染器（对应于 HTML 文档的 html 元素）开始，然后递归遍历部分或所有的框架层次结构，为每一个需要计算的渲染器计算几何信息。"),_("br"),t._v("\n根渲染器的位置左边是 0,0，其尺寸为视口（也就是浏览器窗口的可见区域）。"),_("br"),t._v("\n所有的渲染器都有一个“layout”或者“reflow”方法，每一个渲染器都会调用其需要进行布局的子代的 layout 方法。"),_("br"),t._v("\n布局阶段输出的结果称为box盒模型（width,height,margin,padding,border,left,top,…），盒模型精确表示了每一个元素的位置和大小，并且所有相对度量单位此时都转化为了绝对单位。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("绘制")]),t._v(" 在绘制阶段，系统会遍历渲染树，并调用渲染器的“paint”方法，将渲染器的内容显示在屏幕上。绘制工作是使用UI后端组件完成的。")])])]),t._v(" "),_("h3",{attrs:{id:"回流与重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流与重绘"}},[t._v("#")]),t._v(" 回流与重绘")]),t._v(" "),_("h4",{attrs:{id:"回流-reflow"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow"}},[t._v("#")]),t._v(" 回流(reflow)")]),t._v(" "),_("p",[_("strong",[t._v("描述")]),t._v(" 当浏览器发现某个部分发生了点变化影响了布局，需要倒回去重新渲染。reflow 会从 html 这个 root frame 开始递归往下，依次计算所有的结点几何尺寸和位置。reflow 几乎是无法避免的。现在界面上流行的一些效果，比如树状目录的折叠、展开（实质上是元素的显示与隐藏）等，都将引起浏览器的 reflow。鼠标滑过、点击……只要这些行为引起了页面上某些元素的占位面积、定位方式、边距等属性的变化，都会引起它内部、周围甚至整个页面的重新渲染。通常我们都无法预估浏览器到底会 reflow 哪一部分的代码，它们都彼此相互影响着。display:none 会触发 reflow")]),t._v(" "),_("p",[_("strong",[t._v("Dirty 位系统")]),t._v(" 为避免对所有细小更改都进行整体回流，浏览器采用了一种“dirty 位”系统。如果某个渲染器发生了更改，或者将自身及其子代标注为“dirty”，则需要进行回流。\n有两种标记：“dirty”和“children are dirty”。“children are dirty”表示尽管渲染器自身没有变化，但它至少有一个子代需要回流。")]),t._v(" "),_("p",[_("strong",[t._v("全局回流")]),t._v(" 全局回流是指触发了整个呈现树范围的回流，触发原因可能包括："),_("br"),t._v("\n1、影响所有渲染器的全局样式更改，例如字体大小更改。"),_("br"),t._v("\n2、屏幕大小调整。")]),t._v(" "),_("p",[_("strong",[t._v("局部回流")]),t._v(" 局部回流只对 dirty 渲染器进行布局（这样可能存在需要进行额外回流的弊端）"),_("br"),t._v("\n当渲染器为 dirty 时，会异步触发局部布局。例如："),_("br"),t._v("\n1、当来自网络的额外内容添加到 DOM 树之后，新的渲染器附加到了渲染树中。"),_("br"),t._v("\n2、只有一个子树进行了修改，因此无需从根节点开始布局。这适用于在本地进行更改而不影响周围元素的情况，例如在文本字段中插入文本。")]),t._v(" "),_("h4",{attrs:{id:"重绘-repaint"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaint"}},[t._v("#")]),t._v(" 重绘(repaint)")]),t._v(" "),_("p",[t._v("改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸没有变。visibility:hidden 只会触发 repaint")]),t._v(" "),_("h4",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("每次Reflow，Repaint后浏览器还需要合并渲染层并输出到屏幕上。所有的这些都会是动画卡顿的原因。Reflow 的成本比 Repaint 的成本高得多的多。一个结点的 Reflow 很有可能导致子结点，甚至父点以及同级结点的 Reflow 。在一些高性能的电脑上也许还没什么，但是如果 Reflow 发生在手机上，那么这个过程是延慢加载和耗电的。可以在csstrigger上查找某个css属性会触发什么事件。")])])}),[],!1,null,null,null);r.default=e.exports}}]);