#!/bin/zsh
cd -- "$(dirname -- "$0")" || exit 1
print 'Beyond Words · 本地预览'
print '请在浏览器打开：http://localhost:8765'
print '保持此窗口开启；停止预览请按 Control + C。'
python3 -m http.server 8765 --bind 127.0.0.1
