import styles from "./styles.module.css";

type GithubAuthorChipProps = {
  name: string;
}

export default function GithubAuthor({ name }: GithubAuthorChipProps): JSX.Element {
  return (
    <a className={styles.chip} href={`https://github.com/${name}`}>
      <img className={styles.avatar} src={`https://github.com/${name}.png?size=32`} />
      <div className={styles.name}>@{name}</div>
    </a>
  )
}