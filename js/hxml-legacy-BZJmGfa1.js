!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./haxe-legacy-B9XEynEv.js"],(function(n,t){"use strict";var r;return{setters:[function(e){r=e.default}],execute:function(){var t=Object.freeze(JSON.parse('{"displayName":"HXML","fileTypes":["hxml"],"foldingStartMarker":"--next","foldingStopMarker":"\\\\n\\\\n","name":"hxml","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.hxml"}},"match":"(#).*$\\\\n?","name":"comment.line.number-sign.hxml"},{"begin":"(?<!\\\\w)(--macro)\\\\b","beginCaptures":{"1":{"name":"keyword.other.hxml"}},"end":"\\\\n","patterns":[{"include":"source.hx#block-contents"}]},{"captures":{"1":{"name":"keyword.other.hxml"},"2":{"name":"support.package.hx"},"4":{"name":"entity.name.type.hx"}},"match":"(?<!\\\\w)(-m|-main|--main|--run)\\\\b\\\\s*\\\\b(?:(([a-z][a-zA-Z0-9]*\\\\.)*)(_*[A-Z]\\\\w*))?\\\\b"},{"captures":{"1":{"name":"keyword.other.hxml"}},"match":"(?<!\\\\w)(-cppia|-cpp?|-js|-as3|-swf-(header|version|lib(-extern)?)|-swf9?|-neko|-python|-php|-cs|-java-lib|-java|-xml|-lua|-hl|-x|-lib|-D|-resource|-exclude|-version|-v|-debug|-prompt|-cmd|-dce\\\\s+(std|full|no)?|--flash-strict|--no-traces|--flash-use-stage|--neko-source|--gen-hx-classes|-net-lib|-net-std|-c-arg|--each|--next|--display|--no-output|--times|--no-inline|--no-opt|--php-front|--php-lib|--php-prefix|--remap|--help-defines|--help-metas|-help|--help|-java|-cs|--js-modern|--interp|--eval|--dce|--wait|--connect|--cwd|--run).*$"},{"captures":{"1":{"name":"keyword.other.hxml"}},"match":"(?<!\\\\w)(--js(on)?|--lua|--swf-(header|version|lib(-extern)?)|--swf|--as3|--neko|--php|--cppia|--cpp|--cppia|--cs|--java-lib(-extern)?|--java|--jvm|--python|--hl|-p|--class-path|-L|--library|--define|-r|--resource|--cmd|-C|--verbose|--debug|--prompt|--xml|--json|--net-lib|--net-std|--c-arg|--version|--haxelib-global|-h|--main|--server-connect|--server-listen).*$"}],"scopeName":"source.hxml","embeddedLangs":["haxe"]}'));n("default",[].concat(e(r),[t]))}}}))}();
