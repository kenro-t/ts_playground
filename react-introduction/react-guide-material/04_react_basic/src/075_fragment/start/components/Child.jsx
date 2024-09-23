import { Fragment } from "react";
import "./Child.css";

const Child = () => {
  return (
    <Fragment key='1'>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestias, nobis quia error fugiat libero similique eum nam, alias voluptates quod minima dolor recusandae numquam hic doloremque aspernatur laboriosam. Accusamus.
      </p>
    </Fragment>
  );
};

export default Child;
