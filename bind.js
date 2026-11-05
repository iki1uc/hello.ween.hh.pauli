// Vollbindung – ESSENZ als Code – CLOSED
class Vollbindung {
  filaments = 81;
  octacore = ['N','S','E','W','UP','DOWN','IN','OUT'];
  wabe = [3,6,9]; // B3 B6 B9
  hz = 24;
  dTheta = 0.528; // rad/tick
  load = 0.497;
  stay = { min: 0.40, max: 0.75 };
  co2raus = 0.417; o2ein = 0.583;

  f(x:number){ return Math.min(x,40); } // HOME 40 Fixpunkt
  
  rum(n:number){
    const map = [
      '3.Ecken → start',
      '9.Ecken → wabe ↻',
      'umrumrum → 81 Cluster → bridge',
      'um → 729 Baum → ROOT',
      'rum → VOLLBINDUNG voll ✔ richtig rum'
    ];
    return map[n];
  }

  regler(load:number){
    // PID + Hz 24 + Atem RAUS
    if(load < this.stay.min) return 'CO2 raus ↓';
    if(load > this.stay.max) return 'O2 ein ↑';
    return 'Stay 0.40-0.75 ✔ eich=1';
  }
}
