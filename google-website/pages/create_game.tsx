import styles from '../styles/Home.module.css';
import * as React from 'react';

const {useState} = React;

const create_game = () => {
    return (
        <div className={styles.container}>
            <script type = 'javascript' src='./index.js'></script>
            <a href='./' className={styles.go_back}>Go Back</a>
            <main className={styles.main}>
                <h2 className={styles.title}>Create A Game</h2>
                
                <label htmlFor="username">username</label>
                <input className={styles.info} type="text" id="username" name="username" required />

                <label htmlFor="field">field size</label>
                <input className={styles.info} type="text" id="field" name="field" required />
                
                <button className={styles.submit} onClick={() => window.alert("got info")}>&rarr;</button>

            </main>
        </div>
    );
}

export default create_game;