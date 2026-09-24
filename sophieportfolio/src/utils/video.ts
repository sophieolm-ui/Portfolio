export function getVideoThumbnail(href: string): string | null {
  const youtube = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/)
  if (youtube) return `https://img.youtube.com/vi/${youtube[1]}/hqdefault.jpg`

  const drive = href.match(/drive\.google\.com\/file\/d\/([\w-]+)/)
  if (drive) return `https://drive.google.com/thumbnail?id=${drive[1]}&sz=w640`

  return null
}
