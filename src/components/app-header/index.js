import React, { memo } from 'react';
import { HeaderWrapper } from './style';
const MusicHeader = memo(() => {
  return (
    <div>
      <HeaderWrapper>
        <h1>Header</h1>
      </HeaderWrapper>
    </div>
  );
});

export default MusicHeader;
