var Images = require("<scripts>/data/Images")

var WorldView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}>
                <div style={this.renderAnotherStyle()}/>
            </div>
        )
    },
    renderStyle: function() {
        var image = Images["map1_back.png"]
        var position = "bottom"
        if(this.props.number == 1) {
            position = "top"
            image = Images["map2_back.png"]
        }
        return {
            "width": "100%",
            "height": "100%",
            "backgroundSize": "cover",
            "backgroundPosition": position,
            "backgroundImage": "url(" + image + ")"
        }
    },
    renderAnotherStyle: function() {
        var x = -0.5
        var image = Images["map1_front.png"]
        if(this.props.number == 1) {
            image = Images["map2_front.png"]
            x = 0
        }
        return {
            "width": "100%",
            "height": "100%",
            "position": "absolute",
            "left": x + "em",
            "backgroundSize": "cover",
            "backgroundPosition": "50% 120%",
            "backgroundImage": "url(" + image + ")"
        }
    },
    componentDidMount: function() {
        if(this.props.number == 0) {
            var audio = new Audio("./assets/music/kentucky_anthem.mp3")
            audio.loop = true
            audio.play()
        } else if(this.props.number == 1) {
            var audio = new Audio("./assets/music/brocolli_planet.mp3")
            audio.loop = true
            audio.play()
        }
    }
})

module.exports = WorldView
