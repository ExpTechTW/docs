import GithubAuthor from "../GithubAuthor";
import styles from "./styles.module.css";

type BlogMetaBarProps = {
  author: string;
}

export default function BlogMetaBar({ author }: BlogMetaBarProps): JSX.Element {
  return (
    <div className={styles.BlogMetaBar}>
      <GithubAuthor name={author} />
    </div>
  )
}