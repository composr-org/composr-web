function runScripts(a,b){var c=$(".prompt"),d=a[b];c.removeData(),$(".typed-cursor").text(""),d.clear===!0&&$(".command-history").html(""),c.typed({strings:d.strings,typeSpeed:"type"===d.action?30:0,callback:function(){var e=$(".command-history").html();e=e?[e]:[],e.push("$ "+c.text()),d.output&&(e.push(d.output),c.html(""),$(".command-history").html(e.join("<br>"))),b++,b<a.length&&setTimeout(function(){runScripts(a,b)},d.postDelay||1e3)}})}$(function(){var a=[{action:"type",strings:["npm install -g composr-cli^400"],output:'<span class="gray">+composr-cli@1.0.0 installed</span><br>&nbsp;',postDelay:1e3},{action:"type",strings:["cd myproject^400"],output:" ",postDelay:1e3},{action:"type",strings:["composr init^400"],output:'<span class="green">✓</span> <span class="gray">+phrases folder created</span><br><span class="green">✓</span> <span class="gray">+test folder created</span><br><span class="green">✓</span> <span class="gray">+.composrrc file created</span><br>'},{action:"type",strings:["composr publish"],output:'<span class="green">✓</span> 15 phrases published',postDelay:2e3},{action:"type",strings:["corbel-composr"],output:"Server Started - Port 3000 - 15 endpoints enabled",postDelay:2e3},{action:"type",strings:["YAY! :)"],postDelay:2e3}];runScripts(a,0)});