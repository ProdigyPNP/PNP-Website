import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our UIs are simple and responsive. They guide you through the usage of ProdigyPNP.
        We also have a collection of tutorials to make using ProdigyPNP software very easy to use.
      </>
    ),
  },
  {
    title: 'Open Source & Free',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        All ProdigyPNP software is open-source at <a href="https://github.com/ProdigyPNP">github.com/ProdigyPNP</a>, meaning
        you can take a look at the code if you wish! Also, all of our stuff is for free and nonprofit. We never include invasive analytics, or any ads.
      </>
    ),
  },
  {
    title: 'ProdigyPNP Chat',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ProdigyPNP comes with an additional ingame chat for Prodigy hackers. This chat is also accessible outside of Prodigy, at&nbsp;
        <a href="https://chat.prodigypnp.com:8443/">chat.prodigypnp.com:8443</a>!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
