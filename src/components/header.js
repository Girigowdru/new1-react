import React, { Component } from 'react';

export class MyHeader extends Component{
    render(){
        return (
        <>
        <h1> Namaste</h1>
        <p id="root"></p>
        <script>
        document.getElementById("root").innerHtml=document.queryselector('input[name="uname"]:checked').value;
        </script> 
        </>
        );
    }
}
export default MyHeader;