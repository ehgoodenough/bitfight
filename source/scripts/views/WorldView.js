var Images = require("<scripts>/data/Images")

var WorldView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            "width": "100%",
            "height": "100%",
            "backgroundSize": "cover",
            "backgroundPosition": "50% 65%",
            "backgroundImage": "url(" + Images["map.png"] + ")"
        }
    }
})

module.exports = WorldView
