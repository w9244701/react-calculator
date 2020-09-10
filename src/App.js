import React, {useState} from 'react';
import ButtonPannel from './ButtonPannel';
import Display from './Display';
import './App.css';
function App() {

    const [input_num, setInput_num] = useState({input: "", result: "0"})
    const [input_operator, setInput_oper] = useState(
        {operator: "", expresstion: ""}
    )

    const {input, result} = input_num
    const {operator, expresstion} = input_operator

    const clickBtn = (e) => {
        if (/[0-9]+/.test(e)) { //number
            setInput_num({
                input: input + e,
                result: input + e
            })
        } else if (e === ".") { // dot
            if (input.indexOf('.') > -1) {
                //점 두번 찍기 방지
            } else {
                setInput_num({
                    input: result + e,
                    result: result + e
                });
            }
        } else if (e === '=') { //enter
            if (operator !== "" & input === "") {
                setInput_num({
                    result: String(eval(expresstion.slice(0, -1))),
                    input: ''
                })
                setInput_oper({operator: '', expresstion: ''})
            } else if (expresstion === "") {
                setInput_num({input: '', result: result})
                setInput_oper({operator: '', expresstion: ''})
            } else {
                setInput_num({
                    result: String(eval(expresstion + input)),
                    input: ''
                })
                setInput_oper({operator: '', expresstion: ''})
            }

        } else if (e === 'AC') { //clear

            setInput_num({input: '', result: '0'});
            setInput_oper({operator: '', expresstion: ''})
        } else if (e === '←') {
            setInput_num({
                input: input.slice(0, -1),
                result: result.slice(0, -1)
            });
        } else if (e === '%') {
            setInput_num({
                result: result*0.01,
                input: input
            });
        } else if (e === '+/-') {
            setInput_num({
                result: result * -1,
                input: input
            });
        } else if (/[+-/*]/.test(e)) { // operator
            setInput_num({input: "", result: result})

            if (operator !== "" & input !== "") {
                setInput_num({
                    result: String(eval(expresstion + input)),
                    input: ''
                });
                if (e === '/') {
                    setInput_oper({
                        expresstion: String(eval(expresstion + input)) + e,
                        operator: '÷'
                    });
                } else if (e === '*') {
                    setInput_oper({
                        expresstion: String(eval(expresstion + input)) + e,
                        operator: 'x'
                    });
                } else {
                    setInput_oper({
                        expresstion: String(eval(expresstion + input)) + e,
                        operator: e
                    });
                }
            } else {
                if (e === '/') {
                    setInput_oper({
                        expresstion: result + e,
                        operator: '÷'
                    });
                } else if (e === '*') {
                    setInput_oper({
                        expresstion: result + e,
                        operator: 'x'
                    });
                } else {
                    setInput_oper({
                        expresstion: result + e,
                        operator: e
                    });
                }

            }
        }
    }

    return (
        <div className="app">
            <Display result={result} operator={operator}></Display>
            <ButtonPannel cilckHandler={clickBtn}></ButtonPannel>
        </div>
    );

}

export default App;