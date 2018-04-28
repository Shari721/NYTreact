// Include React 
var React = require('react');

// Component creation
var Results = React.createClass({
  clickToSave: function (i) {
    // we establish a param [i] here to target each index of the results array
    // this function kicks off in the below .map() and will be matched with key={i}
    // as a result, we can know which button we are targeting 
    var data = this.props.results[i];
    console.log(data)
    this.props.saveArticles(data.headline.main, data.pub_date, data.web_url);
  }, 
  // Here we render the function
  render: function(){
    // we establish "that = this" because at this point "this" is still referring to "Results"
    var that = this; 
    return(

      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title text-center"><strong>Results</strong></h3>
        </div>
        <div className="panel-body">
          {that.props.results.map(function(obj, i) {
            return (
              // we .bind(that, i) to each clickToSave function so we know which button we are targeting
              <div className="result-items" key={i}><a href={obj.web_url} target="_blank">{obj.headline.main}</a><br />{obj.pub_date}<br /><button type="button" className="btn btn-warning" style={{'float': 'right', 'marginTop': '-39px'}} onClick={that.clickToSave.bind(that, i)}>Save</button></div>
            )
          })}
        </div>
      </div>
    )
  }
});

// Export the component back for use in other files
module.exports = Results;