import React from 'react'

const SectionHead = ({ title, className }) => {
    return (
        <div className={`section__head ${className}`}>
            <h2>{title}</h2>
        </div>
    )
}

export default SectionHead