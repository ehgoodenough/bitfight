var Images = require("<scripts>/data/Images")

var Protofighters = {
    "betty": {
        "images": {
            "idle": Images["funky_betty_still1.png"],
            "idle2": Images["funky_betty_still2.png"],
            "walk1": Images["funky_betty_walk1.png"],
            "walk2": Images["funky_betty_walk2.png"],
            "walk3": Images["funky_betty_walk3.png"],
            "hurt": Images["funky_betty_hurt.png"],
            "punch": Images["funky_betty_punch.png"],
            "kick": Images["funky_betty_kick.png"],
        },
        "attacks": {
            "punch": {
                "force": 0.05,
                "damage": 0.25,
                "distance": 0.5,
                "cooldown": 0.15
            },
            "kick": {
                "force": 0.5,
                "damage": 2,
                "distance": 0.75,
                "cooldown": 1
            }
        }
    },
    "ollie": {
        "images": {
            "idle": Images["O.C.D.Ollie_still1.png"],
            "idle2": Images["O.C.D.Ollie_still2.png"],
            "walk1": Images["O.C.D.Ollie_walk1.png"],
            "walk2": Images["O.C.D.Ollie_walk2.png"],
            "walk3": Images["O.C.D.Ollie_walk3.png"],
            "hurt": Images["O.C.D.Ollie_hurt.png"],
            "punch": Images["O.C.D.Ollie_punch.png"],
            "kick": Images["O.C.D.Ollie_kick.png"],
        },
        "attacks": {
            "punch": {
                "force": 0.05,
                "damage": 0.75,
                "distance": 0.5,
                "cooldown": 0.25
            },
            "kick": {
                "force": 0.05,
                "damage": 0.25,
                "distance": 0.25,
                "cooldown": 0.25,
                "speedup": 100,
                "speeduptime": 0.15
            }
        }
    },
    "jones": {
        "images": {
            "idle": Images["kentucky_jones_still1.png"],
            "idle2": Images["kentucky_jones_still2.png"],
            "walk1": Images["kentucky_jones_walk1.png"],
            "walk2": Images["kentucky_jones_walk2.png"],
            "walk3": Images["kentucky_jones_walk3.png"],
            "hurt": Images["kentucky_jones_hurt.png"],
            "punch": Images["kentucky_jones_punch.png"],
            "kick": Images["kentucky_jones_kick.png"],
        },
        "attacks": {
            "punch": {
                "gun": true,
                "force": 0.15,
                "damage": 0.5,
                "distance": 1,
                "cooldown": 0.5
            },
            "kick": {
                "force": 0.1,
                "damage": 0.75,
                "distance": 0.75,
                "cooldown": 0.15
            }
        }
    },
    "bruce": {
        "images": {
            "idle": Images["bruce_broccoli_still1.png"],
            "idle2": Images["bruce_broccoli_still2.png"],
            "walk1": Images["bruce_broccoli_walk1.png"],
            "walk2": Images["bruce_broccoli_walk2.png"],
            "walk3": Images["bruce_broccoli_walk3.png"],
            "hurt": Images["bruce_broccoli_hurt.png"],
            "punch": Images["bruce_broccoli_punch.png"],
            "kick": Images["bruce_broccoli_kick.png"],
        },
        "attacks": {
            "punch": {
                "force": 0.05,
                "damage": 0.25,
                "distance": 0.5,
                "cooldown": 0.5,
                "projectiles": true
            },
            "kick": {
                "force": 0.05,
                "damage": 0.5,
                "distance": 0.5,
                "cooldown": 0.25,
            }
        }
    }
}

module.exports = Protofighters
