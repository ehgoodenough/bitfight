window.React = require("react")
window.Phlux = require("phlux")
window.Input = require("keyb")
window.Loop = require("tickly").loop

window.WIDTH = 16
window.HEIGHT = 9

var Images = require("<scripts>/data/Images")

var Fighter = require("<scripts>/classes/Fighter")

window.Game = {
    "fighters": {
        "betty": new Fighter({
            "key": "betty",
            "position": {
                "x": 16 * 0.25
            },
            "inputs": {
                "move left": "A",
                "move right": "D",
                "punch": "W",
                "kick": "S",
            },
            "images": {
                "idle": Images["funky_betty.png"]
            }
        }),
        "ollie": new Fighter({
            "key": "ollie",
            "position":  {
                "x": 16 * 0.75
            },
            "inputs":  {
                "move left": "<left>",
                "move right": "<right>",
                "punch": "<up>",
                "kick": "<down>",
            },
            "images": {
                "idle": Images["O.C.D.Ollie_still1.png"]
            }
        })
    }
}

var GameStore = Phlux.createStore({
    "data": Game
})

var FrameView = require("<scripts>/views/FrameView")
var ForEachView = require("<scripts>/views/ForEachView")
var FighterView = require("<scripts>/views/FighterView")
var WorldView = require("<scripts>/views/WorldView")

var GameView = React.createClass({
    mixins: [
        Phlux.connectStore(GameStore, "game")
    ],
    render: function() {
        return (
            <FrameView aspect-ratio={WIDTH + "x" + HEIGHT}>
                <WorldView data={{"name": "Floating Island"}}/>
                <ForEachView data={this.state.game.fighters} view={FighterView}/>
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
