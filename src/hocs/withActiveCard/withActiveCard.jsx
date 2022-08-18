import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };
    }

    render() {

      return (
        <Component
          {...this.props}
          onHover={(evt) => this.setState({activeCard: evt.currentTarget.id})}
          onBlur={() => this.setState({activeCard: null})}
        />
      );
    }
  }

  WithActiveCard.propTypes = {};

  return WithActiveCard;
};

export default withActiveCard;
