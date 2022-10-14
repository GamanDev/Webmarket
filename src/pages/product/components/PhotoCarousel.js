import React, { Component } from "react";
import styles from "./Photocarousel.module.css";

export default class PhotoCarousel extends Component {
  render() {
    const { gallery, setPhotoIndex } = this.props;

    if (!gallery) return;

    return (
      <aside>
        {gallery.map((photo, i) => (
          <img
            key={photo}
            src={photo}
            alt={photo}
            className={styles.photo}
            onClick={() => setPhotoIndex(i)}
          />
        ))}
      </aside>
    );
  }
}
