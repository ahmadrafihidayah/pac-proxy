function FindProxyForURL(url, host) {

    // 1) 🏠 Local & IP → langsung
    if (isPlainHostName(host) ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    // 2) 🎮 GAME (biar ping stabil)
    if (shExpMatch(host, "*.mobilelegends.com") ||
        shExpMatch(host, "*.mlbb.com") ||
        shExpMatch(host, "*.moonton.com") ||
        shExpMatch(host, "*.tencent.com") ||
        shExpMatch(host, "*.game.qq.com")) {
        return "DIRECT";
    }

    // 3) 🚀 CDN (biar download & loading cepat)
    if (shExpMatch(host, "*.cloudflare.com") ||
        shExpMatch(host, "*.akamaized.net") ||
        shExpMatch(host, "*.fastly.net") ||
        shExpMatch(host, "*.cdn.*")) {
        return "DIRECT";
    }

    // 4) 📱 Layanan penting (biar normal & cepat)
    if (shExpMatch(host, "*.apple.com") ||
        shExpMatch(host, "*.icloud.com") ||
        shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "*.youtube.com") ||
        shExpMatch(host, "*.whatsapp.com")) {
        return "DIRECT";
    }

    // 5) ⚡ Fallback cepat (kalau proxy mati tetap jalan)
    return "PROXY 192.168.1.1:8080; DIRECT";
}
