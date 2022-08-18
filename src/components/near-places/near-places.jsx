import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import NearCard from "../near-card/near-card";
import placeCardProp from "../place-card/place-card.prop";

class NearPlaces extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((room) => (
            <NearCard
              key={room.id}
              offer={room}
              onHover={(evt) => this.setState({activeCard: evt.currentTarget.id})}
              onBlur={() => this.setState({activeCard: null})}
            />
          ))}
        </div>
      </section>
    );
  }
}

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default NearPlaces;
