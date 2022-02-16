import styles from '../styles/error.module.scss'

function Error({ statusCode }) {
  
  return (
    <div className={styles.container}>
      <iframe src="https://archive.org/embed/DukeNukem" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
      <span className={styles.errorMsg}>
        {statusCode
          ? `An error ${statusCode} occurred on server `
          : 'An error occurred on client '}<br/>
        but you can still play Duke :)
      </span>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
