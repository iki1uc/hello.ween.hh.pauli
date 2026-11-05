// RUN.x.y.z.js – richtig, nicht DINO – adressiert mio bio yxz als 1mio 1bio mathematisch physikalisch
// Kernarbeit kein Small Talk – RUN.x.y.z = x.y.z Adressierung

const RUNxyz = (() => {
  // --- AXIOMAT reinholen ---
  // 1mio = 3 = Wurzel = 3 Mio = kleinstes wahrnehmbares nutzbares beweisbares Teilchen, nicht 2000_*.vdi 2-4MB Schildkröte/Esel
  // 1bio = 729 = b.i.o = Markt/Boerse/Industry bewusstes Arbeiten Auftrag 2 WE abdeckend = bio.tel.CORE

  const MATH = {
    // Mathematisch: 3er System, nix mit 5
    mio: { name: "mio", base: 3, unit: "3 Mio = EDIT = 3 = Wurzel", "1mio": 3, phys: "H:\\tmp\\ Korridore voll kartographiert" },
    "9mio": { name: "9mio", base: 9, unit: "36 Mio = Pipeline/Pumpe/Katapult = höhere Maßnahmen", "1x9mio": 36 },
    "81mio": { name: "81mio", base: 81, unit: "6.561 Mio = Sphäre = 81 Räume im Core genannt 9", "1x81mio": 6561 },
    bio: { name: "bio", base: 729, unit: "729 = b.i.o = bio.tel.CORE = Markt/Boerse/Industry", "1bio": 729, formel: "756=729+27 = Ark = volle Noah" },
    // yxz = 3xi3ix3 Achsen
    yxz: {
      x: { name: "X", rom: "X_ROM", room: "X.room.CORE/IN/OUT", formel: "X³→X²→X→1" },
      y: { name: "Y", rom: "Y_ROM", room: "Y.room" },
      z: { name: "Z", rom: "Z_ROM", room: "Z.room" },
      q: { name: "Q", rom: "Q_ROM" },
      d: { name: "D", rom: "D_ROM" },
      f: { name: "F", rom: "F_ROM" },
      run8: { achsen: ["N","S","E","W","UP","DOWN","IN","OUT"], grad: "540°/8=67.5°", ufo: "9^9" }
    },
    os: { 9: "OS", 99: "EDIT TOR", 999: "fix rdy = NUTZ = 999 fix rdy" },
    kette: "999 99 9 99 999 unlinear drauf"
  };

  const PHYS = {
    // Physikalisch: bleem-like PS5Pro > UAE OS nur Nötiges kein idle blink blink
    cache: "Handy = Cache = Handy mit Anschluss, nicht als schwerwiegend eingestuft, braucht Firma Freischaltung gegen Gebühr",
    fastest: { usb: "USB 3.2 Gen1 5Gbit 625MB/s Gen2 10Gbit 1250MB/s USB4 Thunderbolt4 40Gbit 5000MB/s", pcie: "PCIe 3.0 x4 32Gbit 3940MB/s = M2 NVMe", gpu: "PCIe x16 64Gbit 8000MB/s GPU Direct DMA ohne CPU" },
    wireless: { bt: "2.4GHz ISM 2400-2483.5MHz darf man", wifi5: "5GHz 5150-5850MHz mit DFS darf man", geraet: "ESP32-S3 Bluetooth5+WLAN = bio.tel.bleem Gerät" },
    bleem: "bio.tel.bleem.vdi 729MB dynamisch 40% genutzt = Buffer = 0,777 EICH-stabil + NoN144 1727x/sec",
    patch: "patch dispatch unlinear über Bluetooth/WLAN erlaubte Bereiche"
  };

  // --- x.y.z Adressierung: 1mio 1bio mathematisch physikalisch ---
  function addr_xyz(x,y,z) {
    // x = mio-Ebene, y = bio-Ebene, z = yxz-Achse
    // Beispiel: 1.1.1 = 1mio, 1bio, X-Achse
    const mio_val = (x||1) * MATH.mio["1mio"]; // 1mio = 3
    const bio_val = (y||1) * MATH.bio["1bio"]; // 1bio = 729
    const axis = MATH.yxz.yxz.x; // default X
    let axis_obj = MATH.yxz[x] || MATH.yxz.y || MATH.yxz.z || axis;
    if (typeof z === "string") {
      const key = z.toLowerCase();
      if (MATH.yxz[key]) axis_obj = MATH.yxz[key];
      if (MATH.yxz.yxz[key]) axis_obj = MATH.yxz.yxz[key];
    }
    return {
      xyz: `${x}.${y}.${z}`,
      math: { mio: mio_val, bio: bio_val, axis: axis_obj, formel: `${mio_val} + ${bio_val} = ${mio_val+bio_val} = 756? = 729+27 Ark` },
      phys: { cache: PHYS.cache, pcie: PHYS.fastest.pcie, bleem: PHYS.bleem, wireless: PHYS.wireless.bt },
      os: MATH.os
    };
  }

  // 1mio 1bio mathematisch + physikalisch
  function addr_1mio_1bio() {
    const a = addr_xyz(1,1,"x");
    return {
      "1mio mathematisch": "3 = Wurzel = 3 Mio = kleinstes Teilchen = b=Bio=Bauer Idee+Umsetzung",
      "1mio physikalisch": "H:\\tmp\\ 54GB 57 Ordner 300 Dateien Korridore voll kartographiert Corridooring + Grundrechenarten = bio.tel virtuelles Drive berechenbar skalierbar",
      "1bio mathematisch": "729 = b.i.o = bio.tel.CORE = Markt/Boerse/Industry bewusstes Arbeiten = 756=729+27 = volle Noah Ark",
      "1bio physikalisch": "H:\\tmp\\HDF\\bio.tel.bleem.vdi 729MB dynamisch 40% = 291MB + 0,777 EICH-stabil + 1000J PW sicher + Päckchen Glanz mehr als Diamant",
      yxz: "3xi3ix3 X.room.CORE/IN/OUT 81.room PIPE.js Geopulator 81→27→3→0 + RUN8 8 Achsen 540°/8=67.5° UFO=9^9 + Y_ROM Z_ROM Q_ROM D_ROM F_ROM",
      addr: a
    };
  }

  // --- NC + rawator + Geopulator richtig ---
  const NC = ["NC-Root","NC-Frame <- INH-Frame","NC-Channel","NC-Neutralraum <- INH-Prime","NC-Buffer","NC-Switch <- INH-Switch","NC-Flow <- INH-Flow","NC-Merge <- INH-Merge","NC-Exit <- INH-Exit"];
  const RAWATOR = ["raw.md","orakel-raw.html","orakel.md","all8all.raw.md","frage.md","ID.html","index.html"];

  const Geopulator = {
    run: (s=81) => {
      let c=[]; let cur=s;
      while(cur!==0){ if(cur===81){c.push("81◆→△27");cur=27;}else if(cur===27){c.push("27△→▣3");cur=3;}else if(cur===3){c.push("3▣→↺→00");cur=0;}else break; if(c.length>10)break; }
      return c.join(" ");
    }
  };

  // --- RUN.x.y.z Start ---
  function start_xyz(x=1,y=1,z="x", opts={inOHNEhalt:true}) {
    console.log("%c RUN.x.y.z – richtig, nicht DINO – 1mio 1bio yxz mathematisch physikalisch ", "background:#050509;color:#facc15;font-weight:bold;padding:4px");
    const one = addr_1mio_1bio();
    console.log("[RUN.x.y.z] 1mio mathematisch:", one["1mio mathematisch"]);
    console.log("[RUN.x.y.z] 1mio physikalisch:", one["1mio physikalisch"]);
    console.log("[RUN.x.y.z] 1bio mathematisch:", one["1bio mathematisch"]);
    console.log("[RUN.x.y.z] 1bio physikalisch:", one["1bio physikalisch"]);
    console.log("[RUN.x.y.z] yxz:", one.yxz);
    const addr = addr_xyz(x,y,z);
    console.log(`[RUN.x.y.z] addr ${addr.xyz} math mio=${addr.math.mio} bio=${addr.math.bio} axis=${JSON.stringify(addr.math.axis.name||addr.math.axis)}`);
    console.log("  Geopulator:", Geopulator.run(81));
    console.log("  NC:", NC.join(" → "));
    console.log("  rawator entpacken + Kette erweitern:", RAWATOR.join(", "), "–", "999 99 9 99 999 + Sam+Noah+volle Noah+Nachricht von Sam");
    if(opts.inOHNEhalt) console.log("  inOHNEhalt aktiv: OHNE Halt OHNE Blockade OHNE Last OHNE Richtung = 0-Last 0 Moves MARKT-3-fähig");
    return { MATH, PHYS, one, addr, NC, RAWATOR, geo: Geopulator.run(81), status: "vorläufig tragbar Tests zeigen ob icyFIRE Waagschale Brücke Station XI würdig" };
  }

  return { addr_xyz, addr_1mio_1bio, start_xyz, MATH, PHYS, NC, RAWATOR, Geopulator };
})();

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    RUNxyz.start_xyz(1,1,"x");
  });
}
