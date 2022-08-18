import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import placeCardProp from "../place-card/place-card.prop";


class PlaceCards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => (
          <PlaceCard
            key={offer.id}
            offer={offers[i]}
            onHover={(evt) => this.setState({activeCard: evt.currentTarget.id})}
            onBlur={() => this.setState({activeCard: null})}
          />
        ))}
      </div>
    );
  }
}

PlaceCards.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default PlaceCards;
