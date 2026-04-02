# Pixeldrain Bypass

A robust and lightweight Userscript designed to bypass Pixeldrain download limits. It seamlessly integrates a native-looking "Unlimited Download" button directly alongside the original Pixeldrain layout on `pixeldrain.com` and `pixeldra.in` file pages, allowing you to generate a direct, unlimited download link via a fast bypass proxy.

## Features
- **Unlimited Downloads:** Bypasses Pixeldrain's bandwidth/limit restrictions with a single click via `cdn.pixeldrain.eu.cc`.
- **Zero-Hotlink Issues:** Automatically opens links securely (dropping `Referer` headers seamlessly) to bypass "hotlink_detected" blocks.
- **Multiple Domain Support:** Works flawlessly on traditional `pixeldrain.com`, modern short URLs like `pixeldra.in`, and developer domains like `pixeldrain.dev`.
- **Native UI Integration:** Instead of intrusive floating panels, it injects a clean `Unlimited Download` button right next to the original download button, perfectly matching Pixeldrain's CSS styles.
- **SPA Dymanics:** Dynamically observes changes in Pixeldrain's Single Page Application architecture to ensure the button is always correctly rendered when navigating between files without a full page reload.

## Installation
1. Install a Userscript manager extension like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Install the script directly from GreasyFork: [Pixeldrain Bypass](https://greasyfork.org/scripts/551766-pixeldrain-bypass-multi-language).
3. The script will automatically trigger when you visit any valid Pixeldrain file link!

## Usage
Simply visit a Pixeldrain file page (e.g. `https://pixeldrain.com/u/ID`). You will see a new **Unlimited Download** button injected seamlessly into the file description panel next to the usual "Download" button. Click it to bypass limits without leaving the page aesthetic!

---

*Coded with love by [xmtaha](https://github.com/xmtaha).*