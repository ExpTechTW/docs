import styles from "./styles.module.css";
import GithubIcon from "@site/static/img/github.svg";

import Translate, {translate} from '@docusaurus/Translate';

type GithubRepositoryLinkProps = {
  url: string;
}

export default function GithubRepositoryLink({ url }: GithubRepositoryLinkProps): JSX.Element {
  return (
    <a className={styles.repolink} href={url}>
      <GithubIcon className={styles.icon} />
      <div className={styles.name}>
        <Translate
          id="component.githubRepositoryLink.sourceCode"
          description="The label of source code link">
          原始碼
        </Translate>
      </div>
    </a>
  )
}