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
            alt=""
            className={styles.mini_photo}
            onClick={() => setPhotoIndex(i)}
          />
        ))}
      </aside>
    );
  }
}
