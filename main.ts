input.onButtonPressed(Button.A, function () {
    PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Color)
})
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Things)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.red)) {
        basic.showString("Mak Kau Hijau")
    }
})
