"use strict";
/**
 * using the https://sunrise-sunset.org/api
 * with input lat & long 
 * create a url + parms & retrieve 
 * the sunrise & sunset from the JSON
 * 
 * refactored - to use React with 1 component 
 * the component contains everything
 * the form & the result together
 * & updates using state
 * 
 * @author pmcampbell
 * @version 2020-12
 */

function setup() {
    // render the form
    ReactDOM.render(<LatLongForm />, document.querySelector('#form'))
}

class LatLongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: "45.5017",
            long: "73.5673",
            showError: false,
            showResult: false,
            errorMsg: '',
            bgColour: '',
            pagenew: true
        }
        this.apiURL = "https://api.sunrise-sunset.org/json"
        this.handleChange = this.change.bind(this);
        this.handleSubmit = this.submit.bind(this);
    }
    change(e) {
        if (e.target.name == "lat")
            this.setState({ lat: e.target.value })
        if (e.target.name == "long")
            this.setState({ long: e.target.value })
        console.log(`change lat or long ${e.target.name} to ${e.target.value}`)
    }
    submit(e) {
        e.preventDefault()
        console.log('fetch data ' + this.state.long, this.state.lat)
        this.getSunInfo()
    }
    /**
    * read the form info & construct the url
    * then retrieve the data
    *
    */
    getSunInfo() {

        let url = new URL(this.apiURL)
        // construct  params  ?lat=99.99&lng=99.99
        url.searchParams.set("lat", this.state.lat)
        url.searchParams.set("lng", this.state.long)
        console.log(url)
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    return response.json();
                }
            }).then(json => this.dataRender(json))
            .catch(e => { this.errorRender(e, url) });
    }
    errorRender(e, url) {
        console.log("Error "+e.message +  " ")
        console.log("url   " + url)
        this.setState({ showError: true, showResult: false, errorMsg: e.message, 
            bgColour: "darkmagenta"})
    }
    /**
     * given JSOn with  sunrise & sunset in text
     * put  it  into the state for the page
     * 
     * @param {JSON} jsondata 
     */
    dataRender(jsondata) {
        console.log(jsondata)
        this.setState({ showError: false, showResult: true, })
        this.setState({ sunrise: jsondata.results.sunrise, sunset: jsondata.results.sunset,
            bgColour: "darkorange"} )
    }
    render() {
         const styleResult = { backgroundColor: this.state.bgColour ,
                 display: this.state.showResult ? "block" : "none",}
        const styleError = { backgroundColor: this.state.bgColour ,
                    display: this.state.showError ? "block" : "none",}
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset id="latlong">
                        <legend>Where do you want to know about sunset/sunrise</legend>
                        <label htmlFor="lat">Latitude</label>
                        <input type="number" step=".00001" id="lat" name="lat" required value={this.state.lat}
                            onChange={this.handleChange} />
                        <br />
                        <label htmlFor="long">Longitude</label>
                        <input type="number" step=".00001" id="long" name="long"
                            required value={this.state.long}
                            onChange={this.handleChange} />
                    </fieldset>
                    <input type="submit" id="submit" value="Get the times"></input>
                </form>
                <div id='result' style={ styleResult } >
                    <p >Sunrise: {this.state.sunrise} </p>
                    <p >Sunset: {this.state.sunset} </p>
                </div>
                <div id='error' style={ styleError }>
                    <p >Error: {this.state.errorMsg} </p>
                </div>
            </div>
        );
    }
}

setup()
