import * as React from "react";

function TE23fa(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z" /><circle fill="#FFF" cx={18} cy={18} r={11} /></svg>;
}

const MemoTE23fa = React.memo(TE23fa);
export default MemoTE23fa;