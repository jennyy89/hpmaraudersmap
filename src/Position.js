
export default function useRandomPosition () {

function position () {

    const RandomNum = (scaling) => {
        return Math.floor(Math.random() * scaling);
    };

    const Angle = (y, x) => {
        if (x > 0) return Math.atan(y / x);
        return Math.PI + Math.atan(y / x);
    };

    const AngleCss = (y, x) => {
        const offset = Math.PI / 2 - 0.4;
        return offset - Angle(y, x);
    };

    const position = [
        RandomNum(65),
        RandomNum(65),
        RandomNum(65),
        RandomNum(65),
        RandomNum(65),
        RandomNum(65),
    ];

    const CSSVar = {
        "--x1": position[0] + "%",
        "--x2": position[1] + "%",
        "--x3": position[2] + "%",
        "--y1": position[3] + "%",
        "--y2": position[4] + "%",
        "--y3": position[5] + "%",
        "--v1":
        AngleCss(-(position[4] - position[3]), position[1] - position[0]) + "rad",
        "--v2":
        AngleCss(-(position[5] - position[4]), position[2] - position[1]) + "rad",
        "--v3":
        AngleCss(-(position[3] - position[5]), position[0] - position[2]) + "rad",
        "--t1": RandomNum(20) + 55 + "s",
        "--t2": RandomNum(2)  + "s",
    };
    return CSSVar
    }

return {position}
}


