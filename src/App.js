import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api'; 
import coronaImage from './images/covid.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='COVID-19' />
                <Cards data={data} />
                <Chart data={data} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
            </div>
        );
    }
}
export default App;