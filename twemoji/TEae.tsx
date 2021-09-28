import * as React from "react";

function TEae(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}><path fill="#31373D" d="M18 0C8.059 0 0 8.06 0 18c0 9.941 8.059 18 18 18s18-8.059 18-18c0-9.94-8.059-18-18-18zm0 34C9.164 34 2 26.837 2 18 2 9.164 9.164 2 18 2c8.837 0 16 7.164 16 16 0 8.837-7.163 16-16 16z" /><path fill="#31373D" d="M10.777 9.342c0-1.488.837-2.418 2.388-2.418h5.457c4.775 0 7.72 2.14 7.72 7.007 0 3.411-2.573 5.364-5.736 5.86l5.272 5.644c.433.465.619.93.619 1.364 0 1.209-.961 2.387-2.324 2.387-.559 0-1.303-.217-1.799-.806l-6.883-8.341h-.062v6.728c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.342zm4.651 7.348h3.193c1.705 0 2.884-1.023 2.884-2.759 0-1.767-1.18-2.729-2.884-2.729h-3.193v5.488z" /></svg>;
}

const MemoTEae = React.memo(TEae);
export default MemoTEae;