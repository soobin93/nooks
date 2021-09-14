import {useState} from "react";

const useTabs = (tabs, initialIndex) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return {
    currentTab: tabs[currentIndex],
    changeTab: setCurrentIndex
  };
};

export default useTabs;
