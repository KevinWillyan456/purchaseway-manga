import React from 'react'
import './Loading.css'

const Loading: React.FC = () => {
    return (
        <div className="loading-spinner">
            <div className="loading-spinner__circle"></div>
            <div className="loading-spinner__text">Aguarde...</div>
        </div>
    )
}

export default Loading
