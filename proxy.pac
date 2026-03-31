function FindProxyForURL(url, host) {

    // ✅ Bypass localhost & jaringan lokal
    if (isPlainHostName(host) ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    // 🎮 Bypass GAME (WAJIB biar lancar)
    if (shExpMatch(host, "*.mobilelegends.com") ||
        shExpMatch(host, "*.mlbb.com") ||
        shExpMatch(host, "*.moonton.com") ||
        shExpMatch(host, "*.tencent.com") ||
        shExpMatch(host, "*.game.qq.com")) {
        return "DIRECT";
    }

    // 📱 Bypass layanan penting (biar notif normal)
    if (shExpMatch(host, "*.apple.com") ||
        shExpMatch(host, "*.icloud.com") ||
        shExpMatch(host, "*.whatsapp.com")) {
        return "DIRECT";
    }

    // 🚀 CDN & update langsung (biar cepat)
    if (shExpMatch(host, "*.akamaized.net") ||
        shExpMatch(host, "*.cloudflare.com")) {
        return "DIRECT";
    }

    // 🔒 Sisanya lewat proxy
    return "PROXY 192.168.1.1:8080";
}
