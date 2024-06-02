
const FilterIcon = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      className="pointer"
      onClick={onClick}
    >
      <path
        fill="#475161"
        fillRule="evenodd"
        d="M5.125 3.01c0-.207.168-.375.375-.375h3a.375.375 0 110 .75h-3a.375.375 0 01-.375-.375z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#475161"
        fillRule="evenodd"
        d="M1.511.635h10.978c.177 0 .348.055.493.155.144.1.254.24.321.4a.947.947 0 01-.152.972l-.001.001-4.2 4.904a.172.172 0 00-.041.115v3.839a.937.937 0 01-.101.43.9.9 0 01-.29.333l-2.043 1.443h-.001a.866.866 0 01-1.259-.292.942.942 0 01-.124-.459V7.182a.172.172 0 00-.04-.115l-.004-.004-4.197-4.9a.948.948 0 01-.153-.973.91.91 0 01.321-.4.866.866 0 01.493-.155zm10.978.75H1.51a.116.116 0 00-.066.021.16.16 0 00-.055.071.198.198 0 00-.013.106c.006.036.021.067.041.09v.001l4.198 4.9c.148.17.227.389.225.613v5.284c.001.034.01.065.025.092a.15.15 0 00.056.057.111.111 0 00.122-.007l2.047-1.445a.15.15 0 00.048-.057.187.187 0 00.02-.086V7.187a.922.922 0 01.225-.613l4.197-4.9h.001a.196.196 0 00.028-.196.16.16 0 00-.055-.072.115.115 0 00-.066-.021z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default FilterIcon;
