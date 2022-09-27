import React, { Component } from "react";
import styles from "./Image.module.css";
// import ArrowL from "/assets/img/vector_left.png";
// import ArrowR from "/assets/img/vector_left.png";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
  render() {
    const { gallery } = this.props;

    const next = () => {
      if (
        gallery &&
        gallery.length &&
        this.state.index === gallery.length - 1
      ) {
        this.setState({
          ...this.state,
          index: 0,
        });
      }
      if (
        gallery &&
        gallery.length > 1 &&
        this.state.index < gallery.length - 1
      ) {
        this.setState({
          ...this.state,
          index: this.state.index + 1,
        });
      }
    };

    const prev = () => {
      if (gallery && gallery.length && this.state.index === 0) {
        this.setState({
          ...this.state,
          index: gallery.length - 1,
        });
      }
      if (gallery && gallery.length > 1 && this.state.index > 0) {
        this.setState({
          ...this.state,
          index: this.state.index - 1,
        });
      }
    };

    return (
      <main className={styles.description__image}>
        {gallery.length > 1 ? (
          <>
            <img
              src={gallery[this.state.index]}
              alt="product"
              className={styles.image}
            />
            {/* <div className={styles.image_buttons}>
              <div className={styles.vector} onClick={prev}>
                <img src={process.env.PUBLIC_URL + ArrowL} alt="left" />
              </div>

              <div className={styles.vector} onClick={next}>
                <img src={process.env.PUBLIC_URL + ArrowL} alt="tight" />
              </div>
            </div> */}
          </>
        ) : (
          <img src={gallery[0]} alt="product" className={styles.image} />
        )}
      </main>
    );
  }
}
