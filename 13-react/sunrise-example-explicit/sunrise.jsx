/**
 * Use React to display results from the sunrise/sunset api 
 * read from form for api params
 *
 * @author PMCampbell
 */
/**
 * retrieve json from a website & perform action (callback) on it
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
