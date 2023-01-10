import { useLoad } from "../Context/isLoaded";
import sound from "../Sound/select.mp3";

const useAddToStack = (Title) => {
  const { menuStack, setStack } = useLoad();

  const statState = menuStack.find((item) => item.title === Title);
  const isActive = statState ? statState.state : false;

  const lastProject = menuStack[menuStack.length - 1];

  const selectAudio = () => {
    const audio = new Audio(sound);
    audio.volume = 0.2;
    audio.play();
  };

  const clickIndex = (title) => {
    setStack((prev) => {
      const newArr = prev.map((item) => {
        return { ...item, state: false };
      });
      return [...newArr, { title, state: true }];
    });
    {
    }
  };

  return { isActive, clickIndex, lastProject, selectAudio };
};

export default useAddToStack;
