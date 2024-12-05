import styles from '../components/Card.module.css'

const Card = (props) => {

    return (
        <>
            <div className={styles.card} style={{ left: `${props.positionLeft}` }}>{props.info}</div>
        </>
    )
}
export default Card