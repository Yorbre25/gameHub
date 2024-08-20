const getCroppedImageUrl = (url: string) => {
  const width = "600";
  const height = "400";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const croppedUrl =
    url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
  return croppedUrl;
};

export default getCroppedImageUrl;
