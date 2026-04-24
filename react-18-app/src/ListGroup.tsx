// import { Fragment } from "react";
// just use <> </> instead of <Fragment> </Fragment>

// import { MouseEvent } from "react";
//  {items :[] , heading:string}
interface Props {
  items: string[];
  heading: string;
}
import { useState } from "react";

function ListGroup({ items, heading }: Props) {
  // let selectedIndex = 0;
  // Hook
  const [selectedItem, setSelectedItem] = useState(-1);

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
