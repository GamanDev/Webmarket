import React, { Component } from "react";
import { dataFetching } from "../../utils/dataFetching";
import styles from "./Nav.module.css";
import logo from "../../img/green_logo.png";
import rLine from "../../img/round_line.png";
import arrow from "../../img/arrow.png";
import cart from "../../img/cart.png";
import wheel from "../../img/cart_wheel.png";
import vectorDown from "../../img/price_vector_down.png";
import vectorUp from "../../img/price_vector_up.png";
import { Link } from "react-router-dom";
import NavCart from "./NavCart/NavCart";
import Currency from "./CurrencySelector/Currency";
import { connect } from "react-redux";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currencies: [],
      show: false,
      vector: false,
      CurrSign: 0,
      price: this.props.price,
      updated: this.props.updated,
      ItemsInCart: this.props.ItemsInCart,
      active_category: "",
    };
    this.query = this.props.query;
  }

  componentDidMount() {
    dataFetching(this.props, this.query).then((result) =>
      this.setState({
        categories: result.data.categories,
        currencies: result.data.categories[0].products[0].prices,
        active_category: "all",
      })
    );
  }

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.updated !== this.props.updated) {
      this.setState({
        ...this.state,
        ItemsInCart: this.props.ItemsInCart,
        updated: this.props.updated,
      });
    }
    if (PrevState.active_category !== this.state.active_category) {
      this.setState({
        ...this.state,
        active_category: this.state.active_category,
      });
    }
  }

  render() {
    const currSign = this.state.currencies[this.state.CurrSign];
    const onCartClick = (e) => {
      e.stopPropagation();
      this.setState({
        show: !this.state.show,
      });
    };

    const onCurrencyChange = () => {
      this.setState({
        vector: !this.state.vector,
      });
    };

    const onCurrSelect = (id) => {
      this.setState({ CurrSign: id, vector: false });
    };

    const active_category = (name) => {
      this.setState({
        ...this.state,
        active_category: name,
      });
    };

    return (
      <nav className={styles.nav}>
        <div className={styles.categories}>
          {this.state.categories.map((category) => (
            <div key={category.name}>
              {category.name === "all" ? (
                <Link
                  to="/"
                  onClick={() => active_category(category.name)}
                  className={
                    this.state.active_category === "all"
                      ? styles[this.state.active_category]
                      : ""
                  }
                >
                  {category.name.toUpperCase()}
                </Link>
              ) : category.name === "clothes" ? (
                <Link
                  to={`/${category.name}`}
                  onClick={() => active_category(category.name)}
                  className={
                    this.state.active_category === "clothes"
                      ? styles[this.state.active_category]
                      : ""
                  }
                >
                  {category.name.toUpperCase()}
                </Link>
              ) : (
                <Link
                  to={`/${category.name}`}
                  onClick={() => active_category(category.name)}
                  className={
                    this.state.active_category === "tech"
                      ? styles[this.state.active_category]
                      : ""
                  }
                >
                  {category.name.toUpperCase()}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className={styles.parent}>
          <img src={logo} alt="green_logo" className={styles.logo} />
          <img src={rLine} alt="round_line" className={styles.line} />
          <img src={arrow} alt="round_line" className={styles.arrow} />
        </div>

        <div className={styles.currencies} onClick={onCurrencyChange}>
          <div className={styles.currency}>
            <div>{currSign && currSign.currency.symbol}</div>
            {this.state.vector ? (
              <>
                <img src={vectorUp} alt="vectorDown" />
                <Currency
                  client={this.props.client}
                  onCurrencyChange={onCurrencyChange}
                  curr={this.curr}
                  currencySetter={this.props.currencySetter}
                  changer={onCurrSelect}
                />
              </>
            ) : (
              <img src={vectorDown} alt="vectorDown" />
            )}
          </div>
          <div className={styles.cart_parent} onClick={onCartClick}>
            <img src={cart} alt="cart" />
            <img src={wheel} alt="wheel1" className={styles.wheel1} />
            <img src={wheel} alt="wheel2" className={styles.wheel2} />
            {this.state.updated > 0 ? (
              <div className={styles.cart__count}>
                <div className={styles.cart__count_number}>
                  {this.props.ItemsInCart.reduce((acc, item) => {
                    return acc + item.count;
                  }, 0)}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {this.state.show && (
          <NavCart
            onCartClick={onCartClick}
            client={this.props.client}
            currency={this.props.currency}
            currSign={currSign}
          />
        )}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    ItemsInCart: state.cartReducer.ItemsInCart,
    updated: state.cartReducer.updated,
  };
}

export default connect(mapStateToProps)(Nav);
