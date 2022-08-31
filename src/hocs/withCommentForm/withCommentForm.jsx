import React, {PureComponent} from "react";


const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        review: ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {

      return (
        <Component
          {...this.props}
          onSubmit={this.handleSubmit}
          onChange={this.handleFieldChange}
        />
      );
    }
  }

  WithCommentForm.propTypes = {};

  return WithCommentForm;
};

export default withCommentForm;
