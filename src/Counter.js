import React, {Component} from 'react';

class Counter extends Component {

    state = {
        input: '',
        result: '0',
        pre_result: '',
        operator: '',
        exprsstion: ''
    }


    append = (e) => {
        this.setState({
            input: this.state.input + e,
            result: this.state.input + e
        });
        console.log(this)
    }

    clear = () => {
        this.setState({
            input: '',
            result: '0',
            pre_result: '',
            operator: '',
            exprsstion: ''
        });
    }

    operator = (e) => {
        this.setState({
            operator: e,
            exprsstion: this.state.result + e,
            //pre_result:this.state.result,
            input: "",
        });
        console.log(this)
    }

    operator1 = (e) => {
        this.setState({
            operator: e,
            exprsstion: this.state.result + e,
            //pre_result: this.state.result,
            input: "",
        });
        console.log(this)
    }

    operator2 = (e) => {
        this.setState({
            operator: e,
            result: String(eval(this.state.exprsstion + this.state.input)),
            //pre_result: String(eval(this.state.exprsstion + this.state.input)),
            exprsstion: String(eval(this.state.exprsstion + this.state.input)) + e,
            input: ""
        });
        console.log(this)
    }

    enter = () => {
        this.setState({

            result: String(eval(this.state.exprsstion + this.state.input)),
            input: '',
            operator: '',
            exprsstion: '',
            pre_result: ''

        });
        console.log(this)
    }

    del = () => {
        this.setState({
            input: this.state.input.slice(0, -1),
            result: this.state.result.slice(0, -1)
        });
        console.log(this)

    }

    dot = (e) => {
        this.setState({
            input: this.state.result + e,
            result: this.state.result + e
        });

    }

    render() {
        return (
            <div>
                <div class="display">{this.state.operator}{this.state.result}</div>
                <div class="button_box">
                    <div class="button"  onClick={this.clear}>AC</div>
                    <div class="button">+/-</div>
                    <div class="button">%</div>
                    {
                        (() => {
                            if (this.state.operator == "" & this.state.pre_result == "") {
                                return (<div class="button" onClick={() => this.operator('/')}>÷</div>)
                            } else if (this.state.operator !== "" & this.state.input == "") {
                                return (<div class="button" onClick={() => this.operator1('/')}>÷</div>)
                            } else if (this.state.operator !== "" & this.state.input !== "") {
                                return (<div class="button" onClick={() => this.operator2('/')}>÷</div>)
                            }
                        })()
                    } 
                    <div class="button" onClick={() => this.append(7)}>7</div>
                    <div class="button" onClick={() => this.append(8)}>8</div>
                    <div class="button" onClick={() => this.append(9)}>9</div>
                    {
                        (() => {
                            if (this.state.operator == "" & this.state.pre_result == "") {
                                return (<div class="button" onClick={() => this.operator('*')}>x</div>)
                            } else if (this.state.operator !== "" & this.state.input == "") {
                                return (<div class="button" onClick={() => this.operator1('*')}>x</div>)
                            } else if (this.state.operator !== "" & this.state.input !== "") {
                                return (<div class="button" onClick={() => this.operator2('*')}>x</div>)
                            }
                        })()
                    }  
                    <div class="button" onClick={() => this.append(4)}>4</div>
                    <div class="button" onClick={() => this.append(5)}>5</div>
                    <div class="button" onClick={() => this.append(6)}>6</div>
                    {
                        (() => {
                            if (this.state.operator == "" & this.state.pre_result == "") {
                                return (<div class="button" onClick={() => this.operator('-')}>-</div>)
                            } else if (this.state.operator !== "" & this.state.input == "") {
                                return (<div class="button" onClick={() => this.operator1('-')}>-</div>)
                            } else if (this.state.operator !== "" & this.state.input !== "") {
                                return (<div class="button" onClick={() => this.operator2('-')}>-</div>)
                            }
                        })()
                    }
                    <div class="button" onClick={() => this.append(1)}>1</div>
                    <div class="button" onClick={() => this.append(2)}>2</div>
                    <div class="button" onClick={() => this.append(3)}>3</div>
                    {
                        (()=> {
                            if (this.state.operator == "" & this.state.pre_result == "") {
                                return (<div class="button" onClick={() => this.operator('+')}>+</div>)
                            } else if (this.state.operator !== "" & this.state.input == ""){
                                return (<div class="button" onClick={() => this.operator1('+')}>+</div>)
                            } else if (this.state.operator !== "" & this.state.input !== "") {
                                return (<div class="button" onClick={() => this.operator2('+')}>+</div>)
                            } 
                        })()
                    }
                    <div class="button" onClick={() => this.append(0)}>0</div>
                    {this.state.input.indexOf('.') == -1 ? <div class="button" onClick={() => this.dot('.')}>.</div> : <div class="button">.</div>}
                    <div class="button" onClick={this.del}>←</div>
                    <div class="button" onClick={this.enter}>=</div>
                </div>
            </div>
        );
    }
}

export default Counter;