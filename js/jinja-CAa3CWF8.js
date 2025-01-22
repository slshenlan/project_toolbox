import e from"./html-BSkQgO9Y.js";import"./javascript-0ufSeQLk.js";import"./css-B2xiTIrJ.js";const a=Object.freeze(JSON.parse('{"displayName":"jinja-html","firstLineMatch":"^{% extends [\\"\'][^\\"\']+[\\"\'] %}","foldingStartMarker":"(<(?i:(head|table|tr|div|style|script|ul|ol|form|dl))\\\\b.*?>|{%\\\\s*(block|filter|for|if|macro|raw))","foldingStopMarker":"(</(?i:(head|table|tr|div|style|script|ul|ol|form|dl))\\\\b.*?>|{%\\\\s*(endblock|endfilter|endfor|endif|endmacro|endraw)\\\\s*%})","name":"jinja-html","patterns":[{"include":"source.jinja"},{"include":"text.html.basic"}],"scopeName":"text.html.jinja","embeddedLangs":["html"]}')),n=[...e,a],t=Object.freeze(JSON.parse('{"displayName":"Jinja","foldingStartMarker":"({%\\\\s*(block|filter|for|if|macro|raw))","foldingStopMarker":"({%\\\\s*(endblock|endfilter|endfor|endif|endmacro|endraw)\\\\s*%})","name":"jinja","patterns":[{"begin":"({%)\\\\s*(raw)\\\\s*(%})","captures":{"1":{"name":"entity.other.jinja.delimiter.tag"},"2":{"name":"keyword.control.jinja"},"3":{"name":"entity.other.jinja.delimiter.tag"}},"end":"({%)\\\\s*(endraw)\\\\s*(%})","name":"comment.block.jinja.raw"},{"include":"#comments"},{"begin":"{{-?","captures":[{"name":"variable.entity.other.jinja.delimiter"}],"end":"-?}}","name":"variable.meta.scope.jinja","patterns":[{"include":"#expression"}]},{"begin":"{%-?","captures":[{"name":"entity.other.jinja.delimiter.tag"}],"end":"-?%}","name":"meta.scope.jinja.tag","patterns":[{"include":"#expression"}]}],"repository":{"comments":{"begin":"{#-?","captures":[{"name":"entity.other.jinja.delimiter.comment"}],"end":"-?#}","name":"comment.block.jinja","patterns":[{"include":"#comments"}]},"escaped_char":{"match":"\\\\\\\\x[0-9A-F]{2}","name":"constant.character.escape.hex.jinja"},"escaped_unicode_char":{"captures":{"1":{"name":"constant.character.escape.unicode.16-bit-hex.jinja"},"2":{"name":"constant.character.escape.unicode.32-bit-hex.jinja"},"3":{"name":"constant.character.escape.unicode.name.jinja"}},"match":"(\\\\\\\\U[0-9A-Fa-f]{8})|(\\\\\\\\u[0-9A-Fa-f]{4})|(\\\\\\\\N\\\\{[a-zA-Z ]+\\\\})"},"expression":{"patterns":[{"captures":{"1":{"name":"keyword.control.jinja"},"2":{"name":"variable.other.jinja.block"}},"match":"\\\\s*\\\\b(block)\\\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\\\b"},{"captures":{"1":{"name":"keyword.control.jinja"},"2":{"name":"variable.other.jinja.filter"}},"match":"\\\\s*\\\\b(filter)\\\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\\\b"},{"captures":{"1":{"name":"keyword.control.jinja"},"2":{"name":"variable.other.jinja.test"}},"match":"\\\\s*\\\\b(is)\\\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\\\b"},{"captures":{"1":{"name":"keyword.control.jinja"}},"match":"(?<=\\\\{\\\\%-|\\\\{\\\\%)\\\\s*\\\\b([a-zA-Z_][a-zA-Z0-9_]*)\\\\b(?!\\\\s*[,=])"},{"match":"\\\\b(and|else|if|in|import|not|or|recursive|with(out)?\\\\s+context)\\\\b","name":"keyword.control.jinja"},{"match":"\\\\b(true|false|none)\\\\b","name":"constant.language.jinja"},{"match":"\\\\b(loop|super|self|varargs|kwargs)\\\\b","name":"variable.language.jinja"},{"match":"[a-zA-Z_][a-zA-Z0-9_]*","name":"variable.other.jinja"},{"match":"(\\\\+|\\\\-|\\\\*\\\\*|\\\\*|//|/|%)","name":"keyword.operator.arithmetic.jinja"},{"captures":{"1":{"name":"punctuation.other.jinja"},"2":{"name":"variable.other.jinja.filter"}},"match":"(\\\\|)([a-zA-Z_][a-zA-Z0-9_]*)"},{"captures":{"1":{"name":"punctuation.other.jinja"},"2":{"name":"variable.other.jinja.attribute"}},"match":"(\\\\.)([a-zA-Z_][a-zA-Z0-9_]*)"},{"begin":"\\\\[","captures":[{"name":"punctuation.other.jinja"}],"end":"\\\\]","patterns":[{"include":"#expression"}]},{"begin":"\\\\(","captures":[{"name":"punctuation.other.jinja"}],"end":"\\\\)","patterns":[{"include":"#expression"}]},{"begin":"\\\\{","captures":[{"name":"punctuation.other.jinja"}],"end":"\\\\}","patterns":[{"include":"#expression"}]},{"match":"(\\\\.|:|\\\\||,)","name":"punctuation.other.jinja"},{"match":"(==|<=|=>|<|>|!=)","name":"keyword.operator.comparison.jinja"},{"match":"=","name":"keyword.operator.assignment.jinja"},{"begin":"\\"","beginCaptures":[{"name":"punctuation.definition.string.begin.jinja"}],"end":"\\"","endCaptures":[{"name":"punctuation.definition.string.end.jinja"}],"name":"string.quoted.double.jinja","patterns":[{"include":"#string"}]},{"begin":"\'","beginCaptures":[{"name":"punctuation.definition.string.begin.jinja"}],"end":"\'","endCaptures":[{"name":"punctuation.definition.string.end.jinja"}],"name":"string.quoted.single.jinja","patterns":[{"include":"#string"}]},{"begin":"@/","beginCaptures":[{"name":"punctuation.definition.regexp.begin.jinja"}],"end":"/","endCaptures":[{"name":"punctuation.definition.regexp.end.jinja"}],"name":"string.regexp.jinja","patterns":[{"include":"#simple_escapes"}]}]},"simple_escapes":{"captures":{"1":{"name":"constant.character.escape.newline.jinja"},"2":{"name":"constant.character.escape.backlash.jinja"},"3":{"name":"constant.character.escape.double-quote.jinja"},"4":{"name":"constant.character.escape.single-quote.jinja"},"5":{"name":"constant.character.escape.bell.jinja"},"6":{"name":"constant.character.escape.backspace.jinja"},"7":{"name":"constant.character.escape.formfeed.jinja"},"8":{"name":"constant.character.escape.linefeed.jinja"},"9":{"name":"constant.character.escape.return.jinja"},"10":{"name":"constant.character.escape.tab.jinja"},"11":{"name":"constant.character.escape.vertical-tab.jinja"}},"match":"(\\\\\\\\\\\\n)|(\\\\\\\\\\\\\\\\)|(\\\\\\\\\\\\\\")|(\\\\\\\\\')|(\\\\\\\\a)|(\\\\\\\\b)|(\\\\\\\\f)|(\\\\\\\\n)|(\\\\\\\\r)|(\\\\\\\\t)|(\\\\\\\\v)"},"string":{"patterns":[{"include":"#simple_escapes"},{"include":"#escaped_char"},{"include":"#escaped_unicode_char"}]}},"scopeName":"source.jinja","embeddedLangs":["jinja-html"]}')),s=[...n,t];export{s as default};
