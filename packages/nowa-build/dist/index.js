module.exports=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)}([function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(1),f=c.n(e),g=c(2),h=c.n(g);class Build extends g.Component{constructor(...a){var b,c;return b=c=super(...a),this.run=d(function*(){const a=f()(c.config);let b;a.run(function(c,d){if(c&&(a.purgeInputFileSystem(),b=null,console.error(c.stack||c),c.details&&console.error(c.details),process.exit(1)),d.hash!==b){b=d.hash;var e=d.toString();e&&process.stdout.write(e+'\n')}})}),b}}b['default']=Build,Build.description='compile your project to a bundle',Build.initHelp=(()=>{var a=d(function*({yargs:a}){a.usage('$0 Build').option('TODO',{alias:'t',describe:'TODO'}).option('TODO2',{alias:'t2',describe:'TODO2'})});return function(){return a.apply(this,arguments)}})()},function(a){a.exports=require('webpack')},function(a){a.exports=require('nowa-core')}]);
//# sourceMappingURL=index.map