import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

interface PlatformModel {
    icon : IconType
    name : string
    color : string 
}

const PlatformIconList = ({ platforms }: Props) => {
    const platformModels: PlatformModel[] = [
        { icon: FaWindows, name: 'pc', color: '#0078D6' }, // Windows blue
        { icon: FaPlaystation, name: 'playstation', color: '#003087' }, // PlayStation blue
        { icon: FaXbox, name: 'xbox', color: '#107C10' }, // Xbox green
        { icon: SiNintendo, name: 'nintendo', color: '#E60012' }, // Nintendo red
        { icon: FaApple, name: 'mac', color: '#000000' }, // Apple black
        { icon: FaLinux, name: 'linux', color: '#FCC624' }, // Linux yellow
        { icon: FaAndroid, name: 'android', color: '#3DDC84' }, // Android green
        { icon: MdPhoneIphone, name: 'ios', color: '#000000' }, // iOS black
        { icon: BsGlobe, name: 'web', color: '#4285F4' }, // Web blue (Google)
      ];

  

  return (
    <>
    <HStack mt={4}>
      {platforms.map((p) => {
        const platformModel = platformModels.find(pm => pm.name === p.slug);
        return platformModel ? (
          <Icon key={p.id} as={platformModel.icon} color={platformModel.color} />
        ) : null;
      })}
    </HStack>
    </>
  );
};

export default PlatformIconList;
