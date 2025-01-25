'use client'
import styles from "./styles/signup.module.css"
export default function SignupPage(){
    return(
        <div className={styles.loginsignup}>
        <form>
        <input id={styles.Email} placeholder="Email"/>
        <input id={styles.userName} placeholder="Username"/>
        <input id={styles.passWord} placeholder="Password"/>
        <input type="checkBox" id={styles.rememberMe}></input><p id={styles.rememberMetext}>Remember Me</p>
        <input type="submit" id={styles.signButton} value={"Login"}/>
        </form>
        </div>
    )
} 