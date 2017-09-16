var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var DropDown = React.createClass ({
    getDefaultProps: function() {
      return {
        selectedName: undefined
      };
    },
    getInitialState: function() {
      let selectedName = '';
      if (typeof this.props.defaultName === 'undefined') {
          selectedName = this.props.dataSet[0];
      } else {
          selectedName = props.defaultName;
      }

      return {
          ...this.props,
          defaultName: selectedName
      }
    },
    onOptionClick: function(elem) {
        let text = elem.text;

        this.state = {
            ...this.state,
            defaultName : text
        };

        this.setState(this.state);
        this.closeDropdown();

        this.props.onDataChange({
            ...this.props,
            data: text
        });

        this.removeActive();
        $(elem).addClass('active');
    },
    removeActive: function() {
        let {id} = this.props;
        $('#' + id + ' .active').removeClass('active');
    },
    closeDropdown: function(){
        let {id} = this.props;
        $('#'+id).foundation('close');
    },
    render: function() {
        return (<div></div>);
    },
    onChange: function(e) {
      console.log(e.target);
    },
    componentDidMount: function() {
        let {id, dataSet, defaultName} = this.state;

        if (typeof defaultName === 'undefined') {
            defaultName = dataSet[0];
        }

        let renderOptions = () => {
            return dataSet.map((data) => {

                let className = '';

                if (defaultName === data) {
                    className = 'active';
                }

                return (
                    <a className={className} key={data}>{data}</a>
                );
            });
        };

        let optionsMarkup = (
            <div>
                <input className="dorpdown-label" data-toggle={id} ref="textBox" onChange={this.onChange} ></input>
                <div className="dropdown-pane" id={id} data-dropdown="" data-hover="true" data-hover-pane="true">
                    {renderOptions()}
                </div>
            </div>
        );

        let $modal = $(ReactDOMServer.renderToString(optionsMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        new Foundation.Dropdown($('#'+ id ));
        $('#'+ id + ' a').each((k, v) => {
            $(v).click(() => {
                this.onOptionClick(v);
            });
        });
    },

    componentDidUpdate: function() {
        let {id, defaultName} = this.state;
        let {data} = this.props;

        let selector = 'a[data-toggle="' + id + '"]' ;
        $(selector).text(defaultName);
    }
});

module.exports = DropDown;
