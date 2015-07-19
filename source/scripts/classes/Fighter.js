var Fighter = function(key, protofighter) {
    this.key = key
    
    this.images = protofighter.images
    this.attacks = protofighter.attacks
    
    if(key == 1) {
        this.inputs = {
            "move left": "A",
            "move right": "D",
            "punch": "W",
            "kick": "S",
        }
    } else if(key == 2) {
        this.inputs = {
            "move left": "<left>",
            "move right": "<right>",
            "punch": "<up>",
            "kick": "<down>",
        }
    }
    
    this.position = {
        "x": 16 * (key == 1 ? 0.25 : 0.75),
        "y": 4.05
    }
        
    this.direction = {"x": +1}
    
    this.velocity = {"x": 0}
    this.minvelocity = 0.001
    this.maxvelocity = 0.1
    
    this.width = 1
    this.height = 2
    
    this.acceleration = 5
    this.deceleration = 0.000005
    
    this.damage = 0
    this.maxdamage = 10
    
    this.status = {
        "name": "idle"
    }
    
    this.time = 0
}

Fighter.prototype.update = function(tick) {
    if(this.status.name != "loser") {
        if(Input.isDown(this.inputs["move left"])) {
            this.velocity.x -= this.acceleration * tick
            if(this.velocity.x < -this.maxvelocity) {
                this.velocity.x = -this.maxvelocity
            }
        } if(Input.isDown(this.inputs["move right"])) {
            this.velocity.x += this.acceleration * tick
            if(this.velocity.x > +this.maxvelocity) {
                this.velocity.x = +this.maxvelocity
            }
        }
    }
    
    this.position.x += this.velocity.x
    
    if(this.position.x + this.velocity.x > 14) {
        this.position.x = 14
        this.velocity.x = 0
    } else if(this.position.x + this.velocity.x < 1.5) {
        this.position.x = 1.5
        this.velocity.x = 0
    }
    
    if(this.velocity.x < 0) {
        this.velocity.x *= Math.pow(this.deceleration, tick)
        if(this.velocity.x > -this.minvelocity) {
            this.velocity.x = 0
        }
    } else if(this.velocity.x > 0) {
        this.velocity.x *= Math.pow(this.deceleration, tick)
        if(this.velocity.x < +this.minvelocity) {
            this.velocity.x = 0
        }
    }
    
    if(this.status.name != "hurt"
    && this.status.name != "loser"
    && this.status.name != "winner"
    && this.status.name != "punch"
    && this.status.name != "kick") {
        if(this.velocity.x != 0) {
            this.status = {
                "name": "walk"
            }
        } else {
            this.status = {
                "name": "idle"
            }
        }
    }
    
    var opponent = this.getOtherFighter()
    
    if(this.position.x > opponent.position.x) {
        this.direction.x = -1
    } else if(this.position.x < opponent.position.x) {
        this.direction.x = +1
    }
    
    if(!!this.status.time) {
        this.status.time -= tick
        if(this.status.time <= 0) {
            this.status = {
                "name": "idle"
            }
        }
    }
    
    if(!!this.speeduptime) {
        this.speeduptime -= tick
        if(this.speeduptime <= 0) {
            this.maxvelocity = 0.1
        }
    }
    
    if(this.status.name != "loser"
    && this.status.name != "winner") {
        for(var key in this.attacks) {
            var attack = this.attacks[key]
            if(!attack.time) {
                attack.time = 0
            } else {
                attack.time -= tick
            }
            if(Input.isJustDown(this.inputs[key]) && attack.time <= 0) {
                attack.time = attack.cooldown
                this.status = {
                    "name": key,
                    "time": attack.cooldown,
                }
                var distance = Math.abs(opponent.position.x - this.position.x)
                var mindistance = (opponent.width / 2) + (this.width / 2)
                if(distance < mindistance + attack.distance) {
                    opponent.velocity.x = attack.force * this.direction.x
                    opponent.damage += attack.damage
                    if(opponent.damage >= opponent.maxdamage) {
                        opponent.damage = opponent.maxdamage
                        opponent.status = {
                            "name": "loser"
                        }
                        opponent.position.y += 0.5
                        this.status = {
                            "name": "winner"
                        }
                        setTimeout(function() {
                            window.location = window.location
                        }, 5000)
                    } else {
                        opponent.status = {
                            "name": "hurt",
                            "time": 0.25
                        }
                    }
                }
                if(attack.speedup) {
                    this.maxvelocity *= attack.speedup
                    this.speeduptime = attack.speeduptime
                }
            }
        }
    }
    
    this.time += tick
}

Fighter.prototype.getOtherFighter = function() {
    for(var key in Game.fighters) {
        if(key != this.key) {
            return Game.fighters[key]
        }
    }
}

module.exports = Fighter
