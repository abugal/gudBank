import styles from "./transfer.module.css"
import NavbarComp from '../components/NavbarComp';


export function Transfer() {

    const onTransfer = (e) => {
        e.preventDefault()

        const srcId = e.target.srcId.value
        const destId = e.target.destId.value
        const amount = e.target.amount.value

        console.log(`Source ${srcId} Destination ${destId} Amount ${amount}`)
    }
    return (
        <div>
            <NavbarComp />
            <div className={styles.trnCont}>
                <h1>Transfer</h1>
                <form onSubmit={onTransfer}>
                    <input type='number' placeholder='Source Id' name='srcId' />
                    <input type='number' placeholder='Destination Id' name='destId' />
                    <input type='number' placeholder='Amount' name='amount' />
                    <input type='submit' value='Transfer' />
                </form>
            </div>
        </div>
    )
};

export default Transfer;

