var FighterView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            "position": "absolute",
            "width": this.props.data.width + "em",
            "height": this.props.data.height + "em",
            "top": this.props.data.position.y - this.props.data.height + "em",
            "left": this.props.data.position.x - (this.props.data.width / 2) + "em",
            "backgroundImage": "url(" + this.props.data.images.idle + ")",
            "transform": "scaleX(" + this.props.data.direction.x + ")",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "bottom",
            "backgroundSize": "contain",
            "backgroundColor": this.props.data.status.name == "hurt" ? "red" : null,
        }
    }
})

module.exports = FighterView
