import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/前期准备">
            开始阅读
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="我是一名在硅谷工作的程序员，我的本科在国内，硕士来到了美国🇺🇸。我曾经和你一样，也曾面对留学/保研纠结过很久，在留学选校上再三犹豫，并自己完成了文书写作和申请。后来，在来到美国后，我的生活就像是打游戏闯关，面对学习和生活上的一个又一个挑战，我自己也逐渐有了很多感悟和经验（写下这段话的今天，我的车昨天撞到了马路牙子，瞬间爆胎，我自己换了备胎并换好了新胎）。在找工作方面，我本来个人对自己的技术实力很有自习，但一次又一次的投简历，收到的却是一个又一个据信。我也曾经质疑过自己，在夜晚由于焦虑无法入睡。但好在我运气还不错，最终也基本得到了我想要的东西，但同时在这个过程中失去了很多。相信如果你来到美国生活，你也会逐渐遇到我曾经历的各种问题，我将会在这个网站上持续更新我的个人经历和处理生活中突发事件的经验，或许能够（在一定程度上）帮助你少一些焦虑，少走一些弯路！">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
