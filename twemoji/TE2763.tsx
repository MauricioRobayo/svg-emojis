import * as React from "react";

function TE2763(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}><path fill="#DD2E44" d="M18 4C14.875-2.375 6-.731 6 7c0 7.062 12 17 12 17s12-9.938 12-17c0-7.731-8.875-9.375-12-3z" /><circle fill="#DD2E44" cx={18} cy={31} r={5} /></svg>;
}

const MemoTE2763 = React.memo(TE2763);
export default MemoTE2763;