// ==UserScript==
// @name                    VTWitcher
// @namespace               vtwitcher
// @run-at                  document-start
// @priority                9001
// @author                  Witch King <http://forum.jogos.uol.com.br/userMessages.jbb?u=3031107026981939224>
// @description             Arruma a porcaria do Forum UOL
// @version                 3.1.1
// @homepageURL             https://weetchking.github.io/
// @require					https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js

// @match					*://forum.jogos.uol.com.br/*
// @match					*://forum.tecnologia.uol.com.br/*
// @match					*://forum.televisao.uol.com.br/*
// @match					*://forum.esporte.uol.com.br/*

// @exclude                 *://forum.jogos.uol.com.br/dwr/*
// @exclude                 *://forum.jogos.uol.com.br/listSmiles.jbb
// @exclude                 *://forum.jogos.uol.com.br/forum/magic_ping.jbb

// @exclude                 *://forum.tecnologia.uol.com.br/dwr/*
// @exclude                 *://forum.tecnologia.uol.com.br/listSmiles.jbb
// @exclude                 *://forum.tecnologia.uol.com.br/forum/magic_ping.jbb

// @exclude                 *://forum.televisao.uol.com.br/dwr/*
// @exclude                 *://forum.televisao.uol.com.br/listSmiles.jbb
// @exclude                 *://forum.televisao.uol.com.br/forum/magic_ping.jbb

// @exclude                 *://forum.esporte.uol.com.br/dwr/*
// @exclude                 *://forum.esporte.uol.com.br/listSmiles.jbb
// @exclude                 *://forum.esporte.uol.com.br/forum/magic_ping.jbb

// @grant                   GM.getValue
// @grant                   GM_getValue

// @grant                   GM.setValue
// @grant                   GM_setValue

// @grant                   GM.notification
// @grant                   GM_notification

// @grant                   GM.addStyle
// @grant                   GM_addStyle

// @grant                   GM.xmlHttpRequest
// @grant                   GM_xmlhttpRequest

// @grant                   unsafeWindow

// @updateURL				https://raw.githubusercontent.com/WeetchKing/WeetchKing.github.io/master/VTWitcher/script/witcher.meta.js
// @downloadURL             https://raw.githubusercontent.com/WeetchKing/WeetchKing.github.io/master/VTWitcher/script/witcher.user.js

// @icon                    data:image/png;base64,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
// @icon64                  data:image/png;base64,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
// ==/UserScript==