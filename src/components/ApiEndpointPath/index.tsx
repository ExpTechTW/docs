import styles from './styles.module.css';

interface ApiEndpointPathProps {
  path: string;
  baseUrl: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head';
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

export default function ApiEndpointPath({ baseUrl, path, method }: ApiEndpointPathProps): JSX.Element {
  return (
    <div className={styles.apiEndpointPath}>
      { methods[method] }
      <div className={styles.path}>
        <span className={styles.baseUrl}>{baseUrl}</span>
        <span>{path}</span>
      </div>
    </div>
  );
}
