export async function getFile(src: string) {
  const response = await fetch(src);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  return url;
}
