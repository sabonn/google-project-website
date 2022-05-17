import styles from '../styles/Home.module.css';
import * as React from 'react';

const {useState} = React;

const rules = () => {
    return (
        <div className={styles.container}>
            <a href='./' className={styles.go_back}>Go Back</a>
            <main className={styles.main}>
                <h2 className={styles.title}>
                    The Rules
                </h2>
            </main>
        </div>
    );
}

export default rules;