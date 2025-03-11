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

    default:
      return 'SVG not found';
  }
};
