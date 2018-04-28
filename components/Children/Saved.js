// Include React 
var React = require('react');

// This is the saved component. It will be used to show a log of saved articles.
var Saved = React.createClass({

  // we pass in (this.props.savedArticles[i]) because the delete function is expecting a obj as argument 
  clickToDelete: function (i) {
    this.props.deleteArticles(this.props.savedArticles[i])
  }, 

  // Here we render the function
  render: function(){
    var that = this;
    console.log(this.props.savedArticles)
    return(

      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title text-center"><strong>Saved Articles</strong></h3>
        </div>
        <div className="panel-body">
          {that.props.savedArticles.map(function(obj, i) {
            return (
              // we .bind(that, i) to each clickToSave function so we know which button we are targeting
              <div className="saved-items" key={i}><a href={obj.url} target="_blank">{obj.title}</a><br />{obj.date}<br /><button type="button" className="btn btn-warning" style={{'float': 'right', 'marginTop': '-39px'}} onClick={that.clickToDelete.bind(that, i)}>Delete</button></div>
            )
          })}
        </div>
      </div>

    )
  }
});



// Export the component back for use in other files
module.exports = Saved;
© 2018 Git