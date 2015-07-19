var Fighter = function(protofighter) {
    this.position = {}
    this.position.x = protofighter.position.x || (WIDTH / 2)
    this.position.y = protofighter.position.y || 4.05
    
    this.key = protofighter.key || ""
    this.inputs = protofighter.inputs || {}
    this.images = protofighter.images || {}
    
    this.velocity = {}
    this.velocity.x = 0
    this.velocity.y = 0
    this.minvelocity = 0.001
    this.maxvelocity = 0.075
    
    this.width = 1
    this.height = 2
    this.acceleration = 5
    this.deceleration = 0.000005
    
    this.direction = {}
    this.direction.x = +1
    this.direction.y = 0
    
    this.punch = {}
    this.punch.force = 1
    this.punch.damage = 0.5
    this.punch.distance = 0.5
    this.punch.maxtime = 0.1
    this.punch.time = 0
    
    this.kick = {}
    this.kick.force = 10
    this.kick.damage = 2
    this.kick.distance = 0.1
    this.kick.maxtime = 0.5
    this.kick.time = 0
    
    this.damage = 0
    this.maxdamage = 10
    
    this.status = {
        "name": "idle"
    }
}

Fighter.prototype.update = function(tick) {
    // movement input
    if(Input.isDown(this.inputs["move left"])) {
        this.velocity.x -= this.acceleration * tick
    } if(Input.isDown(this.inputs["move right"])) {
        this.velocity.x += this.acceleration * tick
    }
    
    // maximum velocity
    if(this.velocity.x < -this.maxvelocity) {
        this.velocity.x = -this.maxvelocity
    } if(this.velocity.x > +this.maxvelocity) {
        this.velocity.x = +this.maxvelocity
    }
    
    // translation
    this.position.x += this.velocity.x
    
    if(this.position.x + this.velocity.x > 14) {
        this.position.x = 14
        this.velocity.x = 0
    } else if(this.position.x + this.velocity.x < 1.5) {
        this.position.x = 1.5
        this.velocity.x = 0
    }
    
    // deceleration
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
    
    // fighter
    var opponent = this.getOtherFighter()
    
    // direction
    if(this.position.x > opponent.position.x) {
        this.direction.x = -1
    } else if(this.position.x < opponent.position.x) {
        this.direction.x = +1
    }
    
    // timers
    if(this.status.time) {
        this.status.time -= tick
        if(this.status.time <= 0) {
            this.status = {
                "name": "idle"
            }
        }
    }
    this.kick.time -= tick
    this.punch.time -= tick
    
    // attack input
    if(Input.isJustDown(this.inputs.punch) && this.punch.time <= 0) {
        var distance = Math.abs(opponent.position.x - this.position.x)
        var mindistance = (opponent.width / 2) + (this.width / 2)
        if(distance < mindistance + this.punch.distance) {
            opponent.velocity.x = this.punch.force * this.direction.x
            opponent.damage += this.punch.damage
            opponent.status = {
                "name": "hurt",
                "time": 0.25
            }
        }
        this.punch.time = this.punch.maxtime
    } if(Input.isJustDown(this.inputs.kick) && this.kick.time <= 0) {
        var distance = Math.abs(opponent.position.x - this.position.x)
        var mindistance = (opponent.width / 2) + (this.width / 2)
        if(distance < mindistance + this.kick.distance) {
            opponent.velocity.x = this.kick.force * this.direction.x
            opponent.damage += this.kick.damage
            opponent.status = {
                "name": "hurt",
                "time": 0.25
            }
        }
        this.kick.time = this.kick.maxtime
    }
}

Fighter.prototype.getOtherFighter = function() {
    for(var key in Game.fighters) {
        if(key != this.key) {
            return Game.fighters[key]
        }
    }
}

module.exports = Fighter
