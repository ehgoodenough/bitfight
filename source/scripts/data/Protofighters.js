var Images = require("<scripts>/data/Images")

var Protofighters = {
    "betty": {
        "images": {
            "idle": Images["funky_betty.png"]
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
            "idle": Images["O.C.D.Ollie_still1.png"]
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
            "idle": Images["kentucky_jones_still.png"]
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
            "idle": Images["bruce_broccoli_still1.png"]
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
