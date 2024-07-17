import styles from './types_of_coffee.module.css'

export function TypesOfCoffee ({data}) {
    return (
        <>
            {data.map(d => (
              <div key={d.id} className={styles.box}>
                <div className={styles.img_and_content}>
                  <img src={d.image} alt="" className={styles.image_url} />
                  {d.popular && (
                    <span className={styles.isPopular}>Popular</span>
                  )}
                </div>
                <div className={styles.subtitle_and_price}>
                  <span>{d.name}</span>
                  <span>{d.price}</span>
                </div>
                <div className={styles.feedbacks}>
                  <div>
                    {d.rating  ? (
                      <img src="/Star_fill.svg" alt="star" />
                    ) : (
                      <img src="/Star.svg" alt="star" />
                    )
                    }
                  </div>
                  <div>
                    {d.rating ? (
                      <>
                        <span>{d.rating}</span>
                        <span>({d.votes} votos)</span>
                      </>
                    ) : (
                      <span>Sem votos</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
              </>
    )
}