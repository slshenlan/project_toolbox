const e=Object.freeze(JSON.parse('{"displayName":"Systemd Units","name":"systemd","patterns":[{"include":"#comments"},{"begin":"^\\\\s*(InaccessableDirectories|InaccessibleDirectories|ReadOnlyDirectories|ReadWriteDirectories|Capabilities|TableId|UseDomainName|IPv6AcceptRouterAdvertisements|SysVStartPriority|StartLimitInterval|RequiresOverridable|RequisiteOverridable|PropagateReloadTo|PropagateReloadFrom|OnFailureIsolate|BindTo)\\\\s*(=)[ \\\\t]*","beginCaptures":{"1":{"name":"invalid.deprecated"},"2":{"name":"keyword.operator.assignment"}},"end":"(?<!\\\\\\\\)\\\\n","patterns":[{"include":"#comments"},{"include":"#variables"},{"include":"#quotedString"},{"include":"#booleans"},{"include":"#timeSpans"},{"include":"#sizes"},{"include":"#numbers"}]},{"begin":"^\\\\s*(Environment)\\\\s*(=)[ \\\\t]*","beginCaptures":{"1":{"name":"entity.name.tag"},"2":{"name":"keyword.operator.assignment"}},"end":"(?<!\\\\\\\\)\\\\n","name":"meta.config-entry.systemd","patterns":[{"include":"#comments"},{"captures":{"1":{"name":"variable.parameter"},"2":{"name":"keyword.operator.assignment"}},"match":"(?<=\\\\G|[\\\\s\\"\'])([A-Za-z0-9\\\\_]+)(=)(?=[^\\\\s\\"\'])"},{"include":"#variables"},{"include":"#booleans"},{"include":"#numbers"}]},{"begin":"^\\\\s*(OnCalendar)\\\\s*(=)[ \\\\t]*","beginCaptures":{"1":{"name":"entity.name.tag"},"2":{"name":"keyword.operator.assignment"}},"end":"(?<!\\\\\\\\)\\\\n","name":"meta.config-entry.systemd","patterns":[{"include":"#comments"},{"include":"#variables"},{"include":"#calendarShorthands"},{"include":"#numbers"}]},{"begin":"^\\\\s*(CapabilityBoundingSet|AmbientCapabilities|AddCapability|DropCapability)\\\\s*(=)[ \\\\t]*","beginCaptures":{"1":{"name":"entity.name.tag"},"2":{"name":"keyword.operator.assignment"}},"end":"(?<!\\\\\\\\)\\\\n","name":"meta.config-entry.systemd","patterns":[{"include":"#comments"},{"include":"#capabilities"}]},{"begin":"^\\\\s*(Restart)\\\\s*(=)[ \\\\t]*","beginCaptures":{"1":{"name":"entity.name.tag"},"2":{"name":"keyword.operator.assignment"}},"end":"(?<!\\\\\\\\)\\\\n","name":"meta.config-entry.systemd","patterns":[{"include":"#comments"},{"include":"#variables"},{"include":"#restartOptions"}]},{"begin":"^\\\\s*(Type)\\\\s*(=)[ \\\\t]*","beginCaptures":{"1":{"name":"entity.name.tag"},"2":{"name":"keyword.operator.assignment"}},"end":"(?<!\\\\\\\\)\\\\n","name":"meta.config-entry.systemd","patterns":[{"include":"#comments"},{"include":"#variables"},{"include":"#typeOptions"}]},{"begin":"^\\\\s*(Exec(?:Start(?:Pre|Post)?|Reload|Stop(?:Post)?))\\\\s*(=)[ \\\\t]*","beginCaptures":{"1":{"name":"entity.name.tag"},"2":{"name":"keyword.operator.assignment"}},"end":"(?<!\\\\\\\\)\\\\n","name":"meta.config-entry.systemd","patterns":[{"include":"#comments"},{"include":"#executablePrefixes"},{"include":"#variables"},{"include":"#quotedString"},{"include":"#booleans"},{"include":"#numbers"}]},{"begin":"^\\\\s*([\\\\w\\\\-\\\\.]+)\\\\s*(=)[ \\\\t]*","beginCaptures":{"1":{"name":"entity.name.tag"},"2":{"name":"keyword.operator.assignment"}},"end":"(?<!\\\\\\\\)\\\\n","name":"meta.config-entry.systemd","patterns":[{"include":"#comments"},{"include":"#variables"},{"include":"#quotedString"},{"include":"#booleans"},{"include":"#timeSpans"},{"include":"#sizes"},{"include":"#numbers"}]},{"include":"#sections"}],"repository":{"booleans":{"patterns":[{"match":"\\\\b(?<![-\\\\/\\\\.])(true|false|on|off|yes|no)(?![-\\\\/\\\\.])\\\\b","name":"constant.language"}]},"calendarShorthands":{"patterns":[{"match":"\\\\b(?:minute|hour|dai|month|week|quarter|semiannual)ly\\\\b","name":"constant.language"}]},"capabilities":{"patterns":[{"match":"\\\\b(?:CAP_(?:AUDIT_CONTROL|AUDIT_READ|AUDIT_WRITE|BLOCK_SUSPEND|BPF|CHECKPOINT_RESTORE|CHOWN|DAC_OVERRIDE|DAC_READ_SEARCH|FOWNER|FSETID|IPC_LOCK|IPC_OWNER|KILL|LEASE|LINUX_IMMUTABLE|MAC_ADMIN|MAC_OVERRIDE|MKNOD|NET_ADMIN|NET_BIND_SERVICE|NET_BROADCAST|NET_RAW|PERFMON|SETFCAP|SETGID|SETPCAP|SETUID|SYS_ADMIN|SYS_BOOT|SYS_CHROOT|SYS_MODULE|SYS_NICE|SYS_PACCT|SYS_PTRACE|SYS_RAWIO|SYS_RESOURCE|SYS_TIME|SYS_TTY_CONFIG|SYSLOG|WAKE_ALARM))\\\\b","name":"constant.other.systemd"}]},"comments":{"patterns":[{"match":"^\\\\s*[#;].*\\\\n","name":"comment.line.number-sign"}]},"executablePrefixes":{"patterns":[{"match":"\\\\G([@\\\\-\\\\:]+(?:\\\\+|\\\\!\\\\!?)?|(?:\\\\+|\\\\!\\\\!?)[@\\\\-\\\\:]*)","name":"keyword.operator.prefix.systemd"}]},"numbers":{"patterns":[{"match":"(?<=\\\\s|=)\\\\d+(?:\\\\.\\\\d+)?(?=[\\\\s:]|$)","name":"constant.numeric"}]},"quotedString":{"patterns":[{"begin":"(?<=\\\\G|\\\\s)\'","end":"[\'\\\\n]","name":"string.quoted.single","patterns":[{"match":"\\\\\\\\(?:[abfnrtvs\\\\\\\\\\"\'\\\\n]|x[0-9A-Fa-f]{2}|[0-8]{3}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})","name":"constant.character.escape"}]},{"begin":"(?<=\\\\G|\\\\s)\\"","end":"[\\"\\\\n]","name":"string.quoted.double","patterns":[{"match":"\\\\\\\\(?:[abfnrtvs\\\\\\\\\\"\'\\\\n]|x[0-9A-Fa-f]{2}|[0-8]{3}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})","name":"constant.character.escape"}]}]},"restartOptions":{"patterns":[{"match":"\\\\b(no|always|on\\\\-(?:success|failure|abnormal|abort|watchdog))\\\\b","name":"constant.language"}]},"sections":{"patterns":[{"match":"^\\\\s*\\\\[(Address|Automount|BFIFO|BandMultiQueueing|BareUDP|BatmanAdvanced|Bond|Bridge|BridgeFDB|BridgeMDB|BridgeVLAN|CAKE|CAN|ClassfulMultiQueueing|Container|Content|ControlledDelay|Coredump|D-BUS Service|DHCP|DHCPPrefixDelegation|DHCPServer|DHCPServerStaticLease|DHCPv4|DHCPv6|DHCPv6PrefixDelegation|DeficitRoundRobinScheduler|DeficitRoundRobinSchedulerClass|Distribution|EnhancedTransmissionSelection|Exec|FairQueueing|FairQueueingControlledDelay|Feature|Files|FlowQueuePIE|FooOverUDP|GENEVE|GenericRandomEarlyDetection|HeavyHitterFilter|HierarchyTokenBucket|HierarchyTokenBucketClass|Home|IOCost|IPVLAN|IPVTAP|IPoIB|IPv6AcceptRA|IPv6AddressLabel|IPv6PREF64Prefix|IPv6Prefix|IPv6PrefixDelegation|IPv6RoutePrefix|IPv6SendRA|Image|Install|Journal|Kube|L2TP|L2TPSession|LLDP|Link|Login|MACVLAN|MACVTAP|MACsec|MACsecReceiveAssociation|MACsecReceiveChannel|MACsecTransmitAssociation|Manager|Match|Mount|Neighbor|NetDev|Network|NetworkEmulator|NextHop|OOM|Output|PFIFO|PFIFOFast|PFIFOHeadDrop|PIE|PStore|Packages|Partition|Path|Peer|Pod|QDisc|Quadlet|QuickFairQueueing|QuickFairQueueingClass|Remote|Resolve|Route|RoutingPolicyRule|SR-IOV|Scope|Service|Sleep|Socket|Source|StochasticFairBlue|StochasticFairnessQueueing|Swap|Tap|Target|Time|Timer|TokenBucketFilter|TrafficControlQueueingDiscipline|Transfer|TrivialLinkEqualizer|Tun|Tunnel|UKI|Unit|Upload|VLAN|VRF|VXCAN|VXLAN|Volume|WLAN|WireGuard|WireGuardPeer|Xfrm)\\\\]","name":"entity.name.section"},{"match":"\\\\s*\\\\[[\\\\w-]+\\\\]","name":"entity.name.unknown-section"}]},"sizes":{"patterns":[{"match":"(?<=\\\\s|=)\\\\d+(?:\\\\.\\\\d+)?[KMGT](?=[\\\\s:]|$)","name":"constant.numeric"},{"match":"(?<==)infinity(?=[\\\\s:]|$)","name":"constant.numeric"}]},"timeSpans":{"patterns":[{"match":"\\\\b(?:\\\\d+(?:[uμ]s(?:ec)?|ms(?:ec)?|s(?:ec|econds?)?|m(?:in|inutes?)?|h(?:r|ours?)?|d(?:ays?)?|w(?:eeks)?|M|months?|y(?:ears?)?)){1,}\\\\b","name":"constant.numeric"}]},"typeOptions":{"patterns":[{"match":"\\\\b(?:simple|exec|forking|oneshot|dbus|notify(?:-reload)?|idle|unicast|local|broadcast|anycast|multicast|blackhole|unreachable|prohibit|throw|nat|xresolve|blackhole|unreachable|prohibit|ad-hoc|station|ap(?:-vlan)?|wds|monitor|mesh-point|p2p-(?:client|go|device)|ocb|nan)\\\\b","name":"constant.language"}]},"variables":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.variable.systemd"},"2":{"name":"variable.other"}},"match":"(\\\\$)([A-Za-z0-9\\\\_]+)\\\\b"},{"captures":{"1":{"name":"punctuation.definition.variable.systemd"},"2":{"name":"variable.other"},"3":{"name":"punctuation.definition.variable.systemd"}},"match":"(\\\\$\\\\{)([A-Za-z0-9\\\\_]+)(\\\\})"},{"match":"%%","name":"constant.other.placeholder"},{"match":"%[aAbBCEfgGhHiIjJlLmMnNopPsStTuUvVwW]\\\\b","name":"constant.other.placeholder"}]}},"scopeName":"source.systemd"}')),n=[e];export{n as default};
