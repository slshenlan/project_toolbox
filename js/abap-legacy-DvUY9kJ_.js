System.register([],(function(n,e){"use strict";return{execute:function(){var e=Object.freeze(JSON.parse('{"displayName":"ABAP","fileTypes":["abap","ABAP"],"foldingStartMarker":"/\\\\*\\\\*|\\\\{\\\\s*$","foldingStopMarker":"\\\\*\\\\*/|^\\\\s*\\\\}","name":"abap","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.abap"}},"match":"^\\\\*.*\\\\n?","name":"comment.line.full.abap"},{"captures":{"1":{"name":"punctuation.definition.comment.abap"}},"match":"\\".*\\\\n?","name":"comment.line.partial.abap"},{"match":"(?<![^\\\\s])##.*?(?=([\\\\.:,\\\\s]))","name":"comment.line.pragma.abap"},{"match":"(?i)(?<=(?:\\\\s|~|-))(?<=(?:->|=>))([a-z_\\\\/][a-z_0-9\\\\/]*)(?=\\\\s+(?:=|\\\\+=|-=|\\\\*=|\\\\/=|&&=|&=)\\\\s+)","name":"variable.other.abap"},{"match":"\\\\b[0-9]+(\\\\b|\\\\.|,)","name":"constant.numeric.abap"},{"match":"(?ix)(^|\\\\s+)((PUBLIC|PRIVATE|PROTECTED)\\\\sSECTION)(?=\\\\s+|:|\\\\.)","name":"storage.modifier.class.abap"},{"begin":"(?<!\\\\\\\\)(\\\\|)(.*?)","beginCaptures":{"1":{"name":"constant.character.escape.abap"}},"end":"(?<!\\\\\\\\)(\\\\||(\\\\\\\\\\\\\\\\\\\\|))","endCaptures":{"1":{"name":"constant.character.escape.abap"}},"name":"string.interpolated.abap","patterns":[{"match":"({ )|( })","name":"constant.character.escape"},{"match":"\\\\\\\\\\\\|","name":"constant.character.escape.abap"},{"match":"(?ix)(?<=\\\\s)(align|alpha|case|country|currency|date|decimals|exponent|number|pad|sign|style|time|timestamp|timezone|width|xsd|zero)(?=\\\\s\\\\=)","name":"entity.name.property.stringtemplate.abap"},{"match":"(?ix)(?<=\\\\=\\\\s)(center|engineering|environment|in|iso|left|leftplus|leftspace|lower|no|out|raw|right|rightplus|rightspace|scale_preserving|scale_preserving_scientific|scientific|scientific_with_leading_zero|sign_as_postfix|simple|space|upper|user|yes)(?=\\\\s)","name":"entity.value.property.stringtemplate.abap"}]},{"begin":"\'","end":"\'","name":"string.quoted.single.abap","patterns":[{"match":"\'\'","name":"constant.character.escape.abap"}]},{"begin":"`","end":"`","name":"string.quoted.single.abap","patterns":[{"match":"``","name":"constant.character.escape.abap"}]},{"begin":"(?i)^\\\\s*(class)\\\\s([a-z_\\\\/][a-z_0-9\\\\/]*)","beginCaptures":{"1":{"name":"storage.type.block.abap"},"2":{"name":"entity.name.type.block.abap"}},"end":"\\\\s*\\\\.\\\\s*\\\\n?","name":"meta.block.begin.implementation.abap","patterns":[{"match":"(?ix)(^|\\\\s+)(definition|implementation|public|inheriting\\\\s+from|final|deferred|abstract|shared\\\\s+memory\\\\s+enabled|(global|local)*\\\\s*friends|(create\\\\s+(public|protected|private))|for\\\\s+behavior\\\\s+of|for\\\\s+testing|risk\\\\s+level\\\\s+(critical|dangerous|harmless))|duration\\\\s(short|medium|long)(?=\\\\s+|\\\\.)","name":"storage.modifier.class.abap"},{"begin":"(?=[A-Za-z_][A-Za-z0-9_]*)","contentName":"entity.name.type.block.abap","end":"(?![A-Za-z0-9_])","patterns":[{"include":"#generic_names"}]}]},{"begin":"(?ix)^\\\\s*(method)\\\\s(?:([a-z_\\\\/][a-z_0-9\\\\/]*)~)?([a-z_\\\\/][a-z_0-9\\\\/]*)","beginCaptures":{"1":{"name":"storage.type.block.abap"},"2":{"name":"entity.name.type.abap"},"3":{"name":"entity.name.function.abap"}},"end":"\\\\s*\\\\.\\\\s*\\\\n?","patterns":[{"match":"(?ix)(?<=^|\\\\s)(BY\\\\s+DATABASE(\\\\s+PROCEDURE|\\\\s+FUNCTION|\\\\s+GRAPH\\\\s+WORKSPACE)|BY\\\\s+KERNEL\\\\s+MODULE)(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"},{"match":"(?ix)(?<=^|\\\\s)(FOR\\\\s+(HDB|LLANG))(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"},{"match":"(?ix)(?<=\\\\s)(OPTIONS\\\\s+(READ-ONLY|DETERMINISTIC|SUPPRESS\\\\s+SYNTAX\\\\s+ERRORS))(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"},{"match":"(?ix)(?<=^|\\\\s)(LANGUAGE\\\\s+(SQLSCRIPT|SQL|GRAPH))(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"},{"captures":{"1":{"name":"storage.modifier.method.abap"}},"match":"(?ix)(?<=\\\\s)(USING)\\\\s+([a-z_\\\\/][a-z_0-9\\\\/=\\\\>]*)+(?=\\\\s+|\\\\.)"},{"begin":"(?=[A-Za-z_][A-Za-z0-9_]*)","end":"(?![A-Za-z0-9_])","patterns":[{"include":"#generic_names"}]}]},{"begin":"(?ix)^\\\\s*(INTERFACE)\\\\s([a-z_\\\\/][a-z_0-9\\\\/]*)","beginCaptures":{"1":{"name":"storage.type.block.abap"},"2":{"name":"entity.name.type.abap"}},"end":"\\\\s*\\\\.\\\\s*\\\\n?","patterns":[{"match":"(?ix)(?<=^|\\\\s)(DEFERRED|PUBLIC)(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"}]},{"begin":"(?ix)^\\\\s*(FORM)\\\\s([a-z_\\\\/][a-z_0-9\\\\/\\\\-\\\\?]*)","beginCaptures":{"1":{"name":"storage.type.block.abap"},"2":{"name":"entity.name.type.abap"}},"end":"\\\\s*\\\\.\\\\s*\\\\n?","patterns":[{"match":"(?ix)(?<=^|\\\\s)(USING|TABLES|CHANGING|RAISING|IMPLEMENTATION|DEFINITION)(?=\\\\s+|\\\\.)","name":"storage.modifier.form.abap"},{"include":"#abaptypes"},{"include":"#keywords_followed_by_braces"}]},{"match":"(?i)(endclass|endmethod|endform|endinterface)","name":"storage.type.block.end.abap"},{"match":"(?i)(<[A-Za-z_][A-Za-z0-9_]*>)","name":"variable.other.field.symbol.abap"},{"include":"#keywords"},{"include":"#abap_constants"},{"include":"#reserved_names"},{"include":"#operators"},{"include":"#builtin_functions"},{"include":"#abaptypes"},{"include":"#system_fields"},{"include":"#sql_functions"},{"include":"#sql_types"}],"repository":{"abap_constants":{"match":"(?ix)(?<=\\\\s)(initial|null|@?space|@?abap_true|@?abap_false|@?abap_undefined|table_line|\\n                                %_final|%_hints|%_predefined|col_background|col_group|col_heading|col_key|col_negative|col_normal|col_positive|col_total|\\n\\t\\t\\t\\tadabas|as400|db2|db6|hdb|oracle|sybase|mssqlnt|pos_low|pos_high)(?=\\\\s|\\\\.|,)","name":"constant.language.abap"},"abaptypes":{"patterns":[{"match":"(?ix)\\\\s(abap_bool|string|xstring|any|clike|csequence|numeric|xsequence|decfloat|decfloat16|decfloat34|utclong|simple|int8|c|n|i|p|f|d|t|x)(?=\\\\s|\\\\.|,)","name":"support.type.abap"},{"match":"(?ix)\\\\s(TYPE|REF|TO|LIKE|LINE|OF|STRUCTURE|STANDARD|SORTED|HASHED|INDEX|TABLE|WITH|UNIQUE|NON-UNIQUE|SECONDARY|DEFAULT|KEY)(?=\\\\s|\\\\.|,)","name":"keyword.control.simple.abap"}]},"arithmetic_operator":{"match":"(?i)(?<=\\\\s)(\\\\+|\\\\-|\\\\*|\\\\*\\\\*|\\\\/|%|DIV|MOD|BIT-AND|BIT-OR|BIT-XOR|BIT-NOT)(?=\\\\s)","name":"keyword.control.simple.abap"},"builtin_functions":{"match":"(?ix)(?<=\\\\s)(abs|sign|ceil|floor|trunc|frac|acos|asin|atan|cos|sin|tan|cosh|sinh|tanh|exp|log|log10|sqrt|strlen|xstrlen|charlen|lines|numofchar|dbmaxlen|round|rescale|nmax|nmin|cmax|cmin|boolc|boolx|xsdbool|contains|contains_any_of|contains_any_not_of|matches|line_exists|ipow|char_off|count|count_any_of|count_any_not_of|distance|condense|concat_lines_of|escape|find|find_end|find_any_of|find_any_not_of|insert|match|repeat|replace|reverse|segment|shift_left|shift_right|substring|substring_after|substring_from|substring_before|substring_to|to_upper|to_lower|to_mixed|from_mixed|translate|bit-set|line_index)(?=\\\\()","name":"entity.name.function.builtin.abap"},"comparison_operator":{"match":"(?i)(?<=\\\\s)(<|>|<\\\\=|>\\\\=|\\\\=|<>|eq|ne|lt|le|gt|ge|cs|cp|co|cn|ca|na|ns|np|byte-co|byte-cn|byte-ca|byte-na|byte-cs|byte-ns|o|z|m)(?=\\\\s)","name":"keyword.control.simple.abap"},"control_keywords":{"match":"(?ix)(^|\\\\s)(\\n\\t        at|case|catch|continue|do|elseif|else|endat|endcase|endcatch|enddo|endif|\\n\\t        endloop|endon|endtry|endwhile|if|loop|on|raise|try|while)(?=\\\\s|\\\\.|:)","name":"keyword.control.flow.abap"},"generic_names":{"match":"[A-Za-z_][A-Za-z0-9_]*"},"keywords":{"patterns":[{"include":"#main_keywords"},{"include":"#text_symbols"},{"include":"#control_keywords"},{"include":"#keywords_followed_by_braces"}]},"keywords_followed_by_braces":{"captures":{"1":{"name":"keyword.control.simple.abap"},"2":{"name":"variable.other.abap"}},"match":"(?ix)\\\\b(data|value|field-symbol|final|reference|resumable)\\\\((<?[a-z_\\\\/][a-z_0-9\\\\/]*>?)\\\\)"},"logical_operator":{"match":"(?i)(?<=\\\\s)(not|or|and)(?=\\\\s)","name":"keyword.control.simple.abap"},"main_keywords":{"match":"(?ix)(?<=^|\\\\s)(\\nabap-source|\\nabstract|\\naccept|\\naccepting|\\naccess|\\naccording|\\naction|\\nactivation|\\nactual|\\nadd|\\nadd-corresponding|\\nadjacent|\\nafter|\\nalias|\\naliases|\\nall|\\nallocate|\\namdp|\\nanalysis|\\nanalyzer|\\nappend|\\nappending|\\napplication|\\narchive|\\narea|\\narithmetic|\\nas|\\nascending|\\nassert|\\nassign|\\nassigned|\\nassigning|\\nassociation|\\nasynchronous|\\nat|\\nattributes|\\nauthority|\\nauthority-check|\\nauthorization|\\nauto|\\nback|\\nbackground|\\nbackward|\\nbadi|\\nbase|\\nbefore|\\nbegin|\\nbehavior|\\nbetween|\\nbinary|\\nbit|\\nblank|\\nblanks|\\nblock|\\nblocks|\\nbound|\\nboundaries|\\nbounds|\\nboxed|\\nbreak|\\nbreak-point|\\nbuffer|\\nby|\\nbypassing|\\nbyte|\\nbyte-order|\\ncall|\\ncalling|\\ncast|\\ncasting|\\ncds|\\ncentered|\\nchange|\\nchanging|\\nchannels|\\nchar-to-hex|\\ncharacter|\\ncheck|\\ncheckbox|\\ncid|\\ncircular|\\nclass|\\nclass-data|\\nclass-events|\\nclass-method|\\nclass-methods|\\nclass-pool|\\ncleanup|\\nclear|\\nclient|\\nclients|\\nclock|\\nclone|\\nclose|\\ncnt|\\ncode|\\ncollect|\\ncolor|\\ncolumn|\\ncomment|\\ncomments|\\ncommit|\\ncommon|\\ncommunication|\\ncomparing|\\ncomponent|\\ncomponents|\\ncompression|\\ncompute|\\nconcatenate|\\ncond|\\ncondense|\\ncondition|\\nconnection|\\nconstant|\\nconstants|\\ncontext|\\ncontexts|\\ncontrol|\\ncontrols|\\nconv|\\nconversion|\\nconvert|\\ncopy|\\ncorresponding|\\ncount|\\ncountry|\\ncover|\\ncreate|\\ncurrency|\\ncurrent|\\ncursor|\\ncustomer-function|\\ndata|\\ndatabase|\\ndatainfo|\\ndataset|\\ndate|\\ndaylight|\\nddl|\\ndeallocate|\\ndecimals|\\ndeclarations|\\ndeep|\\ndefault|\\ndeferred|\\ndefine|\\ndelete|\\ndeleting|\\ndemand|\\ndescending|\\ndescribe|\\ndestination|\\ndetail|\\ndetermine|\\ndialog|\\ndid|\\ndirectory|\\ndiscarding|\\ndisplay|\\ndisplay-mode|\\ndistance|\\ndistinct|\\ndivide|\\ndivide-corresponding|\\ndummy|\\nduplicate|\\nduplicates|\\nduration|\\nduring|\\ndynpro|\\nedit|\\neditor-call|\\nempty|\\nenabled|\\nenabling|\\nencoding|\\nend|\\nend-enhancement-section|\\nend-of-definition|\\nend-of-page|\\nend-of-selection|\\nend-test-injection|\\nend-test-seam|\\nendenhancement|\\nendexec|\\nendfunction|\\nendian|\\nending|\\nendmodule|\\nendprovide|\\nendselect|\\nendwith|\\nenhancement|\\nenhancement-point|\\nenhancement-section|\\nenhancements|\\nentities|\\nentity|\\nentries|\\nentry|\\nenum|\\nequiv|\\nerrors|\\nescape|\\nescaping|\\nevent|\\nevents|\\nexact|\\nexcept|\\nexception|\\nexception-table|\\nexceptions|\\nexcluding|\\nexec|\\nexecute|\\nexists|\\nexit|\\nexit-command|\\nexpanding|\\nexplicit|\\nexponent|\\nexport|\\nexporting|\\nextended|\\nextension|\\nextract|\\nfail|\\nfailed|\\nfeatures|\\nfetch|\\nfield|\\nfield-groups|\\nfield-symbols|\\nfields|\\nfile|\\nfill|\\nfilter|\\nfilters|\\nfinal|\\nfind|\\nfirst|\\nfirst-line|\\nfixed-point|\\nflush|\\nfollowing|\\nfor|\\nformat|\\nforward|\\nfound|\\nframe|\\nframes|\\nfree|\\nfrom|\\nfull|\\nfunction|\\nfunction-pool|\\ngenerate|\\nget|\\ngiving|\\ngraph|\\ngroup|\\ngroups|\\nhandle|\\nhandler|\\nhashed|\\nhaving|\\nheader|\\nheaders|\\nheading|\\nhelp-id|\\nhelp-request|\\nhide|\\nhint|\\nhold|\\nhotspot|\\nicon|\\nid|\\nidentification|\\nidentifier|\\nignore|\\nignoring|\\nimmediately|\\nimplemented|\\nimplicit|\\nimport|\\nimporting|\\nin|\\ninactive|\\nincl|\\ninclude|\\nincludes|\\nincluding|\\nincrement|\\nindex|\\nindex-line|\\nindicators|\\ninfotypes|\\ninheriting|\\ninit|\\ninitial|\\ninitialization|\\ninner|\\ninput|\\ninsert|\\ninstance|\\ninstances|\\nintensified|\\ninterface|\\ninterface-pool|\\ninterfaces|\\ninternal|\\nintervals|\\ninto|\\ninverse|\\ninverted-date|\\nis|\\njob|\\njoin|\\nkeep|\\nkeeping|\\nkernel|\\nkey|\\nkeys|\\nkeywords|\\nkind|\\nlanguage|\\nlast|\\nlate|\\nlayout|\\nleading|\\nleave|\\nleft|\\nleft-justified|\\nlegacy|\\nlength|\\nlet|\\nlevel|\\nlevels|\\nlike|\\nline|\\nline-count|\\nline-selection|\\nline-size|\\nlinefeed|\\nlines|\\nlink|\\nlist|\\nlist-processing|\\nlistbox|\\nload|\\nload-of-program|\\nlocal|\\nlocale|\\nlock|\\nlocks|\\nlog-point|\\nlogical|\\nlower|\\nmapped|\\nmapping|\\nmargin|\\nmark|\\nmask|\\nmatch|\\nmatchcode|\\nmaximum|\\nmembers|\\nmemory|\\nmesh|\\nmessage|\\nmessage-id|\\nmessages|\\nmessaging|\\nmethod|\\nmethods|\\nmode|\\nmodif|\\nmodifier|\\nmodify|\\nmodule|\\nmove|\\nmove-corresponding|\\nmultiply|\\nmultiply-corresponding|\\nname|\\nnametab|\\nnative|\\nnested|\\nnesting|\\nnew|\\nnew-line|\\nnew-page|\\nnew-section|\\nnext|\\nno-display|\\nno-extension|\\nno-gap|\\nno-gaps|\\nno-grouping|\\nno-heading|\\nno-scrolling|\\nno-sign|\\nno-title|\\nno-zero|\\nnodes|\\nnon-unicode|\\nnon-unique|\\nnumber|\\nobject|\\nobjects|\\nobjmgr|\\nobligatory|\\noccurence|\\noccurences|\\noccurrence|\\noccurrences|\\noccurs|\\nof|\\noffset|\\non|\\nonly|\\nopen|\\noptional|\\noption|\\noptions|\\norder|\\nothers|\\nout|\\nouter|\\noutput|\\noutput-length|\\noverflow|\\noverlay|\\npack|\\npackage|\\npadding|\\npage|\\nparameter|\\nparameter-table|\\nparameters|\\npart|\\npartially|\\npcre|\\nperform|\\nperforming|\\npermissions|\\npf-status|\\nplaces|\\npool|\\nposition|\\npragmas|\\npreceding|\\nprecompiled|\\npreferred|\\npreserving|\\nprimary|\\nprint|\\nprint-control|\\nprivate|\\nprivileged|\\nprocedure|\\nprocess|\\nprogram|\\nproperty|\\nprotected|\\nprovide|\\npush|\\npushbutton|\\nput|\\nquery|\\nqueue-only|\\nqueueonly|\\nquickinfo|\\nradiobutton|\\nraising|\\nrange|\\nranges|\\nread|\\nread-only|\\nreceive|\\nreceived|\\nreceiving|\\nredefinition|\\nreduce|\\nref|\\nreference|\\nrefresh|\\nregex|\\nreject|\\nrenaming|\\nreplace|\\nreplacement|\\nreplacing|\\nreport|\\nreported|\\nrequest|\\nrequested|\\nrequired|\\nreserve|\\nreset|\\nresolution|\\nrespecting|\\nresponse|\\nrestore|\\nresult|\\nresults|\\nresumable|\\nresume|\\nretry|\\nreturn|\\nreturning|\\nright|\\nright-justified|\\nrollback|\\nrows|\\nrp-provide-from-last|\\nrun|\\nsap|\\nsap-spool|\\nsave|\\nsaving|\\nscan|\\nscreen|\\nscroll|\\nscroll-boundary|\\nscrolling|\\nsearch|\\nseconds|\\nsection|\\nselect|\\nselect-options|\\nselection|\\nselection-screen|\\nselection-set|\\nselection-sets|\\nselection-table|\\nselections|\\nsend|\\nseparate|\\nseparated|\\nsession|\\nset|\\nshared|\\nshift|\\nshortdump|\\nshortdump-id|\\nsign|\\nsimple|\\nsimulation|\\nsingle|\\nsize|\\nskip|\\nskipping|\\nsmart|\\nsome|\\nsort|\\nsortable|\\nsorted|\\nsource|\\nspecified|\\nsplit|\\nspool|\\nspots|\\nsql|\\nstable|\\nstamp|\\nstandard|\\nstart-of-selection|\\nstarting|\\nstate|\\nstatement|\\nstatements|\\nstatic|\\nstatics|\\nstatusinfo|\\nstep|\\nstep-loop|\\nstop|\\nstructure|\\nstructures|\\nstyle|\\nsubkey|\\nsubmatches|\\nsubmit|\\nsubroutine|\\nsubscreen|\\nsubstring|\\nsubtract|\\nsubtract-corresponding|\\nsuffix|\\nsum|\\nsummary|\\nsupplied|\\nsupply|\\nsuppress|\\nswitch|\\nsymbol|\\nsyntax-check|\\nsyntax-trace|\\nsystem-call|\\nsystem-exceptions|\\ntab|\\ntabbed|\\ntable|\\ntables|\\ntableview|\\ntabstrip|\\ntarget|\\ntask|\\ntasks|\\ntest|\\ntest-injection|\\ntest-seam|\\ntesting|\\ntext|\\ntextpool|\\nthen|\\nthrow|\\ntime|\\ntimes|\\ntitle|\\ntitlebar|\\nto|\\ntokens|\\ntop-lines|\\ntop-of-page|\\ntrace-file|\\ntrace-table|\\ntrailing|\\ntransaction|\\ntransfer|\\ntransformation|\\ntranslate|\\ntransporting|\\ntrmac|\\ntruncate|\\ntruncation|\\ntype|\\ntype-pool|\\ntype-pools|\\ntypes|\\nuline|\\nunassign|\\nunbounded|\\nunder|\\nunicode|\\nunion|\\nunique|\\nunit|\\nunix|\\nunpack|\\nuntil|\\nunwind|\\nup|\\nupdate|\\nupper|\\nuser|\\nuser-command|\\nusing|\\nutf-8|\\nuuid|\\nvalid|\\nvalidate|\\nvalue|\\nvalue-request|\\nvalues|\\nvary|\\nvarying|\\nversion|\\nvia|\\nvisible|\\nwait|\\nwhen|\\nwhere|\\nwindow|\\nwindows|\\nwith|\\nwith-heading|\\nwith-title|\\nwithout|\\nword|\\nwork|\\nworkspace|\\nwrite|\\nxml|\\nzone\\n\\t\\t        \\t)(?=\\\\s|\\\\.|:|,)","name":"keyword.control.simple.abap"},"operators":{"patterns":[{"include":"#other_operator"},{"include":"#arithmetic_operator"},{"include":"#comparison_operator"},{"include":"#logical_operator"}]},"other_operator":{"match":"(?<=\\\\s)(&&|&|\\\\?=|\\\\+=|-=|\\\\/=|\\\\*=|&&=|&=)(?=\\\\s)","name":"keyword.control.simple.abap"},"reserved_names":{"match":"(?ix)(?<=\\\\s)(me|super)(?=\\\\s|\\\\.|,|->)","name":"constant.language.abap"},"sql_functions":{"match":"(?ix)(?<=\\\\s)(\\nabap_system_timezone|\\nabap_user_timezone|\\nabs|\\nadd_days|\\nadd_months|\\nallow_precision_loss|\\nas_geo_json|\\navg|\\nbintohex|\\ncast|\\nceil|\\ncoalesce|\\nconcat_with_space|\\nconcat|\\ncorr_spearman|\\ncorr|\\ncount|\\ncurrency_conversion|\\ndatn_add_days|\\ndatn_add_months|\\ndatn_days_between|\\ndats_add_days|\\ndats_add_months|\\ndats_days_between|\\ndats_from_datn|\\ndats_is_valid|\\ndats_tims_to_tstmp|\\ndats_to_datn|\\ndayname|\\ndays_between|\\ndense_rank|\\ndivision|\\ndiv|\\nextract_day|\\nextract_hour|\\nextract_minute|\\nextract_month|\\nextract_second|\\nextract_year|\\nfirst_value|\\nfloor|\\ngrouping|\\nhextobin|\\ninitcap|\\ninstr|\\nis_valid|\\nlag|\\nlast_value|\\nlead|\\nleft|\\nlength|\\nlike_regexpr|\\nlocate_regexpr_after|\\nlocate_regexpr|\\nlocate|\\nlower|\\nlpad|\\nltrim|\\nmax|\\nmedian|\\nmin|\\nmod|\\nmonthname|\\nntile|\\noccurrences_regexpr|\\nover|\\nproduct|\\nrank|\\nreplace_regexpr|\\nreplace|\\nrigth|\\nround|\\nrow_number|\\nrpad|\\nrtrim|\\nstddev|\\nstring_agg|\\nsubstring_regexpr|\\nsubstring|\\nsum|\\ntims_from_timn|\\ntims_is_valid|\\ntims_to_timn|\\nto_blob|\\nto_clob|\\ntstmp_add_seconds|\\ntstmp_current_utctimestamp|\\ntstmp_is_valid|\\ntstmp_seconds_between|\\ntstmp_to_dats|\\ntstmp_to_dst|\\ntstmp_to_tims|\\ntstmpl_from_utcl|\\ntstmpl_to_utcl|\\nunit_conversion|\\nupper|\\nutcl_add_seconds|\\nutcl_current|\\nutcl_seconds_between|\\nuuid|\\nvar|\\nweekday\\n                                )(?=\\\\()","name":"entity.name.function.sql.abap"},"sql_types":{"match":"(?ix)(?<=\\\\s)(char|clnt|cuky|curr|datn|dats|dec|decfloat16|decfloat34|fltp|int1|int2|int4|int8|lang|numc|quan|raw|sstring|timn|tims|unit|utclong)(?=\\\\s|\\\\(|\\\\))","name":"entity.name.type.sql.abap"},"system_fields":{"captures":{"1":{"name":"variable.language.abap"},"2":{"name":"variable.language.abap"}},"match":"(?ix)\\\\b(sy)-(abcde|batch|binpt|calld|callr|colno|cpage|cprog|cucol|curow|datar|datlo|datum|dayst|dbcnt|dbnam|dbsysc|dyngr|dynnr|fdayw|fdpos|host|index|langu|ldbpg|lilli|linct|linno|linsz|lisel|listi|loopc|lsind|macol|mandt|marow|modno|msgid|msgli|msgno|msgty|msgv[1-4]|opsysc|pagno|pfkey|repid|saprl|scols|slset|spono|srows|staco|staro|stepl|subrc|sysid|tabix|tcode|tfill|timlo|title|tleng|tvar[0-9]|tzone|ucomm|uline|uname|uzeit|vline|wtitl|zonlo)(?=\\\\.|\\\\s)"},"text_symbols":{"captures":{"1":{"name":"keyword.control.simple.abap"},"2":{"name":"constant.numeric.abap"}},"match":"(?ix)(?<=^|\\\\s)(text)-([A-Z0-9]{1,3})(?=\\\\s|\\\\.|:|,)"}},"scopeName":"source.abap"}'));n("default",[e])}}}));
