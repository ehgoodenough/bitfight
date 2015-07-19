window.React = require("react")
window.Phlux = require("phlux")
window.Input = require("keyb")
window.Loop = require("tickly").loop

window.WIDTH = 16
window.HEIGHT = 9

var Fighter = require("<scripts>/classes/Fighter")
var Protofighters = require("<scripts>/data/Protofighters")

function shuffle(o) {for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); return o;}

var protofighters = shuffle(Object.keys(Protofighters))
var world = Math.floor(Math.random() * 2)

window.Game = {
    "fighters": {
        1: new Fighter(1, Protofighters[protofighters.pop()]),
        2: new Fighter(2, Protofighters[protofighters.pop()]),
    }
}

var GameStore = Phlux.createStore({
    "data": Game
})

var FrameView = require("<scripts>/views/FrameView")
var ForEachView = require("<scripts>/views/ForEachView")
var FighterView = require("<scripts>/views/FighterView")
var DamageView = require("<scripts>/views/DamageView")
var WorldView = require("<scripts>/views/WorldView")

var GameView = React.createClass({
    mixins: [
        Phlux.connectStore(GameStore, "game")
    ],
    render: function() {
        return (
            <FrameView aspect-ratio={WIDTH + "x" + HEIGHT}>
                <WorldView number={world}/>
                <FighterView data={this.state.game.fighters[1]}/>
                <FighterView data={this.state.game.fighters[2]}/>
                <DamageView data={this.state.game.fighters[1]} number={1}/>
                <DamageView data={this.state.game.fighters[2]} number={2}/>
            </FrameView>
        )
    },
    componentDidMount: function() {
        Loop(function(tick) {
            for(var key in Game.fighters) {
                var fighter = Game.fighters[key]
                fighter.update(tick)
            }
            this.setState({"game": Game})
        }.bind(this))
    }
})

React.render(<GameView/>, document.body)
