var DamageView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}>
                <div style={this.renderOtherStyle()}/>
                <span style={this.renderAnotherStyle()}>
                    {Math.floor((this.props.data.maxdamage - this.props.data.damage) * 10)}
                </span>
            </div>
        )
    },
    renderStyle: function() {
        return {
            width: "7em",
            height: "0.75em",
            position: "absolute",
            top: "0.25em",
            overflow: "hidden",
            left: this.props.number == 1 ? "0.25em" : null,
            right: this.props.number == 2 ? "0.25em" : null,
            borderRadius: "0.125em",
            backgroundColor: "#C00",
        }
    },
    renderOtherStyle: function() {
        return {
            top: "0em",
            bottom: "0em",
            position: "absolute",
            left: this.props.number == 2 ? "0em" : null,
            right: this.props.number == 1 ? "0em" : null,
            textAlign: this.props.number == 1 ? "right" : "left",
            width: (this.props.data.maxdamage - this.props.data.damage) / this.props.data.maxdamage * 100 + "%",
            backgroundColor: "#FC0",
        }
    },
    renderAnotherStyle: function() {
        return {
            top: "0em",
            padding: "0.25em",
            left: this.props.number == 2 ? "0em" : null,
            right: this.props.number == 1 ? "0em" : null,
            bottom: "0em",
            fontSize: "0.5em",
            position: "absolute",
        }
    }
})

module.exports = DamageView
