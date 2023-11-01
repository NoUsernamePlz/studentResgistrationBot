import React from 'react'

export default function StartBtn(props) {
    console.log(props);

    const initialAction = () => {
        props.actions.initialAction();
    }

    return (
        <div>
            <button className='start-btn' onClick={() => initialAction()}>Got it</button>
        </div >
    )
}
  