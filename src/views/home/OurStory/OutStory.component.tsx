import { SxProps, Box, Theme } from "@mui/material";
import storyImg from "../img/story-background.jpg";

export const ourStoryBackgroundCss: SxProps<Theme> = {
  backgroundSize: "cover",
  backgroundImage: `url(${storyImg})`,
  backgroundPosition: "center center ",
  backgroundRepeat: "no-repeat",
};

export const TitleUnderLine = () => {
  return (
    <Box
      sx={{
        mt: 2,
        width: "3rem",
        borderTopColor: "primary.main",
        borderTopWidth: 2,
        borderTopStyle: "solid",
      }}
    ></Box>
  );
};
