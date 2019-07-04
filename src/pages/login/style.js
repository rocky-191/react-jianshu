import styled from 'styled-components';

export const LoginWrapper=styled.div`
    position:absolute;
    z-index:0;
    top:56px;
    left:0;
    right:0;
    bottom:0;
    background:#eee;
`

export const LoginBox=styled.div`
    width:400px;
    height:220px;
    margin:80px auto;
    background:#fff;
    border-radius: 4px;
    padding-top:20px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const Input=styled.input`
    display:block;
    width:200px;
    height:30px;
    line-height:30px;
    padding:0 10px;
    color:#777;
    outline:none;
    margin:10px auto;
`

export const Button=styled.div`
    width:220px;
    height:30px;
    line-height:30px;
    color:#fff;
    background:#3194d0;
    margin: 20px auto;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    text-align:center;
`