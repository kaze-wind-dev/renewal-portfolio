type LogoMarkImageProps = {
  width?: number;
  height?: number;
  className?: string;
};

const LogoMarkImage = ({ width = 104, height = 104, className }: LogoMarkImageProps) => {
  return (
    // <svg
      
    //   viewBox="0 0 104 104"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   aria-hidden="true"
    // >
    //   <path d="M0 0H103.5V103.586H0V0Z" fill="#F0F9FD" />
    //   <path
    //     d="M26.237 58.7922C5.31796 64.4021 0.414238 91.2606 0.414238 104H103.914V0.414333C97.4452 0.414333 63.6409 0.414333 58.2155 25.4754C52.7901 50.5364 47.156 53.1823 26.237 58.7922Z"
    //     fill="#81D4FA"
    //   />
    //   <path
    //     d="M103.81 103.793H0.310579C4.26731 97.1366 9.05703 90.6885 32.3809 90.6885C70.9069 90.6885 90.8988 69.2642 90.8988 32.4476C90.8988 9.98326 96.3133 3.11915 103.81 0.207092V103.793Z"
    //     fill="#2196F3"
    //   />
    // </svg>
    <svg 
    className={className}
      width={width}
      height={height}
    xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 104 104"><path fill="#f0f9fd" d="M0 0h103.5v103.59H0z"/><path fill="#81d4fa" d="M26.24 58.8C5.32 64.4.4 91.25.4 104h103.5V.41c-6.46 0-40.27 0-45.7 25.07-5.42 25.06-11.05 27.7-31.97 33.31"/><path fill="#2196f3" d="M103.81 103.8H.31c3.96-6.66 8.75-13.11 32.07-13.11 38.53 0 58.52-21.43 58.52-58.24C90.9 9.98 96.3 3.12 103.8.2z"/></svg>
  );
};

export default LogoMarkImage;
