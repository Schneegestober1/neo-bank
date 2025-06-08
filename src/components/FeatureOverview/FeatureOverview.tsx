import CheckMarkIcon from '../../assets/icons/CheckMarkIcon'
import styles from './feature-overview.module.scss'

const FeatureOverview = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.imageWrapper}>
        <img src="public\Illustration 2.png" alt="Illustration" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>We Provide Many Features You Can Use</h2>
        <p className={styles.description}>
          You can explore the features that we provide with fun and have their own functions each
          feature
        </p>
        <div className={styles.featuresList}>
          <div className={styles.featureItem}>
            <CheckMarkIcon />
            <p className={styles.featureText}>Powerfull online protection.</p>
          </div>
          <div className={styles.featureItem}>
            <img src="" alt="" className={styles.icon} />
            <p className={styles.featureText}>Cashback without borders.</p>
          </div>
          <div className={styles.featureItem}>
            <img src="" alt="" className={styles.icon} />
            <p className={styles.featureText}>Personal design</p>
          </div>
          <div className={styles.featureItem}>
            <img src="" alt="" className={styles.icon} />
            <p className={styles.featureText}>Work anywhere in the world</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureOverview
