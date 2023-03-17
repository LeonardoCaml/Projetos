import React from "react";
import ResumeItem from '../ResumeItem'
import * as C from "./style"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
  } from "react-icons/fa";

function Resume() {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000"/>
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="9000"/>
            <ResumeItem title="Total" Icon={FaDollarSign} value="1005"/>
        </C.Container>
    )
}

export default Resume
