"use strict";
/**
 * using the https://sunrise-sunset.org/api
 * with input lat & long 
 * create a url + parms & retrieve 
 * the sunrise & sunset from the JSON
 * 
 * refactor - to use React with 2 components 
 * the form & the result
 * 
 * @author pmcampbell
 * @version 2020-12
 */
let globals = {}

// document.addEventListener('DOMContentLoaded', setup)
// see func call setup at bottom of file

function setup() {
    // moved to React form component 
    // document.querySelector('form').addEventListener('submit', getSunInfo);
    // globals.lat = document.querySelector('#lat')
    // globals.long = document.querySelector('#long')

    globals.apiURL = "https://api.sunrise-sunset.org/json"
    globals.result = document.querySelector('#result')
    // render the form
    ReactDOM.render(<LatLongForm />, document.querySelector('#form'))
}
/**
 * read the form info & construct the url
 * then retrieve the data
 * 
 * @param {str} latitude from form
 * @param {str} longitude from form
 */
function getSunInfo(lat, long) {
    // e.preventDefault()
    let url = constructURL(lat, long);
    getJSON(url, addPara)
}
/**
 * construct the url with the query params
 * 
 * @param {str} lat 
 * @param {str} long 
 */
function constructURL(lat, long) {
    let url = new URL(globals.apiURL)

    // construct  params  ?lat=99.99&lng=99.99
    url.searchParams.set("lat", lat)
    url.searchParams.set("lng", long)
    console.log(url)
    return url
}

/**
 * given JSOn with  sunrise & sunset in text
 * put  it  into a new para on the page
 * 
 * @param {JSON} jsondata 
 */
function addPara(jsondata) {
    console.log(jsondata)
    // re render, each time, using props
    ReactDOM.render(<Sun sunrise={jsondata.results.sunrise} sunset={jsondata.results.sunset} />,
        globals.result)
    // removed 
    // let p = document.createElement('p')
    // globals.main.appendChild(p)
    // p.textContent = `sunrise ${jsondata.results.sunrise} UTC sunset ${jsondata.results.sunset} UTC`;
}
/**
 * retrieve json from a website & perform action on it
 * 
 * @param {string} uri encoded
 * @param {funct to read Json} action 
 */
function getJSON(uri, action) {
    fetch(uri)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.json();
            }
        }).then(json => action(json))
        .catch(e => { console.log('Problem : ' + e.message + " " + uri); });
}
class LatLongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: "45.5017",
            long: "73.5673"
        }
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
        getSunInfo(this.state.lat, this.state.long)
    }

    render() {
        return (
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
            </form>);
    }
}
class Sun extends React.Component {
    render() {
        const bg = { backgroundColor: "darkorange" }
        return (
            <div style={bg}>
                <p >Sunrise: {this.props.sunrise} </p>
                <p >Sunset: {this.props.sunset} </p>
            </div>
        );
    }
}
setup()
