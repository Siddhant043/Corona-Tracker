import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchdata } from './api';
import styles from './app.module.css';

export class App extends Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchdata();

        this.setState({ data: fetchedData})
    }
    
    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                 <Cards data={data} />
                 <CountryPicker />
                 <Chart />
            </div>
        )
    }
}

export default App;
