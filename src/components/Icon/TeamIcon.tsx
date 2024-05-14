import React from 'react';

import type { IconComponentProps } from '.';

export function TeamIcon({ ...props }: IconComponentProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M22 21V19C22 17.9391 21.5786 16.9217 20.8284 16.1716C20.0783 15.4214 19.0609 15 18 15H12C10.9391 15 9.92172 15.4214 9.17157 16.1716C8.42143 16.9217 8 17.9391 8 19V21"
        fill="currentColor"
      />
      <path
        d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3C12.7909 3 11 4.79086 11 7C11 9.20914 12.7909 11 15 11Z"
        fill="currentColor"
      />
      <mask id="path-3-outside-1_665_2401" maskUnits="userSpaceOnUse" x="0" y="13" width="18" height="10" fill="black">
        <rect fill="white" y="13" width="18" height="10" />
        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" />
      </mask>
      <path
        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
        fill="currentColor"
      />
      <path
        d="M16 22C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20V22ZM2 20C1.44772 20 1 20.4477 1 21C1 21.5523 1.44772 22 2 22V20ZM16 20H2V22H16V20ZM14 21C14 22.1046 14.8954 23 16 23C17.1046 23 18 22.1046 18 21H14ZM16 19H18H16ZM12 15V13V15ZM6 15V13V15ZM2 19H0H2ZM0 21C0 22.1046 0.89543 23 2 23C3.10457 23 4 22.1046 4 21H0ZM18 21V19H14V21H18ZM18 19C18 17.4087 17.3679 15.8826 16.2426 14.7574L13.4142 17.5858C13.7893 17.9609 14 18.4696 14 19H18ZM16.2426 14.7574C15.1174 13.6321 13.5913 13 12 13V17C12.5304 17 13.0391 17.2107 13.4142 17.5858L16.2426 14.7574ZM12 13H6V17H12V13ZM6 13C4.4087 13 2.88258 13.6321 1.75736 14.7574L4.58579 17.5858C4.96086 17.2107 5.46957 17 6 17V13ZM1.75736 14.7574C0.632141 15.8826 0 17.4087 0 19H4C4 18.4696 4.21071 17.9609 4.58579 17.5858L1.75736 14.7574ZM0 19V21H4V19H0Z"
        fill="white"
        mask="url(#path-3-outside-1_665_2401)"
      />
      <path
        d="M9 12C11.7614 12 14 9.76142 14 7C14 4.23858 11.7614 2 9 2C6.23858 2 4 4.23858 4 7C4 9.76142 6.23858 12 9 12Z"
        fill="currentColor"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
