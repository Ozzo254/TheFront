// import React, { useContext, useCallback } from "react";
// import { CursorContext } from "../context/CursorContextProvider";
// const Button = () => {
//   const [, setCursor] = useContext(CursorContext);
//   const toggleCursor = useCallback(() => {
//     setCursor(({ active }) => ({ active: !active }));
//   });
//   return (
//     <button
//       type="button"
//       style={{ padding: "1rem" }}
//       onMouseEnter={toggleCursor}
//       onMouseLeave={toggleCursor}
//     >
//       HOVER ME
//     </button>
//   );
// };
// export default Button



/////////////////////////////////////////////////////////////////
// ref onMouseEnter={toggleCursor} & onMouseLeave={toggleCursor}



import React from "react";
import useCursorHandlers from "../hooks/useCursorHandlers";
const Button = () => {
  const cursorHandlers = useCursorHandlers();
  
  return (
    <button
      type="button"
      style={{ padding: "1rem" }}
      {...cursorHandlers}
    >
      HOVER ME
    </button>
  );
};

export default Button