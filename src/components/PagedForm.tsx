import React from 'react';

type Props = {
  currentPage: number;
  children: any[];
}

export default (props: Props) => {
  return (
    <div>
      { props.children }
    </div>
  );
}