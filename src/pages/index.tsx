import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="home" description={siteConfig.tagline}>
      <main className={styles.home}>
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}.</p>
        <ul>
          {/* hidden until published: <li><Link to="/docs/mech-interp/findings">findings</Link></li> */}
          {/* hidden until published: <li><Link to="/docs/mech-interp/experiments">experiments</Link></li> */}
          <li><Link to="/docs/category/notes">notes</Link></li>
          {/* hidden until published: <li><Link to="/docs/mech-interp/roadmap">roadmap</Link></li> */}
        </ul>
      </main>
    </Layout>
  );
}
