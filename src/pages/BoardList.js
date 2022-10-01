import React from 'react'

const BoardList = ({ list, setList }) => {
    const handlerDelete = (id) => {
        setList(list.filter(it => it.id !== id))
    }

    return (
        <div>
            <h2>BoardList</h2>
            {
                list.map((it, idx) => {
                    return (
                        <div key={it.id}>
                            {it.id}
                            {it.title}
                            <strong>{it.comment}</strong>
                            <button onClick={
                                () => handlerDelete(it.id)
                            }>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BoardList