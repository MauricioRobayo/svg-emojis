import * as React from "react";

function TE23ed(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z" /><path fill="#FFF" d="M27 18L15 7v9.166L5 7v22l10-9.167V29zm0-11h4v22h-4z" /></svg>;
}

const MemoTE23ed = React.memo(TE23ed);
export default MemoTE23ed;