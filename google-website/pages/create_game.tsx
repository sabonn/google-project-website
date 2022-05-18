import styles from '../styles/Home.module.css';
import * as React from 'react';

const {useState} = React;

const create_game = () => {
    return (
        <div className={styles.container}>
            <a href='./' className={styles.go_back}>Go Back</a>
            <main className={styles.main}>
                <h2 className={styles.title}>Create A Game</h2>
                <form action="/api/form" method="post" className={styles.grid}>
                    <label htmlFor="first">First Name</label>
                    <input className={styles.info} type="text" id="first" name="first" required />

                    <label htmlFor="last">Last Name</label>
                    <input className={styles.info} type="text" id="last" name="last" required />
                
                    <button>&rarr;</button>
                </form>
            </main>
        </div>
    );
}

export default create_game;