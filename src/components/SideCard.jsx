/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styles from "./SideCard.module.css"

function SideCard({data:{image , title}}) {
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default SideCard