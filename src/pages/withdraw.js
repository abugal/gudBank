import styles from './withdraw.module.css'
import NavbarComp from '../components/NavbarComp'

export function Withdraw() {

    const onWithdraw = () => {
        e.preventDefault()
    }

    
    return (
        <div>
            <NavbarComp />
        <div className={styles.wthCont}>  
        <h1>withdraw Amount</h1>
        <form onSubmit={onWithdraw}>
            <input type='number' placeholder='Account Id' name='acId' />
            <input type='number' placeholder='Amount' name='amount' />
            <input type='submit' value='Withdraw' />
        </form>
    </div>
    </div>
    )
};

export default Withdraw

