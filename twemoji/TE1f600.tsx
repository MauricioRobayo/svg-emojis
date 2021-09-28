import * as React from "react";

function TE1f600(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}><circle fill="#FFCC4D" cx={18} cy={18} r={18} /><path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z" /><path fill="#FFF" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z" /><ellipse fill="#664500" cx={12} cy={13.5} rx={2.5} ry={3.5} /><ellipse fill="#664500" cx={24} cy={13.5} rx={2.5} ry={3.5} /></svg>;
}

const MemoTE1f600 = React.memo(TE1f600);
export default MemoTE1f600;