type LogoMarkImageProps = {
  width?: number;
  height?: number;
};

const LogoMarkImage = ({ width = 104, height = 104 }: LogoMarkImageProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H103.5V103.586H0V0Z" fill="#F0F9FD" />
      <path
        d="M26.237 58.7922C5.31796 64.4021 0.414238 91.2606 0.414238 104H103.914V0.414333C97.4452 0.414333 63.6409 0.414333 58.2155 25.4754C52.7901 50.5364 47.156 53.1823 26.237 58.7922Z"
        fill="#81D4FA"
      />
      <path
        d="M103.81 103.793H0.310579C4.26731 97.1366 9.05703 90.6885 32.3809 90.6885C70.9069 90.6885 90.8988 69.2642 90.8988 32.4476C90.8988 9.98326 96.3133 3.11915 103.81 0.207092V103.793Z"
        fill="#2196F3"
      />
    </svg>
  );
};

export default LogoMarkImage;
