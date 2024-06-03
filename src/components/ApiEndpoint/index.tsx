import styles from './styles.module.css';

interface ApiEndpointProps {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head';
  title: string;
  path: string;
  to: string;
}

const methods = {
  'get': <div className={`${styles.method} ${styles.get}`}>GET</div>,
  'post': <div className={`${styles.method} ${styles.post}`}>POST</div>,
  'put': <div className={`${styles.method} ${styles.put}`}>PUT</div>,
  'patch': <div className={`${styles.method} ${styles.patch}`}>PATCH</div>,
  'delete': <div className={`${styles.method} ${styles.delete}`}>DELETE</div>,
  'options': <div className={`${styles.method} ${styles.options}`}>OPTIONS</div>,
  'head': <div className={`${styles.method} ${styles.head}`}>HEAD</div>,
}

export default function ApiEndpoint({ method, title, path, to }: ApiEndpointProps): JSX.Element {
  return (
    <a href={to} className={styles.noUnderline}>
      <div className={styles.apiEndpoint}>
        { methods[method] }
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <span className={styles.path}>{path}</span>
        </div>
      </div>
    </a>
  );
}