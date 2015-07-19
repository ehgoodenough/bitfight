window.React = require("react")
window.Phlux = require("phlux")
window.Input = require("keyb")
window.Loop = require("tickly")

var FrameView = require("<scripts>/views/FrameView")

var Game = React.createClass({
    render: function() {
        return (
            <FrameView aspect-ratio="16x9">
                Hello World!
            </FrameView>
        )
    }
})

React.render(<Game/>, document.body)
