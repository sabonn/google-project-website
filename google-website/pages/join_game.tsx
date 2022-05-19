import styles from '../styles/Home.module.css';
import * as React from 'react';

const {useState} = React;

const join_game = () => {
    return (
        <div className={styles.container}>
            <a href='./' className={styles.go_back}>Go Back</a>
            <main className={styles.main}>
                <h2 className={styles.title}>Join A Game</h2>

                <label htmlFor="token">token</label>
                <input className={styles.info} type="text" id="token" name="token" required />

                <label htmlFor="username">username</label>
                <input className={styles.info} type="text" id="username" name="username" required />
                    
                <button className={styles.submit} onClick={() => window.alert("got info")}>&rarr;</button>
            </main>
        </div>
    );
}

export default join_game;