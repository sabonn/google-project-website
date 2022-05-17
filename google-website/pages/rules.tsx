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
                <p className={styles.rules}>There are two groups hiders and seekers every player has a map on hes screen which tells his location and maybe the location of his teammates location the seekers also get a hot an cold meter that tells them of their close to any of the hiders the goal of the hiders is to not get caught by the seekers for as long as possible and there is the point system which allows players to get attributes or sbotage their aponants in cost of points after the end of a round Point determined who won after the lobby ended</p>
            </main>
        </div>
    );
}

export default rules;