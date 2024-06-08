import styles from "./styles.module.css";
import GithubIcon from "@site/static/img/github.svg";

type GithubRepositoryLinkProps = {
  url: string;
}

export default function GithubRepositoryLink({ url }: GithubRepositoryLinkProps): JSX.Element {
  return (
    <a className={styles.repolink} href={url}>
      <GithubIcon className={styles.icon} />
      <div className={styles.name}>原始碼</div>
    </a>
  )
}