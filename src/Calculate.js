export default function calculate(e) {

    if (/[0-9]+/.test(e)) { //number
        this.setState({
            input: this.state.input + e,
            result: this.state.input + e,
            check: 'number'
        })
    } else if (e === ".") { // dot
        if (this.state.input.indexOf('.') > -1) {

        } else {
            this.setState({
                input: this.state.input + e,
                result: this.state.input + e
            });
        }
    } else if (e === '=') {//enter
        this.setState({ //operator
            operator: e
        })

    } else if (/[+-/*]/.test(e)) { // operator
        this.setState({ //operator
            operator: e
        })
    }

}