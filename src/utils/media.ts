/**
 * Utility to convert raw YouTube and Vimeo URLs into clean, responsive embed URLs.
 * Handles youtube.com/watch?v=, youtu.be/, youtube.com/shorts/, and embed URLs.
 */
export function getEmbedUrl(url?: string): string {
  if (!url) return '';
  const trimmed = url.trim();

  // If already an embed URL, ensure proper params
  if (trimmed.includes('youtube.com/embed/') || trimmed.includes('youtube-nocookie.com/embed/')) {
    return trimmed;
  }

  // YouTube match: watch?v=, youtu.be/, shorts/
  const ytMatch = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0&modestbranding=1`;
  }

  // Vimeo match
  const vimeoMatch = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return trimmed;
}
