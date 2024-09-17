const Card = ({ className, children }) => (
    <article className={`card ${className}`}>
        {children}
    </article>
)
export default Card