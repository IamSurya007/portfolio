/**
 * Utility to retrieve and parse the resume URLs.
 * If NEXT_PUBLIC_RESUME_GOOGLE_DRIVE_URL is provided, it extracts the Google Drive File ID
 * and constructs appropriate preview and view/download links.
 * Otherwise, it falls back to the local static /resume.pdf file.
 */
export function getResumeUrls() {
  const driveUrlOrId = process.env.NEXT_PUBLIC_RESUME_GOOGLE_DRIVE_URL;

  if (!driveUrlOrId) {
    return {
      previewUrl: "/resume.pdf",
      downloadUrl: "/resume.pdf",
      isGoogleDrive: false,
    };
  }

  let fileId = driveUrlOrId.trim();

  // Try to extract ID from various Google Drive URL patterns
  if (driveUrlOrId.includes("drive.google.com") || driveUrlOrId.includes("docs.google.com")) {
    // Pattern 1: /d/FILE_ID
    const dMatch = driveUrlOrId.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) {
      fileId = dMatch[1];
    } else {
      // Pattern 2: id=FILE_ID
      const idMatch = driveUrlOrId.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        fileId = idMatch[1];
      }
    }
  }

  return {
    previewUrl: `https://drive.google.com/file/d/${fileId}/preview`,
    // Opening the Google Drive view page is the most reliable way for users to view/download/print the resume
    downloadUrl: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
    isGoogleDrive: true,
  };
}
