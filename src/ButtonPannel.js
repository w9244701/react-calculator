import React from 'react';
import Button from './Button';
function ButtonPannel (props) {
    
        return (
            <div className="buttonWrap">
                <Button name="AC" value="AC" handclick={props.cilckHandler}></Button>
                <Button name="+/-" value="+/-" handclick={props.cilckHandler}></Button>
                <Button name="%" value="%" handclick={props.cilckHandler}></Button>
                <Button name="÷" value="/" handclick={props.cilckHandler}></Button>
                <Button name="7" value="7" handclick={props.cilckHandler}></Button>
                <Button name="8" value="8" handclick={props.cilckHandler}></Button>
                <Button name="9" value="9" handclick={props.cilckHandler}></Button>
                <Button name="x" value="*" handclick={props.cilckHandler}></Button>
                <Button name="4" value="4" handclick={props.cilckHandler}></Button>
                <Button name="5" value="5" handclick={props.cilckHandler}></Button>
                <Button name="6" value="6" handclick={props.cilckHandler}></Button>
                <Button name="-" value="-" handclick={props.cilckHandler}></Button>
                <Button name="1" value="1" handclick={props.cilckHandler}></Button>
                <Button name="2" value="2" handclick={props.cilckHandler}></Button>
                <Button name="3" value="3" handclick={props.cilckHandler}></Button>
                <Button name="+" value="+" handclick={props.cilckHandler}></Button>
                <Button name="0" value="0" handclick={props.cilckHandler}></Button>
                <Button name="." value="." handclick={props.cilckHandler}></Button>
                <Button name="←" value="←" handclick={props.cilckHandler}></Button>
                <Button name="=" value="=" handclick={props.cilckHandler}></Button>
            </div>
        )
}
export default ButtonPannel;
