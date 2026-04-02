// ==UserScript==
// @name         Pixeldrain Bypass
// @namespace    https://github.com/xmtaha
// @version      1.8
// @description  Bypass Pixeldrain download limits
// @author       xmtaha
// @match        https://pixeldrain.com/*
// @match        https://www.pixeldrain.com/*
// @match        https://pixeldra.in/*
// @match        https://www.pixeldra.in/*
// @match        https://pixeldrain.dev/*
// @match        https://www.pixeldrain.dev/*
// @grant        none
// @icon         https://pixeldrain.com/favicon.ico
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    function extractFileId() {
        const url = window.location.href;
        const match = url.match(/(?:pixeldrain\.com|pixeldra\.in|pixeldrain\.dev)\/u\/([a-zA-Z0-9]+)/);
        return match ? match[1] : null;
    }

    function createBypassButton() {
        const fileId = extractFileId();
        if (!fileId) return;

        const bypassUrl = `https://cdn.pixeldrain.eu.cc/${fileId}`;

        const existingBtn = document.getElementById('pd-unlimited-dl');
        if (existingBtn) {
            existingBtn.dataset.url = bypassUrl;
            return;
        }

        const originalBtn = document.querySelector('.description .button_highlight');
        if (!originalBtn) return;

        const bypassBtn = document.createElement('button');
        bypassBtn.id = 'pd-unlimited-dl';
        bypassBtn.className = originalBtn.className;
        bypassBtn.style.marginLeft = '10px';
        bypassBtn.innerHTML = '<i class="icon">download</i> <span>Unlimited Download</span>';
        bypassBtn.dataset.url = bypassUrl;

        bypassBtn.onclick = function () {
            const urlToOpen = this.dataset.url;
            const tempLink = document.createElement('a');
            tempLink.href = urlToOpen;
            tempLink.target = '_blank';
            tempLink.rel = 'noreferrer noopener';
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        };

        originalBtn.parentNode.insertBefore(bypassBtn, originalBtn.nextSibling);
    }

    function init() {
        createBypassButton();

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    createBypassButton();
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
