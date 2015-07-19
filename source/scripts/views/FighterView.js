var FighterView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        var transform = ""
        if(this.props.data.status.name == "loser") {
            transform = " rotate(270deg)"
        }
        return {
            "position": "absolute",
            "width": this.props.data.width + "em",
            "height": this.props.data.height + "em",
            "top": this.props.data.position.y - this.props.data.height + "em",
            "left": this.props.data.position.x - (this.props.data.width / 2) + "em",
            "transform": "scaleX(" + this.props.data.direction.x + ")" + transform,
            "backgroundImage": "url(" + this.getImage() + ")",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "bottom",
            "backgroundSize": "contain"
        }
    },
    getImage: function() {
        if(this.props.data.status.name == "hurt") {
            return this.props.data.images.hurt
        } else if(this.props.data.status.name == "punch") {
            return this.props.data.images.punch
        } else if(this.props.data.status.name == "kick") {
            return this.props.data.images.kick
        } else if(this.props.data.status.name == "walk") {
            if(this.props.data.time % 0.33 <= 0.11) {
                return this.props.data.images.walk1
            } else if(this.props.data.time % 0.33 <= 0.22){
                return this.props.data.images.walk2
            } else if(this.props.data.time % 0.33 <= 0.33){
                return this.props.data.images.walk3
            }
        } else if(this.props.data.status.name == "idle") {
            if(this.props.data.time % 1 < 0.5) {
                return this.props.data.images.idle
            } else {
                return this.props.data.images.idle2
            }
        } else if(this.props.data.status.name == "loser") {
            return this.props.data.images.hurt
        } else {
            return this.props.data.images.idle
        }
    }
})

module.exports = FighterView
