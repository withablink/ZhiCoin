'use strict';

var walletAddr = localStorage.getItem('walletAddr_ZhiCoin');
if (!walletAddr) {

    var s0 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    var h0 = RMDstring(hex2a(s0));
    console.log(h0);

    h0 = "50" + h0; // prefix = 'Z'

    var shaObj = new jsSHA("SHA-256", "HEX");
    shaObj.update(h0);
    var h1 = shaObj.getHash("HEX");
    console.log(h1);
    shaObj = new jsSHA("SHA-256", "HEX");
    shaObj.update(h1);
    var h2 = shaObj.getHash("HEX");
    console.log(h2);
    h0 = h0 + h2.slice(0, 8);

    walletAddr = Base58.encode(toByteArray(h0))

    localStorage.setItem('walletAddr_ZhiCoin', walletAddr);
}
console.log(walletAddr);

document.getElementById("walletAddr").innerHTML = walletAddr;
