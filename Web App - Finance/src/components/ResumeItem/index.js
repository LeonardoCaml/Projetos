import React from "react";
import * as C from  './style'

function ResumeItem({ title, Icon, value }) {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTittle>{title}</C.HeaderTittle>
                <Icon />
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.Container>
    )
}

export default ResumeItem