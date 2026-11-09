/**
 * The resume lives on Google Drive only. To update it, replace the file on Drive
 * (same link) - no redeploy needed. NEXT_PUBLIC_RESUME_GOOGLE_DRIVE_URL overrides the default.
 */
const DEFAULT_RESUME_DRIVE_URL =
  "https://drive.google.com/file/d/18V0ZK47YxAFUfOUiWxM9Xwo5mbQEcxtp/view?usp=sharing";

/** Extracts the Drive file ID and builds the preview and view/download links. */
export function getResumeUrls() {
  const driveUrlOrId =
    process.env.NEXT_PUBLIC_RESUME_GOOGLE_DRIVE_URL || DEFAULT_RESUME_DRIVE_URL;

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
  };
}
