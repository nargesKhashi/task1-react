import styles from "./Main.module.css"
const Main=()=>{
    return(
    
        <>
        <div className={styles.main}>
           <div className={styles.bordermain}>
           <h2 className={styles.h2}>This is the note titel</h2>
           <p className={styles.p}>This is the note titel</p>
           </div>
        </div>
        </>
    )
}
export default Main;