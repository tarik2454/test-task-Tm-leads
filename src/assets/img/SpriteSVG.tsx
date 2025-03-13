export const SpriteSVG = ({
  name = '',
  className = '',
  width = '',
  height = '',
}: {
  name: string;
  className?: string;
  width?: string;
  height?: string;
}) => {
  switch (name) {
    case 'burgerButton':
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 23.2 15.2002"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={className}
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            d="M0 0.93C0 0.41 0.41 0 0.93 0L22.26 0C22.78 0 23.2 0.41 23.2 0.93C23.2 1.44 22.78 1.86 22.26 1.86L0.93 1.86C0.41 1.86 0 1.44 0 0.93Z"
            fill="#E7F7F8"
            fillOpacity="1"
            fillRule="evenodd"
          />
          <path
            d="M0 7.6C0 7.08 0.41 6.66 0.93 6.66L22.26 6.66C22.78 6.66 23.2 7.08 23.2 7.6C23.2 8.11 22.78 8.53 22.26 8.53L0.93 8.53C0.41 8.53 0 8.11 0 7.6Z"
            fill="#E7F7F8"
            fillOpacity="1"
            fillRule="evenodd"
          />
          <path
            d="M0 14.26C0 13.75 0.41 13.33 0.93 13.33L22.26 13.33C22.78 13.33 23.2 13.75 23.2 14.26C23.2 14.78 22.78 15.2 22.26 15.2L0.93 15.2C0.41 15.2 0 14.78 0 14.26Z"
            fill="#E7F7F8"
            fillOpacity="1"
            fillRule="evenodd"
          />
        </svg>
      );

    case 'closeButton':
      return (
        <svg
          width="32.000000"
          height="32.000000"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <rect
            id="Frame 18"
            rx="0.000000"
            width="31.000000"
            height="31.000000"
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity="0"
          />
          <path
            id="Vector 5 (Stroke)"
            d="M8.74 8.74C9.1 8.37 9.69 8.37 10.06 8.74L23.25 21.93C23.62 22.3 23.62 22.89 23.25 23.25C22.89 23.62 22.3 23.62 21.93 23.25L8.74 10.06C8.37 9.69 8.37 9.1 8.74 8.74Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
          <path
            id="Vector 6 (Stroke)"
            d="M8.74 23.25C8.37 22.89 8.37 22.3 8.74 21.93L21.93 8.74C22.3 8.37 22.89 8.37 23.25 8.74C23.62 9.1 23.62 9.69 23.25 10.06L10.06 23.25C9.69 23.62 9.1 23.62 8.74 23.25Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      );
    case 'triangle':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="111"
          height="161"
          fill="none"
        >
          <g fill="#000001" opacity=".15">
            <path d="M63.433 116.829 0 7.322l31.508 25.285 40.275 69.758-8.35 14.464ZM122.979 50.53l-63.12 109.688 6.144-39.929 40.275-69.759h16.701ZM74.058 94.1l23.858-41.322H50.2L74.058 94.1ZM36.158 32.805l126.552-.181-37.652 14.644h-80.55l-8.35-14.463Z" />
          </g>
        </svg>
      );

    case 'chevronUp':
      return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
            d="m6 14.5 6-6 6 6"
          />
        </svg>
      );

    case 'chevronDown':
      return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#030718"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
            d="m6 9.5 6 6 6-6"
            opacity=".5"
          />
        </svg>
      );

    case 'yes':
      return (
        <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
          <g clipPath="url(#a)">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
              d="m2 6.563 3.712 3.712 5.25-7.875"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h12v12H0z" />
            </clipPath>
          </defs>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
