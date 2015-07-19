var Fighter = function(protofighter) {
    var fighter = this
    for(var key in protofighter) {
        fighter[key] = protofighter[key]
    }
    
    this.width = 1
    this.height = 2
    this.acceleration = 5
    this.deceleration = 0.000005
    
    this.velocity = {
        "minimum": 0.001,
        "maximum": 0.075,
        "x": 0,
        "y": 0,
    }
}

Fighter.prototype.update = function(tick) {
    if(Input.isDown(this.inputs["move left"])) {
        this.velocity.x -= this.acceleration * tick
    }
    if(Input.isDown(this.inputs["move right"])) {
        this.velocity.x += this.acceleration * tick
    }
    
    if(this.velocity.x < -this.velocity.maximum) {
        this.velocity.x = -this.velocity.maximum
    } if(this.velocity.x > +this.velocity.maximum) {
        this.velocity.x = +this.velocity.maximum
    }
    
    for(var key in Game.fighters) {
        if(key == this.key) {continue}
        var fighter = Game.fighters[key]
        var distance = Math.abs(fighter.position.x - this.position.x)
        var minimum_distance = (this.width / 2) + (fighter.width / 2)
        if(distance < minimum_distance) {
            fighter.velocity.x += this.velocity.x
            this.velocity.x *= -1
        }
    }
    
    this.position.x += this.velocity.x
    
    if(this.velocity.x < 0) {
        this.velocity.x *= Math.pow(this.deceleration, tick)
        if(this.velocity.x > -this.velocity.minimum) {
            this.velocity.x = 0
        }
    } else if(this.velocity.x > 0) {
        this.velocity.x *= Math.pow(this.deceleration, tick)
        if(this.velocity.x < +this.velocity.minimum) {
            this.velocity.x = 0
        }
    }
}

module.exports = Fighter
