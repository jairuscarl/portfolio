<?php
// Entry point for XAMPP: http://localhost/Portfolio/
// Serves the React build from dist/. Run `npm run build` (or `npm run watch`) after editing src/.

$page = __DIR__ . '/dist/index.html';

if (!is_file($page)) {
    http_response_code(503);
    echo '<p style="font-family:monospace">Portfolio is not built yet. Run <b>npm run build</b> in the Portfolio folder.</p>';
    exit;
}

header('Content-Type: text/html; charset=utf-8');
readfile($page);
