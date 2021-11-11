import { Box, SxProps, Theme } from "@mui/system";


export const ourStoryBackgroundCss: SxProps<Theme> = {
  backgroundSize: "cover",
  backgroundImage: `url('./img/home/story-background.jpg')`,
  backgroundPosition: "center center ",
  backgroundRepeat: "no-repeat"
}

export const TitleUnderLine = () => {
  return <Box sx={{ mt: 2, width: "3rem", borderTopColor: "primary.main", borderTopWidth: 2, borderTopStyle: "solid" }}></Box>

}