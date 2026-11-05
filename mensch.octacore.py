class OctacoreVector:
    AXES = ["N","S","E","W","UP","DOWN","IN","OUT"] # 8 Bezüge
    def __init__(self, axis="OUT"):
        self.id = "OCTACORE"
        self.state = "PASSIVE" # <- hier – sollte ACTIVE werden bei 12/12
        self.axis = axis

    @property
    def vector(self): return f"VECTOR({self.axis})"
    @property
    def sat(self): return f"WURMLOCH:{self.vector}"
    @property
    def nc(self): return f"NC.link -> {self.sat}"
    @property
    def worm(self): return f"OPEN({self.nc})"

    def magma(self, intensity=0.68): # flowing lava – load 0.68 = homeostatic
        return sum([math.sin(intensity*i + self.AXES.index(self.axis)) for i in range(5)])

    def whirl(self, speed=0.74): # whirl-spin 4s/speed
        dir_map = {"N":(0,-1),"S":(0,1),"E":(1,0),"W":(-1,0),"UP":(0,0),"DOWN":(0,0),"IN":(-1,-1),"OUT":(1,1)}
        return [d*speed for d in dir_map[self.axis]]

    def blitz(self, freq=0.45): # blitz-strike 0.42s
        return random.random() < freq

    def traverse(self, runs): # RUN8 Repo ast kletter gerüst
        for r in runs:
            self.axis = r["axis"]
            yield self.worm
