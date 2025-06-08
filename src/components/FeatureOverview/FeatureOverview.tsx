import FeatureItem from '../FeatureItem/FeatureItem'
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
          <FeatureItem>Powerfull online protection.</FeatureItem>
          <FeatureItem>Cashback without borders.</FeatureItem>
          <FeatureItem>Personal design</FeatureItem>
          <FeatureItem>Work anywhere in the world</FeatureItem>
        </div>
      </div>
    </section>
  )
}

export default FeatureOverview
