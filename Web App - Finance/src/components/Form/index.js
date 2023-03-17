import React, { useState } from "react"
import * as C from './styles'

function Form()  {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState(false)

    function handleSave() {
        if (!desc || !amount) {
            alert('Informe a descrição e o valor!')
        } else if (amount < 1) {
            alert('O valor tem que ser positivo!')
            return
        }
    }

    return (
        <C.Container>
            <C.InputContent>
                <C.label>Descrição</C.label>
                <C.input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            
        </C.Container>
    )
}

export default Form