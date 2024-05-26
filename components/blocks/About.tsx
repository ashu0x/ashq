import { FC } from "react";

const About: FC = () => {
  return (
    <div className={"width-half"}>
      <div className="tabbed">
        I'm Ash, a crypto-native and an engineer. I've been working in crypto
        full-time and known to build <a href="https://onbinocular.com">Binocular</a>, <a href="https://rug.ai">Rug.ai</a>, <a href="https://liminalcustody.com">Liminal</a>. <br/> <br />
      </div>
      <div className="tabbed">
        Currently I am deepening my knowledge in <code>Go</code> and{" "}
        <code>Rust</code>, learning about <code>zk</code> and{" "}
        <code>compilers </code> and improving my storytelling skills. I also
        love EVM and enjoy writing low-level code in Huff. <br/> <br />
      </div>
      <div className="tabbed">
        Skills: <li> Languages: Typescript, Huff, Python, Solidity, Rust,
        PostgreSQL, C++, Yul. </li> <li> Technologies: EVM, Wallets(UTXO, MPC, Multisig),
        Defi, Git, Airflow, Kafka, Express.js, React/Next.js, Ethers/Web3.js,
        GraphQL, MongoDB, Redis, PostgreSQL </li>  <li> DevOps: GCP, AWS, Docker, Buildbot,
        Nginx, Datadog.</li>
      </div>
      
    </div>
  );
};

export default About;
