(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,g=u["".concat(i,".").concat(p)]||u[p]||b[p]||a;return r?o.a.createElement(g,c(c({ref:t},s),{},{components:r})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(104)),i={},c={unversionedId:"getting-started/how-to-guides/how-to-understand-crv-vote-locking",id:"getting-started/how-to-guides/how-to-understand-crv-vote-locking",isDocsHomePage:!1,title:"How to understand CRV vote locking",description:"This is an overview of how CRV vote locking works on Curve Finance, and how Yearn investment strategies takes advantage of this in order to increase yield.",source:"@site/docs/getting-started/how-to-guides/how-to-understand-crv-vote-locking.md",sourceDirName:"getting-started/how-to-guides",slug:"/getting-started/how-to-guides/how-to-understand-crv-vote-locking",permalink:"/yearn-devdocs/docs/getting-started/how-to-guides/how-to-understand-crv-vote-locking",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/getting-started/how-to-guides/how-to-understand-crv-vote-locking.md",version:"current",frontMatter:{},sidebar:"getting_started",previous:{title:"How To Participate in a yVault",permalink:"/yearn-devdocs/docs/getting-started/how-to-guides/how-to-participate-in-a-yvault"},next:{title:"How to understand the Hegic v2 vault",permalink:"/yearn-devdocs/docs/getting-started/how-to-guides/how-to-understand-the-Hegic-v2-vault"}},l=[{value:"CRV vote locking",id:"crv-vote-locking",children:[{value:"Trading fees",id:"trading-fees",children:[]},{value:"Reward boosting",id:"reward-boosting",children:[]}]},{value:"CRV Vote Locking in Yearn",id:"crv-vote-locking-in-yearn",children:[{value:"Locking CRV for veCRV",id:"locking-crv-for-vecrv",children:[]},{value:"Earning Trading fees",id:"earning-trading-fees",children:[]},{value:"Boosting liquidity rewards",id:"boosting-liquidity-rewards",children:[]}]},{value:"More information",id:"more-information",children:[]}],s={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is an overview of how CRV vote locking works on Curve Finance, and how Yearn investment strategies takes advantage of this in order to increase yield."),Object(a.b)("h2",{id:"crv-vote-locking"},"CRV vote locking"),Object(a.b)("p",null,'Vote locking, "Boosties", or "Vote boosting" is a Curve Finance feature where CRV is locked into the Curve DAO.'),Object(a.b)("p",null,"Vote locking CRV rewards yields ",Object(a.b)("strong",{parentName:"p"},"veCRV")," (voting escrow CRV tokens). The longer time period that CRV is locked for, the more veCRVs are received. The minimum locking period is 1 week and the maximum period is 4 years."),Object(a.b)("p",null,"veCRV enables its holders to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"participate in Curve governance;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"earn trading fees"),"; and"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"boost rewards")," from liquidity provided.")),Object(a.b)("h3",{id:"trading-fees"},"Trading fees"),Object(a.b)("p",null,"50% of all Curve trading fees from September 19 2020 onwards will be distributed to veCRV holders, in the form of CRV tokens."),Object(a.b)("h3",{id:"reward-boosting"},"Reward boosting"),Object(a.b)("p",null,"Vote locking CRV into veCRV allows boosting of rewards earned by providing liquidity to any Curve pool, up to a maximum of ",Object(a.b)("strong",{parentName:"p"},"2.5x")," the reward amount."),Object(a.b)("p",null,"The actual boost multiplier is determined by a formula that depends on the current pool gauge liquidity as a fraction out of the total amount of liquidity provided, and the fraction of voting power that the veCRV constitutes out of the total."),Object(a.b)("p",null,"See the ",Object(a.b)("a",{parentName:"p",href:"https://resources.curve.fi/guides/boosting-your-crv-rewards"},"Curve Guide")," for more details on the formula and its calculation."),Object(a.b)("h2",{id:"crv-vote-locking-in-yearn"},"CRV Vote Locking in Yearn"),Object(a.b)("p",null,"Yearn deploys a single CRV vote locking strategy that is shared across its general Curve strategies:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://etherscan.io/address/0x112570655b32a8c747845e0215ad139661e66e7f#code"},"StrategyCurveYBUSDVoterProxy")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://etherscan.io/address/0x6d6c1ad13a5000148aa087e7cbfb53d402c81341#code"},"StrategyCurveBTCVoterProxy")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://etherscan.io/address/0x07db4b9b3951094b9e278d336adf46a036295de7#code"},"StrategyCurveYVoterProxy")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://etherscan.io/address/0xC59601F0CC49baa266891b7fc63d2D5FE097A79D#code"},"StrategyCurve3CrvVoterProxy"))),Object(a.b)("h3",{id:"locking-crv-for-vecrv"},"Locking CRV for veCRV"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"10% of all CRV earned")," by the strategies are ",Object(a.b)("strong",{parentName:"p"},"locked up for 4 years")," in the Curve DAO in order to get the maximum reward ratio of 1:1 CRV:veCRV."),Object(a.b)("p",null,"Actual veCRV distribution has not yet begun, with a date for this still to be announced by Curve Finance."),Object(a.b)("h3",{id:"earning-trading-fees"},"Earning Trading fees"),Object(a.b)("p",null,"Based on Yearn's share of the total veCRV, 50% of trading fees will be claimed as CRV, out of which 10% will in turn be locked into the Curve DAO for more veCRV."),Object(a.b)("h3",{id:"boosting-liquidity-rewards"},"Boosting liquidity rewards"),Object(a.b)("p",null,"Actual boost provided by Curve vote locking will be determined by a formula as ",Object(a.b)("a",{parentName:"p",href:"#Reward-boosting"},"described above"),", but will crucially be depending on the total amount of liquidity provided in Curve pools by Yearn and its relative voting power, i.e. its share of the current total of veCRV issued."),Object(a.b)("p",null,'A "Yearn boost" tool displaying Yearn\'s current active and potential boost is available ',Object(a.b)("a",{parentName:"p",href:"https://crv.ape.tax/"},"here"),"."),Object(a.b)("h2",{id:"more-information"},"More information"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.curve.fi/usecrv"},"curve.fi")," webpage"),Object(a.b)("li",{parentName:"ul"},"Curve ",Object(a.b)("a",{parentName:"li",href:"https://resources.curve.fi/guides/staking-your-crv"},"Guide")," for staking CRV"),Object(a.b)("li",{parentName:"ul"},"Curve ",Object(a.b)("a",{parentName:"li",href:"https://resources.curve.fi/guides/boosting-your-crv-rewards"},"Guide")," for vote locking"),Object(a.b)("li",{parentName:"ul"},"Curve ",Object(a.b)("a",{parentName:"li",href:"https://resources.curve.fi/faq/vote-locking-boost"},"FAQ")),Object(a.b)("li",{parentName:"ul"},"deFinn ",Object(a.b)("a",{parentName:"li",href:"https://drive.google.com/uc?export=download&id=1DvytXXS0WXmJ65X4jg8vfuT-zWXFxxSk"},"Infographic")," on CRV Voting Boost and formula"),Object(a.b)("li",{parentName:"ul"},"Boost ",Object(a.b)("a",{parentName:"li",href:"https://dao.curve.fi/minter/calc"},"calculator")),Object(a.b)("li",{parentName:"ul"},"Yearn CurveDAO proxy strategy ",Object(a.b)("a",{parentName:"li",href:"https://twitter.com/bantg/status/1308680661801340929"},"diagram"))))}d.isMDXComponent=!0}}]);