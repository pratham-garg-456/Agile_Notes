import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Agile",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Learn the fundamentals of C++ programming, including syntax, data types,
        and control structures.
      </>
    ),
  },
  {
    title: "Advanced Topics",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Dive into advanced topics like templates, STL, and memory management in
        C++.
      </>
    ),
  },
  {
    title: "Practical Examples",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Explore practical examples and projects to solidify your understanding
        of C++.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.welcomeSection}>
        <div className="container text--center">
          <h1>Welcome to Agile Notes</h1>
          <p>Your go-to resource for Agile methodologies and practices.</p>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
