import GithubAuthor from "../GithubAuthor";
import GithubRepositoryLink from "../GithubRepositoryLink";
import styles from "./styles.module.css";

type PluginMetaBarProps = {
  author: string;
  name: string;
  repository: string;
}

export default function PluginMetaBar({ author, name, repository }: PluginMetaBarProps): JSX.Element {
  return (
    <div className={styles.pluginMetaBar}>
      <GithubAuthor name={author} />
      <GithubRepositoryLink url={repository} />
    </div>
  )
}