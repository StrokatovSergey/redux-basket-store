(this["webpackJsonpredux-store"]=this["webpackJsonpredux-store"]||[]).push([[0],{37:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(0),o=n.n(c),a=n(16),i=n.n(a),s=n(12),u=n(9),l=n(3),d=(n(37),function(t){var e=t.numItems,n=t.total;return Object(r.jsxs)("header",{className:"shop-header row",children:[Object(r.jsx)(u.b,{to:"/",children:Object(r.jsx)("div",{className:"logo text-dark",children:"ReStore"})}),Object(r.jsx)(u.b,{to:"/cart",children:Object(r.jsxs)("div",{className:"shopping-cart",children:[Object(r.jsx)("i",{className:"cart-icon fa fa-shopping-cart"}),e," items ($",n,")"]})})]})}),j=n(10),b=n(11),O=n(19),h=n(18),f=(n(39),function(t){var e=t.book,n=t.onAddedToCart,c=e.title,o=e.author,a=e.price,i=e.coverImage;return Object(r.jsxs)("div",{className:"book-list-item",children:[Object(r.jsx)("div",{className:"book-cover",children:Object(r.jsx)("img",{src:i,alt:"cover"})}),Object(r.jsxs)("div",{className:"book-details",children:[Object(r.jsx)("span",{className:"book-title",children:c}),Object(r.jsx)("div",{className:"book-author",children:o}),Object(r.jsxs)("div",{className:"book-price",children:["$",a]}),Object(r.jsx)("button",{onClick:n,className:"btn btn-info add-to-cart",children:"Add to cart"})]})]})}),p=n(25),m=o.a.createContext(),x=m.Provider,v=m.Consumer,g=function(){return function(t){return function(e){return Object(r.jsx)(v,{children:function(n){return Object(r.jsx)(t,Object(p.a)(Object(p.a)({},e),{},{bookstoreService:n}))}})}}},k=function(t){return{type:"BOOK_ADDED_TO_CART",payload:t}},C=function(t,e){return function(){e("FETCH_BOOKS_REQUEST"),t.getBooks().then((function(t){return e({type:"FETCH_BOOKS_SUCCESS",payload:t})})).catch((function(t){return e({type:"FETCH_BOOKS_FAILURE",payload:t})}))}},_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}},y=(n(40),function(){return Object(r.jsx)("div",{children:"loading..."})}),E=(n(41),function(){return Object(r.jsx)("div",{children:"Error!"})}),T=(n(42),function(t){var e=t.books,n=t.onAddedToCart;return Object(r.jsx)("ul",{className:"book-list",children:e.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)(f,{book:t,onAddedToCart:function(){return n(t.id)}})},t.id)}))})}),S=function(t){Object(O.a)(n,t);var e=Object(h.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var t=this.props,e=t.books,n=t.loading,c=t.error,o=t.onAddedToCart;return n?Object(r.jsx)(y,{}):c?Object(r.jsx)(E,{}):Object(r.jsx)(T,{books:e,onAddedToCart:o})}}]),n}(c.Component),N=_(g(),Object(s.b)((function(t){var e=t.bookList;return{books:e.books,loading:e.loading,error:e.error}}),(function(t,e){var n=e.bookstoreService;return{fetchBooks:C(n,t),onAddedToCart:function(e){return t(k(e))}}})))(S),R=(n(43),{onIncrease:k,onDecrease:function(t){return{type:"BOOK_REMOVED_FROM_CART",payload:t}},onDelete:function(t){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:t}}}),A=Object(s.b)((function(t){var e=t.shoppingCart;return{items:e.cartItems,total:e.orderTotal}}),R)((function(t){var e=t.items,n=t.total,c=t.onIncrease,o=t.onDecrease,a=t.onDelete;return Object(r.jsxs)("div",{className:"shopping-cart-table",children:[Object(r.jsx)("h2",{children:"Your Order"}),Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Item"}),Object(r.jsx)("th",{children:"Count"}),Object(r.jsx)("th",{children:"Price"}),Object(r.jsx)("th",{children:"Action"})]})}),Object(r.jsx)("tbody",{children:e.map((function(t,e){var n=t.id,i=t.title,s=t.count,u=t.total;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e+1}),Object(r.jsx)("td",{children:i}),Object(r.jsx)("td",{children:s}),Object(r.jsxs)("td",{children:["$",u]}),Object(r.jsxs)("td",{children:[Object(r.jsx)("button",{onClick:function(){return a(n)},className:"btn btn-outline-danger btn-sm float-right",children:Object(r.jsx)("i",{className:"fa fa-trash-o"})}),Object(r.jsx)("button",{onClick:function(){return c(n)},className:"btn btn-outline-success btn-sm float-right",children:Object(r.jsx)("i",{className:"fa fa-plus-circle"})}),Object(r.jsx)("button",{onClick:function(){return o(n)},className:"btn btn-outline-warning btn-sm float-right",children:Object(r.jsx)("i",{className:"fa fa-minus-circle"})})]})]},n)}))})]}),Object(r.jsxs)("div",{className:"total",children:["Total: $",n]})]})})),I=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{}),Object(r.jsx)(A,{})]})},B=function(){return Object(r.jsx)("div",{children:"Cart Page"})},D=(n(44),function(){return Object(r.jsxs)("main",{role:"main",className:"container",children:[Object(r.jsx)(d,{numItems:5,total:210}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/",component:I,exact:!0}),Object(r.jsx)(l.a,{path:"/cart",component:B})]})]})}),w=function(t){Object(O.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={hasError:!1},t}return Object(b.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(E,{}):this.props.children}}]),n}(c.Component),F=function(){function t(){Object(j.a)(this,t),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(b.a)(t,[{key:"getBooks",value:function(){var t=this;return new Promise((function(e,n){setTimeout((function(){Math.random()>.75?n(new Error("Something bad happened")):e(t.data)}),700)}))}}]),t}(),L=n(15),K=function(t,e){if(void 0===t)return{books:[],loading:!0,error:null};switch(e.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:e.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:e.payload};default:return t.bookList}},M=n(13),H=function(t,e,n){return 0===e.count?[].concat(Object(M.a)(t.slice(0,n)),Object(M.a)(t.slice(n+1))):-1===n?[].concat(Object(M.a)(t),[e]):[].concat(Object(M.a)(t.slice(0,n)),[e],Object(M.a)(t.slice(n+1)))},U=function(t,e,n){var r=t.bookList.books,c=t.shoppingCart.cartItems,o=r.find((function(t){return t.id===e})),a=c.findIndex((function(t){return t.id===e})),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.id,c=void 0===r?t.id:r,o=e.count,a=void 0===o?0:o,i=e.title,s=void 0===i?t.title:i,u=e.total;return{id:c,title:s,count:a+n,total:(void 0===u?0:u)+n*t.price}}(o,c[a],n);return{orderTotal:0,cartItems:H(c,i,a)}},P=function(t,e){if(void 0===t)return{cartItems:[],orderTotal:0};switch(e.type){case"BOOK_ADDED_TO_CART":return U(t,e.payload,1);case"BOOK_REMOVED_FROM_CART":return U(t,e.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var n=t.shoppingCart.cartItems.find((function(t){return t.id===e.payload}));return U(t,e.payload,-n.count);default:return t.shoppingCart}},V=function(t,e){return{bookList:K(t,e),shoppingCart:P(t,e)}},J=Object(L.c)(V,Object(L.a)((function(t){t.getState,t.dispatch;return function(t){return function(e){return console.log("action.type",e.type),console.log("store",J),t(e)}}}),(function(t){t.getState,t.dispatch;return function(t){return function(e){return t("string"===typeof e?{type:e}:e)}}})));J.dispatch("hello world");var $=J,z=new F;i.a.render(Object(r.jsx)(s.a,{store:$,children:Object(r.jsx)(w,{children:Object(r.jsx)(x,{value:z,children:Object(r.jsx)(u.a,{children:Object(r.jsx)(D,{})})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7938614f.chunk.js.map