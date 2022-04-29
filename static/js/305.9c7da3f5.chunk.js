"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[305],{694:function(e,t,i){i.d(t,{d:function(){return r},Z:function(){return c}});i(791);var a=i(871),s=i(184),l=function(e){return(0,s.jsx)("div",{className:"skeleton ".concat(e.className),style:{width:e.width||"100%",height:e.height,borderRadius:e.radius||"5px",marginBottom:e.mb||""}})},r=function(){return(0,s.jsxs)("div",{className:"flex flex-col p-3 rounded-lg bg-slate-800 movie-card",children:[(0,s.jsx)(l,{width:"100%",height:"250px",radius:"8px",className:"mb-5"}),(0,s.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,s.jsx)("h3",{className:"mb-3 text-sm font-medium text-white",children:(0,s.jsx)(l,{width:"100%",height:"20px",radius:"0px"})}),(0,s.jsxs)("div",{className:"flex items-center justify-between mb-10 opacity-50",children:[(0,s.jsx)("span",{children:(0,s.jsx)(l,{width:"50px",height:"10px",radius:"0px"})}),(0,s.jsx)("span",{children:(0,s.jsx)(l,{width:"30px",height:"10px",radius:"0px"})})]}),(0,s.jsx)(l,{width:"100%",height:"40px",radius:"6px"})]})]})},c=function(e){var t=e.item,i=e.img_path,l=(0,a.s0)();return(0,s.jsxs)("div",{className:"flex flex-col p-3 rounded-lg bg-slate-800 movie-card",children:[(0,s.jsx)("img",{src:"".concat(i+t.poster_path||t.backdrop_path),alt:"",className:"object-cover w-full mb-3 rounded-lg movie-card-img"}),(0,s.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,s.jsx)("h3",{className:"mb-3 text-sm font-medium text-white",children:t.original_title||t.original_name}),(0,s.jsxs)("div",{className:"flex items-center justify-between mb-5",children:[(0,s.jsx)("span",{className:"text-xs text-[#999]",children:new Date(t.release_date||t.first_air_date).getFullYear()}),(0,s.jsxs)("span",{className:"text-xs text-[#999] flex items-center gap-x-2",children:[t.vote_average.toFixed(1)," \u2728"]})]}),(0,s.jsxs)("button",{className:"flex items-center justify-center w-full py-2 mt-auto font-medium text-white rounded-lg px-7 bg-primary gap-x-2",onClick:function(){return l("/movies/".concat(t.id))},style:{fontSize:"min(1em, 3vw)"},children:["Watch now",(0,s.jsx)("i",{className:"text-2xl bx bx-play-circle"})]})]})]})}},197:function(e,t,i){i.d(t,{_:function(){return a}});var a=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))}},305:function(e,t,i){i.r(t);i(791);var a=i(871),s=i(207),l=i(419),r=i(694),c=i(197),n=i(184),o=function(e){var t=e.data,i=e.genres,a=e.category;return(0,n.jsxs)("div",{className:"page-container-movie",children:[(0,n.jsx)("h1",{className:"text-3xl font-semibold text-center text-white",children:(null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.original_name)}),(0,n.jsx)("div",{className:"flex items-center my-10 justify-evenly page-container-movie",children:i&&i.map((function(e){return(0,n.jsx)("span",{className:"font-semibold border-2 rounded-full text-primary border-primary",style:{fontSize:"min(.7em, 2vw)",padding:"min(10px, 2vw) min(20px, 3vw)"},children:e.name},e.id)}))}),(0,n.jsx)("p",{className:"px-5 mb-10 text-center text-white",style:{fontSize:"min(1em, 3vw)"},children:null===t||void 0===t?void 0:t.overview}),(0,n.jsx)(d,{category:a}),(0,n.jsx)(x,{category:a})]})},d=function(e){var t=e.category,i=void 0===t?"tv":t,s=(0,a.UO)().movieId,r=(0,l.ZP)("https://api.themoviedb.org/3/".concat(i,"/").concat(s,"/credits?api_key=c0f1c0571c03dffda8ff23bc896915b8"),c._).data,o=null===r||void 0===r?void 0:r.cast;return!o||o.length<=0?null:(0,n.jsxs)("div",{className:"page-container-casts",children:[(0,n.jsx)("h2",{className:"mb-10 text-2xl font-semibold text-center text-white",children:"Casts"}),(0,n.jsx)("div",{className:"grid gap-10 cast-grid",children:o&&o.slice(0,4).map((function(e){return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)("div",{className:"rounded-md w-full h-[350px]",children:[(null===e||void 0===e?void 0:e.profile_path)&&(0,n.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original"+(null===e||void 0===e?void 0:e.profile_path)),alt:"",className:"object-cover w-full h-full rounded-md"}),!e.profile_path&&(0,n.jsx)("div",{className:"flex items-center justify-center w-full h-full text-center border-2 rounded-md text-slate-600 border-slate-600",children:(0,n.jsx)("img",{src:"https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png",alt:"",className:"object-cover w-full h-[60%] rounded-md"})})]}),(0,n.jsx)("h3",{className:"p-3 text-center text-white",children:null===e||void 0===e?void 0:e.name})]},e.id)}))}),(0,n.jsx)(m,{})]})},m=function(e){var t=e.category,i=void 0===t?"tv":t,s=(0,a.UO)().movieId,r=(0,l.ZP)("https://api.themoviedb.org/3/".concat(i,"/").concat(s,"/videos?api_key=c0f1c0571c03dffda8ff23bc896915b8"),c._).data;if(!r)return null;var o=null===r||void 0===r?void 0:r.results;return(0,n.jsx)("div",{className:"py-10",children:o.slice(0,1).map((function(e){return(0,n.jsx)("div",{className:"w-full aspect-video",children:(0,n.jsx)("iframe",{className:"object-cover w-full h-full",src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},e.id)}))})},x=function(e){var t=e.category,i=void 0===t?"tv":t,o=(0,a.UO)().movieId,d=(0,l.ZP)("https://api.themoviedb.org/3/".concat(i,"/").concat(o,"/similar?api_key=c0f1c0571c03dffda8ff23bc896915b8"),c._).data;if(!d)return null;var m=null===d||void 0===d?void 0:d.results;return(0,n.jsxs)("div",{className:"py-10",children:[(0,n.jsx)("h2",{className:"mb-5 text-2xl font-medium text-white",style:{fontSize:"min(1.6em, 4.6vw)"},children:"Similar Movies"}),(0,n.jsx)("div",{className:"movie-list",children:(0,n.jsx)(s.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:m&&m.map((function(e){return(0,n.jsx)(s.o5,{children:(0,n.jsx)(r.Z,{item:e,img_path:"https://image.tmdb.org/t/p/original"})},e.id)}))})})]})};t.default=function(e){var t=e.category,i=void 0===t?"tv":t,s=(0,a.UO)().movieId,r="https://image.tmdb.org/t/p/original",d=(0,l.ZP)("https://api.themoviedb.org/3/".concat(i,"/").concat(s,"?api_key=c0f1c0571c03dffda8ff23bc896915b8"),c._),m=d.data,x=d.error,u=!m&&!x,h=null===m||void 0===m?void 0:m.genres;return(0,n.jsxs)(n.Fragment,{children:[u&&(0,n.jsx)("div",{className:"w-10 h-10 mx-auto border-4 rounded-full border-t-transparent animate-spin border-primary"}),!u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black overlay bg-opacity-30"}),(null===m||void 0===m?void 0:m.backdrop_path)&&(0,n.jsx)("img",{src:"".concat(r+(null===m||void 0===m?void 0:m.backdrop_path)),alt:"",className:"object-cover w-full h-full "}),!(null!==m&&void 0!==m&&m.backdrop_path)&&(0,n.jsx)("div",{className:"h-[600px] text-4xl text-center text-white flex items-center justify-center bg-slate-600",style:{height:"min(600px, 70vw)",fontSize:"min(2.7em, 6vw)"},children:"We dont't have this movie's background picture"}),(0,n.jsx)("div",{className:"absolute z-10 w-3/5 left-2/4 -translate-x-2/4 -translate-y-2/4 poster",children:(0,n.jsx)("img",{src:"".concat(r+(null===m||void 0===m?void 0:m.poster_path)),alt:"",className:"object-cover w-full h-full"})})]}),(0,n.jsx)(o,{data:m,genres:h,category:i})]})]})}}}]);
//# sourceMappingURL=305.9c7da3f5.chunk.js.map